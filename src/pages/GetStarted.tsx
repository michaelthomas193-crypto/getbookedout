import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const GHL_FORM_ID = "Bs7UvhiUOzhzwBcZlxtm";
const GHL_FORM_SRC = `https://app.gohighlevel.com/v2/preview/${GHL_FORM_ID}`;
const GHL_CALENDAR_SRC =
  "https://api.leadconnectorhq.com/widget/booking/get-booked-out-calendar";

const GetStarted = () => {
  const [step, setStep] = useState<1 | 2>(1);

  // Load GHL embed scripts (form + calendar)
  useEffect(() => {
    const ensureScript = (src: string) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
      }
    };
    ensureScript("https://link.msgsndr.com/js/form_embed.js");
  }, []);

  // Listen for form submission to advance to step 2
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      const d = event.data;
      const isSubmit =
        d?.type === "form-submitted" ||
        d?.event === "form_submit" ||
        d?.formSubmitted ||
        (typeof d === "string" && d.includes("submit"));
      if (isSubmit) {
        if (window.fbq) window.fbq("track", "CompleteRegistration");
        setStep(2);
        // Scroll to top of step 2
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get Started | Get Booked Out</title>
        <meta
          name="description"
          content="Tell us about your business, then book a time that suits you. Quick 2-step setup to get started with Get Booked Out."
        />
        <link rel="canonical" href="https://getbookedout.com.au/get-started" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />

      <main className="container-padding max-w-4xl mx-auto py-8 md:py-12">
        {/* Stepper */}
        <ol className="flex items-center justify-center gap-3 md:gap-6 mb-8">
          <Step n={1} label="Your details" active={step === 1} done={step > 1} />
          <div className="h-px w-10 md:w-16 bg-border" />
          <Step n={2} label="Pick a time" active={step === 2} done={false} />
        </ol>

        {step === 1 && (
          <section aria-labelledby="step1-title">
            <header className="text-center mb-6">
              <h1 id="step1-title" className="text-3xl md:text-4xl font-bold mb-2">
                Let's get you booked out
              </h1>
              <p className="text-muted-foreground">
                Step 1 of 2 — quick details so we know who we're chatting with.
              </p>
            </header>
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <iframe
                src={GHL_FORM_SRC}
                style={{ width: "100%", height: "640px", border: "none" }}
                id={`inline-${GHL_FORM_ID}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Get Booked out contact form"
                data-height="640"
                data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                data-form-id={GHL_FORM_ID}
                title="Get Booked out contact form"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Already submitted?{" "}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-primary font-semibold underline"
              >
                Skip to booking
              </button>
            </p>
          </section>
        )}

        {step === 2 && (
          <section aria-labelledby="step2-title">
            <header className="text-center mb-6">
              <h1 id="step2-title" className="text-3xl md:text-4xl font-bold mb-2">
                Pick a time that suits you
              </h1>
              <p className="text-muted-foreground">
                Step 2 of 2 — grab a slot on our calendar and we'll see you then.
              </p>
            </header>
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <iframe
                src={GHL_CALENDAR_SRC}
                style={{ width: "100%", height: "780px", border: "none" }}
                scrolling="no"
                id="get-booked-out-calendar"
                title="Book a time with Get Booked Out"
              />
              <script
                src="https://link.msgsndr.com/js/form_embed.js"
                type="text/javascript"
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

const Step = ({
  n,
  label,
  active,
  done,
}: {
  n: number;
  label: string;
  active: boolean;
  done: boolean;
}) => (
  <li className="flex items-center gap-2">
    <span
      className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
        done
          ? "bg-primary text-primary-foreground"
          : active
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-muted-foreground"
      }`}
    >
      {done ? <Check className="w-4 h-4" /> : n}
    </span>
    <span
      className={`text-sm font-medium ${active || done ? "text-foreground" : "text-muted-foreground"}`}
    >
      {label}
    </span>
  </li>
);

export default GetStarted;
