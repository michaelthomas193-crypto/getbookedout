const integrations = [
  "Google",
  "Facebook",
  "Instagram",
  "Calendly",
  "Stripe",
  "Square",
];

const Integrations = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-padding max-w-6xl mx-auto">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-10">
          Works with the tools you already use
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {integrations.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center w-28 h-12 bg-secondary rounded-lg text-muted-foreground font-medium grayscale hover:grayscale-0 transition-all"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
