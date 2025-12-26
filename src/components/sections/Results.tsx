import { Button } from "@/components/ui/button";

const results = [
  { value: ">35%", label: "Average increase in booked jobs" },
  { value: "5 min", label: "Average lead response time (industry avg: 42 hours)" },
  { value: "3x", label: "More Google reviews in the first 90 days" },
];

const Results = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-padding max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The numbers don't lie.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result) => (
            <div key={result.label}>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {result.value}
              </p>
              <p className="text-lg opacity-90">{result.label}</p>
            </div>
          ))}
        </div>
        
        <Button variant="white" size="xl">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Results;
