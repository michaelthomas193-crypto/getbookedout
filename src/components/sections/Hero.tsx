import heroTradesBackground from "@/assets/hero-trades-background.png";
import LeadFormEmbed from "@/components/LeadFormEmbed";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-6 pb-6 md:pt-16 md:pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTradesBackground})` }}
      />
      {/* Gradient Overlay - more opaque on left, fades to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/50 md:from-white/85 md:via-white/70 md:to-white/45" />
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="animate-fade-up text-center lg:text-left flex flex-col justify-start order-1 lg:order-1 pt-0 lg:pt-4">
            {/* Headline */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.2] mb-4 max-w-[600px] mx-auto lg:mx-0"
              style={{ color: '#1a1a1a' }}
            >
              Stop Losing <span className="text-primary">3-5 Jobs</span> This Week
            </h1>
            
            {/* Subheadline */}
            <p 
              className="text-lg sm:text-xl md:text-2xl font-semibold leading-[1.4] mb-6 max-w-[580px] mx-auto lg:mx-0"
              style={{ color: '#444444' }}
            >
              Our AI receptionist <span className="text-primary">answers calls, books jobs, and follows up</span> — so you <span className="text-primary">never lose work</span> to a missed call again.
            </p>
            
            {/* Body Copy */}
            <div 
              className="text-base md:text-lg leading-[1.6] mb-6 max-w-[580px] mx-auto lg:mx-0 space-y-4"
              style={{ color: '#666666' }}
            >
              <p>
                You're on a job. Phone rings. Can't answer. Customer calls the next bloke. Happens every day, right?
              </p>
              <p>
                We handle your missed calls, enquiries, and follow-ups automatically—so you stop losing work to whoever picks up first.
              </p>
            </div>
            
            {/* Benefit Bullets */}
            <div className="mb-5 max-w-[560px] mx-auto lg:mx-0">
              <p 
                className="text-base font-semibold mb-3"
                style={{ color: '#444444' }}
              >
                Here's what you get:
              </p>
              <ul className="space-y-2 text-base leading-[1.8]" style={{ color: '#444444' }}>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI receptionist answers every missed call with a text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Every enquiry gets followed up (even at 10pm Saturday)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>See exactly how many jobs you would've lost</span>
                </li>
              </ul>
            </div>
            
            {/* Closing Line */}
            <p 
              className="text-base font-semibold mb-4 max-w-[560px] mx-auto lg:mx-0"
              style={{ color: '#444444' }}
            >
              No tech skills needed. We set it up. You just watch it work.
            </p>
            
            {/* Trust Indicator */}
            <p 
              className="text-sm italic max-w-[560px] mx-auto lg:mx-0"
              style={{ color: '#777777' }}
            >
              Built by a business owner who was sick of the same problems.
            </p>
          </div>

          {/* Right Content - Demo Form */}
          <div id="hero-form" className="relative animate-fade-up order-2 lg:order-2" style={{ animationDelay: "0.1s" }}>
            {/* Unified Form Container */}
            <div className="bg-white rounded-xl border border-border overflow-hidden">
              {/* Form Header */}
              <div className="px-6 py-5 text-center">
                <h2 className="text-2xl md:text-[28px] font-bold text-primary mb-0">
                  Get Started Today
                </h2>
              </div>
              
              {/* Form Embed */}
              <div className="-mt-2">
                <LeadFormEmbed height={420} showHeader={false} className="rounded-none border-0 shadow-none" />
              </div>
              
              {/* Below Form Text */}
              <div className="px-6 py-4 text-center">
                <p className="text-[13px] leading-[1.5] text-muted-foreground max-w-[90%] mx-auto">
                  Takes 2 minutes to set up. No lock-in contracts. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
