import heroTradesBackground from "@/assets/hero-trades-background.png";
import LeadFormEmbed from "@/components/LeadFormEmbed";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-6 pb-6 md:pt-16 md:pb-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTradesBackground})` }}
      />
      {/* Gradient Overlay - more opaque on left, fades to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/45 md:from-white/80 md:via-white/65 md:to-white/40" />
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up text-center lg:text-left flex flex-col justify-center order-1 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">
              <span className="block">Good At Your Trade.</span>
              <span className="block text-primary">Bad At The Other Stuff?</span>
            </h1>
            
            <p className="text-base md:text-lg text-foreground/80 mb-2 md:mb-3 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              You didn't become a tradie to chase leads, manage websites, and beg for reviews. 
              Get Booked Out handles all of that — so you can focus on what you're actually good at.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start text-foreground/70 mb-4 lg:mb-0">
              <span className="text-sm font-medium">Built by a business owner who was sick of the same problems.</span>
            </div>
          </div>

          {/* Right Content - Demo Form */}
          <div id="hero-form" className="relative animate-fade-up order-2 lg:order-2" style={{ animationDelay: "0.1s" }}>
            <LeadFormEmbed height={520} showHeader={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;