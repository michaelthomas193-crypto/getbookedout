import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "I honestly didn't know where to start with AI on my business model but I knew I needed it. Thank you so so much for streamlining the process and making it easy for me!",
    name: "Therese Smith",
    avatar: "TS",
    avatarBg: "bg-primary",
  },
  {
    quote: "Didn't think it would be this easy managing my schedule with clients! With the help of their AI system, I've got a 24/7 receptionist and more! Highly recommended 10/10",
    name: "John",
    avatar: "J",
    avatarBg: "bg-accent",
  },
  {
    quote: "I have no idea how to use AI for my business so using Get Booked Out was a super helpful and affordable way to take advantage of the new tech! Thank you Jesse!",
    name: "Jayson",
    avatar: "J",
    avatarBg: "bg-secondary",
  },
  {
    quote: "Very professional and easy to deal with, highly recommend.",
    name: "Anonymous",
    avatar: "★",
    avatarBg: "bg-primary",
  },
  {
    quote: "Amazing customer service 👌. It was smooth and easy process, they paid very quickly.",
    name: "Anonymous",
    avatar: "★",
    avatarBg: "bg-accent",
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
