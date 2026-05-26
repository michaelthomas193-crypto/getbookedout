import SeoHead from "@/components/SeoHead";
import Header from "@/components/sections/Header";
import HeroSplit from "@/components/sections/HeroSplit";
import TrustStripBold from "@/components/sections/TrustStripBold";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import Benefits from "@/components/sections/Benefits";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import Proof from "@/components/sections/Proof";
import MarqueeQuotes from "@/components/sections/MarqueeQuotes";
import OfferInclusions from "@/components/sections/OfferInclusions";
import Industries from "@/components/sections/Industries";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.getbookedout.com.au/#business",
  "name": "Get Booked Out",
  "image": "https://www.getbookedout.com.au/og-image.png",
  "url": "https://www.getbookedout.com.au",
  "telephone": "+61485008132",
  "email": "bookings@getbookedout.com.au",
  "priceRange": "$$",
  "description": "AI receptionist for Australian service businesses. Answers every call, replies instantly, and books jobs 24/7. From $99/week. No lock-in contracts.",
  "address": { "@type": "PostalAddress", "addressLocality": "Sydney", "addressRegion": "NSW", "addressCountry": "AU" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61586125082752",
    "https://www.instagram.com/getbookedout.au"
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Receptionist",
  "provider": { "@id": "https://www.getbookedout.com.au/#business" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "name": "AI Receptionist for Australian Service Businesses",
  "description": "24/7 AI receptionist that answers calls, replies to enquiries, qualifies leads and books jobs straight into your calendar.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AUD",
    "price": "99",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "99",
      "priceCurrency": "AUD",
      "unitText": "WEEK"
    }
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.getbookedout.com.au/#organization",
  "name": "Get Booked Out",
  "url": "https://www.getbookedout.com.au",
  "logo": "https://www.getbookedout.com.au/favicon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61485008132",
    "contactType": "customer service",
    "areaServed": "AU",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61586125082752",
    "https://www.instagram.com/getbookedout.au"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { q: "What is an AI receptionist?", a: "An AI receptionist answers your phone calls and website enquiries on behalf of your business using natural-sounding voice and text. It's trained on your services, pricing and FAQs, books appointments straight into your calendar, and sends you a full transcript every time." },
    { q: "Who is Get Booked Out for?", a: "Any Australian service business that misses calls — tradies, cleaners, beauty clinics, allied health, auto services, and more." },
    { q: "How long does setup take?", a: "Under 48 hours. We onboard your business, train the AI, connect your calls and calendar, and run a live test with you before going live." },
    { q: "How much does it cost?", a: "From $99/week. No lock-in contracts. Roughly one-tenth the cost of a full-time receptionist, working 24/7." },
    { q: "Are there lock-in contracts?", a: "No. Cancel anytime. If it doesn't pay for itself in your first month, you don't pay." },
    { q: "Does it replace my staff?", a: "No — it backs them up. The AI handles overflow, after-hours and missed calls so your team can focus on the work that pays." },
    { q: "What happens after hours?", a: "The AI answers every call, replies to every enquiry, and books jobs into your calendar — even at 2am on a Sunday." },
  ].map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SeoHead
        title="Get Booked Out | More Bookings, Less Admin for Australian Service Businesses"
        description="We save you time, save you money and make you more money. Done-for-you systems for Australian service businesses — tradies, beauty, wellness, auto, allied health and cleaning."
        path="/"
        jsonLd={[organizationSchema, localBusinessSchema, serviceSchema, faqSchema]}
      />
      <Header />
      <HeroSplit />
      <TrustStripBold />
      <Proof />
      <MarqueeQuotes />
      <TrustStrip />
      <Problem />
      <Benefits />
      <HowItWorksSteps />
      <OfferInclusions />
      <Industries />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
