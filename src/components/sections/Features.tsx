import { MessageSquare, Calendar, Star, Layout, ArrowRight } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Lead Response",
    description: "Answer every inquiry instantly, 24/7. Never lose a lead to slow response times again.",
  },
  {
    icon: Calendar,
    title: "Smart Booking Automation",
    description: "Let customers book directly into your calendar without back-and-forth messaging.",
  },
  {
    icon: Star,
    title: "Review Generator",
    description: "Automatically request 5-star reviews and manage your online reputation effortlessly.",
  },
  {
    icon: Layout,
    title: "High-Converting Landing Pages",
    description: "Get a clean, professional landing page designed to convert visitors into customers.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            One platform, everything you need.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 card-shadow"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
