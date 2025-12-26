import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I'm not tech-savvy. Can I still use this?",
    answer: "Absolutely. We set everything up for you. If you can use a smartphone, you can use Get Booked Out.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most businesses see their first automated leads within the first week. ROI typically shows within 30 days.",
  },
  {
    question: "What types of businesses do you work with?",
    answer: "Any service-based business: HVAC, plumbing, electrical, landscaping, cleaning, pool services, pest control, and more.",
  },
  {
    question: "How much does it cost?",
    answer: "Plans start from $297/month. Book a demo and we'll show you the ROI calculator — most clients make their money back from just 1-2 extra jobs per month.",
  },
  {
    question: "Is there a lock-in contract?",
    answer: "No. Month-to-month. Cancel anytime. We believe in earning your business, not trapping you.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-padding max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg transition-all card-shadow"
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
