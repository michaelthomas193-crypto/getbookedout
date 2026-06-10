import { Phone, MessageCircle, Repeat, Settings2 } from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "AI receptionist answers missed calls",
    body: "Picks up when you can't, books jobs and sends you the details.",
  },
  {
    icon: MessageCircle,
    title: "AI chat across web and socials",
    body: "Handles website, Facebook and Instagram enquiries 24/7 so you stop losing jobs while you're on the tools.",
  },
  {
    icon: Repeat,
    title: "Automation that does the chasing",
    body: "Follows up every enquiry, sends reminders and chases reviews without you hiring office staff.",
  },
  {
    icon: Settings2,
    title: "Built and run for you",
    body: "We build and run everything for you in GoHighLevel and LeadConnector, so you don't have to learn another system.",
  },
];

const Problem = () => (
  <section className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-10 md:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">What we do</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          AI that runs the boring stuff for you.
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Get Booked Out is a done-for-you AI and automation service for tradies and local service businesses. We plug in AI receptionists, smart messaging and booking systems so every enquiry is answered, followed up and booked without you touching a screen.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {items.map(({ icon: Icon, title, body }) => (
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
