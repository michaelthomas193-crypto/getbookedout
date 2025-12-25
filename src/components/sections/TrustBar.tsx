import { TrendingUp, Clock, Target, DollarSign } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Leads Delivered Monthly",
  },
  {
    icon: Clock,
    value: "7",
    label: "Days to First Booked Job",
  },
  {
    icon: Target,
    value: "68%",
    label: "Average Close Rate",
  },
  {
    icon: DollarSign,
    value: "$2.4M",
    label: "Revenue Generated",
  },
];

const TrustBar = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-secondary/50 border-y border-border/50">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
