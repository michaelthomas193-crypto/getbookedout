import { Check } from "lucide-react";
import LeadFormEmbed from "@/components/LeadFormEmbed";

const points = [
  "Set up in under 48 hours",
  "No tech skills required",
  "No lock-in contracts — cancel anytime",
];

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left text-primary-foreground">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-5 uppercase tracking-wide backdrop-blur-sm">
              Ready when you are
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Stop missing calls. Start booking more jobs.
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Set up your AI receptionist today and never let another customer slip through to voicemail.
            </p>
            <div className="space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-primary-foreground text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="relative">
            <div className="absolute -inset-3 bg-white/10 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div className="px-6 pt-6 pb-2 text-center">
                <h3 className="text-xl font-bold text-foreground">Get started in 2 minutes</h3>
                <p className="text-sm text-muted-foreground mt-1">No credit card. No pressure.</p>
              </div>
              <LeadFormEmbed height={420} showHeader={false} className="rounded-none border-0 shadow-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
