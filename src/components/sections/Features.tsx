import { Zap, Calendar, Star, Layout, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Lead Response",
    description: "Every enquiry answered in seconds, even when you're on the tools. Never lose another job to a faster competitor.",
  },
  {
    icon: Calendar,
    title: "Automated Booking",
    description: "Customers book directly into your calendar. No phone tag. No back-and-forth. Just confirmed jobs.",
  },
  {
    icon: Star,
    title: "5-Star Review Machine",
    description: "Automatically request reviews after every job. Build a reputation that brings customers to you.",
  },
  {
    icon: Layout,
    title: "Done-For-You Landing Page",
    description: "A professional online presence that actually converts. No tech skills required.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="section-title mb-3 md:mb-4">
            One Platform. <span className="text-[#2B8BBF]">Everything You Need.</span>
          </h2>
          <p className="section-subtitle">
            Stop juggling five different tools. Get Booked Out handles your leads, 
            bookings, reviews, and online presence — all in one place.
          </p>
        </div>

        {/* Single column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-5 md:p-8 bg-card rounded-xl border-t-4 border-t-primary border-x border-b border-border hover:shadow-xl transition-all duration-300 card-shadow"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{feature.description}</p>
              
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm md:text-base min-h-[44px] py-2"
              >
                See How It Works <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;