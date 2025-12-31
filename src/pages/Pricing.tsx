import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import MobileStickyCTA from "@/components/MobileStickyCTA";

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
    order: 2,
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
    order: 1, // Show first on mobile
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
    order: 3,
  },
];

const Pricing = () => {
  // Sort plans for mobile - Most Popular first
  const sortedPlans = [...pricingPlans].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-8 md:pt-32 md:pb-16 bg-background">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            Simple Pricing. No Lock-In Contracts.
          </h1>
          <p className="text-base md:text-xl text-muted-foreground">
            Cancel anytime. We earn your business every month.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-8 md:pb-16 bg-background">
        <div className="container-padding max-w-6xl mx-auto">
          {/* Stack on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
            {/* On mobile, use sorted order. On desktop, use original order */}
            {sortedPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col h-full transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary border-2 shadow-lg md:scale-105 z-10"
                    : "border-border"
                } ${plan.order === 1 ? 'order-first md:order-none' : ''}`}
                style={{ order: window.innerWidth < 768 ? plan.order : undefined }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-3 md:pb-4 pt-6 md:pt-8">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2 md:mb-3">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-primary">
                    {plan.tagline}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 flex-1 leading-relaxed">
                    {plan.description}
                  </p>
                  <Button
                    className="w-full min-h-[48px]"
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
          <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 md:mt-8">
            AI and texting usage billed at cost — typically $10-50/month
            depending on volume.
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-10 md:py-16 bg-secondary/30">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            Not Sure Which Plan Fits?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Jump on a quick call. We'll help you figure out what makes sense
            for your business.
          </p>
          <Button size="xl" className="w-full sm:w-auto min-h-[52px]" asChild>
            <a href="/#hero">Let's Chat</a>
          </Button>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Pricing;