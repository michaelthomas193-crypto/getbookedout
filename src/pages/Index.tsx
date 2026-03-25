import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Get Booked Out",
  "image": "https://getbookedout.com.au/og-image.png",
  "url": "https://getbookedout.com.au",
  "description": "AI that converts leads into booked appointments while you sleep. Automate lead responses, bookings, and reviews for service businesses.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Michael Torres" },
      "datePublished": "2025-01-15",
      "reviewBody": "Within the first week, we had 12 qualified leads. By month two, we'd closed $87,000 in jobs. Get Booked Out changed our business.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sarah Chen" },
      "datePublished": "2025-02-10",
      "reviewBody": "No more chasing leads or wasting time on tyre-kickers. Every call we get is from a homeowner ready to buy. Our close rate jumped from 40% to 72%.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "David Walsh" },
      "datePublished": "2025-03-05",
      "reviewBody": "I used to lose half my leads because I couldn't answer the phone on a job. Now every single one gets handled. I've hired two extra blokes just to keep up with the work.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Emma Davis" },
      "datePublished": "2025-01-28",
      "reviewBody": "The review automation alone has boosted our Google rating from 4.1 to 4.8 stars. Customers find us way easier now.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "James Thompson" },
      "datePublished": "2025-02-20",
      "reviewBody": "Finally, a system that actually works! Setup was painless and the results were immediate. Best investment we've made.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Therese Smith" },
      "datePublished": "2025-03-10",
      "reviewBody": "I honestly didn't know where to start with AI on my business model but I knew I needed it. Thank you so so much for streamlining the process and making it easy for me!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "John" },
      "datePublished": "2025-03-12",
      "reviewBody": "Didn't think it would be this easy managing my schedule with clients! With the help of their AI system, I've got a 24/7 receptionist and more! Highly recommended 10/10",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jayson" },
      "datePublished": "2025-03-15",
      "reviewBody": "I have no idea how to use AI for my business so using Get Booked Out was a super helpful and affordable way to take advantage of the new tech! Thank you Jesse!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <Header />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
