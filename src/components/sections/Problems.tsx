import { PhoneOff, Timer, UserX, Eye } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Your phone isn't ringing enough.",
    description: "Emergency HVAC replacements require a steady stream of homeowners who need help NOW. Our lead system delivers high-intent prospects actively searching for same-day solutions.",
  },
  {
    icon: Timer,
    title: "Leads go cold before you can respond.",
    description: "Speed wins in emergency HVAC. Our AI qualification and instant routing means you connect with homeowners within minutes, not hours.",
  },
  {
    icon: UserX,
    title: "You're wasting money on tyre-kickers.",
    description: "Every lead is pre-qualified for budget, urgency, and decision-making authority before it hits your calendar. No more wasted site visits.",
  },
  {
    icon: Eye,
    title: "You can't see what's working.",
    description: "Full visibility into your pipeline, lead sources, and ROI. Know exactly which dollars are driving booked jobs.",
  },
];

const Problems = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Sound Familiar?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most HVAC companies struggle with the same challenges. We built GetBookedOut to solve them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
