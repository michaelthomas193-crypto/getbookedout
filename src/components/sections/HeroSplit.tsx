import { motion, useReducedMotion } from "framer-motion";
import LeadFormEmbed from "@/components/LeadFormEmbed";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const HeroSplit = () => {
  const prefersReduced = useReducedMotion();

  const handlePrimary = () => {
    window.gtag?.("event", "cta_click", { label: "hero_primary_get_booked_out" });
    const form = document.getElementById("hero-lead-form");
    form?.scrollIntoView({ behavior: "smooth", block: "center" });
    const iframe = form?.querySelector("iframe") as HTMLIFrameElement | null;
    iframe?.focus();
  };

  const handleSecondary = () => {
    window.gtag?.("event", "cta_click", { label: "hero_secondary_see_how_it_works" });
    const target =
      document.getElementById("how-it-works") ||
      document.querySelector<HTMLElement>("[data-process-steps]");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fade = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay, ease: "easeOut" as const },
        };

  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-padding max-w-7xl mx-auto pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — headline + CTAs */}
          <div className="text-center lg:text-left">
            <motion.p
              {...fade(0)}
              className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              For Australian service-based businesses
            </motion.p>

            <motion.h1
              {...fade(0)}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground text-balance"
            >
              We save you time.
              <br />
              We save you money.
              <br />
              <span className="text-primary">Get booked out.</span>
            </motion.h1>

            <motion.p
              {...fade(0.08)}
              className="mt-5 mx-auto lg:mx-0 max-w-[56ch] text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Done-for-you systems that turn more enquiries into booked jobs, follow up with every
              lead automatically, and take the admin off your plate — so your calendar stays full
              and your week stays yours.
            </motion.p>

            <motion.div
              {...fade(0.16)}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={handlePrimary}
                className="inline-flex items-center justify-center min-h-[52px] rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background"
              >
                Show me how to get booked out
              </button>
              <button
                type="button"
                onClick={handleSecondary}
                className="inline-flex items-center justify-center min-h-[52px] rounded-full border border-border bg-card px-7 text-base font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background"
              >
                Show me how it works
              </button>
            </motion.div>

            <motion.p
              {...fade(0.24)}
              className="mt-4 text-sm text-muted-foreground max-w-[56ch] mx-auto lg:mx-0"
            >
              Built for tradies, beauty, wellness, auto, allied health and cleaning. No tech skills
              needed — we set it all up for you.
            </motion.p>
          </div>

          {/* RIGHT — lead form */}
          <motion.div {...fade(0.1)} id="hero-lead-form" className="w-full">
            <div className="rounded-2xl border border-border bg-card shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)] overflow-hidden">
              <div className="px-5 pt-5 pb-2 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Let's get you booked out
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Pop your details in. We'll be in touch within one business hour.
                </p>
              </div>
              <LeadFormEmbed showHeader={false} height={520} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
