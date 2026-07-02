import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Lowercase URL guard: if the path contains uppercase letters, replace the
// current history entry with the lowercase version before React Router boots.
// Not a 301 (that needs edge config), but kills the duplicate URL immediately
// so crawlers and users converge on the canonical lowercase path.
if (typeof window !== "undefined") {
  // GitHub Pages 404 fallback: public/404.html stashes the originally requested
  // path in sessionStorage under `gh_pages_redirect` and redirects to "/".
  // Restore it here so React Router boots at the intended route.
  try {
    const stashed = sessionStorage.getItem("gh_pages_redirect");
    if (stashed) {
      sessionStorage.removeItem("gh_pages_redirect");
      if (stashed !== window.location.pathname + window.location.search + window.location.hash) {
        window.history.replaceState(null, "", stashed);
      }
    }
  } catch (e) {
    // sessionStorage may be unavailable (private mode, etc.) — ignore.
  }

  const { pathname, search, hash } = window.location;
  if (/[A-Z]/.test(pathname)) {
    window.history.replaceState(null, "", pathname.toLowerCase() + search + hash);
  }
}


const rootElement = document.getElementById("root");

if (rootElement) {
  const app = (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}
