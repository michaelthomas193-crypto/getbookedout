import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(var(--bg-light-blue))]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container-padding relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-foreground/70 font-medium">Trusted by HVAC Professionals Across Australia</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-normal mb-6 animate-fade-up text-primary" style={{ animationDelay: '0.1s' }}>
          <span>Get Booked Out With</span>
          <br />
          <span>Qualified HVAC Leads That Close</span>
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
          <Button variant="outline" size="xl" className="group border-2">
            <Phone className="w-5 h-5" />
            Call Us Now
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-6">Delivering results for emergency HVAC companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Premium Air', 'CoolTech Systems', 'Arctic HVAC', 'Comfort Pro'].map((company) => (
              <span key={company} className="text-lg font-semibold text-foreground/40 hover:text-primary transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
