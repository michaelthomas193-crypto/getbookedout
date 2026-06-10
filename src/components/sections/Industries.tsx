import { Link } from "react-router-dom";

const industries = [
  { label: "AI for plumbers", to: "/plumbing" },
  { label: "AI for electricians", to: "/electrical" },
  { label: "AI for carpenters", to: "/carpentry" },
  { label: "AI for painters", to: "/painting" },
  { label: "AI for landscapers", to: "/landscaping" },
  { label: "AI for concreters", to: "/concreting" },
  { label: "AI for handymen", to: "/handyman" },
];

const fitPoints = [
  "If your phone rings while you're on the tools, this AI is for you.",
  "If you get enquiries from calls, texts, website and socials, this AI keeps it all in one place and answers automatically.",
  "If one job is worth thousands, our AI and automation pay for themselves fast.",
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-background">
      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="section-title mb-3">AI built for tradies and service businesses</h2>
          <p className="section-subtitle">
            We work with electricians, plumbers, builders, landscapers, roofers, concreters, fencing and decking, cleaners, mechanics, auto detailers, clinics, salons and other service businesses that are sick of missing calls and juggling admin.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
          {fitPoints.map((p) => (
            <li key={p} className="rounded-xl border border-border bg-card p-4 text-sm md:text-base text-foreground leading-relaxed">
              {p}
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 gap-3 max-w-xl mx-auto">
          {industries.map((i) => (
            <li key={i.to}>
              <Link
                to={i.to}
                className="block px-5 py-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all text-foreground font-medium"
              >
                {i.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;
