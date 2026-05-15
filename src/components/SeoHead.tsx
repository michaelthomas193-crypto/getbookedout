import { Helmet } from "react-helmet-async";

const SITE = "https://www.getbookedout.com.au";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

/**
 * Per-route head tags. Sets unique title, description, canonical and
 * Open Graph metadata, plus optional JSON-LD structured data.
 */
const SeoHead = ({ title, description, path, image, noindex, jsonLd }: SeoHeadProps) => {
  const url = `${SITE}${path}`;
  const ogImage =
    image ??
    "https://storage.googleapis.com/gpt-engineer-file-uploads/Z6pEzO23i8XgGjOeh2TK1nB20Cn1/social-images/social-1774571733065-Untitled_design__1_-removebg-preview.webp";

  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-AU" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
