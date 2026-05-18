import SeoHead from "@/components/SeoHead";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

import StatsBar from "@/components/sections/StatsBar";
import ReviewAutomationDemo from "@/components/sections/ReviewAutomationDemo";
import Problems from "@/components/sections/Problems";

import UseCases from "@/components/sections/UseCases";
import PremiumFeatures from "@/components/sections/PremiumFeatures";
import MarqueeQuotes from "@/components/sections/MarqueeQuotes";
import AudioDemos from "@/components/sections/AudioDemos";

import MobileApp from "@/components/sections/MobileApp";
import PhoneQuiz from "@/components/sections/PhoneQuiz";
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
  "description": "AI receptionist that answers your business calls 24/7 — books appointments, filters spam, and never lets a lead slip through. Built for any small business.",
  "address": { "@type": "PostalAddress", "addressLocality": "Sydney", "addressRegion": "NSW", "addressCountry": "AU" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61586125082752",
    "https://www.instagram.com/getbookedout.au"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "52",
    "bestRating": "5",
    "worstRating": "1"
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.getbookedout.com.au/#website",
  "url": "https://www.getbookedout.com.au",
  "name": "Get Booked Out",
  "publisher": { "@id": "https://www.getbookedout.com.au/#organization" },
  "inLanguage": "en-AU"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { q: "What is an AI receptionist?", a: "An AI receptionist is software that answers phone calls and website enquiries on behalf of your business using natural-sounding voice and text. Get Booked Out's AI is trained on your business – your prices, hours, services and FAQs – so it talks to customers exactly the way you would, books their appointments straight into your calendar, and texts you a transcript the moment the call ends." },
    { q: "How much does an AI receptionist cost in Australia?", a: "Get Booked Out starts at $99 per week with no lock-in contracts. That is roughly one-tenth the cost of a full-time receptionist (around $50,000 to $65,000 per year in Australia) and works 24 hours a day, including weekends and public holidays." },
    { q: "Will customers know they're talking to AI?", a: "Most customers cannot tell. The AI is trained on natural Australian conversational patterns and responds in real time. We always tell you on setup whether you want the AI to identify itself as an AI assistant or simply as your business – your choice." },
    { q: "What happens if the AI can't answer a question?", a: "The AI transfers the call to you (or any team member you nominate), or texts the customer to say a human will call them back shortly. You get a notification with the full transcript so you can follow up instantly." },
    { q: "How long does setup take?", a: "Under 48 hours. We onboard your business, train the AI on your services and pricing, set up your call forwarding and review automation, and run a test call with you before going live." },
    { q: "Does it work for my industry?", a: "Yes. Get Booked Out works for any service-based business — trades, home services, health and wellness, professional services, beauty, automotive and more. We also have purpose-built configurations for plumbing, electrical, carpentry, painting, landscaping, concreting and handyman businesses." },
    { q: "Can I cancel anytime?", a: "Yes. No lock-in contracts. If the AI does not pay for itself in your first month, you do not pay." },
    { q: "What CRMs and tools does it integrate with?", a: "Get Booked Out integrates with Google Calendar, Outlook, Go High Level, ServiceM8, Tradify, AroFlo, simPRO, Jobber, Housecall Pro and most major job-management platforms. Custom systems are connected via API or Zapier." },
  ].map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SeoHead
        title="AI Receptionist for Service Businesses Australia | Get Booked Out"
        description="Never miss a call, never miss a job. Get Booked Out's AI receptionist answers calls, replies to texts, books appointments and chases reviews 24/7 for Australian service businesses. From $99/week. No lock-in."
        path="/"
        jsonLd={[organizationSchema, websiteSchema, localBusinessSchema, faqSchema]}
      />
      <Header />
      <Hero />
      
      <ReviewAutomationDemo />
      <AudioDemos />
      <MarqueeQuotes />
      <StatsBar />
      <MobileApp />
      <Problems />
      <UseCases />
      <PremiumFeatures />
      <PhoneQuiz />
      <Industries />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
