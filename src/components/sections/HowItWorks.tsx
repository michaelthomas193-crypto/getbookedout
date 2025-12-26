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
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">
            We handle the business stuff. You handle the trade.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#7DD3E8] via-[#2B8BBF] to-[#1A6B9A] rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="p-6 bg-card rounded-xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-shadow h-full flex flex-col">
                  {/* Step Number - large and prominent */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0 relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                </div>

                {/* Arrow connector - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-4 z-20 w-8 h-8 bg-muted-foreground/20 rounded-full items-center justify-center">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
