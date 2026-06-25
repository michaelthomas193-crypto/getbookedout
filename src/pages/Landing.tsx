import SeoHead from "@/components/SeoHead";
import HeroSplit from "@/components/sections/HeroSplit";
import TrustStripBold from "@/components/sections/TrustStripBold";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import Benefits from "@/components/sections/Benefits";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import MarqueeQuotes from "@/components/sections/MarqueeQuotes";
import GoogleReviews from "@/components/sections/GoogleReviews";
import OfferInclusions from "@/components/sections/OfferInclusions";
import BuiltAndRun from "@/components/sections/BuiltAndRun";
import Industries from "@/components/sections/Industries";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

/**
 * /landing
 * Standalone paid-ads landing page. Mirrors the homepage design and sections
 * but omits the main site Header (and uses a minimal footer) so visitors stay
 * focused on the CTA / GHL enquiry form. Does NOT modify any existing routes.
 */
const Landing = () => {
  return (
    <main className="min-h-screen bg-background">
      <SeoHead
        title="Get Booked Out | AI for Service Businesses — Never Miss Another Job"
        description="AI and automation for tradies and service businesses. AI receptionist, chat and booking systems that make you more money, save you time and keep your diary full."
        path="/landing"
      />

      {/* Minimal brand bar — no nav links, keeps page conversion-focused */}
      <header className="py-4 px-4 md:px-6 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center">
          <a href="/landing" className="inline-flex items-center gap-2" aria-label="Get Booked Out">
            <img
              src="/favicon.png"
              alt="Get Booked Out"
              className="h-8 w-auto"
              loading="eager"
            />
            <span className="text-base font-bold tracking-tight text-foreground">
              Get Booked Out
            </span>
          </a>
        </div>
      </header>

      <HeroSplit />
      <TrustStripBold />
      <MarqueeQuotes />
      <GoogleReviews />
      <HowItWorksSteps />
      <TrustStrip />
      <Problem />
      <Benefits />
      <OfferInclusions />
      <BuiltAndRun />
      <Industries />
      <FAQ />
      <FinalCTA />

      <footer className="py-6 bg-[#1A1A1A] text-white/60 text-center text-sm">
        <p>© {new Date().getFullYear()} Get Booked Out. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Landing;
