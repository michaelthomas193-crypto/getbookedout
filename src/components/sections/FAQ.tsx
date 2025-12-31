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
        <div className="text-center mb-8 md:mb-16">
          <h2 className="section-title mb-3 md:mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-4 md:px-6 data-[state=open]:border-primary data-[state=open]:shadow-lg transition-all card-shadow"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors py-4 md:py-6 [&[data-state=open]]:text-primary [&>svg]:text-primary min-h-[48px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 md:pb-6 leading-relaxed text-sm md:text-base">
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