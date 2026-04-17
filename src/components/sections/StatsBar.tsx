const stats = [
  { value: "24/7", label: "Always-on call answering" },
  { value: "<3s", label: "Average response time" },
  { value: "100%", label: "Calls captured & logged" },
  { value: "$0", label: "Spent on missed-call follow-ups" },
];

const StatsBar = () => {
  return (
    <section className="py-14 md:py-20 bg-primary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2 tracking-tight">
                {s.value}
              </div>
              <p className="text-primary-foreground/80 text-sm md:text-base font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
