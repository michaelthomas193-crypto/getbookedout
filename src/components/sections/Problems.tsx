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
    <section className="pt-6 md:pt-10 pb-10 md:pb-16 bg-gray-light">
      <div className="container-padding max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="section-title mb-2 md:mb-3">
            Right now, you're <span className="text-[#E74C3C] underline decoration-2">losing jobs</span> you don't even know about.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            While you're on a job site with dirty hands...
          </p>
        </div>

        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-row items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-xl border border-border card-shadow hover:shadow-lg transition-shadow"
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 ${problem.color} rounded-xl flex items-center justify-center shrink-0`}>
                <problem.icon className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="text-center bg-card rounded-xl p-6 md:p-8 border border-border card-shadow">
          <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
            Stop bleeding money. Start capturing every lead.
          </p>
          <Button size="lg" className="w-full sm:w-auto min-h-[48px]" asChild>
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;