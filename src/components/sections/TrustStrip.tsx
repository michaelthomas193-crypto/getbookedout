import { MapPin, PhoneCall, Zap, CalendarCheck, ShieldCheck } from "lucide-react";

const items = [
  { icon: MapPin, label: "Built for Australian service businesses" },
  { icon: PhoneCall, label: "24/7 call answering" },
  { icon: Zap, label: "Instant enquiry replies" },
  { icon: CalendarCheck, label: "Calendar booking automation" },
  { icon: ShieldCheck, label: "No lock-in contracts" },
];

const TrustStrip = () => {
  return (
    <section aria-label="Trust" className="border-y border-border bg-card">
      <div className="container-padding max-w-7xl mx-auto py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary shrink-0" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
