import fs from "fs/promises";
import path from "path";

const SITE = "https://www.getbookedout.com.au";
const DIST = path.resolve("dist");
const OG_IMAGE = `${SITE}/og-image.jpg`;
const OG_ALT = "Get Booked Out — AI receptionist for Australian businesses";

const ORG_ID = `${SITE}/#organization`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Get Booked Out",
  url: `${SITE}/`,
  logo: `${SITE}/favicon.png`,
  description: "AI receptionist for Australian tradies. Answers calls, replies to texts, books appointments and chases Google reviews 24/7.",
  founder: { "@type": "Person", name: "Michael Thomas" },
  areaServed: { "@type": "Country", name: "Australia" },
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
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: "Get Booked Out",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-AU",
};

const homepageService = {
  "@type": "Service",
  name: "AI Receptionist for Tradies",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Australia" },
  description: "24/7 AI receptionist that answers calls, replies to website enquiries, books appointments and automates 5-star Google reviews for Australian service businesses.",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "AUD",
    priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "AUD", unitText: "WEEK" },
  },
};

const homepageFaq = {
  "@type": "FAQPage",
  mainEntity: [
    ["What is an AI receptionist?", "An AI receptionist is software that answers phone calls and website enquiries on behalf of your business using natural-sounding voice and text. Get Booked Out's AI is trained on your business – your prices, hours, services and FAQs – so it talks to customers exactly the way you would, books their appointments straight into your calendar, and texts you a transcript the moment the call ends."],
    ["How much does an AI receptionist cost in Australia?", "Get Booked Out starts at $99 per week with no lock-in contracts. That is roughly one-tenth the cost of a full-time receptionist (around $50,000 to $65,000 per year in Australia) and works 24 hours a day, including weekends and public holidays."],
    ["Will customers know they're talking to AI?", "Most customers cannot tell. The AI is trained on natural Australian conversational patterns and responds in real time. We always tell you on setup whether you want the AI to identify itself as an AI assistant or simply as your business – your choice."],
    ["What happens if the AI can't answer a question?", "The AI transfers the call to you (or any team member you nominate), or texts the customer to say a human will call them back shortly. You get a notification with the full transcript so you can follow up instantly."],
    ["How long does setup take?", "Under 48 hours. We onboard your business, train the AI on your services and pricing, set up your call forwarding and review automation, and run a test call with you before going live."],
    ["Does it work for plumbers, electricians and other trades?", "Yes. Get Booked Out is built specifically for Australian tradies, with purpose-built configurations for plumbing, electrical, carpentry, painting, landscaping, concreting and handyman businesses."],
    ["Can I cancel anytime?", "Yes. No lock-in contracts. If the AI does not pay for itself in your first month, you do not pay."],
    ["What CRMs and tools does it integrate with?", "Get Booked Out integrates with Google Calendar, Outlook, Go High Level, ServiceM8, Tradify, AroFlo, simPRO, Jobber, Housecall Pro and most major job-management platforms. Custom systems are connected via API or Zapier."],
  ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
};

const homepageGraph = { "@context": "https://schema.org", "@graph": [organization, website, homepageService, homepageFaq] };

const tradeService = (slug, name, serviceType, audienceType) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType,
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Australia" },
  audience: { "@type": "BusinessAudience", audienceType },
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "AUD",
    priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "AUD", unitText: "WEEK" },
  },
  url: `${SITE}${slug}`,
});

const routes = [
  {
    path: "/",
    title: "AI Receptionist for Tradies Australia | Get Booked Out",
    description: "Never miss a call, never miss a job. Get Booked Out's AI receptionist answers calls, replies to texts, books appointments and chases reviews 24/7 for Australian tradies. From $99/week. No lock-in.",
    jsonLd: homepageGraph,
  },
  {
    path: "/why-us",
    title: "The Real Cost of Missed Calls for Australian Tradies | Get Booked Out",
    description: "Missed calls cost the average Australian tradie $14,000 to $34,000 a month. See the math, then see how a $99/week AI receptionist pays for itself in week one.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "What Missed Calls Are Really Costing Your Trade Business",
      url: `${SITE}/why-us`,
      description: "The real cost of missed calls for Australian tradies, with the math and a $99/week alternative.",
      isPartOf: { "@id": `${SITE}/#website` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Why Us", item: `${SITE}/why-us` },
        ],
      },
    },
  },
  {
    path: "/pricing",
    title: "AI Receptionist Pricing Australia — From $99/week | Get Booked Out",
    description: "One simple price. No lock-in. From $99/week for an AI receptionist that answers calls, books jobs and chases reviews 24/7. If it doesn't pay for itself in month one, you don't pay.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Get Booked Out AI Receptionist",
      description: "24/7 AI receptionist for Australian tradies — answers calls, books appointments, chases Google reviews.",
      brand: { "@type": "Brand", name: "Get Booked Out" },
      offers: {
        "@type": "Offer",
        url: `${SITE}/pricing`,
        priceCurrency: "AUD",
        price: "99",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "AUD", unitText: "WEEK" },
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "Country", name: "Australia" },
      },
    },
  },
  {
    path: "/who-we-are",
    title: "About Get Booked Out — Built by an Aussie Who Got Sick of Missed Calls",
    description: "Get Booked Out was founded by Michael Thomas after losing count of how many tradies he hired who never answered their phone. The AI receptionist he wished existed.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Why We Built Get Booked Out",
      url: `${SITE}/who-we-are`,
      mainEntity: {
        "@type": "Person",
        name: "Michael Thomas",
        jobTitle: "Founder",
        worksFor: { "@id": ORG_ID },
      },
    },
  },
  {
    path: "/plumbing",
    title: "AI Receptionist for Plumbers Australia | Never Miss a Job | Get Booked Out",
    description: "The AI receptionist built for Australian plumbers. Answers calls while you're under a house, texts customers back instantly, books jobs into your calendar 24/7. From $99/week.",
    jsonLd: tradeService("/plumbing", "AI Receptionist for Plumbers", "AI receptionist and lead automation for plumbing businesses", "Plumbers"),
  },
  {
    path: "/electrical",
    title: "AI Receptionist for Electricians Australia | Get Booked Out",
    description: "The AI receptionist built for Australian electricians. Answers calls while you're up a ladder or in a switchboard. Books jobs, qualifies leads and chases reviews 24/7. From $99/week.",
    jsonLd: tradeService("/electrical", "AI Receptionist for Electricians", "AI receptionist and lead automation for electrical businesses", "Electricians"),
  },
  {
    path: "/carpentry",
    title: "AI Receptionist for Carpenters Australia | Get Booked Out",
    description: "The AI receptionist built for Australian carpenters and chippies. Answers calls while you're on the tools. Quotes, books and chases reviews 24/7. From $99/week. No lock-in.",
    jsonLd: tradeService("/carpentry", "AI Receptionist for Carpenters", "AI receptionist and lead automation for carpentry businesses", "Carpenters"),
  },
  {
    path: "/painting",
    title: "AI Receptionist for Painters Australia | Get Booked Out",
    description: "The AI receptionist built for Australian painters. Captures every enquiry while you're up a ladder, books quotes and chases reviews 24/7. From $99/week. No lock-in.",
    jsonLd: tradeService("/painting", "AI Receptionist for Painters", "AI receptionist and lead automation for painting businesses", "Painters"),
  },
  {
    path: "/landscaping",
    title: "AI Receptionist for Landscapers Australia | Get Booked Out",
    description: "The AI receptionist built for Australian landscapers. Captures backyard reno, paving, turf and garden enquiries while you're on site. Books quotes 24/7. From $99/week.",
    jsonLd: tradeService("/landscaping", "AI Receptionist for Landscapers", "AI receptionist and lead automation for landscaping businesses", "Landscapers"),
  },
  {
    path: "/concreting",
    title: "AI Receptionist for Concreters Australia | Get Booked Out",
    description: "The AI receptionist built for Australian concreters. Captures driveway, slab and exposed-aggregate enquiries while you're mid-pour. Books quotes 24/7. From $99/week.",
    jsonLd: tradeService("/concreting", "AI Receptionist for Concreters", "AI receptionist and lead automation for concreting businesses", "Concreters"),
  },
  {
    path: "/handyman",
    title: "AI Receptionist for Handyman Businesses Australia | Get Booked Out",
    description: "The AI receptionist built for Australian handymen. Captures every odd-job, repair and maintenance enquiry, qualifies scope, books and chases reviews 24/7. From $99/week.",
    jsonLd: tradeService("/handyman", "AI Receptionist for Handyman Businesses", "AI receptionist and lead automation for handyman businesses", "Handyman"),
  },
  {
    path: "/schedule-demo",
    title: "Book a Demo — See Get Booked Out Live | Get Booked Out",
    description: "Book a 20-minute demo and we'll show you exactly how Get Booked Out's AI receptionist would handle your business's calls, enquiries and reviews. From $99/week. No lock-in.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Book a Demo of Get Booked Out",
      url: `${SITE}/schedule-demo`,
      description: "Book a 20-minute live demo of the Get Booked Out AI receptionist.",
      potentialAction: {
        "@type": "ReserveAction",
        target: `${SITE}/schedule-demo`,
        result: { "@type": "Reservation", name: "Get Booked Out demo booking" },
      },
    },
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
