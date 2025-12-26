import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problems from "@/components/sections/Problems";
import SocialProof from "@/components/sections/SocialProof";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
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
      <TrustBar />
      <section id="problems">
        <Problems />
      </section>
      <section id="testimonials">
        <SocialProof />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="how-it-works">
        <Process />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />
      <Footer />
      <ChatWidget />
      <MobileStickyCTA />
    </main>
  );
};

export default Index;