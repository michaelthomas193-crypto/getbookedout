import { Wallet, Clock, BellRing } from "lucide-react";

const items = [
  {
    icon: Wallet,
    title: "No extra wages",
    body: "AI receptionists answer and book jobs without sick days, penalties or overtime.",
  },
  {
    icon: Clock,
    title: "Less admin time",
    body: "Automation sends quotes, reminders and follow-ups automatically, freeing up hours each week.",
  },
  {
    icon: BellRing,
    title: "Fewer no-shows and cancellations",
    body: "Reminder and confirmation messages keep customers on track, so you're not wasting time on empty slots.",
  },
];

const OfferInclusions = () => (
  <section id="whats-included" className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-10 md:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">Saves you money</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          How our AI saves you money.
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Instead of paying for extra office staff, our AI handles admin, follow-up and booking, so you only pay one flat fee while the work gets done for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6">
            <Icon className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfferInclusions;
