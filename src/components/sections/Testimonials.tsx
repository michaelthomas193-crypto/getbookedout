import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Within the first week, we had 12 qualified leads. By month two, we'd closed $87,000 in jobs. Get Booked Out changed our business.",
    name: "Michael Torres",
    business: "Torres HVAC Solutions, Sydney NSW",
    avatar: "MT",
    avatarBg: "bg-blue-500",
  },
  {
    quote: "No more chasing leads or wasting time on tyre-kickers. Every call we get is from a homeowner ready to buy. Our close rate jumped from 40% to 72%.",
    name: "Sarah Chen",
    business: "CoolComfort Pro, Melbourne VIC",
    avatar: "SC",
    avatarBg: "bg-green-500",
  },
  {
    quote: "I used to lose half my leads because I couldn't answer the phone on a job. Now every single one gets handled. I've hired two extra blokes just to keep up with the work.",
    name: "David Walsh",
    business: "Walsh Electrical, Brisbane QLD",
    avatar: "DW",
    avatarBg: "bg-purple-500",
  },
  {
    quote: "The review automation alone has boosted our Google rating from 4.1 to 4.8 stars. Customers find us way easier now.",
    name: "Emma Davis",
    business: "Davis Plumbing, Perth WA",
    avatar: "ED",
    avatarBg: "bg-pink-500",
  },
  {
    quote: "Finally, a system that actually works! Setup was painless and the results were immediate. Best investment we've made.",
    name: "James Thompson",
    business: "Thompson Electrical, Adelaide SA",
    avatar: "JT",
    avatarBg: "bg-orange-500",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 380;
      const newIndex = direction === "left" 
        ? Math.max(0, currentIndex - 1)
        : Math.min(testimonials.length - 1, currentIndex + 1);
      
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-light">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            See Why Service Businesses Trust <span className="text-[#2B8BBF]">Get Booked Out</span>
          </h2>
        </div>

        <div className="relative px-12">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-card rounded-xl p-6 border border-border card-shadow snap-start flex flex-col"
              >
                {/* Stars - Yellow/Gold */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
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

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: index * 380,
                      behavior: "smooth",
                    });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#results" className="text-primary font-semibold hover:underline">
            View More Results →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
