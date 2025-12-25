import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container-padding relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Trusted by HVAC Professionals Across Australia</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient">Get Booked Out With</span>
          <br />
          <span className="text-gradient-primary">Qualified HVAC Leads That Close</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          We deliver ready-to-buy homeowners to your calendar so you can focus on installations, not chasing leads.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl" className="group">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="heroOutline" size="xl" className="group">
            <Phone className="w-5 h-5" />
            Call Us Now
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border/30 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-6">Delivering results for emergency HVAC companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Premium Air', 'CoolTech Systems', 'Arctic HVAC', 'Comfort Pro'].map((company, index) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
