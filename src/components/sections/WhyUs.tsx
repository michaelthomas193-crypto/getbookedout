import { Wrench, CheckCircle, Unlock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Built For Busy Businesses",
    description: "We're not a generic CRM. Every feature is built specifically for service businesses like yours.",
    color: "#2E86C1", // blue - trust/reliability
  },
  {
    icon: CheckCircle,
    title: "Done-For-You Setup",
    description: "No tech skills required. We set everything up for you. You just start getting leads.",
    color: "#27AE60", // green - ease/go
  },
  {
    icon: Unlock,
    title: "No Lock-In Contracts",
    description: "Month-to-month. Cancel anytime. We earn your business every single month.",
    color: "#8E44AD", // purple - freedom/flexibility
  },
  {
    icon: TrendingUp,
    title: "See Real ROI",
    description: "Track exactly which leads become jobs. Know your numbers. Grow with confidence.",
    color: "#E67E22", // orange - money/results
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
              className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-shadow"
              style={{ borderTopColor: reason.color, borderTopWidth: '3px' }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: reason.color }}
              >
                <reason.icon className="w-8 h-8 text-white" />
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
