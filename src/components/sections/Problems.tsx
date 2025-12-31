import { PhoneMissed, HelpCircle, CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: PhoneMissed,
    title: "Your phone rang. You couldn't answer.",
    description: "85% of missed calls never call back. They've already called your competitor.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: HelpCircle,
    title: "A customer visited your website.",
    description: "They had questions. Nobody answered. They bounced. Another job gone.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CalendarX,
    title: "Someone wanted to book you.",
    description: "But your booking process was confusing. They gave up and called the bloke down the road instead.",
    color: "bg-amber-100 text-amber-600",
  },
];

const Problems = () => {
  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-20 bg-gray-light">
      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-title mb-3">
            Right now, you're <span className="text-[#E74C3C] underline decoration-2">losing jobs</span> you don't even know about.
          </h2>
          <p className="text-lg text-muted-foreground">
            While you're on a job site with dirty hands...
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border card-shadow hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 ${problem.color} rounded-xl flex items-center justify-center shrink-0`}>
                <problem.icon className="w-7 h-7" />
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
            Stop bleeding money. Start capturing every lead.
          </p>
          <Button size="lg" asChild>
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
