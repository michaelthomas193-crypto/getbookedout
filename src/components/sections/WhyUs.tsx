import { Zap, ShieldCheck, UserCheck, BadgeDollarSign, BarChart3 } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Speed to Lead",
    description: "Leads routed to you in under 60 seconds. First responder wins.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Qualified Only",
    description: "Budget, urgency, and authority verified before you see it.",
  },
  {
    icon: UserCheck,
    title: "Exclusive Leads",
    description: "Your leads are yours. No sharing with competitors.",
  },
  {
    icon: BadgeDollarSign,
    title: "ROI Guarantee",
    description: "If we don't deliver, you don't pay. Simple.",
  },
  {
    icon: BarChart3,
    title: "Full Visibility",
    description: "Real-time dashboard showing every lead, call, and closed job.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why GetBookedOut
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">The GetBookedOut Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another lead gen company. We're your growth partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.slice(0, 3).map((item, index) => (
            <DifferentiatorCard key={item.title} {...item} index={index} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-4xl mx-auto">
          {differentiators.slice(3).map((item, index) => (
            <DifferentiatorCard key={item.title} {...item} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DifferentiatorCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  index: number;
}) => (
  <div className="group relative p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
);

export default WhyUs;
