import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import founderImage from "@/assets/founder-michael.webp";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Section */}
      <section className="py-8 md:py-20 bg-secondary/40">
        <div className="container-padding max-w-3xl mx-auto">
          {/* Header - Photo centered on mobile, side-by-side on larger screens */}
          <div className="flex flex-col items-center gap-4 md:gap-8 mb-6 md:mb-10">
            {/* Circular Photo - Centered on mobile */}
            <img
              src={founderImage}
              alt="Michael, Founder of Get Booked Out"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover object-top shadow-lg flex-shrink-0"
            />

            {/* Headline - Centered */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">I Know Why Good Businesses</span>
                <br />
                <span className="text-primary">Lose Jobs</span>
              </h1>
            </div>
          </div>

          {/* Body Text */}
          <div className="text-foreground/90 space-y-4 md:space-y-5">
            <p className="text-base md:text-xl leading-relaxed">
              I'm Michael, the founder of Get Booked Out.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed">
              I've built a $17.5 million property portfolio. I've spent six figures on renovations. And I've lost count of how many times I've called a business, got no answer, and just moved on to the next one.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed">
              Here's what I kept seeing: Business owners who were incredible at what they do but terrible at answering the phone. People who could run a flawless service—but couldn't respond to an enquiry within 24 hours.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed">
              I'd call. No answer. I'd leave a voicemail. Nothing. I'd find someone else.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed">
              The frustrating part? I knew these businesses were losing jobs they didn't even know about. Not because they weren't good enough—but because they were too busy doing the work to answer the phone.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed font-semibold text-foreground">
              That's why I built Get Booked Out.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed">
              It's the system I wish every business I tried to hire had. Missed call? Instant text back. Website enquiry? Handled automatically. Reviews? Requested after every job.
            </p>
            
            <p className="text-base md:text-xl leading-relaxed font-semibold text-foreground">
              You focus on the work. We make sure the phone doesn't cost you jobs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-14 bg-background">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
            Want to See How It Works?
          </h2>
          <Link to="/get-started">
            <Button size="xl" className="w-full sm:w-auto min-h-[52px]">Let's Chat</Button>
          </Link>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default WhoWeAre;