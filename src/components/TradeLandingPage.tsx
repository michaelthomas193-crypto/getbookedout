import { useState, useEffect } from "react";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LeadFormEmbed from "@/components/LeadFormEmbed";

export interface TradeLandingPageProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  path: string;
  schemaServiceName: string;
  serviceType: string;
  audienceType: string;
  // Visual
  logo: string;
  heroImage: string;
  accentColor: string;
  // Doc-2 copy (exact wording)
  h1: string;
  heroOpenerH2: string;
  heroOpenerSub: string;
  introParagraph: string; // body intro paragraph
  whatDoesH2: string;
  whatDoesBullets: string[];
  numbersH2: string;
  numbersBullets: string[];
  realEnquiryH2: string;
  realEnquiryBody: string;
  liveH2: string;
}

const TradeLandingPage = (p: TradeLandingPageProps) => {
  const [showStickyCTA, setShowStickyCTA] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroForm = document.getElementById("hero-form");
      const ctaSection = document.getElementById("final-cta");
      if (heroForm && ctaSection) {
        const heroRect = heroForm.getBoundingClientRect();
        const ctaRect = ctaSection.getBoundingClientRect();
        const wh = window.innerHeight;
        const heroVisible = heroRect.top < wh && heroRect.bottom > 0;
        const ctaVisible = ctaRect.top < wh && ctaRect.bottom > 0;
        setShowStickyCTA(!heroVisible && !ctaVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const url = `https://www.getbookedout.com.au${p.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.schemaServiceName,
    serviceType: p.serviceType,
    provider: { "@id": "https://www.getbookedout.com.au/#organization" },
    areaServed: { "@type": "Country", name: "Australia" },
    audience: { "@type": "BusinessAudience", audienceType: p.audienceType },
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "99",
        priceCurrency: "AUD",
        unitText: "WEEK",
      },
    },
    url,
  };

  return (
    <>
      <SeoHead
        title={p.metaTitle}
        description={p.metaDescription}
        path={p.path}
        jsonLd={schema}
      />
      <div className="min-h-screen bg-background">
        <header className="py-4 px-4 md:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-block">
              <img src={p.logo} alt="Get Booked Out" className="h-12 md:h-20 w-auto" />
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="relative pt-6 pb-6 md:pt-12 md:pb-8 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${p.heroImage})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/90 via-white/80 to-white/60" />
          <div className="container-padding max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left flex flex-col justify-center order-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4 text-foreground">
                  {p.h1}
                </h1>
                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: p.accentColor }}>
                  {p.heroOpenerH2}
                </h2>
                <p className="text-base md:text-lg text-foreground mb-2 md:mb-3 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  {p.heroOpenerSub}
                </p>
                <div className="flex items-center justify-center lg:justify-start text-foreground">
                  <span className="text-sm font-medium italic">From $99/week. No lock-in.</span>
                </div>
              </div>
              <div id="hero-form" className="relative order-2">
                <LeadFormEmbed height={520} showHeader={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Body intro */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container-padding max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-foreground leading-relaxed">{p.introParagraph}</p>
          </div>
        </section>

        {/* What the AI does */}
        <section className="py-10 md:py-16 bg-gray-light">
          <div className="container-padding max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{p.whatDoesH2}</h2>
            <ul className="space-y-3 list-disc pl-6">
              {p.whatDoesBullets.map((b) => (
                <li key={b} className="text-base md:text-lg text-foreground leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container-padding max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{p.numbersH2}</h2>
            <ul className="space-y-3 list-disc pl-6">
              {p.numbersBullets.map((b) => (
                <li key={b} className="text-base md:text-lg text-foreground leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Real enquiry */}
        <section className="py-10 md:py-16 bg-secondary">
          <div className="container-padding max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{p.realEnquiryH2}</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed">{p.realEnquiryBody}</p>
          </div>
        </section>

        {/* Live in 48 hours */}
        <section id="final-cta" className="py-10 md:py-16 bg-background">
          <div className="container-padding max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{p.liveH2}</h2>
            <LeadFormEmbed
              title="Stop Losing Jobs to Missed Calls"
              subtitle="Find out how many enquiries you're actually missing — and how to fix it."
              height={650}
            />
          </div>
        </section>

        <footer className="py-6 bg-[#1A1A1A] text-white/60 text-center text-sm">
          <p>© {new Date().getFullYear()} Get Booked Out. All rights reserved.</p>
        </footer>

        {showStickyCTA && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
            <a href="tel:0485008132">
              <Button
                size="lg"
                className="w-full h-12 text-base font-semibold text-white"
                style={{ backgroundColor: p.accentColor }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default TradeLandingPage;
