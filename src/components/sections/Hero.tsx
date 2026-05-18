import { ArrowRight, Phone, Calendar, Check, MessageSquare, PhoneCall, Zap, CalendarCheck, BellRing } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const goGetStarted = () => {
    navigate("/get-started");
    window.setTimeout(() => {
      if (window.location.pathname !== "/get-started") {
        window.location.assign("/get-started");
      }
    }, 120);
  };

  const goDemo = () => navigate("/schedule-demo");

  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-padding max-w-7xl mx-auto pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              New · 24/7 AI Receptionist
            </span>

            <h1 className="mt-5 text-[36px] sm:text-5xl lg:text-[62px] font-bold leading-[1.03] tracking-tight text-foreground">
              Never Miss a Call.
              <br />
              <span className="text-primary">Never Miss a Job.</span>
            </h1>

            <p className="mt-5 mx-auto lg:mx-0 max-w-[560px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              AI receptionist for Australian service businesses that answers every call, replies instantly, and books jobs 24/7.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={goGetStarted}
                className="inline-flex items-center justify-center gap-2 min-h-[56px] rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goDemo}
                className="inline-flex items-center justify-center min-h-[56px] rounded-full border border-border bg-card px-8 text-base font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all"
              >
                Book a Demo
              </button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              From <span className="font-semibold text-foreground">$99/week</span> · No lock-in contracts
            </p>

            {/* Proof chip row */}
            <ul className="mt-7 flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                { icon: PhoneCall, label: "Answers every call" },
                { icon: Zap, label: "Replies in seconds" },
                { icon: CalendarCheck, label: "Books into your calendar" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroVisual = () => (
  <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none lg:ml-auto py-10 md:py-14">
    {/* glow */}
    <div
      className="absolute -inset-8 rounded-[2.5rem] blur-3xl opacity-70"
      style={{ background: "radial-gradient(60% 60% at 70% 30%, hsl(var(--primary) / 0.25), transparent 70%)" }}
      aria-hidden
    />

    {/* MAIN CARD */}
    <div className="relative rounded-3xl border border-border bg-card shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.35)] overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-3 bg-gradient-to-b from-muted/40 to-transparent">
        <div className="relative h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Phone className="h-5 w-5 text-primary" />
          <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 animate-ping" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">Incoming call answered</p>
          <p className="text-xs text-muted-foreground">+61 4·· ··· 218 · 7:42 pm · Mon</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2 py-1 rounded-full inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      {/* Conversation */}
      <div className="px-6 py-5 space-y-3 bg-muted/20">
        <div className="flex gap-2 items-start">
          <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0">AI</div>
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-3.5 py-2.5 text-sm text-foreground max-w-[82%] shadow-sm">
            Hi, you've reached Get Booked Out. How can I help today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary text-primary-foreground px-3.5 py-2.5 text-sm max-w-[82%] shadow-sm">
            Hot water system's burst — can someone come first thing tomorrow?
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0">AI</div>
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-3.5 py-2.5 text-sm text-foreground max-w-[82%] shadow-sm">
            Locked in for <span className="font-semibold">Tue 8:30 am</span>. Sending confirmation now.
          </div>
        </div>
      </div>

      {/* Booking confirmed — dominant outcome */}
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

    {/* Floating proof card — reply time */}
    <div className="hidden sm:flex absolute -left-6 top-16 items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
        <Zap className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Reply sent in</p>
        <p className="text-sm font-bold text-foreground">4 seconds</p>
      </div>
    </div>

    {/* Floating proof card — job booked */}
    <div className="hidden sm:flex absolute -right-4 bottom-10 items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
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

export default Hero;
