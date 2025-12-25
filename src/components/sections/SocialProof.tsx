import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    company: "Torres HVAC Solutions",
    location: "Sydney, NSW",
    quote: "Within the first week, we had 12 qualified leads. By month two, we'd closed $87,000 in emergency replacements. GetBookedOut changed our business.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    company: "CoolComfort Pro",
    location: "Melbourne, VIC",
    quote: "No more chasing leads or wasting time on tyre-kickers. Every call we get is from a homeowner ready to buy. Our close rate jumped from 40% to 72%.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Walsh",
    company: "Walsh Air & Heating",
    location: "Brisbane, QLD",
    quote: "The ROI dashboard alone is worth it. I can see exactly which campaigns are driving revenue. We've 3x'd our marketing efficiency.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/50">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            HVAC Companies Trust GetBookedOut
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To Fill Their Schedule
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground/70">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
            View More Results
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
