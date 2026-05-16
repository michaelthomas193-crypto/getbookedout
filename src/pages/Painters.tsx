import TradeLandingPage from "@/components/TradeLandingPage";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-painting.webp";

const Painters = () => (
  <TradeLandingPage
    path="/painting"
    metaTitle="AI Receptionist for Painters Australia | Get Booked Out"
    metaDescription="The AI receptionist built for Australian painters. Captures every enquiry while you're up a ladder, books quotes and chases reviews 24/7. From $99/week. No lock-in."
    schemaServiceName="AI Receptionist for Painters"
    serviceType="AI receptionist and lead automation for painting businesses"
    audienceType="Painters"
    logo={logo}
    heroImage={heroImage}
    accentColor="#1976D2"
    h1="AI Receptionist for Australian Painters"
    heroOpenerH2="Roller in hand. Phone ringing. Quote going to the next painter."
    heroOpenerSub="Captures every interior, exterior, commercial and repaint enquiry. Books site-visit quotes. 24/7."
    introParagraph="You're up a ladder with a roller in hand. Phone rings. You can't answer. The customer calls the next painter on Google. Get Booked Out is the AI receptionist built for Australian painters. It captures every interior, exterior, commercial and repaint enquiry, books site-visit quotes, sends colour-consultation booking links, and chases 5-star Google reviews when the job is done. From $99 a week."
    whatDoesH2="What the AI does for a painting business"
    whatDoesBullets={[
      "Handles enquiries for interior, exterior, repaints, new-builds, commercial and strata jobs",
      "Qualifies scope: how many rooms / square metres / one coat or two / preparation level / timeline",
      "Books on-site quote appointments straight into your calendar",
      "Sends customers a \"what to expect\" link by text before the visit",
      "Filters one-off DIY tyre-kickers asking for free advice",
      "Chases reviews after every job",
    ]}
    numbersH2="The painting-specific numbers"
    numbersBullets={[
      "85% of missed calls never call back",
      "21× more likely to win the job at a sub-5-minute response",
      "Average residential painting job in Australia: $1,500–$15,000",
      "One lost full-exterior repaint = $8,000–$20,000 walking out the door",
    ]}
    realEnquiryH2="How it handles a real painting enquiry"
    realEnquiryBody="A homeowner calls Friday evening wanting a quote for a 3-bedroom interior repaint. The AI captures the details, asks about ceilings, doors, prep level and preferred timeline, books a Monday 10am quote slot, and texts you a summary before you start the day."
    liveH2="Live in 48 hours"
  />
);
export default Painters;
