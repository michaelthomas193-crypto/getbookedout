import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";

const features = [
  "Automated review requests after every job",
  "Smart timing based on job completion",
  "Easy one-click review for customers",
  "Respond to reviews automatically",
  "Monitor your reputation in real-time",
];

const Reputation = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">
              Your reputation is everything.{" "}
              <span className="text-primary">Make it 5 stars.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Automatically request reviews at the perfect moment, respond to feedback 
              professionally, and build the online reputation your business deserves.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg">Get Started</Button>
          </div>

          {/* Right Content - Review Cards Mockup */}
          <div className="relative">
            <div className="space-y-4 max-w-md mx-auto lg:ml-auto">
              {/* Review Card 1 */}
              <div className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "Absolutely fantastic service! They responded within minutes and had my 
                  appointment booked straight away. Highly recommend!"
                </p>
                <p className="text-sm font-semibold">— Sarah M.</p>
              </div>
              
              {/* Review Card 2 */}
              <div className="bg-card rounded-xl p-6 border border-border card-shadow transform translate-x-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm mb-4">
                  "The online booking was so easy. No waiting on hold, no hassle. 
                  Will definitely use again!"
                </p>
                <p className="text-sm font-semibold">— James T.</p>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reputation;
