import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo-orange.png";
import heroImage from "@/assets/hero-electrical-landscape.webp";

const Electrical = () => (
  <TradeLandingPage
    path="/electrical"
    metaTitle="AI Receptionist for Electricians Australia | Get Booked Out"
    metaDescription="The AI receptionist built for Australian electricians. Answers calls while you're up a ladder or in a switchboard. Books jobs, qualifies leads and chases reviews 24/7. From $99/week."
    schemaServiceName="AI Receptionist for Electricians"
    serviceType="AI receptionist and lead automation for electrical businesses"
    audienceType="Electricians"
    logo={logo}
    heroImage={heroImage}
    accentColor="#F57C00"
    h1="AI Receptionist for Australian Electricians"
    heroOpenerH2="You're up a ladder. Your phone is ringing. Your customer is calling the next sparkie."
    heroOpenerSub="Answers every call. Qualifies the lead. Books the job. Chases the review. 24/7."
    introParagraph="You're in a switchboard with both hands full of cables. The phone rings. You can't safely answer. By the time you can, the customer has called another sparkie. 85% of missed calls don't call back. Get Booked Out is the AI receptionist built specifically for Australian electricians. It answers every call you can't, qualifies the lead, books the job into your calendar and chases a 5-star Google review when the job is done. From $99 a week. No lock-in."
    whatDoesH2="What the AI does for an electrical business"
    whatDoesBullets={[
      "Answers calls about powerpoints, switchboards, lighting, safety switches, EV chargers, solar issues, ceiling fans and emergency outages",
      "Qualifies: residential or commercial? RCD tripping? Smell of burning? Power off?",
      "Quotes a standard call-out fee so you don't waste a job on a 5-minute fix",
      "Books the job and confirms availability",
      "Pushes emergency / no-power calls straight to your phone",
      "Filters energy retailer / solar / sales / spam calls",
      "Requests a Google review after every job",
    ]}
    numbersH2="The electrical-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "21× more likely to win the job if you respond in under 5 minutes",
      "Average residential electrical job in Australia: $250–$900",
      "28 missed calls a week = $14,000 to $34,000 a month in lost revenue",
    ]}
    realEnquiryH2="How it handles a real electrical enquiry"
    realEnquiryBody="A landlord calls at 6:42am because tenants have no power. The AI answers in two rings, confirms the address, asks if the switchboard has tripped, books a 7:30am emergency slot, texts you the transcript, and flags it as urgent so it pushes through Do Not Disturb. You're paid before 9am."
    liveH2="Live in 48 hours"
  />
);
export default Electrical;
