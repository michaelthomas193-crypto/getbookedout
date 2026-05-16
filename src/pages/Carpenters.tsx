import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-carpenter.webp";

const Carpenters = () => (
  <TradeLandingPage
    path="/carpentry"
    metaTitle="AI Receptionist for Carpenters Australia | Get Booked Out"
    metaDescription="The AI receptionist built for Australian carpenters and chippies. Answers calls while you're on the tools. Quotes, books and chases reviews 24/7. From $99/week. No lock-in."
    schemaServiceName="AI Receptionist for Carpenters"
    serviceType="AI receptionist and lead automation for carpentry businesses"
    audienceType="Carpenters"
    logo={logo}
    heroImage={heroImage}
    accentColor="#8B4513"
    h1="AI Receptionist for Australian Carpenters"
    heroOpenerH2="Sawdust everywhere. Nail gun in hand. Phone ringing."
    heroOpenerSub="Answers every call. Sends pricing or a quote link. Books site visits into your calendar. 24/7."
    introParagraph="You're in the middle of a frame-up — nail gun in one hand, level in the other. Phone rings. You can't stop. The customer calls the next chippie on Google. 85% never call back. Get Booked Out is the AI receptionist built for Australian carpenters and chippies. It answers every call, asks the right qualifying questions for the type of job, sends pricing or a quote link, books jobs into your calendar, and chases reviews after every job. From $99 a week. No lock-in."
    whatDoesH2="What the AI does for a carpentry business"
    whatDoesBullets={[
      "Handles enquiries for decks, pergolas, fit-outs, doors, framing, custom joinery, repairs and renovations",
      "Qualifies scope: indoor / outdoor / size / materials / timeline",
      "Sends pricing guide or quote-request link by text",
      "Books site-visit appointments into your calendar",
      "Routes large commercial enquiries to you directly",
      "Chases a 5-star Google review when each job is marked complete",
    ]}
    numbersH2="The carpentry-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "21× more likely to win the job at a sub-5-minute response",
      "Average residential carpentry job in Australia: $400–$8,000",
      "One missed deck-build enquiry = a $15,000–$40,000 job gone to the next bloke",
    ]}
    realEnquiryH2="How it handles a real carpentry enquiry"
    realEnquiryBody="A homeowner calls Saturday afternoon wanting a quote for a pergola. The AI answers, asks size, location, timber preference and timeline, books a Tuesday 4pm site visit, and texts you the transcript with the customer's photos attached if they send them through."
    liveH2="Live in 48 hours"
  />
);
export default Carpenters;
