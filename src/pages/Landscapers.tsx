import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-landscaping.webp";

const Landscapers = () => (
  <TradeLandingPage
    path="/landscaping"
    metaTitle="AI Receptionist for Landscapers Australia | Get Booked Out"
    metaDescription="The AI receptionist built for Australian landscapers. Captures backyard reno, paving, turf and garden enquiries while you're on site. Books quotes 24/7. From $99/week."
    schemaServiceName="AI Receptionist for Landscapers"
    serviceType="AI receptionist and lead automation for landscaping businesses"
    audienceType="Landscapers"
    logo={logo}
    heroImage={heroImage}
    accentColor="#2E7D32"
    h1="AI Receptionist for Australian Landscapers"
    heroOpenerH2="Knee-deep in a backyard reno. Phone ringing. Job slipping."
    heroOpenerSub="Captures backyard reno, paving, turf, irrigation and full design enquiries. Books quotes. 24/7."
    introParagraph="You're moving dirt, laying pavers, hands covered. Phone rings. By the time you wash up, the customer has called the next landscaper. Get Booked Out is the AI receptionist built for Australian landscapers and garden designers. It handles enquiries for backyard renovations, retaining walls, turf, irrigation, paving, garden maintenance and full design jobs — books quote appointments, qualifies budget, and chases Google reviews after every job. From $99 a week."
    whatDoesH2="What the AI does for a landscaping business"
    whatDoesBullets={[
      "Handles enquiries for full backyard renos, paving, retaining walls, turf, irrigation, garden design, maintenance and one-off jobs",
      "Qualifies: full design or quote-only / budget range / timeline / property size",
      "Filters out price-shoppers wanting a fixed quote over the phone with no site visit",
      "Books on-site consultations",
      "Sends customers a design portfolio link by text",
      "Requests a Google review after each job",
    ]}
    numbersH2="The landscaping-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "21× more likely to win the job under 5 minutes",
      "Average residential landscaping job in Australia: $3,000–$50,000+",
      "One lost full backyard reno = $20,000–$80,000 to the next landscaper",
    ]}
    realEnquiryH2="How it handles a real landscaping enquiry"
    realEnquiryBody="A homeowner calls on Sunday wanting a full backyard refresh — turf, retaining wall and a deck. The AI captures property address, rough budget, timeline, and books a Wednesday on-site consultation. You receive a complete brief before you arrive."
    liveH2="Live in 48 hours"
  />
);
export default Landscapers;
