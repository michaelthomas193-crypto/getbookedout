import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Star, Sparkles, Plug, Bot, CalendarClock } from "lucide-react";
import videoThumbnail from "@/assets/hero-video-thumbnail.png.asset.json";
import LeadFormEmbed from "@/components/LeadFormEmbed";
import { supabase } from "@/integrations/supabase/client";

const HERO_VIDEO_PATH = "hero-video.mp4";

/**
 * Standalone paid-traffic landing page ported from the "GBO Booked Out" project.
 * Route: /landingpage
 * Intentionally independent of the main site nav. Self-contained dark theme
 * scoped under `.gbo-landing` so global light theme is untouched.
 */

const MAIN_SITE = "https://www.getbookedout.com.au";
const CTA = "Get Started";
const FORM_ANCHOR = "#book";

const SCOPED_STYLES = `
.gbo-landing {
  --gl-bg: oklch(0.16 0.02 270);
  --gl-fg: oklch(0.98 0.005 270);
  --gl-card: oklch(0.21 0.025 270);
  --gl-muted-fg: oklch(0.72 0.02 270);
  --gl-border: oklch(1 0 0 / 0.08);
  --gl-primary: oklch(0.58 0.24 295);
  --gl-primary-fg: oklch(0.99 0 0);
  --gl-accent: oklch(0.62 0.2 255);
  --gl-success: oklch(0.72 0.17 155);
  --gl-gradient-primary: linear-gradient(135deg, oklch(0.58 0.24 295), oklch(0.62 0.2 255));
  --gl-gradient-hero:
    radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.58 0.24 295 / 0.35), transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 30%, oklch(0.62 0.2 255 / 0.25), transparent 60%),
    radial-gradient(ellipse 50% 40% at 10% 70%, oklch(0.55 0.22 280 / 0.2), transparent 60%);
  --gl-shadow-glow: 0 0 60px -10px oklch(0.62 0.2 255 / 0.5);
  --gl-shadow-elegant: 0 20px 60px -20px oklch(0.1 0.02 270 / 0.8);
  --gl-shadow-card: 0 8px 32px -8px oklch(0.1 0.02 270 / 0.6);
  background-color: var(--gl-bg);
  color: var(--gl-fg);
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
.gbo-landing h1, .gbo-landing h2, .gbo-landing h3, .gbo-landing h4 {
  font-family: 'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -0.02em;
}
.gbo-landing .gl-text-gradient {
  background: var(--gl-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gbo-landing .gl-bg-gradient { background-image: var(--gl-gradient-primary); }
.gbo-landing .gl-bg-hero { background-image: var(--gl-gradient-hero); }
.gbo-landing .gl-shadow-glow { box-shadow: var(--gl-shadow-glow); }
.gbo-landing .gl-shadow-elegant { box-shadow: var(--gl-shadow-elegant); }
.gbo-landing .gl-shadow-card { box-shadow: var(--gl-shadow-card); }
.gbo-landing .gl-card { background-color: var(--gl-card); }
.gbo-landing .gl-border { border-color: var(--gl-border); }
.gbo-landing .gl-muted { color: var(--gl-muted-fg); }
.gbo-landing .gl-accent { color: var(--gl-accent); }
.gbo-landing .gl-success { color: var(--gl-success); }
.gbo-landing .gl-primary-fg { color: var(--gl-primary-fg); }
@keyframes gl-pulse-glow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
.gbo-landing .gl-animate-pulse-glow { animation: gl-pulse-glow 4s ease-in-out infinite; }
.gbo-landing .gl-grid-bg {
  background-image:
    linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse at top, black, transparent 70%);
          mask-image: radial-gradient(ellipse at top, black, transparent 70%);
}
`;

const TESTIMONIALS = [
  {
    name: "Jason M.",
    type: "Plumbing — Brisbane QLD",
    quote:
      "We were missing 4-5 calls a day. Now every single one gets answered and most are booked in before I'm off the tools.",
    outcome: "+38 jobs booked in month 1",
    initials: "JM",
  },
  {
    name: "Sarah K.",
    type: "Beauty Salon — Melbourne VIC",
    quote:
      "Our Instagram DMs used to sit for hours. Get Booked Out replies in seconds and the calendar just fills itself.",
    outcome: "Calendar 92% utilised",
    initials: "SK",
  },
  {
    name: "Dean R.",
    type: "Electrical — Sydney NSW",
    quote:
      "Best money I've spent in business. The AI follows up better than any receptionist I've ever hired.",
    outcome: "3.4x ROI on Meta Ads",
    initials: "DR",
  },
  {
    name: "Amelia T.",
    type: "Mobile Mechanic — Perth WA",
    quote:
      "I sleep better knowing nothing falls through the cracks. Quotes go out the same day, every day.",
    outcome: "$47k extra revenue Q1",
    initials: "AT",
  },
];

function useParallax(speed: number) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);
  return ref;
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Get Booked Out">
      <span className="text-lg font-bold tracking-tight">
        Get <span className="gl-text-gradient">Booked</span> Out
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b gl-border bg-[oklch(0.16_0.02_270/0.7)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <a
          href={MAIN_SITE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border gl-border bg-[oklch(0.21_0.025_270/0.6)] px-3 py-1.5 text-xs font-medium transition hover:border-[oklch(0.58_0.24_295/0.6)] sm:px-4 sm:py-2 sm:text-sm"
        >
          Visit Main Website
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function CtaButton({
  children,
  size = "lg",
  variant = "primary",
  href = FORM_ANCHOR,
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "ghost";
  href?: string;
}) {
  const sizeCls = size === "lg" ? "px-[1.7rem] py-[0.97rem] text-[0.97rem]" : "px-5 py-3 text-sm";
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full border gl-border bg-[oklch(0.21_0.025_270/0.4)] font-semibold transition hover:border-[oklch(0.58_0.24_295/0.6)] ${sizeCls}`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full gl-bg-gradient font-semibold gl-primary-fg gl-shadow-glow transition hover:-translate-y-0.5 ${sizeCls}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function Hero() {
  const gridRef = useParallax(0.3);
  const glowRef = useParallax(-0.15);
  const videoWrapRef = useParallax(-0.08);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase.storage
      .from("video-uploads")
      .createSignedUrl(HERO_VIDEO_PATH, 60 * 60 * 24 * 365)
      .then(({ data }) => {
        if (!cancelled && data?.signedUrl) setVideoUrl(data.signedUrl);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden gl-bg-hero">
      <div ref={gridRef} className="pointer-events-none absolute inset-0 will-change-transform gl-grid-bg" />
      <div className="relative mx-auto max-w-5xl px-4 pb-6 pt-6 text-center sm:px-6 sm:pb-8 sm:pt-8">
        <h1 className="mt-3 text-[2.7rem] font-bold leading-[1.05] tracking-tight sm:mt-4 sm:text-[3.6rem] md:text-[4.5rem]">
          Never Miss Another <br className="hidden sm:block" />
          <span className="gl-text-gradient">Job</span> Again
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] gl-muted sm:mt-5 sm:text-[1.0625rem]">
          The complete done-for-you system that answers enquiries, follows up leads, books
          appointments and keeps your calendar full.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <CtaButton>{CTA}</CtaButton>
          <div className="flex items-center gap-1.5 text-sm gl-muted">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[oklch(0.58_0.24_295)] text-[oklch(0.58_0.24_295)]" />
              ))}
            </div>
            5.0 Rating
          </div>
        </div>

        <div ref={videoWrapRef} className="relative mx-auto mt-4 w-full max-w-[900px] will-change-transform">
          <div ref={glowRef} className="absolute -inset-3 -z-10 rounded-3xl gl-bg-gradient opacity-30 blur-2xl gl-animate-pulse-glow will-change-transform" />
          <div className="relative aspect-video overflow-hidden rounded-2xl border gl-border gl-card gl-shadow-elegant">
            <video
              src={videoUrl ?? undefined}
              poster={videoThumbnail.url}
              title="Get Booked Out Strategy Video"
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider gl-accent">Social Proof</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Real Businesses. <span className="gl-text-gradient">Real Results.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {[
            { src: "/testimonials/joe-trades2you.mp4", name: "Joe", role: "Trades2You", initial: "J" },
            { src: "/testimonials/client-2.mp4", name: "Lili", role: "Suite 3 hair in Paddington", initial: "L" },
            { src: "/testimonials/sheen.mp4", name: "Sheen", role: "Sheen Hair Salon", initial: "S" },
          ].map((v) => (
            <figure
              key={v.src}
              className="flex flex-col rounded-2xl border gl-border gl-card overflow-hidden gl-shadow-card transition hover:border-[oklch(0.58_0.24_295/0.4)]"
            >
              <video
                src={v.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-[420px] bg-black object-cover"
              />
              <figcaption className="flex items-center gap-3 p-5 border-t gl-border">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full gl-bg-gradient text-sm font-bold gl-primary-fg">
                  {v.initial}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold text-sm">{v.name}</div>
                  <div className="truncate text-xs gl-muted">{v.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Plug, title: "Connect", body: "Connect your existing phone number, website and enquiries." },
    { icon: Bot, title: "Automate", body: "The AI answers, replies and qualifies leads instantly." },
    { icon: CalendarClock, title: "Get Booked", body: "Appointments book directly into your calendar." },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider gl-accent">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            From Missed Calls To <span className="gl-text-gradient">Booked Jobs</span> In Three Steps
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[oklch(0.58_0.24_295/0.4)] to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border gl-border gl-card p-7 text-center gl-shadow-card">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gl-bg-gradient gl-shadow-glow">
                <s.icon className="h-7 w-7 gl-primary-fg" />
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider gl-muted">Step {i + 1}</div>
              <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm gl-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton>{CTA}</CtaButton>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 gl-bg-hero" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Ready To Stop Losing Jobs To <br className="hidden sm:block" />
          <span className="gl-text-gradient">Missed Calls?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base gl-muted sm:text-lg">
          Book a free strategy call and see exactly how Get Booked Out can help your business
          generate more bookings automatically.
        </p>

        {/* Connect CTA to existing GBO enquiry form / GHL integration */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border gl-border gl-card p-4 gl-shadow-elegant sm:p-6">
          <LeadFormEmbed
            title="Speak with our team"
            subtitle="Leave your details and we'll be in touch."
            height={520}
          />
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm gl-muted">
          {["No lock-in contracts", "First month money-back", "Setup in under a week"].map((t) => (
            <li key={t} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 gl-success" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t gl-border bg-[oklch(0.21_0.025_270/0.4)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-sm gl-muted">
              AI lead automation for Australian service businesses. Answer every enquiry. Book every job.
            </p>
            <p className="mt-3 text-sm gl-muted">
              Questions? Call{" "}
              <a className="hover:gl-accent" href="tel:+61485008132">0485 008 132</a>{" "}
              ·{" "}
              <a className="hover:gl-accent" href="mailto:bookings@getbookedout.com.au">
                bookings@getbookedout.com.au
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm gl-muted md:justify-end">
            <a href={MAIN_SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white">Website</a>
            <a href={`${MAIN_SITE}/privacy`} target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy Policy</a>
            <a href={`${MAIN_SITE}/terms`} target="_blank" rel="noopener noreferrer" className="hover:text-white">Terms & Conditions</a>
          </nav>
        </div>
        <div className="mt-8 border-t gl-border pt-6 text-xs gl-muted">
          © {new Date().getFullYear()} Get Booked Out. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Get Booked Out — Never Miss Another Job Opportunity Again</title>
        <meta
          name="description"
          content="AI-powered lead automation for Australian service businesses. Answer enquiries, follow up leads and book jobs automatically. Book your free strategy call."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <style>{SCOPED_STYLES}</style>
      </Helmet>
      <div className="gbo-landing min-h-screen">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <HowItWorks />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
