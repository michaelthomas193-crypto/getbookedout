import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
// @ts-expect-error - JS module without type declarations
import { routes, rewriteHtmlForRoute } from "./prerender.config.mjs";

/**
 * Build-time prerender plugin.
 * After Vite finishes the SPA build, copies dist/index.html into per-route
 * folders and rewrites <head> with route-specific title, description,
 * canonical, og:* and JSON-LD. Lovable hosting serves dist/<route>/index.html
 * when present and falls back to SPA otherwise — so crawlers see the correct
 * title/meta in the initial HTML response without any framework migration.
 */
function prerenderPlugin(): Plugin {
  return {
    name: "gbo-static-prerender",
    apply: "build" as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(distDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const baseHtml = fs.readFileSync(indexPath, "utf8");

      for (const route of routes) {
        const html = rewriteHtmlForRoute(baseHtml, route);
        if (route.path === "/") {
          fs.writeFileSync(indexPath, html);
        } else {
          const dir = path.join(distDir, route.path.replace(/^\//, ""));
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, "index.html"), html);
        }
      }
      // eslint-disable-next-line no-console
      console.log(`[prerender] wrote ${routes.length} static HTML files`);
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
