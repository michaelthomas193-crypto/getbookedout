import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I see leads?",
    answer: "Most clients see their first qualified leads within 48-72 hours of campaign launch. Our rapid deployment process means we can have you up and running faster than any other provider in the market.",
  },
  {
    question: "What makes a lead 'qualified'?",
    answer: "Every lead is screened for: 1) Budget capability ($8k-$18k replacement range), 2) Timeline urgency (need service within 24-48 hours), 3) Decision-maker status (homeowner or authorised decision-maker), and 4) Property qualification (suitable for emergency HVAC replacement).",
  },
  {
    question: "Do I share leads with other HVAC companies?",
    answer: "Absolutely not. Every lead you receive is 100% exclusive to your business. We never resell or share leads with competitors. Your leads are yours and yours alone.",
  },
  {
    question: "What's the investment?",
    answer: "Our pricing is performance-based and tailored to your market and goals. We offer flexible packages starting from a simple pay-per-lead model to full-service managed campaigns. Book a strategy call to get a custom quote for your business.",
  },
  {
    question: "What if the leads don't convert?",
    answer: "We stand behind our lead quality with a satisfaction guarantee. If a lead doesn't meet our qualification criteria, we replace it at no cost. We're in the business of delivering booked jobs, not just contact information.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[hsl(var(--bg-light-blue))]">
      <div className="container-padding max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GetBookedOut
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-background px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg transition-all"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
