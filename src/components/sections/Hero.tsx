import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroHome from "@/assets/hero-home.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to receive text messages to continue.");
      return;
    }
    toast.success("Emergency request sent! We'll contact you within minutes.");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHome})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="container-padding relative z-10 max-w-7xl mx-auto pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-primary-foreground leading-tight">
              <span className="block">EMERGENCY</span>
              <span className="block">HVAC</span>
              <span className="block">REPLACEMENT</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8">
              Regional NSW's trusted 24/7 rapid response team. We specialize in
              high-ticket replacements for systems over 10 years old.
            </p>
          </div>

          {/* Right Side - Floating Lead Capture Card */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Card with logo breaking top border */}
            <div className="relative bg-accent rounded-xl shadow-2xl p-8 pt-16">
              {/* Logo Circle - Breaking top border */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-accent">
                  <span className="text-primary-foreground font-black text-2xl">
                    GBO
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground text-center mb-8">
                GET A FREE QUOTE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-foreground">
                    Full Name *
                  </label>
                  <Input
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-foreground">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    placeholder="(02) 1234 5678"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-foreground">
                    Short message about your needs *
                  </label>
                  <Textarea
                    placeholder="Your message goes straight to our priority dispatch."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  Your message goes straight to our priority dispatch.
                </p>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeToTerms: checked as boolean })
                    }
                    className="mt-0.5 border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-accent-foreground leading-snug cursor-pointer"
                  >
                    I agree to receive text messages for my quote. By providing my
                    phone number, I agree to receive text messages from the
                    business.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full uppercase tracking-wide"
                >
                  SEND EMERGENCY REQUEST
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