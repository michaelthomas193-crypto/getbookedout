import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Within the first week, we had 12 qualified leads. By month two, we'd closed $87,000 in jobs. Get Booked Out changed our business.",
    name: "Michael Torres",
    business: "Torres HVAC Solutions, Sydney NSW",
    avatar: "MT",
  },
  {
    quote: "No more chasing leads or wasting time on tyre-kickers. Every call we get is from a homeowner ready to buy. Our close rate jumped from 40% to 72%.",
    name: "Sarah Chen",
    business: "CoolComfort Pro, Melbourne VIC",
    avatar: "SC",
  },
  {
    quote: "I used to lose half my leads because I couldn't answer the phone on a job. Now every single one gets handled. I've hired two extra blokes just to keep up with the work.",
    name: "David Walsh",
    business: "Walsh Air & Heating, Brisbane QLD",
    avatar: "DW",
  },
  {
    quote: "The review automation alone has boosted our Google rating from 4.1 to 4.8 stars. Customers find us way easier now.",
    name: "Emma Davis",
    business: "Davis Plumbing, Perth WA",
    avatar: "ED",
  },
  {
    quote: "Finally, a system that actually works! Setup was painless and the results were immediate. Best investment we've made.",
    name: "James Thompson",
    business: "Thompson Electrical, Adelaide SA",
    avatar: "JT",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-light">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            See Why Service Businesses Trust Get Booked Out
          </h2>
          <p className="section-subtitle">To Fill Their Schedule</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-card rounded-xl p-6 border border-border card-shadow snap-start"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#results" className="text-primary font-medium hover:underline">
            View More Results →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
