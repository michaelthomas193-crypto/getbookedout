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
    <section className="relative pt-12 md:pt-16 pb-6 md:pb-8 bg-background">
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="block">Good At Your Trade.</span>
              <span className="block text-primary">Bad At The Other Stuff?</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-3 max-w-lg mx-auto lg:mx-0">
              You didn't become a tradie to chase leads, manage websites, and beg for reviews. 
              Get Booked Out handles all of that — so you can focus on what you're actually good at.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
              <span className="text-sm font-medium">Built by a business owner who was sick of the same problems.</span>
            </div>
          </div>

          {/* Right Content - Demo Form */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6">
              {/* Form Header */}
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold">Stop Losing Jobs</h2>
                <p className="text-muted-foreground text-sm mt-1">10min chat. No sales pitch.</p>
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
