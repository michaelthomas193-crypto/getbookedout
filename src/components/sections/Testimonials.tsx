const testimonials = [
  {
    quote:
      "We needed a way to stop calls from going to voicemail because everyone just hangs up. Now Get Booked Out picks up 24/7 and I feel confident callers aren't just going to the next competitor on their list.",
    name: "Hello Sugar Salon",
    role: "Owner",
  },
  {
    quote:
      "My colleagues call our number and talk to the AI and they can't believe how good it is. I've already recommended two friends.",
    name: "Classic City Transportation",
    role: "Owner",
  },
  {
    quote:
      "After 50 years in business, I've hired many live receptionists. The biggest challenges were inconsistency, high cost, and turnover. I fired my answering service yesterday — this gives me more accuracy, faster responses, and 24/7 availability at a fraction of the cost.",
    name: "James Hanner",
    role: "Southern Indiana Driving School",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-title mb-4">
            What owners are <span className="text-primary">saying</span>
          </h2>
          <p className="section-subtitle">
            Long-form stories from people running real businesses with Get Booked Out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t) => (
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

export default Testimonials;
