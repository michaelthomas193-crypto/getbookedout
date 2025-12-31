import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import founderImage from "@/assets/founder-michael.png";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            I've Been On the Other Side of Your Missed Calls
          </h1>
          
          {/* Founder Photo */}
          <div className="flex justify-center mb-12">
            <img
              src={founderImage}
              alt="Michael, Founder of Get Booked Out"
              className="w-64 md:w-80 lg:w-96 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="section-padding bg-background">
        <div className="container-padding max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
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
      <section className="section-padding bg-secondary/30">
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
