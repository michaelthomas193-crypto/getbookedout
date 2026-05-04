import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroChatAnimation from "@/components/HeroChatAnimation";

const bullets = [
  "Answers questions & books appointments — while you're with customers",
  "Filters spam & sales calls — so you only hear from real customers",
  "Sends instant text & email notifications — never miss a lead again",
  "Captures more leads from your website with instant text-back",
];

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");

    window.setTimeout(() => {
      if (window.location.pathname !== "/get-started") {
        window.location.assign("/get-started");
      }
    }, 120);
  };

  return (
    <section
      id="hero"
      className="relative pt-8 pb-10 md:pt-20 md:pb-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(105deg, hsl(0 0% 100%) 0%, hsl(280 60% 97%) 38%, hsl(280 65% 92%) 62%, hsl(275 70% 86%) 100%)",
      }}
    >
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Mobile-only headline above chat */}
        <h1 className="lg:hidden text-4xl sm:text-5xl font-bold leading-[1.1] mb-5 text-foreground tracking-tight text-center animate-fade-up">
          AI receptionist for your <span className="text-primary">business calls</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              New · 24/7 AI Receptionist
            </div>

            {/* Headline - desktop only */}
            <h1 className="hidden lg:block text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] mb-5 text-foreground tracking-tight">
              AI receptionist for your <span className="text-primary">business calls</span>
            </h1>

            {/* Subheadline - desktop only */}
            <p className="hidden lg:block text-lg md:text-xl text-muted-foreground leading-relaxed mb-7 max-w-[560px] mx-auto lg:mx-0">
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

          </div>

          {/* Right Content - Animated chat panel */}
          <div className="relative animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-[hsl(var(--purple-glow)/0.4)] rounded-3xl blur-3xl opacity-70" />
            <div className="relative">
              <HeroChatAnimation />
            </div>
            {/* Mobile CTA directly under chat */}
            <div className="lg:hidden mt-6 text-center">
              <button
                type="button"
                onClick={handleGetStarted}
                className="inline-flex w-full items-center justify-center min-h-[56px] rounded-full bg-primary text-primary-foreground text-base font-semibold px-8 shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all"
              >
                Get Started Today
              </button>
              <p className="text-xs text-muted-foreground mt-3">
                No lock-in contracts · Cancel anytime
              </p>
            </div>
            {/* Desktop CTA below visual */}
            <div className="hidden lg:block mt-6 text-center">
              <button
                type="button"
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center min-h-[52px] rounded-full bg-primary text-primary-foreground text-base font-semibold px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
              >
                Get Started Today
              </button>
              <p className="text-xs text-muted-foreground mt-3">
                No lock-in contracts · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
