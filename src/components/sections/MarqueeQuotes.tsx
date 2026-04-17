const row1 = [
  "So far this has been a game changer.",
  "It felt like a waste of time handling our calls before — not anymore.",
  "I've been able to capture every lead that comes in, even when I'm deep in work.",
  "I spend less time playing phone tag and more time delivering for my customers.",
  "She doesn't take breaks, doesn't go on vacation, doesn't punch out at 5.",
  "Now I can focus on customers without missing important calls.",
];

const row2 = [
  "The response is so real, sometimes customers don't know it's AI.",
  "Helped me stay on top of calls and get more sales without hiring anyone.",
  "It's almost every day that I lost a job from not answering the phone — not anymore.",
  "I called, got the link, the pricing was there, I booked. So easy.",
  "Safer to pick up now because I know it's a real customer, not spam.",
  "Best investment we've made for the business this year.",
];

const Bubble = ({ text }: { text: string }) => (
  <div className="shrink-0 w-[300px] md:w-[360px] mx-3 px-5 py-4 rounded-2xl bg-card border border-border shadow-sm">
    <p className="text-sm md:text-base text-foreground leading-relaxed">"{text}"</p>
  </div>
);

const MarqueeQuotes = () => {
  return (
    <section className="py-14 md:py-20 bg-secondary/40 overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto text-center mb-10">
        <h2 className="section-title mb-3">
          Real businesses. <span className="text-primary">Real results.</span>
        </h2>
        <p className="section-subtitle">
          Here's what owners are saying after switching to Get Booked Out.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1 - left scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left" style={{ width: "max-content" }}>
            {[...row1, ...row1].map((q, i) => (
              <Bubble key={`r1-${i}`} text={q} />
            ))}
          </div>
        </div>

        {/* Row 2 - right scroll (reversed) */}
        <div className="relative overflow-hidden">
          <div
            className="flex animate-slide-left"
            style={{ width: "max-content", animationDirection: "reverse", animationDuration: "40s" }}
          >
            {[...row2, ...row2].map((q, i) => (
              <Bubble key={`r2-${i}`} text={q} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeQuotes;
