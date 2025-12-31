import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import founderImage from "@/assets/founder-michael.png";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-secondary/40">
        <div className="container-padding max-w-3xl mx-auto">
          {/* Header - Photo + Headline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 mb-10 md:mb-12">
            {/* Circular Photo */}
            <img
              src={founderImage}
              alt="Michael, Founder of Get Booked Out"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top shadow-lg flex-shrink-0"
            />

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center sm:text-left">
              <span className="text-foreground">I've Been On the Other Side of Your </span>
              <span className="text-primary">Missed Calls</span>
            </h1>
          </div>

          {/* Body Text */}
          <div className="text-muted-foreground space-y-5">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm Michael, the founder of Get Booked Out.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              I've built a $17.5 million property portfolio. I've spent six figures on renovations. And I've lost count of how many times I've called a tradie, got no answer, and just moved on to the next one.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Here's what I kept seeing: Tradies who were incredible at their craft but terrible at answering the phone. Guys who could rewire a house or tile a bathroom perfectly—but couldn't respond to an enquiry within 24 hours.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              I'd call. No answer. I'd leave a voicemail. Nothing. I'd find someone else.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              The frustrating part? I knew these tradies were losing jobs they didn't even know about. Not because they weren't good enough—but because they were too busy doing the work to answer the phone.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-semibold text-foreground">
              That's why I built Get Booked Out.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              It's the system I wish every tradie I tried to hire had. Missed call? Instant text back. Website enquiry? Handled automatically. Reviews? Requested after every job.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-semibold text-foreground">
              You focus on the tools. We make sure the phone doesn't cost you jobs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Want to See How It Works?
          </h2>
          <Link to="/#hero-form">
            <Button size="xl">Let's Chat</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
