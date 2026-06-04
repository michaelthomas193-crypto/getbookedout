import { motion, useReducedMotion } from "framer-motion";
import { Check, ArrowRight, PlayCircle } from "lucide-react";
import LeadFormEmbed from "@/components/LeadFormEmbed";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const BULLETS = [
  "Website, Google rankings & reviews working for you 24/7",
  "Missed-call text-back so no lead ever goes cold",
  "Lead follow-ups & calendar bookings on autopilot",
  "No lock-in. First month money-back.",
];

const HeroSplit = () => {
  const prefersReduced = useReducedMotion();

  const handlePrimary = () => {
    window.gtag?.("event", "cta_click", { label: "hero_primary_get_started" });
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSecondary = () => {
    window.gtag?.("event", "cta_click", { label: "hero_secondary_see_how_it_works" });
    document.getElementById("whats-included")?.scrollIntoView({ behavior: "smooth", block: "start" });
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

      <div className="container-padding mx-auto max-w-7xl py-4 md:py-9 lg:py-12">
        <div className="grid items-start gap-6 md:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(330px,420px)] lg:gap-12">
          {/* LEFT — headline, proof link, CTA, bullets */}
          <div className="text-center md:text-left">
            <motion.p
              {...fade(0)}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary md:text-xs"
            >
              For Australian service-based businesses
            </motion.p>

            <motion.h1
              {...fade(0)}
              className="mt-3 text-[1.85rem] font-bold leading-[1.05] tracking-tight text-foreground md:mt-4 md:text-[3rem] lg:text-[3.5rem]"
            >
              Never miss another job.
              <br />
              <span className="text-primary">Get Booked Out.</span>
              <br />
              <span className="text-primary">On Autopilot.</span>
            </motion.h1>

            <motion.p
              {...fade(0.05)}
              className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg"
            >
              The complete done-for-you growth system for Aussie service businesses. We dial in your website, Google rankings, reviews, missed-call text-backs, lead follow-ups and calendar — so the phone rings, the diary fills, and nothing slips through the cracks.
            </motion.p>

            <motion.div {...fade(0.08)} className="mt-6 flex flex-col items-center gap-4 md:items-start">
              <a
                href="#proof"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("proof")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:text-xs md:text-sm"
              >
                <PlayCircle className="h-4 w-4 shrink-0 text-primary" />
                Watch real client stories
              </a>

              <div className="grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handlePrimary}
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_14px_40px_-12px_hsl(var(--primary)/0.6)] transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_50px_-12px_hsl(var(--primary)/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[60px] md:text-base"
                >
                  Get my strategy call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={handleSecondary}
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary md:h-[60px] md:text-base"
                >
                  See how it works
                </button>
              </div>


              <p className="text-xs text-muted-foreground">
                Drop your details — we'll be in touch shortly. No lock-in.
              </p>
            </motion.div>

            <motion.ul
              {...fade(0.12)}
              className="mt-7 hidden gap-3 md:grid"
            >
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-left">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="whitespace-nowrap text-[14px] font-medium leading-snug text-foreground lg:text-[15px]">
                    {b}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — short lead form */}
          <motion.div {...fade(0.1)} id="hero-form" className="w-full scroll-mt-24">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)] md:p-5">
              <LeadFormEmbed
                title="Stop losing jobs"
                subtitle="Quick chat. No sales pitch — just straight answers."
                height={520}
                showHeader
              />
            </div>

            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {["No lock-in contracts", "First month money-back"].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
                >
                  <Check className="h-3 w-3 shrink-0 text-primary" strokeWidth={3} />
                  <span className="whitespace-nowrap">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
