import { Zap, CalendarCheck, Star } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster response",
    body: "AI answers calls and enquiries in seconds, so you win more jobs just by replying first.",
  },
  {
    icon: CalendarCheck,
    title: "More jobs from the same enquiries",
    body: "Automated follow-up turns quiet quotes into booked jobs with zero extra effort from you.",
  },
  {
    icon: Star,
    title: "Reviews that bring in work",
    body: "Review automation asks every happy customer and sends only 5-stars to Google, so you show up and stand out.",
  },
];

const Benefits = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-10 md:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">Makes you money</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          How our AI makes you money.
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Every missed call and slow reply is money walking to a competitor. Our AI answers first, books the job and keeps your diary full.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {benefits.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
            <Icon className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
