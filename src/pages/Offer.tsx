import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SeoHead from "@/components/SeoHead";
import { z } from "zod";

const ACCENT = "bg-[hsl(20_95%_55%)] hover:bg-[hsl(20_95%_50%)] text-white";

const formSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  business: z.string().trim().min(1, "Required").max(100),
  trade: z.string().trim().min(1, "Required").max(100),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  website: z.string().trim().max(200).optional().or(z.literal("")),
});

const CTAButton = ({ onClick, children, className = "" }: { onClick: () => void; children: React.ReactNode; className?: string }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center justify-center min-h-[60px] px-8 rounded-xl text-base sm:text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5 ${ACCENT} ${className}`}
  >
    {children}
  </button>
);

const Offer = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) setSubmitted(false);
  }, [open]);

  const openForm = () => setOpen(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      business: String(fd.get("business") || ""),
      trade: String(fd.get("trade") || ""),
      phone: String(fd.get("phone") || ""),
      website: String(fd.get("website") || ""),
    };
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Placeholder submit — wire to CRM/email later
    console.log("offer-form-submit", result.data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[hsl(0_0%_8%)] text-white">
      <SeoHead
        title="Free Website Mock-Up for Australian Trades | Get Booked Out"
        description="Websites built for Australian trades. Win back one job and your website's paid for. Free mock-up — no cost, no obligation."
        path="/offer"
      />

      {/* HERO */}
      <section className="px-5 sm:px-8 pt-10 sm:pt-16 pb-12 max-w-3xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[hsl(20_95%_60%)] mb-5">
          WEBSITES BUILT FOR AUSTRALIAN TRADES
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
          Win Back One Job.<br />Your Website's Paid For.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Homeowners Google you before they call — and an ordinary website costs you work you never know you lost. We build you a site that looks as good as your jobs, with online booking and text-back so nothing slips while you're on the tools.
        </p>

        <div className="mt-8 aspect-video w-full bg-black/40 border border-white/10 rounded-xl flex items-center justify-center text-white/40 text-sm">
          [VSL VIDEO EMBED]
        </div>

        <div className="mt-8 flex flex-col items-center">
          <CTAButton onClick={openForm} className="w-full sm:w-auto">Get My Free Mock-Up</CTAButton>
          <p className="mt-3 text-sm text-white/60">Free to see. No obligation. No credit card.</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-5 sm:px-8 py-14 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black leading-tight">The Jobs You Never Knew You Lost</h2>
        <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
          Phone rings while you're on a job. You miss it. Or a homeowner finds your website, sees something built years ago, and quietly calls the next bloke. You don't get a report for those. No missed-call alert. No email. But every week, good jobs walk out the door — not because of your work, but because of what people find before they ever speak to you.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="px-5 sm:px-8 py-14 bg-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black leading-tight text-center">A Website That Works As Hard As You Do</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: "Looks As Good As Your Work", b: "Your best jobs front and centre. Your reviews where homeowners actually see them. Built to make them pick you over the next quote." },
              { t: "Online Booking", b: "Customers lock you in any time, day or night. No phone tag, no back-and-forth." },
              { t: "Text-Back On Missed Calls", b: "On the tools and can't answer? They get a text straight away. The enquiry stays warm instead of walking." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-lg font-bold">{c.t}</h3>
                <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATHS */}
      <section className="px-5 sm:px-8 py-14 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-black leading-tight">Here's The Maths</h2>
        <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
          For trades doing fifteen, twenty, forty grand a job, the sum is simple. Win back one job you would have lost — one — and your website's paid for. Everything after that is yours. This isn't a cost. It's the cheapest job you'll land all year.
        </p>
        <div className="mt-8">
          <CTAButton onClick={openForm} className="w-full sm:w-auto">Get My Free Mock-Up</CTAButton>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-5 sm:px-8 py-14 bg-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black leading-tight text-center">Sites We've Built</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["[SCREENSHOT 1]", "[SCREENSHOT 2]", "[SCREENSHOT 3]"].map((s) => (
              <div key={s} className="aspect-[4/3] rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-white/40 text-sm">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 sm:px-8 py-14 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black leading-tight text-center">How It Works</h2>
        <div className="mt-10 space-y-6">
          {[
            { n: "1", t: "Request your free mock-up", b: "Tell us your trade and send your current site if you've got one. Takes two minutes." },
            { n: "2", t: "We build it", b: "We design a mock-up of your new website. No charge, no obligation." },
            { n: "3", t: "You decide", b: "Love it? We'll get it live. Not for you? No worries, and no cost." },
          ].map((s) => (
            <div key={s.n} className="flex gap-5 rounded-xl border border-white/10 bg-black/40 p-6">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[hsl(20_95%_55%)] flex items-center justify-center text-xl font-black">{s.n}</div>
              <div>
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-white/75 leading-relaxed">{s.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 py-14 bg-white/[0.03]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black leading-tight text-center">Questions, Answered</h2>
          <Accordion type="single" collapsible className="mt-8">
            {[
              { q: "I'm flat out — how much of my time does this take?", a: "About fifteen minutes on one call. We handle the rest." },
              { q: "What if I already have a website?", a: "Send it through. We'll show you exactly what could be better." },
              { q: "Do I have to pay to see the mock-up?", a: "No. The mock-up is free and there's no obligation to go ahead." },
              { q: "What if I'm not tech-minded?", a: "You don't need to be. We build it, set it up, and look after it." },
              { q: "How long until it's live?", a: "Most sites are live within [TIMEFRAME] of you giving us the go-ahead." },
              { q: "Is there a lock-in contract?", a: "No. No lock-in contract — you're never tied in. You stay because the website's working for you, not because you're stuck." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-white/75 text-base leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 sm:px-8 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-black leading-tight">See What Your Website Could Look Like</h2>
        <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
          No cost. No obligation. Just a mock-up of a site that finally matches the quality of your work.
        </p>
        <div className="mt-8 pb-24 sm:pb-0">
          <CTAButton onClick={openForm} className="w-full sm:w-auto">Get My Free Mock-Up</CTAButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 sm:px-8 py-8 border-t border-white/10 text-sm text-white/60">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-center text-center">
          <span>[BUSINESS NAME]</span>
          <a href="tel:[PHONE NUMBER]" className="hover:text-white">[PHONE NUMBER]</a>
          <span>ABN [ABN]</span>
          <a href="[LINK]" className="hover:text-white">Privacy Policy</a>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[hsl(0_0%_8%)]/95 backdrop-blur border-t border-white/10">
        <CTAButton onClick={openForm} className="w-full">Get My Free Mock-Up</CTAButton>
      </div>

      {/* Form modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[hsl(0_0%_10%)] border-white/10 text-white max-w-md">
          {submitted ? (
            <div className="py-6 text-center">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black text-white">Got it.</DialogTitle>
                <DialogDescription className="text-white/75 mt-2 text-base">
                  We'll be in touch within one business day with your free mock-up.
                </DialogDescription>
              </DialogHeader>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black text-white">Get My Free Mock-Up</DialogTitle>
                <DialogDescription className="text-white/70">Takes two minutes. No cost, no obligation.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                {[
                  { id: "name", label: "Full name", type: "text" },
                  { id: "business", label: "Business name", type: "text" },
                  { id: "trade", label: "Trade", type: "text" },
                  { id: "phone", label: "Phone number", type: "tel" },
                  { id: "website", label: "Current website URL (optional)", type: "url" },
                ].map((f) => (
                  <div key={f.id}>
                    <Label htmlFor={f.id} className="text-white/90">{f.label}</Label>
                    <Input id={f.id} name={f.id} type={f.type} className="mt-1.5 bg-black/40 border-white/15 text-white" />
                    {errors[f.id] && <p className="text-xs text-red-400 mt-1">{errors[f.id]}</p>}
                  </div>
                ))}
                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center min-h-[56px] rounded-xl text-base font-bold ${ACCENT}`}
                >
                  Send My Mock-Up Request
                </button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Offer;
