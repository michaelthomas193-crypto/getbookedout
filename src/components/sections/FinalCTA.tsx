import { Check } from "lucide-react";
import LeadFormEmbed from "@/components/LeadFormEmbed";

const FinalCTA = () => {
  const bulletPoints = [
    "10 minutes. No sales pitch.",
    "We'll show you exactly where you're losing jobs",
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 md:mb-6">
              Got 10 Minutes?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Stop Losing Jobs to
              <br />
              <span className="text-primary">Missed Calls</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Home service businesses miss up to 62% of their calls. How many are you losing?
            </p>
            
            <div className="space-y-3 md:space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
            <LeadFormEmbed 
              title="Quick Chat — No Pressure" 
              subtitle="Fill out the form and we'll be in touch."
              className="relative"
              height={650}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;