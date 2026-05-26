import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar, Check, MessageSquare, Zap, BellRing } from "lucide-react";
import QuoteFormModal from "@/components/QuoteFormModal";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const HeroSplit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const handlePrimary = () => {
    window.gtag?.("event", "cta_click", { label: "hero_primary_get_booked_out" });
    setModalOpen(true);
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
    <section
      id="hero"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-padding max-w-7xl mx-auto pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* LEFT — 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.p
              {...fade(0)}
              className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              For Australian service-based businesses
            </motion.p>

            <motion.h1
              {...fade(0)}
              className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground text-balance"
            >
              We save you time.
              <br />
              We save you money.
              <br />
              <span className="text-primary">
                We make you more money — so you can focus on what you do best.
              </span>
            </motion.h1>

            <motion.p
              {...fade(0.08)}
              className="mt-6 mx-auto lg:mx-0 max-w-[60ch] text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Get Booked Out builds done-for-you systems that turn more enquiries into booked jobs,
              follow up with every lead automatically, and take the admin off your plate — so your
              calendar stays full and your week stays yours.
            </motion.p>

            <motion.div
              {...fade(0.16)}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={handlePrimary}
                className="inline-flex items-center justify-center min-h-[56px] min-w-[44px] rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background"
              >
                Show me how to get booked out
              </button>
              <button
                type="button"
                onClick={handleSecondary}
                className="inline-flex items-center justify-center min-h-[56px] min-w-[44px] rounded-full border border-border bg-card px-8 text-base font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background"
              >
                See how it works
              </button>
            </motion.div>

            <motion.p
              {...fade(0.24)}
              className="mt-5 text-sm text-muted-foreground max-w-[60ch] mx-auto lg:mx-0"
            >
              Built for tradies, beauty, wellness, auto, allied health and cleaning. No tech skills
              needed. We set it all up for you.
            </motion.p>
          </div>

          {/* RIGHT — 40% */}
          <div className="lg:col-span-2">
            <div className="relative mx-auto w-full max-w-[480px] aspect-[4/5]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      <QuoteFormModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

const HeroVisual = () => (
  <div className="relative h-full w-full">
    <div
      className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-70"
      style={{ background: "radial-gradient(60% 60% at 70% 30%, hsl(var(--primary) / 0.25), transparent 70%)" }}
      aria-hidden
    />
    <div className="relative rounded-3xl border border-border bg-card shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)] overflow-hidden">
      <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-3 bg-gradient-to-b from-muted/40 to-transparent">
        <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Phone className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">Enquiry replied</p>
          <p className="text-xs text-muted-foreground">+61 4·· ··· 218 · 7:42 pm · Mon</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-1 rounded-full">
          Live
        </span>
      </div>

      <div className="px-6 py-5 space-y-3 bg-muted/20">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary text-primary-foreground px-3.5 py-2.5 text-sm max-w-[82%] shadow-sm">
            Hot water system's burst — can someone come first thing tomorrow?
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0">GB</div>
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-3.5 py-2.5 text-sm text-foreground max-w-[82%] shadow-sm">
            Locked in for <span className="font-semibold">Tue 8:30 am</span>. Sending confirmation now.
          </div>
        </div>
      </div>

      <div className="px-6 py-5 bg-gradient-to-br from-emerald-500/8 via-card to-card border-t border-border">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
            <Check className="h-6 w-6 text-white" strokeWidth={3} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Booking confirmed</p>
            <p className="text-base font-bold text-foreground leading-tight">Hot water repair · Tue 8:30 am</p>
            <p className="text-xs text-muted-foreground mt-0.5">Mark · 14 Bayview Rd, Manly</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-border bg-card px-3 py-2.5 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">SMS</p>
              <p className="text-xs font-semibold text-foreground truncate">Sent to customer</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card px-3 py-2.5 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Calendar</p>
              <p className="text-xs font-semibold text-foreground truncate">Synced · Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hidden sm:flex absolute -left-4 top-12 items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
        <Zap className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Reply sent in</p>
        <p className="text-sm font-bold text-foreground">4 seconds</p>
      </div>
    </div>

    <div className="hidden sm:flex absolute -right-3 bottom-8 items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
      <div className="h-9 w-9 rounded-full bg-emerald-500/10 flex items-center justify-center">
        <BellRing className="h-4 w-4 text-emerald-600" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">New job</p>
        <p className="text-sm font-bold text-foreground">+$420 booked</p>
      </div>
    </div>
  </div>
);

export default HeroSplit;
