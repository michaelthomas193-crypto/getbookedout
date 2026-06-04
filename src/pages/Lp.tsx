import { useEffect } from "react";
import { Phone, Check, ArrowRight, ShieldCheck, Zap, CalendarCheck } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import logo from "@/assets/logo-text.png";
import Proof from "@/components/sections/Proof";
import Problem from "@/components/sections/Problem";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import FAQ from "@/components/sections/FAQ";

const GHL_CALENDAR_ID = "1grlbLaT09ltqgrmm4uj";
const GHL_CALENDAR_SRC = `https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`;
const GHL_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

const BULLETS = [
  "Reply to every lead in under 60 seconds — even at 2am",
  "Book 3-5 extra jobs a week without lifting your phone",
  "Live in 48 hours — done-for-you setup, training & integrations",
  "First-month money-back guarantee. No lock-in. Cancel anytime.",
];

const handleCta = (label: string) => {
  window.gtag?.("event", "cta_click", { label });
  window.fbq?.("track", "Lead", { content_name: label });
  document.getElementById("book-a-call")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const Lp = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return;
    const s = document.createElement("script");
    s.src = GHL_EMBED_SCRIPT;
    s.type = "text/javascript";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SeoHead
        title="Never Miss Another Job — AI Receptionist for AU Service Businesses"
        description="24/7 AI that answers every call, replies in under a minute, and books jobs straight into your calendar. Live in 48 hours. From $499/month. First-month money-back guarantee."
        path="/lp"
        noindex
      />

      {/* Minimal sticky header — logo + phone only. No nav. */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container-padding mx-auto flex h-14 max-w-7xl items-center justify-between md:h-16">
          <img src={logo} alt="Get Booked Out" className="h-6 w-auto md:h-8" />
          <a
            href="tel:0485008132"
            onClick={() => {
              window.gtag?.("event", "cta_click", { label: "lp_header_call" });
              window.fbq?.("track", "Contact");
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground md:gap-2 md:px-4 md:py-2 md:text-sm"
          >
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Call now — </span>0485 008 132
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container-padding mx-auto max-w-7xl py-5 md:py-10 lg:py-12">
          <div className="grid items-start gap-6 md:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] lg:gap-12">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary md:text-xs">
                For Australian service-based businesses
              </p>

              <h1 className="mt-3 text-[1.9rem] font-bold leading-[1.05] tracking-tight text-foreground md:mt-4 md:text-[3.1rem] lg:text-[3.6rem]">
                Never miss another job.
                <br />
                <span className="text-primary">Booked out, on autopilot.</span>
              </h1>

              <p className="mx-auto mt-4 max-w-[54ch] text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
                Our AI receptionist answers every call, replies to every enquiry in under a minute, and books straight into your calendar — 24/7. Live in 48 hours. From $499/month.
              </p>

              <div className="mt-6 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center md:justify-start">
                <button
                  type="button"
                  onClick={() => handleCta("lp_hero_primary_book_call")}
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_14px_40px_-12px_hsl(var(--primary)/0.6)] transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_50px_-12px_hsl(var(--primary)/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-[60px] md:text-lg"
                >
                  Book a 15-min strategy call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="tel:0485008132"
                  onClick={() => {
                    window.gtag?.("event", "cta_click", { label: "lp_hero_secondary_call" });
                    window.fbq?.("track", "Contact");
                  }}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary md:h-[60px] md:text-base"
                >
                  <Phone className="h-4 w-4" />
                  Or call now
                </a>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                No credit card. No lock-in. We'll call you on the dot.
              </p>

              <ul className="mx-auto mt-7 hidden max-w-[48ch] gap-3 md:mx-0 md:grid">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-left">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-foreground md:text-base">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — calendar */}
            <div id="book-a-call" className="w-full scroll-mt-20">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)] md:p-5">
                <h2 className="text-center text-base font-bold text-foreground md:text-left md:text-lg">
                  Pick a time — we'll call you then
                </h2>
                <p className="mt-0.5 text-center text-xs text-muted-foreground md:text-left">
                  15 minutes. No pitch — just straight answers on whether we're a fit.
                </p>
                <div className="mt-3 overflow-hidden rounded-lg bg-background">
                  <iframe
                    src={GHL_CALENDAR_SRC}
                    title="Book a time with Get Booked Out"
                    scrolling="no"
                    id={`${GHL_CALENDAR_ID}_lp_embed`}
                    style={{ width: "100%", minHeight: "720px", border: "none" }}
                    className="block w-full"
                  />
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {[
                  { icon: ShieldCheck, label: "No lock-in contracts" },
                  { icon: Zap, label: "Setup in 48 hours" },
                  { icon: CalendarCheck, label: "First month money-back" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
                  >
                    <Icon className="h-3 w-3 shrink-0 text-primary" />
                    <span className="whitespace-nowrap">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Problem />
      <Proof />
      <HowItWorksSteps />

      {/* Mid-page CTA band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-padding mx-auto max-w-5xl py-12 text-center md:py-16">
          <h2 className="text-2xl font-bold leading-tight md:text-4xl">
            Stop losing jobs to the next business on Google.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85 md:text-lg">
            Book a 15-minute strategy call. We'll show you exactly how much revenue you're leaking — and whether we can plug it.
          </p>
          <button
            type="button"
            onClick={() => handleCta("lp_midpage_book_call")}
            className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-background px-7 text-base font-bold text-foreground shadow-lg hover:translate-y-[-1px] md:h-[60px] md:text-lg"
          >
            Book my strategy call
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <FAQ />

      {/* Final CTA + minimal footer */}
      <section className="bg-background">
        <div className="container-padding mx-auto max-w-5xl py-14 text-center md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ready to get booked out?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Pick a time, jump on a 15-min call, and we'll map it out. If we're not a fit, we'll tell you straight.
          </p>
          <button
            type="button"
            onClick={() => handleCta("lp_final_book_call")}
            className="mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_14px_40px_-12px_hsl(var(--primary)/0.6)] hover:translate-y-[-1px] md:h-[60px] md:text-lg"
          >
            Book my call
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Or call us direct: <a href="tel:0485008132" className="font-semibold text-primary hover:underline">0485 008 132</a>
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="container-padding mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Get Booked Out. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-primary">Privacy</a>
            <a href="/terms" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Lp;
