import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Integrations from "@/components/sections/Integrations";
import Features from "@/components/sections/Features";
import Problems from "@/components/sections/Problems";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import ChatWidget from "@/components/ChatWidget";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StatsBar />
      <Integrations />
      <Features />
      <Problems />
      <HowItWorks />
      <Results />
      <Testimonials />
      <WhyUs />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ChatWidget />
      <MobileStickyCTA />
    </main>
  );
};

export default Index;
