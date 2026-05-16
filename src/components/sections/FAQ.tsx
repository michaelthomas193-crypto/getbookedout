import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is software that answers phone calls and website enquiries on behalf of your business using natural-sounding voice and text. Get Booked Out's AI is trained on your business — your prices, hours, services and FAQs — so it talks to customers exactly the way you would, books their appointments straight into your calendar, and texts you a transcript the moment the call ends.",
  },
  {
    question: "How much does an AI receptionist cost in Australia?",
    answer:
      "Get Booked Out starts at $99 per week with no lock-in contracts. That is roughly one-tenth the cost of a full-time receptionist (around $50,000–$65,000 per year in Australia) and works 24 hours a day, including weekends and public holidays.",
  },
  {
    question: "Will customers know they're talking to AI?",
    answer:
      "Most customers cannot tell. The AI is trained on natural Australian conversational patterns and responds in real time. We always tell you on setup whether you want the AI to identify itself as an AI assistant or simply as your business — your choice.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "The AI transfers the call to you (or any team member you nominate), or texts the customer to say a human will call them back shortly. You get a notification with the full transcript so you can follow up instantly.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under 48 hours. We onboard your business, train the AI on your services and pricing, set up your call forwarding and review automation, and run a test call with you before going live.",
  },
  {
    question: "Does it work for plumbers / electricians / [my trade]?",
    answer:
      "Yes. Get Booked Out is built specifically for Australian tradies. We have purpose-built configurations for plumbing, electrical, carpentry, painting, landscaping, concreting and handyman businesses — see the dedicated page for your trade for examples.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No lock-in contracts. If the AI does not pay for itself in your first month, you do not pay.",
  },
  {
    question: "What CRMs and tools does it integrate with?",
    answer:
      "Get Booked Out integrates with Google Calendar, Outlook, Go High Level, ServiceM8, Tradify, AroFlo, simPRO, Jobber, Housecall Pro and most major job-management platforms. If you use something custom, we'll connect it via API or Zapier.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-lavender">
      <div className="container-padding max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title mb-3">Frequently asked questions</h2>
          <p className="section-subtitle">Everything you need to know before getting started.</p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-5 md:px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary [&>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm md:text-base">
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
