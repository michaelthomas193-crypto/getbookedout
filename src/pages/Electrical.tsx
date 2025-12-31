import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneMissed, Clock, Star, MessageSquare, Bot, ThumbsUp, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-orange.png";
import heroImage from "@/assets/hero-electrical-landscape.png";

const Electrical = () => {
  const [heroForm, setHeroForm] = useState({ fullName: "", phone: "" });
  const [ctaForm, setCtaForm] = useState({ fullName: "", phone: "" });
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

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch shortly.");
    setHeroForm({ fullName: "", phone: "" });
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch shortly.");
    setCtaForm({ fullName: "", phone: "" });
  };

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
        {/* Background Image - Desktop only */}
        <div className="absolute inset-0 z-0 hidden md:block">
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
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-5 md:p-6">
                {/* Form Header */}
                <div className="text-center mb-4">
                  <h2 className="text-lg md:text-xl font-bold">Stop Losing Jobs</h2>
                  <p className="text-muted-foreground text-sm mt-1">10min chat. No sales pitch.</p>
                </div>

                <form onSubmit={handleHeroSubmit} className="space-y-3">
                  <Input
                    placeholder="Full Name"
                    value={heroForm.fullName}
                    onChange={(e) => setHeroForm({ ...heroForm, fullName: e.target.value })}
                    required
                    className="h-12 md:h-10 text-base md:text-sm"
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={heroForm.phone}
                    onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                    required
                    className="h-12 md:h-10 text-base md:text-sm"
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full min-h-[48px] text-base font-semibold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    Show Me How It Works
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
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
            {painPoints.map((point, index) => (
              <div
                key={point.title}
                className="flex flex-col sm:flex-row items-start gap-4 p-5 md:p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                >
                  <point.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{point.title}</h3>
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
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Stop <span style={{ color: accentColor }}>Losing Jobs</span> to Missed Calls
            </h2>
            <p className="text-muted-foreground mb-6">
              Find out how many enquiries you're actually missing — and how to fix it.
            </p>
            <form onSubmit={handleCtaSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                value={ctaForm.fullName}
                onChange={(e) => setCtaForm({ ...ctaForm, fullName: e.target.value })}
                required
                className="h-12 md:h-14 text-base"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={ctaForm.phone}
                onChange={(e) => setCtaForm({ ...ctaForm, phone: e.target.value })}
                required
                className="h-12 md:h-14 text-base"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 md:h-14 text-base font-semibold text-white"
                style={{ backgroundColor: accentColor }}
              >
                Let's Chat
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 bg-[#1A1A1A] text-white/60 text-center text-sm">
        <p>© {new Date().getFullYear()} Get Booked Out. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky CTA - Orange */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <a href="tel:1300000000">
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
