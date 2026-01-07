import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneMissed, Clock, Star, MessageSquare, Bot, ThumbsUp, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Concreters = () => {
  const [heroForm, setHeroForm] = useState({ fullName: "", phone: "" });
  const [ctaForm, setCtaForm] = useState({ fullName: "", phone: "" });
  const [showStickyCTA, setShowStickyCTA] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroForm = document.getElementById("hero-form");
      const ctaSection = document.getElementById("final-cta");
      
      if (heroForm && ctaSection) {
        const heroRect = heroForm.getBoundingClientRect();
        const ctaRect = ctaSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
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

  const accentColor = "#546E7A"; // Slate Grey

  const painPoints = [
    {
      icon: PhoneMissed,
      title: "Your phone rang. You couldn't answer.",
      description: "85% of missed calls never call back. They've already called another concreter.",
      bgColor: "bg-[#546E7A]/20",
      textColor: "text-[#546E7A]",
    },
    {
      icon: Clock,
      title: "You called back 2 hours later.",
      description: "Respond in under 5 minutes and you're 21x more likely to win the job. Two hours? They've already booked someone else.",
      bgColor: "bg-[#546E7A]/20",
      textColor: "text-[#546E7A]",
    },
    {
      icon: Star,
      title: "Your reviews don't reflect your work.",
      description: "You do quality work but only the unhappy customers leave reviews. The happy ones forget.",
      bgColor: "bg-[#546E7A]/20",
      textColor: "text-[#546E7A]",
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

      {/* Hero Section */}
      <section className="relative pt-6 pb-6 md:pt-12 md:pb-8 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>

        <div className="container-padding max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content - Text */}
            <div className="text-center lg:text-left flex flex-col justify-center order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4 text-foreground">
                <span className="block">Mid-Pour. Phone Rings.</span>
                <span className="block text-[#546E7A]">Can't Stop. Job Gone.</span>
              </h1>
              
              <p className="text-base md:text-lg text-foreground mb-2 md:mb-3 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                You're mid-pour or finishing a slab. Phone rings. Stop now and it's ruined. Customer calls the next concreter on Google. Sound familiar?
              </p>
              
              {/* Trust Badge */}
              <div className="flex items-center justify-center lg:justify-start text-foreground">
                <span className="text-sm font-medium italic">Built by a business owner who was sick of the same problems.</span>
              </div>
            </div>

            {/* Right Content - Form Card */}
            <div id="hero-form" className="relative order-2">
              <div className="bg-card rounded-2xl shadow-2xl border border-border p-5 md:p-6">
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
                    className="w-full min-h-[48px] group text-base text-white hover:opacity-90"
                    style={{ backgroundColor: accentColor }}
                  >
                    Show Me How It Works
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Right now, you're <span className="text-[#546E7A] underline decoration-2">losing jobs</span> you don't even know about.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              While you're on site with the mixer running...
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-row items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 ${point.bgColor} rounded-xl flex items-center justify-center shrink-0`}>
                  <point.icon className={`w-5 h-5 md:w-7 md:h-7 ${point.textColor}`} />
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
                  style={{ backgroundColor: accentColor }}
                >
                  <step.icon className="w-6 h-6 text-white" />
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
              Stop <span className="text-[#546E7A]">Losing Jobs</span> to Missed Calls
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
                className="w-full h-12 md:h-14 text-base font-semibold text-white hover:opacity-90"
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

      {/* Mobile Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <a href="tel:1300000000">
            <Button 
              size="lg" 
              className="w-full h-12 text-base font-semibold text-white hover:opacity-90"
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

export default Concreters;