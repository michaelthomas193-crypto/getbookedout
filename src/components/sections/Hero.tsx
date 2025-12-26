import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI That Converts Leads Into{" "}
              <span className="text-primary">Booked Appointments</span> While You Sleep
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Choose Get Booked Out. Automate lead responses, bookings, and reviews — 
              so you never miss another customer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="xl">Get Started</Button>
              <Button variant="outline" size="xl">Book a Demo</Button>
            </div>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-medium">Rated 5/5 from 200+ reviews</span>
            </div>
          </div>

          {/* Right Content - Chat Widget Mockup */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-card rounded-2xl shadow-xl border border-border p-6 max-w-md mx-auto lg:ml-auto">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Get Booked Out AI</p>
                  <p className="text-sm text-muted-foreground">Online now</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-4">
                <div className="bg-secondary rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">Hi! 👋 I'm here to help you book an appointment. What service are you looking for today?</p>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">I need a plumber for a leaking tap</p>
                </div>
                
                <div className="bg-secondary rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">I can help with that! I have availability tomorrow at 9am, 11am, or 2pm. Which works best for you?</p>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-secondary rounded-lg px-4 py-2 text-sm focus:outline-none"
                  disabled
                />
                <Button size="sm" className="shrink-0">Send</Button>
              </div>

              {/* Powered By */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                Powered by Get Booked Out
              </p>
            </div>

            {/* Floating decoration */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
