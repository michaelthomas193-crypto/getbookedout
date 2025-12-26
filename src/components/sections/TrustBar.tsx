import { Shield, MapPin, Clock, FileCheck, Award } from "lucide-react";

const trustItems = [
  { icon: Award, label: "ARC TICK CERTIFIED" },
  { icon: MapPin, label: "100% LOCAL" },
  { icon: Clock, label: "24/7 RAPID RESPONSE" },
  { icon: FileCheck, label: "FULLY INSURED" },
  { icon: Shield, label: "LICENSED" },
];

const TrustBar = () => {
  return (
    <section className="bg-background py-6 border-b border-border">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;