const steps = [
  {
    n: "01",
    title: "We connect your call and enquiry flows",
    body: "Plug into your existing number, website forms and inbox. No new hardware, no IT headache.",
  },
  {
    n: "02",
    title: "The AI answers, replies and qualifies leads instantly",
    body: "Trained on your services, pricing and FAQs — so it sounds like your business, 24/7.",
  },
  {
    n: "03",
    title: "Jobs book straight into your calendar",
    body: "Confirmed appointments, customer details and full transcripts — sent to you in real time.",
  },
];

const HowItWorks = () => (
  <section className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">How it works</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          From missed calls to booked jobs in 3 simple steps.
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
