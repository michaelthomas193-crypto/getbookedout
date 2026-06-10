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
    tagline: "Automation that handles enquiries, reminders and reviews",
    features: [
      "AI follow-up on every enquiry",
      "Automated reminders and confirmations",
      "Review automation — 5-stars sent to Google",
      "Built and run for you in GoHighLevel / LeadConnector",
    ],
    description:
      "AI follow-up and automation to handle enquiries, reminders and reviews. Perfect if you want automation without full AI reception.",
    highlighted: false,
    badge: null,
  },
  {
    name: "Complete",
    price: "$999",
    tagline: "Full AI receptionist, chat, automation and booking",
    features: [
      "Everything in Essentials",
      "AI receptionist answers calls and books jobs",
      "AI chat across website, Facebook and Instagram",
      "Calendar booking built into your workflow",
      "We build and run the whole stack for you",
    ],
    description:
      "Full AI receptionist, chat, automation and booking, built and run for you. Best for busy trades and service businesses who never want to miss another job.",
    highlighted: true,
    badge: "Most Popular",
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Get Booked Out AI for Service Businesses",
  description: "Done-for-you AI receptionist, chat and automation for tradies and service businesses. Built and run for you.",
  brand: { "@type": "Brand", name: "Get Booked Out" },
  offers: {
    "@type": "Offer",
    url: "https://www.getbookedout.com.au/pricing",
    priceCurrency: "AUD",
    price: "499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "499",
      priceCurrency: "AUD",
      unitText: "MONTH",
    },
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "Country", name: "Australia" },
  },
};

const includedList = [
  "AI receptionist that answers calls and books jobs",
  "AI chat across website, Facebook and Instagram",
  "Automated follow-up on every enquiry",
  "Reminders and confirmations to cut no-shows",
  "Review automation with 5-stars sent to Google",
  "Calendar booking built into your workflow",
  "Built and run for you in GoHighLevel / LeadConnector",
  "Done-for-you changes — tell us once, we update everything",
  "Ongoing monitoring and tweaks",
  "No lock-in contracts — cancel anytime",
];

const Pricing = () => {
  return (
    <>
      <SeoHead
        title="AI for Service Businesses Pricing — From $499/month | Get Booked Out"
        description="Simple plans. No lock-in. From $499/month for AI and automation built and run for you. AI receptionists, chat and booking that make you money and save you time."
        path="/pricing"
        jsonLd={pricingSchema}
      />
      <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-8 md:pt-32 md:pb-16 bg-background">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            Simple plans. No lock-in.
          </h1>
          <p className="text-base md:text-xl text-muted-foreground">
            AI for service businesses, built and run for you. AI receptionists, chat and automation that answer your calls, handle enquiries and fill your calendar while you stay on the tools.
          </p>
          <p className="text-base md:text-lg text-foreground mt-4 font-semibold">
            From $499/month. No lock-in. Cancel anytime.
          </p>
        </div>
      </section>

      {/* H2 */}
      <section className="pb-4 bg-background">
        <div className="container-padding max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Pick the plan that fits your business.
          </h2>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-8 md:pb-16 bg-background">
        <div className="container-padding max-w-5xl mx-auto">
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

          <div className="mt-8 md:mt-10 flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-primary/10 border-2 border-primary/20 px-4 py-4 sm:px-6 sm:py-5 max-w-2xl mx-auto">
            <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary text-center">
              Guaranteed $1000+ in revenue or your money back
            </span>
          </div>
        </div>
      </section>

      {/* H2: A full-time receptionist costs $50,000+. This does the same job for a fraction. */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            A full-time receptionist costs $50,000+. This does the same job for a fraction.
          </h2>
        </div>
      </section>

      {/* H2: What's included */}
      <section className="py-10 md:py-14 bg-secondary/30">
        <div className="container-padding max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
            What's included
          </h2>
          <ul className="space-y-3">
            {includedList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-base md:text-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* H2: Not sure if it fits? Let's talk. */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            Not sure if it fits? Let's talk.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Jump on a quick call. We'll help you figure out what makes sense for your business.
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
