import { motion, useReducedMotion } from "framer-motion";

const HERO_FORM_SRC = "https://api.leadconnectorhq.com/widget/form/l0s50SAT3j1HjcABaNr8";

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

      <div className="container-padding mx-auto max-w-7xl py-2 md:py-3 lg:py-4">
        <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_minmax(330px,390px)] lg:gap-6">
          {/* LEFT — headline + copy */}
          <div className="text-center md:text-left md:pr-4">
            <motion.p
              {...fade(0)}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary md:text-[11px]"
            >
              For Australian service-based businesses
            </motion.p>

            <motion.h1
              {...fade(0)}
              className="mt-2 text-[3.15rem] font-bold leading-[0.94] tracking-tight text-foreground md:text-[3.35rem] lg:text-[3.8rem]"
            >
              We save you time.
              <br />
              We save you money.
              <br />
              <span className="text-primary">Get Booked Out.</span>
            </motion.h1>

            <motion.p
              {...fade(0.08)}
              className="mx-auto mt-2.5 max-w-[44ch] text-sm leading-relaxed text-muted-foreground md:mx-0"
            >
              We help you turn more enquiries into booked jobs, follow up faster, and take admin
              off your plate so your calendar stays full.
            </motion.p>

            <motion.p
              {...fade(0.16)}
              className="mx-auto mt-2 max-w-[44ch] text-sm text-muted-foreground md:mx-0"
            >
              Built for tradies, beauty, wellness, auto, allied health and cleaning. No tech skills
              needed — we set it all up for you.
            </motion.p>
          </div>

          {/* RIGHT — lead form + CTAs */}
          <motion.div {...fade(0.1)} id="hero-lead-form" className="w-full">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)]">
              <iframe
                src={HERO_FORM_SRC}
                style={{ width: "100%", height: "330px", border: "none", background: "transparent" }}
                scrolling="yes"
                loading="eager"
                title="Get Booked Out contact form"
              />
            </div>

            <div className="mt-2 grid gap-2">
              <button
                type="button"
                onClick={handlePrimary}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background md:min-h-[50px] md:text-base"
              >
                Show me how to get Booked Out
              </button>
              <button
                type="button"
                onClick={handleSecondary}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background md:min-h-[50px] md:text-base"
              >
                Show me how it works
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
