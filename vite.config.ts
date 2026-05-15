import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
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
    generateBundle(_, bundle) {
      const indexAsset = Object.values(bundle).find(
        (asset) => asset.type === "asset" && asset.fileName === "index.html"
      );

      if (!indexAsset || typeof indexAsset.source !== "string") return;

      const homeRoute = routes.find((route) => route.path === "/");
      if (!homeRoute) return;

      const baseHtml = indexAsset.source;
      indexAsset.source = rewriteHtmlForRoute(baseHtml, homeRoute);

      for (const route of routes) {
        if (route.path === "/") continue;

        this.emitFile({
          type: "asset",
          fileName: `${route.path.replace(/^\//, "")}/index.html`,
          source: rewriteHtmlForRoute(baseHtml, route),
        });
      }

      // eslint-disable-next-line no-console
      console.log(`[prerender] emitted ${routes.length} static HTML files`);
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
