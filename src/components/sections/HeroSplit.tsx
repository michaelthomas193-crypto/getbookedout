import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const GHL_FORM_ID = "Bs7UvhiUOzhzwBcZlxtm";
const GHL_SUBMIT_URL = "https://backend.leadconnectorhq.com/forms/submit";

const BULLETS = [
  "Turn more enquiries into booked jobs",
  "Follow up with leads instantly, 24/7",
  "Take admin off your plate",
  "Done-for-you setup — no tech skills needed",
];

const HeroSplit = () => {
  const prefersReduced = useReducedMotion();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || !name.trim() || !phone.trim()) return;
    setSubmitting(true);

    window.gtag?.("event", "generate_lead", { label: "hero_form_submit" });
    window.fbq?.("track", "Lead");

    try {
      const formData = new FormData();
      formData.append("formId", GHL_FORM_ID);
      formData.append("location_id", "");
      formData.append("full_name", name);
      formData.append("phone", phone);
      await fetch(GHL_SUBMIT_URL, { method: "POST", body: formData, mode: "no-cors" });
    } catch {
      // swallow — no-cors hides response anyway
    }

    setSubmitted(true);
    setSubmitting(false);
    setTimeout(() => {
      window.location.href = "/form-thank-you";
    }, 600);
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

      <div className="container-padding mx-auto max-w-7xl py-3 md:py-7 lg:py-9">
        <div className="grid items-start gap-3 md:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(330px,390px)] lg:gap-10">
          {/* LEFT — headline + bullets */}
          <div className="text-center md:text-left md:pr-4">
            <motion.p
              {...fade(0)}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary md:text-xs"
            >
              For Australian service-based businesses
            </motion.p>

            {/* Mobile-only compact headline */}
            <motion.h1
              {...fade(0)}
              className="mt-2 text-[1.65rem] font-bold leading-[1.05] tracking-tight text-foreground md:hidden"
            >
              More jobs. Less admin.{" "}
              <span className="text-primary">Get Booked Out.</span>
            </motion.h1>

            {/* Desktop headline */}
            <motion.h1
              {...fade(0)}
              className="mt-4 hidden text-[2.85rem] font-bold leading-[1.02] tracking-tight text-foreground md:block md:text-[3.2rem] lg:text-[3.6rem]"
            >
              We save you time.
              <br />
              We save you money.
              <br />
              <span className="text-primary">Get Booked Out.</span>
            </motion.h1>

            <motion.ul
              {...fade(0.08)}
              className="mx-auto mt-6 hidden max-w-[42ch] gap-3 md:mx-0 md:grid"
            >
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
            </motion.ul>
          </div>



          {/* RIGHT — short native form + secondary CTA */}
          <motion.div {...fade(0.1)} className="w-full">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-5 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)]"
            >
              <h2 className="text-base font-bold text-foreground md:text-lg">
                Get a free 10-min strategy call
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                No sales pitch. Just a yarn.
              </p>

              <div className="mt-3 grid gap-2.5">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Full name</label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="sr-only">Phone number</label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting || submitted}
                className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-primary bg-primary px-6 text-sm font-semibold leading-none text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background disabled:opacity-70 md:h-[52px] md:text-base"
              >
                {submitted ? "Thanks — redirecting…" : submitting ? "Sending…" : "Show me how to get Booked Out"}
              </button>

              <button
                type="button"
                onClick={handleSecondary}
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold leading-none text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[3px] focus-visible:ring-offset-background md:h-[52px] md:text-base"
              >
                Show me how it works
              </button>
            </form>

            <ul className="mt-4 grid grid-cols-3 gap-2 text-center">
              {["No lock-in contracts", "Setup in 48 hours", "Cancel anytime"].map((t) => (
                <li
                  key={t}
                  className="flex items-center justify-center gap-1.5 rounded-full border border-border bg-card/60 px-2 py-1.5 text-[11px] font-medium text-muted-foreground"
                >
                  <Check className="h-3 w-3 shrink-0 text-primary" strokeWidth={3} />
                  <span className="truncate">{t}</span>
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
