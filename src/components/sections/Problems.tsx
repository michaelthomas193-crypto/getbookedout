import { Phone, Voicemail, DollarSign } from "lucide-react";

const options = [
  {
    icon: Phone,
    title: "Answer every call yourself",
    points: [
      "Constant interruptions during the day",
      "Wasted time on spam and sales calls",
      "Always chasing customers down later",
    ],
  },
  {
    icon: Voicemail,
    title: "Send the calls you can't take to voicemail",
    points: [
      "Most people won't leave a message",
      "Hard to find time to call back",
      "By the time you do, they've already booked someone else",
    ],
  },
  {
    icon: DollarSign,
    title: "Pay too much for an outsourced service",
    points: [
      "Expensive per-minute pricing",
      "Long hold times for your callers",
      "Inconsistent service from untrained staff",
    ],
  },
];

const Problems = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <h2 className="section-title mb-4">
            Right now, you have <span className="text-primary">three bad options</span> for handling incoming calls
          </h2>
          <p className="section-subtitle">
            Every business owner ends up in one of these traps. None of them actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="p-6 md:p-8 bg-card rounded-2xl border border-border card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <opt.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug text-foreground">
                {opt.title}
              </h3>
              <ul className="space-y-2.5">
                {opt.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <span className="text-destructive mt-1.5 shrink-0">✕</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solution Promise */}
        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-lg">
          <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide mb-4">
            The fourth option
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Get Booked Out makes sure you never miss a call.
          </h3>
          <div className="space-y-3 text-left max-w-xl mx-auto text-base md:text-lg text-muted-foreground">
            <p className="flex gap-3"><span className="text-primary font-bold">→</span> Trained on your business and reviewed by you — always accurate.</p>
            <p className="flex gap-3"><span className="text-primary font-bold">→</span> Available 24/7/365 — taking calls and answering questions anytime you can't.</p>
            <p className="flex gap-3"><span className="text-primary font-bold">→</span> One simple monthly price — custom greeting, spam filtering, FAQs, and instant notifications included.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
