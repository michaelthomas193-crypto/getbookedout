const steps = [
  {
    n: "01",
    title: "Quick chat",
    body: "We map out your trade, services and how your phone and bookings work now.",
  },
  {
    n: "02",
    title: "Build",
    body: "We set up your AI receptionist, chat, automation and booking system to match how you actually run jobs.",
  },
  {
    n: "03",
    title: "Run",
    body: "We turn everything on, monitor the AI and adjust scripts and automations as real enquiries come in.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" data-process-steps className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">How it works</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          How our AI gets you booked out.
        </h2>
      </div>

      <ol className="grid md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((s) => (
          <li key={s.n} className="relative rounded-2xl border border-border bg-card p-7">
            <div className="text-5xl font-bold text-primary/20 mb-4 tabular-nums">{s.n}</div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
