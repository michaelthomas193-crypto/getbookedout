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
  const ogImage = image ?? `${SITE}/og-image.jpg`;

  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-AU" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta name="geo.region" content="AU" />
      <meta name="geo.country" content="Australia" />
      <meta name="geo.placename" content="Australia" />
      <meta httpEquiv="content-language" content="en-AU" />
      <meta name="theme-color" content="#0a0a0a" />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />}

      <meta property="og:site_name" content="Get Booked Out" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Get Booked Out — AI receptionist for Australian businesses" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@getbookedout" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Get Booked Out — AI receptionist for Australian businesses" />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
