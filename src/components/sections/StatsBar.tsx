import { useEffect, useRef, useState } from "react";

const stats = [
  { value: ">35%", label: "Average increase in booked jobs" },
  { value: "5 min", label: "Average lead response time" },
  { value: "3x", label: "More Google reviews in 90 days" },
];

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-primary">
      <div className="container-padding max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            The numbers don't lie.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-3">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 font-medium text-lg max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
