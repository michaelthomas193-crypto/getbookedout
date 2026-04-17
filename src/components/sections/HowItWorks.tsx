import { Globe, Settings2, PhoneForwarded } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Add your website to train it.",
    description: "Our AI automatically learns your business hours, services, pricing, and FAQs in seconds — straight from your website or Google Business Profile.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Review and customise your information.",
    description: "Confirm key business details, customise your greeting, add specific FAQs, and turn on spam filtering. Then test your AI with a real call before going live.",
  },
  {
    number: "03",
    icon: PhoneForwarded,
    title: "Start sending your calls.",
    description: "Forward your business number and we take it from there — answering questions, taking actionable messages, booking appointments, and keeping you in the loop via text or email.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="section-title mb-4">
            Ready to answer your business calls in <span className="text-primary">3 simple steps</span>
          </h2>
          <p className="section-subtitle">
            No tech skills needed. We handle setup. You start capturing every call within 48 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px border-t-2 border-dashed border-primary/30 -translate-x-1/2 z-0" style={{ width: "calc(100% - 5rem)", left: "calc(50% + 2.5rem)" }} />
              )}
              <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border h-full hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground leading-snug">{step.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
