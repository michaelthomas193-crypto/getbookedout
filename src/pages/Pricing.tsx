import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    tagline: "Stop Losing Jobs to Missed Calls",
    features: [
      "Professional landing page that actually converts enquiries",
      "Missed call text-back — every unanswered call gets an instant response",
      "Automatic review requests after every job",
    ],
    description:
      "You're on a job. Phone rings. Can't answer. Instead of losing that customer to the next bloke on Google, they get a text in seconds. You follow up when you're ready.",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$499",
    tagline: "Never Miss an Enquiry — Even at 10pm on a Saturday",
    features: [
      "Everything in Starter",
      "AI Chatbot — answers questions, captures details, books jobs 24/7",
    ],
    description:
      "Enquiries don't stop at 5pm. Your website chat handles the late-night browsers, the weekend planners, and the 'just quickly checking' customers — so you wake up to qualified jobs in your calendar.",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$749",
    tagline: "Your Own Receptionist — Without the Salary",
    features: [
      "Everything in Growth",
      "AI Receptionist — answers calls, handles customer service, books appointments",
    ],
    description:
      "A full-time receptionist costs $50k+ a year. This does the same job for a fraction of the price — answers your phone, books jobs, filters tyre-kickers — while you stay on the tools.",
    highlighted: false,
    badge: null,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-background">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple Pricing. No Lock-In Contracts.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Cancel anytime. We earn your business every month.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col h-full transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary border-2 shadow-lg md:scale-105 z-10"
                    : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {plan.tagline}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {plan.description}
                  </p>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <a href="/#hero">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage Costs Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            AI and texting usage billed at cost — typically $10-50/month
            depending on volume.
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Plan Fits?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Jump on a quick call. We'll help you figure out what makes sense
            for your business.
          </p>
          <Button size="xl" asChild>
            <a href="/#hero">Let's Chat</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
