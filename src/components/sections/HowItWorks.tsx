import { Settings, Zap, Star, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "We Build Your System",
    description: "We set up your landing page, lead capture, booking automation, and review requests. Takes 48 hours. Zero effort from you.",
    color: "#7DD3E8", // light sky blue
  },
  {
    number: "02",
    icon: Zap,
    title: "Leads Start Flowing",
    description: "Every enquiry — phone, web, Facebook — gets answered instantly. Customers book straight into your calendar.",
    color: "#4BADD4", // medium blue
  },
  {
    number: "03",
    icon: Star,
    title: "Your Reputation Grows",
    description: "Happy customers automatically get asked for reviews. Your Google rating climbs. More customers find you.",
    color: "#2B8BBF", // deeper blue
  },
  {
    number: "04",
    icon: Calendar,
    title: "You Stay Booked Out",
    description: "Focus on the work. We handle the rest. Watch your schedule fill up and your business grow.",
    color: "#1A6B9A", // rich navy blue
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">
            We handle the business stuff. You handle the trade.
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#7DD3E8] via-[#4BADD4] to-[#1A6B9A]" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step card - compact */}
                <div className="p-5 bg-card rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Combined Number + Icon row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center relative z-10 shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
