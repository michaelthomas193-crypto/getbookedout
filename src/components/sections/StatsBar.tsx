const stats = [
  {
    value: "85%",
    label: "of callers won't leave a voicemail — they ring your competitor instead",
    source: "Forbes / Marchex caller-behaviour research",
  },
  {
    value: "$26K+",
    label: "in lost revenue per year for the average small business from missed calls",
    source: "SkipCalls industry report, 2026",
  },
  {
    value: "15+ hrs",
    label: "a week handed back to owners by automating call answering & follow-up",
    source: "AI receptionist productivity benchmarks",
  },
  {
    value: "24/7",
    label: "every call answered — nights, weekends, public holidays, all included",
    source: "Get Booked Out service guarantee",
  },
];

const StatsBar = () => {
  return (
    <section className="py-14 md:py-20 bg-primary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
            The cost of every missed call adds up fast
          </h2>
          <p className="text-primary-foreground/80 mt-3 text-sm md:text-base">
            Independent industry data on what unanswered calls are quietly costing small businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 tracking-tight">
                {s.value}
              </div>
              <p className="text-primary-foreground/90 text-sm md:text-[15px] font-medium leading-snug max-w-[240px]">
                {s.label}
              </p>
              <p className="text-primary-foreground/55 text-[11px] mt-2 italic max-w-[220px]">
                {s.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
