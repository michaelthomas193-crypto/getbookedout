import { Link } from "react-router-dom";

const industries = [
  { label: "AI receptionist for plumbers", to: "/plumbing" },
  { label: "AI receptionist for electricians", to: "/electrical" },
  { label: "AI receptionist for carpenters", to: "/carpentry" },
  { label: "AI receptionist for painters", to: "/painting" },
  { label: "AI receptionist for landscapers", to: "/landscaping" },
  { label: "AI receptionist for concreters", to: "/concreting" },
  { label: "AI receptionist for handyman businesses", to: "/handyman" },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-background">
      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="section-title mb-3">Industries we work with</h2>
          <p className="section-subtitle">
            Get Booked Out is trusted by tradies across Australia. See how the AI receptionist works for your industry:
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
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
