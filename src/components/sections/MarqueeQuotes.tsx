const row1 = [
  { text: "So far this has been a game changer.", name: "JR", business: "Local business owner" },
  { text: "It felt like a waste of time handling our calls before — not anymore.", name: "Lisa", business: "Salon owner" },
  { text: "I've been able to capture every lead that comes in, even when I'm deep in work.", name: "Derek", business: "Trade business" },
  { text: "I spend less time playing phone tag and more time delivering for my customers.", name: "Marco", business: "Service pro" },
  { text: "She doesn't take breaks, doesn't go on vacation, doesn't punch out at 5.", name: "Edgar", business: "Owner / operator" },
  { text: "Now I can focus on customers without missing important calls.", name: "Priya", business: "Studio owner" },
];

const row2 = [
  { text: "The response is so real, sometimes customers don't know it's AI.", name: "Ron", business: "Clinic owner" },
  { text: "Helped me stay on top of calls and get more sales without hiring anyone.", name: "Jason", business: "Business owner" },
  { text: "It's almost every day I'd lose a job from not answering — not anymore.", name: "Sam", business: "Tradesperson" },
  { text: "I called, got the link, the pricing was there, I booked. So easy.", name: "Anna", business: "Customer review" },
  { text: "Safer to pick up now because I know it's a real customer, not spam.", name: "Lucas", business: "Solo founder" },
  { text: "Best investment we've made for the business this year.", name: "Emma", business: "Franchise owner" },
];

type Quote = { text: string; name: string; business: string };

const Bubble = ({ q }: { q: Quote }) => (
  <div className="shrink-0 w-[300px] md:w-[360px] mx-3 px-5 py-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3">
    <p className="text-sm md:text-base text-foreground leading-relaxed">"{q.text}"</p>
    <div className="flex items-center gap-2 mt-auto">
      <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
        {q.name.charAt(0)}
      </div>
      <div>
        <div className="text-xs font-semibold text-foreground leading-tight">{q.name}</div>
        <div className="text-[11px] text-muted-foreground leading-tight">{q.business}</div>
      </div>
    </div>
  </div>
);

const featured = [
  {
    quote:
      "Half our bookings come in while we're elbow-deep in a detail. Get Booked Out picks up every call, quotes our packages, and locks in the booking before the customer rings the next mob. Game changer for the shop.",
    name: "Clean and Co",
    role: "Mobile car detailing",
  },
  {
    quote:
      "Sparkies are flat out on the tools — we can't be answering the phone up a ladder. Now every call gets answered, spam gets filtered, and I get a text with the job details before I'm back in the ute. Reckon it's paid for itself ten times over.",
    name: "Trades for You",
    role: "Electrical contractors",
  },
  {
    quote:
      "On the yard with a customer, you can't drop everything for the phone. Get Booked Out handles the 'is it still available' calls, books test drives straight into the calendar, and weeds out the tyre-kickers. Best hire we've made all year.",
    name: "Car Farm",
    role: "Used car dealership",
  },
];

const MarqueeQuotes = () => {
  return (
    <section className="py-14 md:py-20 bg-background overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto text-center mb-10">
        <h2 className="section-title mb-3">
          Real businesses. <span className="text-primary">Real results.</span>
        </h2>
        <p className="section-subtitle">
          Here's what owners are saying after switching to Get Booked Out.
        </p>
      </div>

      {/* Featured long-form testimonials */}
      <div className="container-padding max-w-7xl mx-auto mb-10 md:mb-14">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {featured.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col p-6 md:p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all"
            >
              <div className="text-5xl text-primary/30 leading-none mb-4 font-serif">"</div>
              <blockquote className="flex-1 text-foreground text-base leading-relaxed mb-6">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground font-bold flex items-center justify-center">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* Row 1 - left scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left" style={{ width: "max-content" }}>
            {[...row1, ...row1].map((q, i) => (
              <Bubble key={`r1-${i}`} q={q} />
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
              <Bubble key={`r2-${i}`} q={q} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeQuotes;
