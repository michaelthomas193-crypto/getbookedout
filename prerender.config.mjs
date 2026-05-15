// Per-route SEO data baked into static HTML at build time.
// Keep titles/descriptions in sync with src/pages/*.tsx SeoHead calls.
const SITE = "https://www.getbookedout.com.au";

const ogImage = `${SITE}/og-image.jpg`;
const ogAlt = "Get Booked Out — AI receptionist for Australian businesses";

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
  image: `${SITE}/og-image.jpg`,
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

const tradeService = (trade, label) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: `AI receptionist for ${trade} businesses`,
  provider: { "@type": "Organization", name: "Get Booked Out", url: SITE },
  areaServed: { "@type": "Country", name: "Australia" },
  name: label,
});

export const routes = [
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
    title: "Pricing — From $99/Week, No Lock-In | Get Booked Out",
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
    jsonLd: tradeService("plumbing", "AI Receptionist for Plumbers | Get Booked Out"),
  },
  {
    path: "/electrical",
    title: "AI Receptionist for Electricians | Get Booked Out",
    description:
      "Never miss an electrical job. AI receptionist answers calls 24/7, qualifies leads and books work into your diary.",
    jsonLd: tradeService("electrical", "AI Receptionist for Electricians | Get Booked Out"),
  },
  {
    path: "/painting",
    title: "AI Receptionist for Painters | Get Booked Out",
    description:
      "Quote more painting jobs. Our AI receptionist answers calls, replies to enquiries and books in quotes 24/7.",
    jsonLd: tradeService("painting", "AI Receptionist for Painters | Get Booked Out"),
  },
  {
    path: "/landscaping",
    title: "AI Receptionist for Landscapers | Get Booked Out",
    description:
      "Land more landscaping jobs. AI receptionist answers calls 24/7 and books quotes straight into your calendar.",
    jsonLd: tradeService("landscaping", "AI Receptionist for Landscapers | Get Booked Out"),
  },
  {
    path: "/handyman",
    title: "AI Receptionist for Handyman Services | Get Booked Out",
    description:
      "Never miss a handyman job. Our AI answers calls, books work and replies to texts and web messages 24/7.",
    jsonLd: tradeService("handyman services", "AI Receptionist for Handyman Services | Get Booked Out"),
  },
  {
    path: "/carpentry",
    title: "AI Receptionist for Carpenters | Get Booked Out",
    description:
      "Win more carpentry work. Our AI receptionist answers calls 24/7 and books quotes into your calendar.",
    jsonLd: tradeService("carpentry", "AI Receptionist for Carpenters | Get Booked Out"),
  },
  {
    path: "/concreting",
    title: "AI Receptionist for Concreters | Get Booked Out",
    description:
      "Stop losing concrete jobs to missed calls. AI receptionist answers 24/7 and books quotes for you.",
    jsonLd: tradeService("concreting", "AI Receptionist for Concreters | Get Booked Out"),
  },
  {
    path: "/schedule-demo",
    title: "Schedule a Demo | Get Booked Out",
    description:
      "Book a live demo of Get Booked Out's AI receptionist and see how it answers calls and books appointments for your business.",
  },
];

export const SITE_URL = SITE;
export const OG_IMAGE = ogImage;
export const OG_IMAGE_ALT = ogAlt;

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Rewrite head of dist/index.html for a specific route.
 * Replaces <title>, <meta name="description">, sitewide og:* and twitter:* tags,
 * and injects <link rel="canonical"> and JSON-LD structured data.
 */
export function rewriteHtmlForRoute(html, route) {
  const url = `${SITE}${route.path === "/" ? "/" : route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  let out = html;

  // <title>
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // meta description
  out = out.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}">`
  );

  // og:url
  out = out.replace(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${url}">`
  );

  // og:title / twitter:title
  out = out.replace(
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${title}">`
  );
  out = out.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${title}">`
  );

  // og:description / twitter:description
  out = out.replace(
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${description}">`
  );
  out = out.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${description}">`
  );

  // Inject canonical, hreflang, robots, and JSON-LD just before </head>
  const ldArray = route.jsonLd
    ? Array.isArray(route.jsonLd)
      ? route.jsonLd
      : [route.jsonLd]
    : [];
  const ldTags = ldArray
    .map((ld) => `    <script type="application/ld+json">${JSON.stringify(ld)}</script>`)
    .join("\n");

  const inject = [
    `    <link rel="canonical" href="${url}">`,
    `    <link rel="alternate" hreflang="en-AU" href="${url}">`,
    `    <link rel="alternate" hreflang="x-default" href="${url}">`,
    `    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">`,
    ldTags,
  ]
    .filter(Boolean)
    .join("\n");

  out = out.replace(/<\/head>/i, `${inject}\n  </head>`);

  return out;
}
