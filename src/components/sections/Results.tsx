import { Button } from "@/components/ui/button";

const results = [
  { value: ">35%", label: "increase in booking conversions" },
  { value: "200+", label: "hours saved per year on admin" },
];

const Results = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-padding max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {results.map((result) => (
            <div key={result.label}>
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                {result.value}
              </p>
              <p className="text-xl opacity-90">{result.label}</p>
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
