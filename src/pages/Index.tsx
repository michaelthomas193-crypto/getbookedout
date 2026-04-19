import { Helmet } from "react-helmet-async";
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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Get Booked Out",
  "image": "https://getbookedout.com.au/og-image.png",
  "url": "https://getbookedout.com.au",
  "description": "AI receptionist that answers your business calls 24/7 — books appointments, filters spam, and never lets a lead slip through. Built for any small business.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "52",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>AI Receptionist for Your Business Calls | Get Booked Out</title>
        <meta name="description" content="Get Booked Out is your 24/7 AI receptionist. It answers calls, books appointments, filters spam, and sends you every lead — for any small business." />
        <link rel="canonical" href="https://getbookedout.com.au/" />
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
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
