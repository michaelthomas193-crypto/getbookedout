import { PhoneOff, TrendingDown, Clock4, Sparkles } from "lucide-react";

const stats = [
  {
    icon: PhoneOff,
    emoji: "📵",
    value: "85%",
    label: "of callers won't leave a voicemail — they ring your competitor instead",
    source: "Forbes / Marchex caller-behaviour research",
  },
  {
    icon: TrendingDown,
    emoji: "💸",
    value: "$26K+",
    label: "in lost revenue per year for the average small business from missed calls",
    source: "SkipCalls industry report, 2026",
  },
  {
    icon: Clock4,
    emoji: "⏱️",
    value: "15+ hrs",
    label: "a week handed back to owners by automating call answering & follow-up",
    source: "AI receptionist productivity benchmarks",
  },
  {
    icon: Sparkles,
    emoji: "✨",
    value: "24/7",
    label: "every call answered — nights, weekends, public holidays, all included",
    source: "Get Booked Out service guarantee",
  },
];

const StatsBar = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Soft glow accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="container-padding max-w-7xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
            By the numbers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight leading-tight">
            The cost of every missed call adds up <span className="italic">fast</span>
          </h2>
          <p className="text-primary-foreground/80 mt-4 text-base md:text-lg">
            Independent industry data on what unanswered calls quietly cost small businesses every year.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group relative flex flex-col items-start text-left p-6 md:p-7 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/95 text-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="text-2xl" aria-hidden>{s.emoji}</span>
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight mb-3">
                  {s.value}
                </div>
                <p className="text-primary-foreground/90 text-sm md:text-[15px] font-medium leading-snug">
                  {s.label}
                </p>
                <p className="text-primary-foreground/55 text-[11px] mt-3 italic">
                  {s.source}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
