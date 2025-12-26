import { Button } from "@/components/ui/button";

const Results = () => {
  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground">
      <div className="container-padding max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          The numbers don't lie.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-24 mb-12">
          <div className="text-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
              &gt;35%
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-[200px]">
              Average increase in booked jobs
            </p>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-primary-foreground/20" />
          
          <div className="text-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
              5 min
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-[200px]">
              Average lead response time
            </p>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-primary-foreground/20" />
          
          <div className="text-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
              3x
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-[200px]">
              More Google reviews in 90 days
            </p>
          </div>
        </div>
        
        <Button variant="white" size="xl">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Results;
