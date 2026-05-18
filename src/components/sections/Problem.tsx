import { PhoneOff, Clock, MoonStar, FileWarning } from "lucide-react";

const pains = [
  {
    icon: PhoneOff,
    title: "Missed calls become lost jobs",
    body: "Every call you can't answer is a customer ringing the next business on Google.",
  },
  {
    icon: Clock,
    title: "Slow replies kill hot leads",
    body: "Most enquiries go cold within 5 minutes. By the time you reply, they've already booked someone else.",
  },
  {
    icon: MoonStar,
    title: "After hours = silent revenue leak",
    body: "Nights, weekends and public holidays — that's when your competitors are booking your jobs.",
  },
  {
    icon: FileWarning,
    title: "Admin chaos blows out your day",
    body: "Voicemails, callbacks, follow-ups, no-shows. Hours wasted every week on work that doesn't pay.",
  },
];

const Problem = () => (
  <section className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">The cost of a missed call</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          Missed calls are costing you jobs you already paid to win.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {pains.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
