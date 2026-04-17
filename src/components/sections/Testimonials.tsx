const testimonials = [
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
