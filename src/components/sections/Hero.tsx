import { Check } from "lucide-react";
import LeadFormEmbed from "@/components/LeadFormEmbed";

const bullets = [
  "Answers questions & books appointments — while you're with customers",
  "Filters spam & sales calls — so you only hear from real customers",
  "Sends instant text & email notifications — never miss a lead again",
  "Captures more leads from your website with instant text-back",
];

const Hero = () => {
  return (
    <section id="hero" className="relative pt-8 pb-10 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-accent/40 via-background to-background">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              New · 24/7 AI Receptionist
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] mb-5 text-foreground tracking-tight">
              AI receptionist for your <span className="text-primary">business calls</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-7 max-w-[560px] mx-auto lg:mx-0">
              Get Booked Out is your AI receptionist — trained on your business and ready to field calls, answer questions, set appointments, and send you all the details 24/7.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8 max-w-[560px] mx-auto lg:mx-0 text-left">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-foreground text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="lg:hidden mb-2">
              <a
                href="#hero-form"
                className="inline-flex w-full items-center justify-center min-h-[56px] rounded-full bg-primary text-primary-foreground text-base font-semibold px-8 shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all"
              >
                Get Started Today
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                No lock-in contracts · Cancel anytime
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div id="hero-form" className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl blur-2xl opacity-60" />
            <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              <div className="px-6 pt-6 pb-2 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Get Started Today
                </h2>
                <p className="text-sm text-muted-foreground">
                  Setup in minutes. We do the heavy lifting.
                </p>
              </div>
              <LeadFormEmbed height={420} showHeader={false} className="rounded-none border-0 shadow-none" />
              <div className="px-6 pb-5 pt-1 text-center">
                <p className="text-xs text-muted-foreground">
                  No lock-in contracts · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
