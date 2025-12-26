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
import { Star, MessageSquare, Send } from "lucide-react";
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
    <section className="relative section-padding bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Good At Your Trade.{" "}
              <span className="text-primary">Bad At The Other Stuff?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              You didn't become a tradie to chase leads, manage websites, and beg for reviews. 
              Get Booked Out handles all of that — so you can focus on what you're actually good at.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="xl">Get Started</Button>
              <Button variant="outline" size="xl">See How It Works</Button>
            </div>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">Trusted by 500+ service businesses</span>
            </div>

            {/* Phone mockup indicator */}
            <div className="mt-8 hidden lg:flex items-center gap-3 p-4 bg-card rounded-xl border border-border shadow-lg max-w-sm animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">New lead captured!</p>
                <p className="text-xs text-muted-foreground">AI responded in 3 seconds</p>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Form */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-8">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">GBO</span>
                </div>
                <h2 className="text-2xl font-bold">GET A FREE DEMO</h2>
                <p className="text-muted-foreground text-sm mt-2">Takes 2 minutes. We'll be in touch within the hour.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                    <SelectTrigger className="h-12 bg-background">
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
                </div>

                <div>
                  <Textarea
                    placeholder="Short message about your needs (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[80px]"
                  />
                </div>

                <Button type="submit" size="xl" className="w-full group">
                  Show Me How It Works
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Floating decoration */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
