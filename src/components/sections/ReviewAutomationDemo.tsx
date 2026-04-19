import { Star, Shield, Zap } from "lucide-react";

const ReviewAutomationDemo = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundColor: "hsl(275 70% 86%)",
        backgroundImage:
          "linear-gradient(180deg, hsl(0 0% 100% / 0) 0%, hsl(0 0% 100% / 0.6) 55%, hsl(0 0% 100%) 100%), linear-gradient(105deg, hsl(0 0% 100%) 0%, hsl(280 60% 97%) 38%, hsl(280 65% 92%) 62%, hsl(275 70% 86%) 100%)",
      }}
    >
      {/* Soft background accents */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-padding max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
            <Star className="w-4 h-4 fill-primary" />
            Automated review engine
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.05]">
            Turn happy customers into{" "}
            <span className="text-primary">5-star Google reviews</span>{" "}
            — automatically.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Every job, every customer, every time. We text the review
            request, route the happy ones straight to Google, and quietly
            keep the unhappy feedback private — so your reputation only
            ever goes one way: up.
          </p>
        </div>

        {/* Video */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-foreground/5 bg-black">
          <video
            src="/videos/review-automation.mp4"
            loop
            playsInline
            controls
            preload="metadata"
            ref={(el) => {
              if (el) el.playbackRate = 0.67;
            }}
            className="w-full h-auto block"
            aria-label="Animated demo: 5-star reviews routed to Google, low-star feedback kept private"
          />
        </div>

        {/* Benefit row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-14">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Sent the moment a job's done</h3>
              <p className="text-sm text-muted-foreground mt-1">
                No chasing, no awkward asks. The text fires automatically.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-accent/30 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">5★ goes straight to Google</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your best customers post publicly with one tap.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Bad days stay private</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Low ratings route to you so you can fix it — not the internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewAutomationDemo;
