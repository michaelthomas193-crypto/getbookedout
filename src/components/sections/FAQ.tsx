import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kinds of businesses is this for?",
    answer:
      "Any business with a phone. We work with home services, salons, clinics, legal practices, real estate, auto shops, cleaners, fitness studios, and more. If your customers call you and you sometimes can't pick up, this is for you.",
  },
  {
    question: "I'm not tech-savvy. Can I still use this?",
    answer:
      "Absolutely. We handle setup end-to-end. Your AI learns from your website automatically, you review and tweak the answers, and we connect everything to your phone. If you can use a smartphone, you can use Get Booked Out.",
  },
  {
    question: "How quickly will it be live?",
    answer:
      "Most businesses are up and taking calls within 48 hours. We do the heavy lifting — you just confirm the details and forward your number.",
  },
  {
    question: "Will my customers know it's AI?",
    answer:
      "The voice is natural enough that most callers don't realise. You can also pick a custom name and greeting so it sounds like part of your team.",
  },
  {
    question: "What happens to spam and sales calls?",
    answer:
      "Filtered out automatically. Robocalls, 1-800 numbers, and sales reps don't make it through to you — only real customers do.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Month-to-month, cancel any time. We'd rather earn your business every month than trap you in a contract.",
  },
  {
    question: "Can it book appointments straight into my calendar?",
    answer:
      "Yes — on the Complete plan and above. Works with Google Calendar, Calendly, Acuity, and most popular booking tools.",
  },
  {
    question: "How do you connect to our phone system?",
    answer:
      "Simple call forwarding. You keep your existing number — we give you instructions to forward unanswered or all calls to your AI receptionist. Takes about 2 minutes and works with every major carrier.",
  },
  {
    question: "Can I access call history, recordings, and transcripts?",
    answer:
      "Yes. Every call is logged with a full transcript, audio recording, AI-generated summary, and the caller's number. Available in your dashboard and the mobile app.",
  },
  {
    question: "Will I get notified when there's a new call or booking?",
    answer:
      "Instantly — by SMS, email, and push notification on the mobile app. You'll see the caller, what they wanted, and any actions taken before you even open the app.",
  },
  {
    question: "Do I need a developer to set this up?",
    answer:
      "No. We handle the setup end-to-end. No code, no integrations to wire up — just a 30-minute onboarding call and you're live.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We don't run free trials, but every plan is month-to-month with no lock-in. If it's not pulling its weight in the first 30 days, cancel and walk away — no questions asked.",
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
