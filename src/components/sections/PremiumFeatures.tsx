import { Calendar, PhoneCall, Link2, GraduationCap, Star, Globe } from "lucide-react";

const features = [
  {
    icon: Calendar,
    tier: "Complete",
    title: "Book appointments",
    description: "Sends scheduling links by text and books straight into your calendar.",
  },
  {
    icon: PhoneCall,
    tier: "Complete",
    title: "Transfer important calls",
    description: "Routes the calls that need a real human straight to the right person on your team.",
  },
  {
    icon: Link2,
    tier: "Complete",
    title: "Text custom links",
    description: "Sends links to pricing, promos, or scheduling pages mid-call — instantly.",
  },
  {
    icon: GraduationCap,
    tier: "Scale",
    title: "Specialist training",
    description: "Upload training files to teach your AI the specific skills your business needs.",
  },
  {
    icon: Star,
    tier: "Complete",
    title: "Review automation",
    description: "Asks every happy customer for a review and routes 5-stars straight to Google.",
  },
  {
    icon: Globe,
    tier: "Add-on",
    title: "Website texting",
    description: "Capture phone numbers from website visitors and follow up over text — you own the lead.",
  },
];

const tierColor: Record<string, string> = {
  Complete: "bg-primary/10 text-primary border-primary/20",
  Scale: "bg-foreground/10 text-foreground border-foreground/20",
  "Add-on": "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] border-[hsl(var(--warning))]/30",
};

const PremiumFeatures = () => {
  return (
    <section id="features" className="section-padding bg-background">
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
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <f.icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border ${tierColor[f.tier]}`}>
                  {f.tier}
                </span>
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
