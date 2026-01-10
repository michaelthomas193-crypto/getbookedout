import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneMissed, Clock, Star, MessageSquare, Bot, ThumbsUp, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-orange.png";
import heroImage from "@/assets/hero-electrical-landscape.png";
import LeadFormEmbed from "@/components/LeadFormEmbed";

const Electrical = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(true);

  // Orange accent color for electrical
  const accentColor = "#F57C00";

  useEffect(() => {
    const handleScroll = () => {
      const heroForm = document.getElementById("hero-form");
      const ctaSection = document.getElementById("final-cta");
      
      if (heroForm && ctaSection) {
        const heroRect = heroForm.getBoundingClientRect();
        const ctaRect = ctaSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide when hero form or CTA section is visible
        const heroVisible = heroRect.top < windowHeight && heroRect.bottom > 0;
        const ctaVisible = ctaRect.top < windowHeight && ctaRect.bottom > 0;
        
        setShowStickyCTA(!heroVisible && !ctaVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const painPoints = [
    {
      icon: PhoneMissed,
      title: "Your phone rang. You couldn't answer.",
      description: "85% of missed calls never call back. They've already called another sparkie.",
    },
    {
      icon: Clock,
      title: "You called back 2 hours later.",
      description: "Respond in under 5 minutes and you're 21x more likely to win the job. Two hours? They've already booked someone else.",
    },
    {
      icon: Star,
      title: "Your reviews don't reflect your work.",
      description: "You do quality work but only the unhappy customers leave reviews. The happy ones forget.",
    },
  ];

  const steps = [
    {
      icon: MessageSquare,
      trigger: "Missed call?",
      result: "We text them back instantly and find out what they need.",
    },
    {
      icon: Bot,
      trigger: "Website enquiry?",
      result: "Our AI handles it 24/7 — even at 10pm on a Saturday.",
    },
    {
      icon: ThumbsUp,
      trigger: "Job done?",
      result: "We automatically ask for a review. Only the 5-stars go to Google.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header - Logo Only */}
      <header className="py-4 px-4 md:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Get Booked Out" className="h-12 md:h-20 w-auto" />
          </Link>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative pt-6 pb-6 md:pt-12 md:pb-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
          {/* Semi-transparent white overlay (70% opacity - subtle enough to see image) */}
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="container-padding max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col justify-center order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">
                <span className="block">Lost Your Spark for</span>
                <span className="block">Chasing Callbacks?</span>
                <span className="block" style={{ color: accentColor }}>We'll Answer While You're Up a Ladder.</span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground mb-2 md:mb-3 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                You're up a ladder or elbow-deep in a switchboard. Phone rings. Can't answer. 
                Customer calls the next sparkie on Google. Sound familiar?
              </p>
              
              {/* Trust Badge */}
              <div className="flex items-center justify-center lg:justify-start text-muted-foreground mb-4 lg:mb-0">
                <span className="text-sm font-medium">Built by a business owner who was sick of the same problems.</span>
              </div>
            </div>

            {/* Right Content - Form */}
            <div id="hero-form" className="relative order-2">
              <LeadFormEmbed height={520} showHeader={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-10 md:py-16 bg-gray-light">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
              Right now, you're <span style={{ color: accentColor }} className="underline decoration-2">losing jobs</span> you don't even know about.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              While you're on a job site with your hands full of cables...
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-row items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                >
                  <point.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 md:py-16 bg-secondary">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Here's How We Fix It</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.trigger}
                className="bg-card rounded-xl p-6 border border-border shadow-sm text-center"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    backgroundColor: index === 0 ? "#FFCC80" : index === 1 ? "#FFB74D" : accentColor,
                    color: index === 2 ? "white" : "#E65100"
                  }}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <p className="font-bold text-lg mb-2">{step.trigger}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-10 md:py-16 bg-background">
        <div className="container-padding max-w-xl mx-auto">
          <LeadFormEmbed 
            title="Stop Losing Jobs to Missed Calls"
            subtitle="Find out how many enquiries you're actually missing — and how to fix it."
            height={650}
          />
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 bg-[#1A1A1A] text-white/60 text-center text-sm">
        <p>© {new Date().getFullYear()} Get Booked Out. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky CTA - Orange */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <a href="tel:0468092946">
            <Button 
              size="lg" 
              className="w-full h-12 text-base font-semibold text-white"
              style={{ backgroundColor: accentColor }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Electrical;
