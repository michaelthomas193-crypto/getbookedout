import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within 24 hours to book your demo.");
  };

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="animate-fade-up pt-4 lg:pt-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Good At Your Trade.{" "}
              <span className="text-primary">Bad At The Other Stuff?</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
              You didn't become a tradie to chase leads, manage websites, and beg for reviews. 
              Get Booked Out handles all of that — so you can focus on what you're actually good at.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 500+ service businesses</span>
            </div>

            {/* Quick benefits */}
            <div className="hidden lg:flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>AI responds to leads in seconds, 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Automated booking & follow-ups</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Get more 5-star reviews on autopilot</span>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Form */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6">
              {/* Form Header */}
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold text-sm">GBO</span>
                </div>
                <h2 className="text-xl font-bold">GET A FREE DEMO</h2>
                <p className="text-muted-foreground text-xs mt-1">Takes 2 minutes. We'll be in touch within the hour.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-10"
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-10"
                />

                <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                  <SelectTrigger className="h-10 bg-background">
                    <SelectValue placeholder="Business Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Button type="submit" size="lg" className="w-full group">
                  Show Me How It Works
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Floating decoration */}
            <div className="absolute -z-10 top-4 -right-4 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
