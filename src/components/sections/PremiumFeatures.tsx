import { Calendar, PhoneCall, Link2, GraduationCap, Star, Globe } from "lucide-react";

const features = [
  {
    icon: Calendar,
    tier: "SCALE",
    title: "Set up appointments",
    description: "Lets your AI offer to book customer appointments and send scheduling links by text.",
  },
  {
    icon: PhoneCall,
    tier: "SCALE",
    title: "Transfer important calls",
    description: "Transfers calls to the right person on your team when they need live help.",
  },
  {
    icon: Link2,
    tier: "SCALE",
    title: "Text custom links",
    description: "Sends links to pricing, promotions, or scheduling pages while on customer calls.",
  },
  {
    icon: GraduationCap,
    tier: "GROWTH",
    title: "Offer elite training",
    description: "Teach your AI specialised skills by uploading training files specific to your business.",
  },
  {
    icon: Star,
    tier: "SCALE",
    title: "Review automation",
    description: "Asks every happy customer for a review and routes 5-stars straight to Google.",
  },
  {
    icon: Globe,
    tier: "ADD-ON",
    title: "Website texting",
    description: "Capture phone numbers from website visitors and follow up over text — you own the lead.",
  },
];

const tierColor: Record<string, string> = {
  SCALE: "bg-primary/10 text-primary border-primary/20",
  GROWTH: "bg-foreground/10 text-foreground border-foreground/20",
  "ADD-ON": "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] border-[hsl(var(--warning))]/30",
};

const PremiumFeatures = () => {
  return (
    <section id="features" className="section-padding bg-lavender">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Premium features
          </div>
          <h2 className="section-title mb-4">
            When you're ready, unlock <span className="text-primary">more horsepower</span>
          </h2>
          <p className="section-subtitle">
            Start simple. Scale up as your business grows. Every plan is month-to-month with no lock-in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 md:p-7 bg-card rounded-2xl border border-border hover:shadow-lg transition-all relative"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
