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
    { q: "What kinds of businesses is this for?", a: "Any business with a phone. We work with home services, salons, clinics, legal practices, real estate, auto shops, cleaners, fitness studios, and more. If your customers call you and you sometimes can't pick up, this is for you." },
    { q: "I'm not tech-savvy. Can I still use this?", a: "Absolutely. We handle setup end-to-end. Your AI learns from your website automatically, you review and tweak the answers, and we connect everything to your phone." },
    { q: "How quickly will it be live?", a: "Most businesses are up and taking calls within 48 hours. We do the heavy lifting — you just confirm the details and forward your number." },
    { q: "Will my customers know it's AI?", a: "The voice is natural enough that most callers don't realise. You can also pick a custom name and greeting so it sounds like part of your team." },
    { q: "What happens to spam and sales calls?", a: "Filtered out automatically. Robocalls, 1-800 numbers, and sales reps don't make it through to you — only real customers do." },
    { q: "Is there a lock-in contract?", a: "No. Month-to-month, cancel any time." },
    { q: "Can it book appointments straight into my calendar?", a: "Yes — on the Complete plan and above. Works with Google Calendar, Calendly, Acuity, and most popular booking tools." },
    { q: "How do you connect to our phone system?", a: "Simple call forwarding. You keep your existing number — we give you instructions to forward unanswered or all calls to your AI receptionist." },
    { q: "Can I access call history, recordings, and transcripts?", a: "Yes. Every call is logged with a full transcript, audio recording, AI-generated summary, and the caller's number." },
    { q: "Will I get notified when there's a new call or booking?", a: "Instantly — by SMS, email, and push notification on the mobile app." },
    { q: "Do I need a developer to set this up?", a: "No. We handle the setup end-to-end. No code, no integrations to wire up — just a 30-minute onboarding call and you're live." },
    { q: "Is there a free trial?", a: "We don't run free trials, but every plan is month-to-month with no lock-in. If it's not pulling its weight in the first 30 days, cancel and walk away." },
  ].map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SeoHead
        title="AI Receptionist for Your Business Calls | Get Booked Out"
        description="Get Booked Out is your 24/7 AI receptionist. It answers calls, books appointments, filters spam, and sends you every lead — for any small business."
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
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
