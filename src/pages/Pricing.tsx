import Header from "@/components/sections/Header";
import SeoHead from "@/components/SeoHead";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const pricingPlans = [
  {
    name: "Essentials",
    price: "$499",
    tagline: "Stop Losing Jobs to Missed Calls",
    features: [
      "AI Chatbot — answers enquiries 24/7 on your website",
      "Missed Call Text-Back — every unanswered call gets an instant response",
    ],
    description:
      "You're on a job. Phone rings. Can't answer. Instead of losing that customer to the next bloke on Google, they get a text in seconds. Your website chat handles the late-night browsers and weekend enquiries — so you wake up to jobs, not missed opportunities.",
    highlighted: false,
    badge: null,
  },
  {
    name: "Complete",
    price: "$999",
    tagline: "Your Own Receptionist — Without the Salary",
    features: [
      "Everything in Essentials",
      "AI Receptionist — answers calls, handles customer service, books appointments",
      "Calendar Integration — customers book directly into your calendar",
      "Google Review Automation — automatic requests after every job, only 5-stars go to Google",
    ],
    description:
      "A full-time receptionist costs $50k+ a year. This does the same job for a fraction of the price — answers your phone, books jobs, filters tyre-kickers, and builds your Google reviews — while you stay focused on the work.",
    highlighted: true,
    badge: "Most Popular",
  },
];

const Pricing = () => {
  return (
    <>
      <SeoHead title="AI Receptionist Pricing Australia — From $99/week | Get Booked Out" description="Simple AI receptionist pricing for Australian service businesses. Essentials $499/mo, Complete $999/mo. No lock-in, money-back guarantee." path="/pricing" />
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
        <div className="container-padding max-w-5xl mx-auto">
          {/* Stack on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col h-full transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary border-2 shadow-xl md:scale-[1.02] z-10 ring-4 ring-primary/10"
                    : "border-border shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-3 md:pb-4 pt-8 md:pt-10">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {plan.name}
                  </h3>
                  <div className="mb-3 md:mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-lg">/month</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-primary">
                    {plan.tagline}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col px-5 md:px-8">
                  <ul className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 flex-1 leading-relaxed">
                    {plan.description}
                  </p>
                  <Button
                    className="w-full min-h-[52px]"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="xl"
                    asChild
                  >
                    <a href="/#hero">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Money-Back Guarantee */}
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-primary/10 border-2 border-primary/20 px-4 py-4 sm:px-6 sm:py-5 max-w-2xl mx-auto">
            <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary text-center">
              Guaranteed $1000+ in revenue or your money back
            </span>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
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
  </>
  );
};

export default Pricing;
