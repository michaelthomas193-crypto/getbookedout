import fs from "fs/promises";
import path from "path";

const SITE = "https://www.getbookedout.com.au";
const DIST = path.resolve("dist");
const OG_IMAGE = `${SITE}/og-image.jpg`;
const OG_ALT = "Get Booked Out — AI receptionist for Australian businesses";

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Get Booked Out",
  url: SITE,
  logo: `${SITE}/favicon.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61485008132",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: ["en"],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61586125082752",
    "https://www.instagram.com/getbookedout.au",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Get Booked Out",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: "en-AU",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE}/#business`,
  name: "Get Booked Out",
  image: OG_IMAGE,
  url: SITE,
  telephone: "+61485008132",
  email: "bookings@getbookedout.com.au",
  priceRange: "$$",
  description:
    "AI receptionist that answers your business calls 24/7 — books appointments, filters spam, and never lets a lead slip through.",
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  areaServed: { "@type": "Country", name: "Australia" },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61586125082752",
    "https://www.instagram.com/getbookedout.au",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "52",
    bestRating: "5",
    worstRating: "1",
  },
};

const tradeService = (trade, label, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: `AI receptionist for ${trade} businesses`,
  provider: { "@type": "Organization", name: "Get Booked Out", url: SITE },
  areaServed: { "@type": "Country", name: "Australia" },
  name: label,
  description,
});

const routes = [
  {
    path: "/",
    title: "AI Receptionist for Your Business Calls | Get Booked Out",
    description:
      "Get Booked Out is your 24/7 AI receptionist. It answers calls, books appointments, filters spam, and sends you every lead — for any small business.",
    jsonLd: [org, website, localBusiness],
  },
  {
    path: "/why-us",
    title: "Why Get Booked Out vs Call Centres & Voicemail",
    description:
      "See how Get Booked Out's AI receptionist compares to call centres, voicemail and missed calls — answering 24/7 from $99/week.",
  },
  {
    path: "/pricing",
    title: "AI Receptionist Pricing Australia — From $99/week | Get Booked Out",
    description:
      "Simple AI receptionist pricing for Australian service businesses. Essentials $499/mo, Complete $999/mo. No lock-in, money-back guarantee.",
  },
  {
    path: "/who-we-are",
    title: "About Us — The Team Behind Get Booked Out",
    description:
      "Meet the Australian team building Get Booked Out — the AI receptionist helping service businesses answer every call and book more jobs.",
  },
  {
    path: "/plumbing",
    title: "AI Receptionist for Plumbers | Get Booked Out",
    description:
      "Stop missing plumbing jobs. Our 24/7 AI receptionist answers every call, books emergencies and quotes straight into your calendar.",
    jsonLd: tradeService("plumbing", "AI Receptionist for Plumbers | Get Booked Out", "Stop missing plumbing jobs. Our 24/7 AI receptionist answers every call, books emergencies and quotes straight into your calendar."),
  },
  {
    path: "/electrical",
    title: "AI Receptionist for Electricians | Get Booked Out",
    description:
      "Never miss an electrical job. AI receptionist answers calls 24/7, qualifies leads and books work into your diary.",
    jsonLd: tradeService("electrical", "AI Receptionist for Electricians | Get Booked Out", "Never miss an electrical job. AI receptionist answers calls 24/7, qualifies leads and books work into your diary."),
  },
  {
    path: "/painting",
    title: "AI Receptionist for Painters | Get Booked Out",
    description:
      "Quote more painting jobs. Our AI receptionist answers calls, replies to enquiries and books in quotes 24/7.",
    jsonLd: tradeService("painting", "AI Receptionist for Painters | Get Booked Out", "Quote more painting jobs. Our AI receptionist answers calls, replies to enquiries and books in quotes 24/7."),
  },
  {
    path: "/landscaping",
    title: "AI Receptionist for Landscapers | Get Booked Out",
    description:
      "Land more landscaping jobs. AI receptionist answers calls 24/7 and books quotes straight into your calendar.",
    jsonLd: tradeService("landscaping", "AI Receptionist for Landscapers | Get Booked Out", "Land more landscaping jobs. AI receptionist answers calls 24/7 and books quotes straight into your calendar."),
  },
  {
    path: "/handyman",
    title: "AI Receptionist for Handyman Services | Get Booked Out",
    description:
      "Never miss a handyman job. Our AI answers calls, books work and replies to texts and web messages 24/7.",
    jsonLd: tradeService("handyman services", "AI Receptionist for Handyman Services | Get Booked Out", "Never miss a handyman job. Our AI answers calls, books work and replies to texts and web messages 24/7."),
  },
  {
    path: "/carpentry",
    title: "AI Receptionist for Carpenters | Get Booked Out",
    description:
      "Win more carpentry work. Our AI receptionist answers calls 24/7 and books quotes into your calendar.",
    jsonLd: tradeService("carpentry", "AI Receptionist for Carpenters | Get Booked Out", "Win more carpentry work. Our AI receptionist answers calls 24/7 and books quotes into your calendar."),
  },
  {
    path: "/concreting",
    title: "AI Receptionist for Concreters | Get Booked Out",
    description:
      "Stop losing concrete jobs to missed calls. AI receptionist answers 24/7 and books quotes for you.",
    jsonLd: tradeService("concreting", "AI Receptionist for Concreters | Get Booked Out", "Stop losing concrete jobs to missed calls. AI receptionist answers 24/7 and books quotes for you."),
  },
  {
    path: "/schedule-demo",
    title: "Schedule a Demo | Get Booked Out",
    description:
      "Book a live demo of Get Booked Out's AI receptionist and see how it answers calls and books appointments for your business.",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function routeUrl(routePath) {
  return `${SITE}${routePath === "/" ? "/" : routePath}`;
}

function aliasPaths(routePath) {
  if (routePath === "/") return [];
  const title = routePath
    .split("/")
    .map((segment) =>
      segment
        .split("-")
        .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1)}` : part))
        .join("-")
    )
    .join("/");
  const upper = routePath.toUpperCase();
  return [...new Set([title, upper].filter((item) => item !== routePath))];
}

function injectSeo(html, route) {
  const url = routeUrl(route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const jsonLdItems = route.jsonLd ? (Array.isArray(route.jsonLd) ? route.jsonLd : [route.jsonLd]) : [];

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  out = out.replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "");
  out = out.replace(/<meta[^>]+name=["']robots["'][^>]*>/gi, "");
  out = out.replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, "");
  out = out.replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, "");
  out = out.replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "");
  out = out.replace(/<link[^>]+rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>/gi, "");
  out = out.replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

  const seoBlock = [
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="alternate" hreflang="en-AU" href="${url}">`,
    `<link rel="alternate" hreflang="x-default" href="${url}">`,
    `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Get Booked Out">`,
    `<meta property="og:locale" content="en_AU">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${escapeHtml(OG_ALT)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:site" content="@getbookedout">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`,
    `<meta name="twitter:image:alt" content="${escapeHtml(OG_ALT)}">`,
    ...jsonLdItems.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`),
  ].join("");

  out = out.replace(/<\/head>/i, `${seoBlock}</head>`);
  return out;
}

async function writeRouteFile(routePath, html) {
  const filePath = routePath === "/" ? path.join(DIST, "index.html") : path.join(DIST, routePath.replace(/^\//, ""), "index.html");
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, html);
}

for (const route of routes) {
  const filePath = route.path === "/" ? path.join(DIST, "index.html") : path.join(DIST, route.path.replace(/^\//, ""), "index.html");
  const html = await fs.readFile(filePath, "utf8");
  const normalized = injectSeo(html, route);
  await writeRouteFile(route.path, normalized);
  for (const alias of aliasPaths(route.path)) {
    await writeRouteFile(alias, normalized);
  }
}