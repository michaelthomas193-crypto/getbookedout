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
    "Takes 15 minutes, zero pressure",
    "We'll show you exactly how it works for your trade",
    "Ask us anything — we're straight shooters",
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Got 5 Minutes?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Get
              <br />
              <span className="text-primary">Booked Out?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Not sure if it's right for you? No worries. Jump on a quick call, we'll show you how it works, and you can decide if it makes sense.
            </p>
            
            <div className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
            <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Quick Chat — No Pressure</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Business Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                      <SelectTrigger className="bg-background border-border focus:border-primary">
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
                  <Label>Biggest Challenge (optional)</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, challenge: value })}>
                    <SelectTrigger className="bg-background border-border focus:border-primary">
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

                <Button type="submit" size="xl" className="w-full group">
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