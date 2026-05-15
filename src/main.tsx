import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Lowercase URL guard: if the path contains uppercase letters, replace the
// current history entry with the lowercase version before React Router boots.
// Not a 301 (that needs edge config), but kills the duplicate URL immediately
// so crawlers and users converge on the canonical lowercase path.
if (typeof window !== "undefined") {
  const { pathname, search, hash } = window.location;
  if (/[A-Z]/.test(pathname)) {
    window.history.replaceState(null, "", pathname.toLowerCase() + search + hash);
  }
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
