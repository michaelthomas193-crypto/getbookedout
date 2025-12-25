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
import { ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    revenue: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within 24 hours to book your strategy call.");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[120px]" />
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Let's Talk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Ready to Get</span>
              <br />
              <span className="text-gradient-primary">Booked Out?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Let's build a pipeline that keeps your trucks rolling. Book a free strategy call and see how we can transform your lead flow.
            </p>
            
            <div className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-muted-foreground">No obligation strategy session</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-muted-foreground">Custom plan for your market</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-muted-foreground">See real results from clients like you</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl" />
            <div className="relative p-8 md:p-10 rounded-2xl card-gradient border border-border/50">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Book Your Strategy Call</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
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
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      placeholder="Your HVAC Co"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Monthly Revenue Range</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, revenue: value })}>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="under-50k">Under $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                      <SelectItem value="250k-plus">$250k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Biggest Challenge</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, challenge: value })}>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select your challenge" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="not-enough-leads">Not enough leads</SelectItem>
                      <SelectItem value="leads-dont-convert">Leads don't convert</SelectItem>
                      <SelectItem value="cant-scale">Can't scale</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full group">
                  Book a Strategy Call
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
