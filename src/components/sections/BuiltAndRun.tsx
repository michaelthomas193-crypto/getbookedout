import { Wrench, RefreshCw, LineChart } from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Done-for-you setup",
    body: "We set up the AI receptionist, chat, automation and booking system for your trade or service business.",
  },
  {
    icon: RefreshCw,
    title: "Done-for-you changes",
    body: "Need to change hours, questions or pricing? Tell us once, we update all the automations for you.",
  },
  {
    icon: LineChart,
    title: "Ongoing support",
    body: "We monitor performance and tweak scripts and automations so your AI keeps making and saving you money.",
  },
];

const BuiltAndRun = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-10 md:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">Done for you</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          Built and run for you.
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          We design, build and run your whole AI and automation stack for you. You tell us how your business works, we wire the tech and you get a diary full of jobs without touching a thing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

export default BuiltAndRun;
