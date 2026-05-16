import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-plumbing.webp";

const Plumbing = () => (
  <TradeLandingPage
    path="/plumbing"
    metaTitle="AI Receptionist for Plumbers Australia | Never Miss a Job | Get Booked Out"
    metaDescription="The AI receptionist built for Australian plumbers. Answers calls while you're under a house, texts customers back instantly, books jobs into your calendar 24/7. From $99/week."
    schemaServiceName="AI Receptionist for Plumbers"
    serviceType="AI receptionist and lead automation for plumbing businesses"
    audienceType="Plumbers"
    logo={logo}
    heroImage={heroImage}
    accentColor="#2B8BBF"
    h1="AI Receptionist for Australian Plumbers"
    heroOpenerH2="You're under a house. Your phone is ringing. Your competitor is answering theirs."
    heroOpenerSub="Answers every call. Texts customers back instantly. Books jobs into your calendar. Chases 5-star Google reviews. 24/7."
    introParagraph="You're elbow-deep in a blocked drain. The phone rings. You can't pick up. The customer hangs up and calls the next plumber on Google. 85% of those callers never call back — they've already booked someone else by the time you're back in the truck. Get Booked Out is the AI receptionist built specifically for Australian plumbers. It answers every call you can't, texts customers back the moment you miss a call, handles after-hours emergency enquiries, books jobs straight into your calendar, and chases a 5-star Google review after every job. From $99 a week. No lock-in."
    whatDoesH2="What the AI does for a plumbing business"
    whatDoesBullets={[
      "Answers calls about blocked drains, hot water systems, leaks, burst pipes, gas fitting and emergencies",
      "Asks the right qualifying questions: \"Is water still running? Is it inside or outside? When did it start?\"",
      "Quotes a standard call-out fee from your pricing sheet so you don't waste time on tyre-kickers",
      "Books the job into your calendar and sends you the transcript",
      "After-hours emergency calls flagged as urgent and pushed straight to your phone",
      "Filters out solar / sales / spam calls",
      "Texts every customer for a Google review when the job is marked complete",
    ]}
    numbersH2="The plumbing-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "Plumbers responding in under 5 minutes are 21× more likely to win the job",
      "Average emergency plumbing job in Australia: $350–$1,200",
      "Missing 4 calls a week at a $500 average job = $24,000 a month in lost revenue (at 50% close rate)",
    ]}
    realEnquiryH2="How it handles a real plumbing enquiry"
    realEnquiryBody="A homeowner calls at 9:47pm with a burst pipe. The AI answers in two rings, asks the four qualifying questions, flags it as an emergency, books a 7am next-day slot if you've set after-hours emergencies to call-back-only, and texts you the full transcript with a one-tap call-back link. You wake up to a confirmed job."
    liveH2="Setup in 48 hours. Live before your next job."
  />
);
export default Plumbing;
