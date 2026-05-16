import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-concreter.webp";

const Concreters = () => (
  <TradeLandingPage
    path="/concreting"
    metaTitle="AI Receptionist for Concreters Australia | Get Booked Out"
    metaDescription="The AI receptionist built for Australian concreters. Captures driveway, slab and exposed-aggregate enquiries while you're mid-pour. Books quotes 24/7. From $99/week."
    schemaServiceName="AI Receptionist for Concreters"
    serviceType="AI receptionist and lead automation for concreting businesses"
    audienceType="Concreters"
    logo={logo}
    heroImage={heroImage}
    accentColor="#546E7A"
    h1="AI Receptionist for Australian Concreters"
    heroOpenerH2="Mid-pour. Phone ringing. Stop now and it's ruined."
    heroOpenerSub="Captures driveway, slab, footing, exposed-aggregate and decorative concrete enquiries. Books quotes. 24/7."
    introParagraph="You're finishing a slab. Mixer's running. Phone rings. Stop now and the pour is ruined — keep going and the customer calls the next concreter. Get Booked Out is the AI receptionist built for Australian concreters. It captures driveway, slab, footing, exposed-aggregate and decorative concrete enquiries, books on-site quote appointments, and chases reviews after every job. From $99 a week."
    whatDoesH2="What the AI does for a concreting business"
    whatDoesBullets={[
      "Handles enquiries for driveways, slabs, paths, footings, exposed aggregate, decorative finishes, polished concrete, removals",
      "Qualifies: square metres / finish type / reinforcement / access / timeline",
      "Filters out callers who just want a number over the phone with no site visit",
      "Books site-visit quote appointments",
      "Texts customers a \"preparing for a concrete pour\" link",
      "Requests a Google review when the slab is signed off",
    ]}
    numbersH2="The concreting-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "21× more likely to win the job at a sub-5-minute response",
      "Average residential concreting job in Australia: $3,500–$25,000",
      "One lost driveway = $6,000–$15,000 walking down the road",
    ]}
    realEnquiryH2="How it handles a real concreting enquiry"
    realEnquiryBody="A homeowner calls Saturday morning for a 60 m² driveway with exposed aggregate. The AI captures the details, sends a \"what to expect\" link, books a Tuesday 8am site visit, and pushes the brief to your phone."
    liveH2="Live in 48 hours"
  />
);
export default Concreters;
