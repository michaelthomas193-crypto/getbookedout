import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get set up?",
    answer: "Most businesses are up and running within 24-48 hours. We handle all the setup, integration, and customization so you can start capturing leads immediately.",
  },
  {
    question: "Do I need technical skills?",
    answer: "Not at all! Get Booked Out is designed for business owners, not developers. Our team handles all the technical work, and our dashboard is simple and intuitive.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work with any service-based business including trades (plumbers, electricians, HVAC), healthcare (dentists, physios), beauty (salons, spas), and professional services (accountants, lawyers).",
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible plans based on your business size and needs. All plans include unlimited AI conversations, booking automation, and review management. Book a demo to get a custom quote.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! We don't believe in lock-in contracts. You can cancel your subscription at any time with no penalties or hidden fees.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-padding max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Get Booked Out
          </p>
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
