import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-expect-error - JS module without type declarations
import { routes, rewriteHtmlForRoute } from "./prerender.config.mjs";

type PrerenderRoute = {
  path: string;
  title: string;
  description: string;
  jsonLd?: unknown | unknown[];
};

const prerenderRoutes = routes as PrerenderRoute[];
const projectRoot = __dirname;
const sourceIndexPath = path.resolve(projectRoot, "index.html");

function routeSourcePath(routePath: string) {
  return path.resolve(projectRoot, routePath.replace(/^\//, ""), "index.html");
}

function toTitleCaseRoute(routePath: string) {
  return routePath
    .split("/")
    .map((segment) =>
      segment
        .split("-")
        .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1)}` : part))
        .join("-")
    )
    .join("/");
}

function getAliasPaths(routePath: string) {
  const aliases = new Set<string>();
  const titleCase = toTitleCaseRoute(routePath);
  const uppercase = routePath.toUpperCase();

  if (titleCase !== routePath) aliases.add(titleCase);
  if (uppercase !== routePath) aliases.add(uppercase);

  return [...aliases];
}

function ensurePrerenderSourceFiles() {
  if (!fs.existsSync(sourceIndexPath)) return;

  const baseHtml = fs.readFileSync(sourceIndexPath, "utf8");

  for (const route of prerenderRoutes) {
    if (route.path === "/") continue;

    const sourceFiles = [route.path, ...getAliasPaths(route.path)].map(routeSourcePath);

    for (const filePath of sourceFiles) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, rewriteHtmlForRoute(baseHtml, route));
    }
  }
}

function getPrerenderInputs() {
  const inputs: Record<string, string> = {
    main: sourceIndexPath,
  };

  for (const route of prerenderRoutes) {
    if (route.path === "/") continue;

    const allPaths = [route.path, ...getAliasPaths(route.path)];
    for (const entryPath of allPaths) {
      inputs[entryPath.replace(/[^a-zA-Z0-9]+/g, "_")] = routeSourcePath(entryPath);
    }
  }

  return inputs;
}

/**
 * Build-time prerender plugin.
 * Generates real HTML entry files for each marketing route before Vite builds,
 * so Lovable hosting can serve dist/<route>/index.html directly on deep links.
 */
function prerenderPlugin(): Plugin {
  return {
    name: "gbo-static-prerender",
    apply: "build" as const,
    config() {
      ensurePrerenderSourceFiles();

      return {
        build: {
          rollupOptions: {
            input: getPrerenderInputs(),
          },
        },
      };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
