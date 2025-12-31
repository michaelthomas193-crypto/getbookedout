import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    businessType: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within the hour for a quick chat.");
  };

  const bulletPoints = [
    "10 minutes. No sales pitch.",
    "We'll show you exactly where you're losing jobs",
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 md:mb-6">
              Got 10 Minutes?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Stop Losing Jobs to
              <br />
              <span className="text-primary">Missed Calls</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Home service businesses miss up to 62% of their calls. How many are you losing?
            </p>
            
            <div className="space-y-3 md:space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
            <div className="relative p-5 md:p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-xl">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Quick Chat — No Pressure</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="h-12 md:h-10 bg-background border-border focus:border-primary text-base md:text-sm"
                  />
                </div>

                {/* Stacked on mobile, side-by-side on tablet+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 md:h-10 bg-background border-border focus:border-primary text-base md:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Business Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                      <SelectTrigger className="h-12 md:h-10 bg-background border-border focus:border-primary text-base md:text-sm">
                        <SelectValue placeholder="Select type" />
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
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Biggest Challenge (optional)</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, challenge: value })}>
                    <SelectTrigger className="h-12 md:h-10 bg-background border-border focus:border-primary text-base md:text-sm">
                      <SelectValue placeholder="Select your challenge" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      <SelectItem value="not-enough-leads">Not enough leads</SelectItem>
                      <SelectItem value="leads-dont-convert">Leads don't convert</SelectItem>
                      <SelectItem value="cant-respond-fast">Can't respond fast enough</SelectItem>
                      <SelectItem value="no-online-presence">No online presence</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="xl" className="w-full min-h-[52px] group text-base md:text-lg">
                  Let's Chat
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;