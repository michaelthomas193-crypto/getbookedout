import { Settings, Zap, Star, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "We Build Your System",
    description: "We set up your landing page, lead capture, booking automation, and review requests. Takes 48 hours. Zero effort from you.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Leads Start Flowing",
    description: "Every enquiry — phone, web, Facebook — gets answered instantly. Customers book straight into your calendar.",
  },
  {
    number: "03",
    icon: Star,
    title: "Your Reputation Grows",
    description: "Happy customers automatically get asked for reviews. Your Google rating climbs. More customers find you.",
  },
  {
    number: "04",
    icon: Calendar,
    title: "You Stay Booked Out",
    description: "Focus on the work. We handle the rest. Watch your schedule fill up.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">
            We handle the business stuff. You handle the trade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300 card-shadow h-full">
                {/* Step Number */}
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>

              {/* Connector Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
