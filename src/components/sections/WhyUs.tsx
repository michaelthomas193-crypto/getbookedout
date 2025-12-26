import { Wrench, CheckCircle, Unlock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Built For Tradies",
    description: "We're not a generic CRM. Every feature is built specifically for service businesses like yours.",
  },
  {
    icon: CheckCircle,
    title: "Done-For-You Setup",
    description: "No tech skills required. We set everything up for you. You just start getting leads.",
  },
  {
    icon: Unlock,
    title: "No Lock-In Contracts",
    description: "Month-to-month. Cancel anytime. We earn your business every single month.",
  },
  {
    icon: TrendingUp,
    title: "See Real ROI",
    description: "Track exactly which leads become jobs. Know your numbers. Grow with confidence.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Not convinced we're better than doing it yourself?
          </h2>
          <p className="section-subtitle">Read on.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 card-shadow"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
