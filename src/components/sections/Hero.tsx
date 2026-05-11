import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroMultiChannel from "@/components/HeroMultiChannel";

const bullets = [
  "Answers phone calls so you never miss a customer",
  "Replies to texts and website messages in seconds",
  "Books appointments straight into your calendar",
  "Works 24/7 — even when you're with a customer",
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
        {/* Mobile-only headline above visual */}
        <h1 className="lg:hidden text-[34px] sm:text-5xl font-bold leading-[1.1] mb-4 text-foreground tracking-tight text-center animate-fade-up">
          Get more bookings without <span className="text-primary">answering every call yourself</span>
        </h1>
        <p className="lg:hidden text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-[560px] mx-auto animate-fade-up">
          Our AI receptionist answers calls, replies to texts and website messages, books appointments, and keeps your calendar up to date 24/7.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              New · 24/7 AI Receptionist
            </div>

            {/* Headline - desktop only */}
            <h1 className="hidden lg:block text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold leading-[1.05] mb-5 text-foreground tracking-tight">
              Get more bookings without <span className="text-primary">answering every call yourself</span>
            </h1>

            {/* Subheadline - desktop only */}
            <p className="hidden lg:block text-lg md:text-xl text-muted-foreground leading-relaxed mb-7 max-w-[560px] mx-auto lg:mx-0">
              Our AI receptionist answers calls, replies to texts and website messages, books appointments, and keeps your calendar up to date 24/7.
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
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-primary/30 to-[hsl(var(--purple-glow)/0.4)] rounded-3xl blur-3xl opacity-70" />
            <div className="relative pointer-events-none">
              <HeroMultiChannel />
            </div>
            {/* Mobile CTA directly under chat */}
            <div className="relative z-10 lg:hidden mt-5 text-center">
              <OfferBadge className="w-full" />
              <button
                type="button"
                onClick={handleGetStarted}
                className="mt-3 inline-flex w-full items-center justify-center min-h-[52px] rounded-full bg-primary text-primary-foreground text-base font-semibold px-8 shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all"
              >
                Get Started Today
              </button>
              <p className="text-xs text-muted-foreground mt-3">
                No lock-in contracts · Cancel anytime
              </p>
            </div>
            {/* Desktop CTA below visual */}
            <div className="relative z-10 hidden lg:block mt-6 text-center">
              <OfferBadge className="inline-flex" />
              <div className="mt-3">
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center min-h-[52px] rounded-full bg-primary text-primary-foreground text-base font-semibold px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  Get Started Today
                </button>
              </div>
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

const OfferBadge = ({ className = "" }: { className?: string }) => (
  <div
    className={`${className} items-center justify-center gap-x-2 gap-y-0.5 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-4 py-2.5 text-foreground shadow-sm flex flex-wrap text-center`}
  >
    <span className="inline-flex items-center gap-1.5 font-bold text-primary text-sm sm:text-[15px] whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      From $99 / week
    </span>
    <span className="hidden sm:inline text-primary/30">•</span>
    <span className="text-[13px] sm:text-sm font-medium leading-snug w-full sm:w-auto">
      If it doesn't pay for itself in the first month, you don't pay.
    </span>
  </div>
);

export default Hero;
