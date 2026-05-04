import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const NeverMissEnquiry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Never Miss an Enquiry Again | Get Booked Out</title>
        <meta
          name="description"
          content="Even 1 missed enquiry loses you money. See how Get Booked Out ensures every lead is captured and converted — even when you're busy with customers."
        />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-10 bg-secondary/30">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Never Miss an Enquiry Again
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Even <span className="text-primary font-semibold">1 missed enquiry</span> loses you money. Watch how we make sure that never happens.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video"
              poster=""
            >
              <source src="/videos/never-miss-enquiry.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Stop Losing Jobs to Missed Calls
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get Booked Out captures every enquiry — 24/7, even when you're busy with customers.
          </p>
          <Link to="/get-started">
            <Button variant="white" size="xl">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default NeverMissEnquiry;
