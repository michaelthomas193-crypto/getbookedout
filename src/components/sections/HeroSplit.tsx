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

      <div className="container-padding mx-auto max-w-7xl py-4 md:py-6 md:[@media(min-height:900px)]:py-12 lg:py-8 lg:[@media(min-height:900px)]:py-16 xl:[@media(min-height:1000px)]:py-20">
        <div className="grid items-start gap-6 md:gap-6 md:[@media(min-height:900px)]:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(330px,420px)] lg:gap-8 lg:[@media(min-height:900px)]:gap-12">
          {/* LEFT — headline, proof link, CTA, bullets */}
          <div className="text-center md:text-left">
            <motion.p
              {...fade(0)}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary md:text-xs"
            >
              AI for service businesses · Australia & USA
            </motion.p>

            <motion.h1
              {...fade(0)}
              className="mt-3 text-[1.85rem] font-bold leading-[1.05] tracking-tight text-foreground md:mt-3 md:[@media(min-height:900px)]:mt-4 md:text-[2.4rem] md:[@media(min-height:900px)]:text-[3rem] lg:text-[2.75rem] lg:[@media(min-height:900px)]:text-[3.5rem] xl:[@media(min-height:1000px)]:text-[3.75rem]"
            >
              Never miss another
              <br />
              <span className="text-primary">job again.</span>
            </motion.h1>

            <motion.p
              {...fade(0.05)}
              className="mx-auto mt-3 md:[@media(min-height:900px)]:mt-4 max-w-[52ch] text-base font-semibold leading-relaxed text-foreground md:mx-0 md:text-base lg:text-lg"
            >
              AI for service businesses that makes you money, saves you money, and is built and run for you.
            </motion.p>

            <motion.p
              {...fade(0.07)}
              className="mx-auto mt-2 md:[@media(min-height:900px)]:mt-3 max-w-[52ch] text-sm md:text-base xl:[@media(min-height:1000px)]:text-lg leading-relaxed text-muted-foreground md:mx-0"
            >
              We use AI receptionists and automation to answer your calls, handle enquiries, and fill your calendar while you stay on the tools.
            </motion.p>

            <motion.div {...fade(0.08)} className="mt-4 md:[@media(min-height:900px)]:mt-6 flex flex-col items-center gap-3 md:[@media(min-height:900px)]:gap-4 md:items-start">
...
              <p className="text-xs text-muted-foreground">
                Drop your details — we'll be in touch shortly. No lock-in.
              </p>
            </motion.div>

            <motion.ul
              {...fade(0.12)}
              className="mt-4 md:[@media(min-height:900px)]:mt-7 hidden gap-2 md:[@media(min-height:900px)]:gap-3 md:grid"
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
