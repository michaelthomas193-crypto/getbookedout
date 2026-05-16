import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-handyman.webp";

const Handyman = () => (
  <TradeLandingPage
    path="/handyman"
    metaTitle="AI Receptionist for Handyman Businesses Australia | Get Booked Out"
    metaDescription="The AI receptionist built for Australian handymen. Captures every odd-job, repair and maintenance enquiry, qualifies scope, books and chases reviews 24/7. From $99/week."
    schemaServiceName="AI Receptionist for Handyman Businesses"
    serviceType="AI receptionist and lead automation for handyman businesses"
    audienceType="Handyman"
    logo={logo}
    heroImage={heroImage}
    accentColor="#6D4C41"
    h1="AI Receptionist for Australian Handyman Businesses"
    heroOpenerH2={"\"Quick job\" turning into all day. Phone won't stop. Customers slipping away."}
    heroOpenerSub="Handles every type of enquiry, qualifies scope, books the job, chases reviews. 24/7."
    introParagraph="You're halfway through what was meant to be a one-hour job. Phone rings. Can't stop. Customer calls the next handyman. Get Booked Out is the AI receptionist built for Australian handyman businesses. It handles every type of enquiry — from a dripping tap to a full half-day list — qualifies the scope, books the job, and chases reviews after each one. From $99 a week."
    whatDoesH2="What the AI does for a handyman business"
    whatDoesBullets={[
      "Handles enquiries for repairs, installations, assembly, hanging, fixing, mounting, painting touch-ups, small renos",
      "Qualifies: list of tasks / estimated time / parts needed / access",
      "Books minimum-call-out jobs into your calendar",
      "Filters out jobs that need a licensed trade (electrical, plumbing, gas) and refers them politely",
      "Texts customers a \"before I arrive\" list",
      "Requests a Google review after each job",
    ]}
    numbersH2="The handyman-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "21× more likely to win the job under 5 minutes",
      "Handyman businesses lose more to missed calls than most trades because the job mix is high-volume and time-sensitive",
      "28 missed calls a week at $200 average = $11,200 in lost monthly revenue at 50% close",
    ]}
    realEnquiryH2="How it handles a real handyman enquiry"
    realEnquiryBody="A homeowner calls Sunday afternoon with a list — assemble flat-pack, hang four pictures, fix a sticking door. The AI captures the list, estimates time, books a Wednesday morning 3-hour slot, and texts you the brief."
    liveH2="Live in 48 hours"
  />
);
export default Handyman;
