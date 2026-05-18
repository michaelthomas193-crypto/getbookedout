import { ArrowRight, Phone, Calendar, Check, MessageSquare } from "lucide-react";
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
    <section
      id="hero"
      className="relative overflow-hidden bg-background"
    >
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-padding max-w-7xl mx-auto pt-10 pb-12 md:pt-20 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              New · 24/7 AI Receptionist
            </span>

            <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[60px] font-bold leading-[1.05] tracking-tight text-foreground">
              Never Miss a Call.
              <br />
              <span className="text-primary">Never Miss a Job.</span>
            </h1>

            <p className="mt-5 mx-auto lg:mx-0 max-w-[540px] text-lg md:text-xl text-muted-foreground leading-relaxed">
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
          </div>

          {/* RIGHT — single clean visual */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroVisual = () => (
  <div className="relative mx-auto max-w-[480px]">
    <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] blur-2xl" aria-hidden />
    <div className="relative rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
      {/* Top: call answered */}
      <div className="px-6 pt-6 pb-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5 text-primary" />
            <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 animate-ping" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Incoming call answered</p>
            <p className="text-xs text-muted-foreground">+61 4·· ··· 218 · 7:42 pm</p>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
        </div>
      </div>

      {/* Middle: conversation */}
      <div className="px-6 py-5 space-y-3 bg-muted/30">
        <div className="flex gap-2 items-start">
          <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0">AI</div>
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-3.5 py-2.5 text-sm text-foreground max-w-[80%]">
            Hi, you've reached Get Booked Out. How can I help today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary text-primary-foreground px-3.5 py-2.5 text-sm max-w-[80%]">
            Need a hot water system repaired tomorrow morning.
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shrink-0">AI</div>
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-3.5 py-2.5 text-sm text-foreground max-w-[80%]">
            Got it — booking you in for 8:30am tomorrow. Confirmation on its way.
          </div>
        </div>
      </div>

      {/* Bottom: booking confirmed */}
      <div className="px-6 py-4 border-t border-border bg-card flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
          <Check className="h-5 w-5 text-emerald-600" strokeWidth={3} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> Job booked · Tue 8:30 am
          </p>
          <p className="text-xs text-muted-foreground truncate">Added to your calendar · SMS sent to customer</p>
        </div>
      </div>
    </div>

    {/* floating badge */}
    <div className="hidden sm:flex absolute -left-6 -bottom-6 items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
        <MessageSquare className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">Reply sent</p>
        <p className="text-sm font-semibold text-foreground">in 4 seconds</p>
      </div>
    </div>
  </div>
);

export default Hero;
