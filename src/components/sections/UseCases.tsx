import { Users, Store, UserPlus, ShieldCheck, MessageSquareText, CalendarClock } from "lucide-react";

const cases = [
  {
    icon: Users,
    title: "Service existing customers",
    description: "Answers questions about bookings, hours, pricing, billing, and more — without you lifting a finger.",
  },
  {
    icon: Store,
    title: "Minimise in-store disruptions",
    description: "Handles routine FAQs and only transfers calls to your team when a real human is actually needed.",
  },
  {
    icon: UserPlus,
    title: "Capture every incoming lead",
    description: "Gives prospects the answers they need, books appointments, and sends you the details instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Filter out sales calls & spam",
    description: "Screens and blocks robocalls, 1-800 numbers, and sales reps — only spending time on real customers.",
  },
  {
    icon: MessageSquareText,
    title: "Convert website visitors",
    description: "Turn browsers into leads by letting them text directly from your website — you own the relationship.",
  },
  {
    icon: CalendarClock,
    title: "Cover after-hours calls",
    description: "Answers nights, weekends, and holidays so you book jobs while competitors send callers to voicemail.",
  },
];

const UseCases = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-title mb-4">
            Built for service businesses <span className="text-primary">across every industry</span>
          </h2>
          <p className="section-subtitle">
            Service-based, brick-and-mortar, online, or a mix — Get Booked Out fits the way you actually work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
