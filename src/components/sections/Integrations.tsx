const integrations = [
  { name: "Google", icon: "G" },
  { name: "Facebook", icon: "f" },
  { name: "Instagram", icon: "📷" },
  { name: "Calendly", icon: "📅" },
  { name: "Stripe", icon: "S" },
  { name: "Square", icon: "□" },
];

const Integrations = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container-padding max-w-6xl mx-auto">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-10">
          Works with the tools you already use
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group flex flex-col items-center justify-center w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:text-primary group-hover:bg-accent transition-all duration-300">
                {integration.icon}
              </div>
              <span className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
