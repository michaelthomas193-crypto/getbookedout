import { Clock, HelpCircle, CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Clock,
    title: "Are waiting for a response",
    description: "If you don't reply within 5 minutes, they've moved on to your competitor.",
  },
  {
    icon: HelpCircle,
    title: "Have questions about your services",
    description: "If they can't get instant answers, they bounce.",
  },
  {
    icon: CalendarX,
    title: "Want to book but it's too hard",
    description: "Friction in booking = lost revenue.",
  },
];

const Problems = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Only 20% of your leads actually book.{" "}
            <span className="text-primary">Why not capture the other 80%?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Right now, your potential customers...
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border card-shadow"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="text-center bg-card rounded-xl p-8 border border-border card-shadow">
          <p className="text-xl font-semibold mb-6">
            We help you capture ALL of these customers with smart AI automation.
          </p>
          <Button size="lg">Book a Free Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
