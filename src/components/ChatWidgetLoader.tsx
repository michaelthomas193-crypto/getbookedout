import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Loads the LeadConnector chat widget on every page EXCEPT those that
 * already have a phone-collecting lead form. This is required for A2P 10DLC
 * compliance — the carrier scanner rejects pages that contain both a chat
 * widget and a form collecting phone numbers ("multiple opt-ins").
 *
 * Once A2P is approved, we can remove this allow-list and load the widget
 * site-wide again.
 */

const WIDGET_ID = "69e5d2a306d5d5a3c87556bd";
const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";

// Routes that contain a phone-collecting form. Widget must NOT load here.
const FORM_ROUTES = new Set<string>([
  "/",
  "/plumbing",
  "/painters",
  "/electrical",
  "/carpenters",
  "/concreters",
  "/landscapers",
  "/handyman",
  "/never-miss-enquiry",
  "/rate-us",
]);

const isFormRoute = (pathname: string) => {
  // Normalise trailing slash
  const path = pathname.replace(/\/+$/, "") || "/";
  return FORM_ROUTES.has(path);
};

const removeWidget = () => {
  // Remove the loader script(s)
  document
    .querySelectorAll(`script[src="${LOADER_SRC}"]`)
    .forEach((el) => el.remove());

  // Remove any chat widget DOM elements injected by the loader
  document
    .querySelectorAll(
      "chat-widget, [id^='lc_chat'], [class*='lc-chat'], iframe[src*='chat-widget']"
    )
    .forEach((el) => el.remove());
};

const injectWidget = () => {
  if (document.querySelector(`script[src="${LOADER_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = LOADER_SRC;
  s.async = true;
  s.setAttribute(
    "data-resources-url",
    "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  );
  s.setAttribute("data-widget-id", WIDGET_ID);
  document.body.appendChild(s);
};

const ChatWidgetLoader = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isFormRoute(pathname)) {
      removeWidget();
    } else {
      injectWidget();
    }
  }, [pathname]);

  return null;
};

export default ChatWidgetLoader;
