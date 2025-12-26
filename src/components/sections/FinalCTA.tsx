import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-padding max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          We've got the tech. You bring the expertise.
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Get the tools you need to grow your business effortlessly.
        </p>
        <Button variant="white" size="xl">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
