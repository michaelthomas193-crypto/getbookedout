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
  "AI receptionist answers every call and books the job",
  "AI chat handles website, Facebook and Instagram enquiries 24/7",
  "Automation follows up, sends reminders and chases reviews",
  "Built and run for you. No lock-in.",
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

      <div className="container-padding mx-auto max-w-7xl py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="grid items-center gap-8 md:gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,400px)] lg:gap-14">
          {/* LEFT — headline, proof link, CTA, bullets */}
          <div className="text-center md:text-left">
            <motion.p
              {...fade(0)}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary md:text-xs"
            >
              AI for service businesses · Australia & USA
            </motion.p>

            <motion.h1
              {...fade(0)}
              style={{ fontSize: "clamp(2.5rem, 6.8vw, 5.75rem)", lineHeight: 0.95, letterSpacing: "-0.035em" }}
              className="mt-4 md:mt-6 font-extrabold tracking-tight text-foreground"
            >
              Never miss
              <br />
              another
              <br />
              <span className="text-primary">job again.</span>
            </motion.h1>

            <motion.p
              {...fade(0.05)}
              style={{ fontSize: "clamp(1rem, 1.35vw, 1.25rem)" }}
              className="mx-auto mt-6 md:mt-8 max-w-[52ch] font-semibold leading-relaxed text-foreground md:mx-0"
            >
              AI for service businesses that makes you money, saves you money, and is built and run for you.
            </motion.p>

            <motion.p
              {...fade(0.07)}
              className="mx-auto mt-3 max-w-[54ch] text-sm md:text-base leading-relaxed text-muted-foreground/90 md:mx-0"
            >
              We use AI receptionists and automation to answer your calls, handle enquiries, and fill your calendar while you stay on the tools.
            </motion.p>

            <motion.ul
              {...fade(0.12)}
              className="mt-8 hidden gap-2.5 md:grid"
            >
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-left">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-foreground lg:text-[15px]">
                    {b}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fade(0.14)} className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground md:justify-start">
              <span className="font-medium text-foreground/80">★★★★★ 5.0 from clients</span>
              <span>No lock-in</span>
              <span>First month money-back</span>
            </motion.div>
          </div>

          {/* RIGHT — short lead form */}
          <motion.div {...fade(0.1)} id="hero-form" className="w-full scroll-mt-24 md:self-center">
            <div className="rounded-2xl border border-border bg-card p-3 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)] md:p-4">
              <LeadFormEmbed
                title="Stop losing jobs"
                subtitle="Quick chat. No sales pitch."
                height={460}
                showHeader
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
