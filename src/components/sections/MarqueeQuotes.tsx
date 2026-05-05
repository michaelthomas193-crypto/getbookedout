const featured = [
  {
    quote:
      "We are leading the market in what we do but I definitely am not a tech wizard and the tech stuff was driving me mad so I just ignored it. Now my life is organised for me and I get to focus on making more money with less brain damage.",
    name: "Clean and Co",
    role: "Mobile car detailing",
  },
  {
    quote:
      "If I'm working on something technical, with a client or knocked off for the day, I can't get to the phone. I knew it was costing me jobs because when I'd call back they wouldn't answer or they'd say they found someone for it. Get Booked Out is an affordable way I've been able to fix this without having to employ someone to work around the clock. Game changer for me.",
    name: "Trades2You",
    role: "Electrical contractors",
  },
  {
    quote:
      "Sales is about speed and unfortunately you can't have speed when you're busy with clients — that was our problem. Having something handle this for us has been a huge help. The first time we had an appointment booked for us while none of us were available we knew this would make us money. Stoked with the results. Definitely recommend for anyone who isn't a mad scientist behind the computer.",
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

      {/* Video testimonials */}
      <div className="container-padding max-w-3xl mx-auto mb-10 md:mb-14">
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {[
            { src: "/testimonials/joe-trades2you.mp4", name: "Joe", role: "Trades2You", initial: "J" },
            { src: "/testimonials/client-2.mp4", name: "Client", role: "Get Booked Out", initial: "C" },
          ].map((v) => (
            <figure key={v.src} className="flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <video
                src={v.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-[420px] bg-black object-cover"
              />
              <figcaption className="flex items-center gap-3 p-5 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground font-bold flex items-center justify-center">
                  {v.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{v.name}</div>
                  <div className="text-xs text-muted-foreground">{v.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
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

    </section>
  );
};

export default MarqueeQuotes;
