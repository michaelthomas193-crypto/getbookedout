import { Settings, Zap, Star, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "We Build Your System",
    description: "We set up your landing page, lead capture, booking automation, and review requests. Takes 48 hours. Zero effort from you.",
    color: "#7DD3E8",
  },
  {
    number: "02",
    icon: Zap,
    title: "Leads Start Flowing",
    description: "Every enquiry — phone, web, Facebook — gets answered instantly. Customers book straight into your calendar. Respond in under 5 minutes and you're 21x more likely to win the job.",
    color: "#4BADD4",
  },
  {
    number: "03",
    icon: Star,
    title: "Your Reputation Grows",
    description: "Happy customers automatically get asked for reviews. Your Google rating climbs. More customers find you.",
    color: "#2B8BBF",
  },
  {
    number: "04",
    icon: Calendar,
    title: "You Stay Booked Out",
    description: "Focus on the work. We handle the rest. Watch your schedule fill up and your business grow.",
    color: "#1A6B9A",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title mb-3 md:mb-4">How It Works</h2>
          <p className="section-subtitle">
            We handle the business stuff. You handle the trade.
          </p>
        </div>

        {/* Timeline layout - stacked on mobile */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#7DD3E8] via-[#4BADD4] to-[#1A6B9A]" />
          
          {/* Single column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="p-4 md:p-5 bg-card rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Combined Number + Icon row */}
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative z-10 shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-lg md:text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{step.description}</p>
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