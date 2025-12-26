import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Get Booked Out has completely transformed our business. We went from missing calls to having a fully booked calendar within weeks.",
    name: "Sarah Mitchell",
    business: "Plumbing Services",
    avatar: "SM",
  },
  {
    quote: "The AI chat is incredible. It responds to inquiries instantly, even at 2am. Our booking rate has increased by 40%.",
    name: "James Thompson",
    business: "HVAC Company",
    avatar: "JT",
  },
  {
    quote: "Finally, a system that actually works! The review automation alone has boosted our Google rating from 4.1 to 4.8 stars.",
    name: "Emma Davis",
    business: "Beauty Salon",
    avatar: "ED",
  },
  {
    quote: "We used to lose so many leads because we couldn't respond fast enough. Now our AI handles everything perfectly.",
    name: "Michael Chen",
    business: "Electrical Services",
    avatar: "MC",
  },
  {
    quote: "The setup was seamless and the support team is amazing. Best investment we've made for our practice.",
    name: "Dr. Lisa Wang",
    business: "Dental Clinic",
    avatar: "LW",
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
    <section className="section-padding bg-gray-light">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            See why service businesses love Get Booked Out
          </h2>
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
      </div>
    </section>
  );
};

export default Testimonials;
