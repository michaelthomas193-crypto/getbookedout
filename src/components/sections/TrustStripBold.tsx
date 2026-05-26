const items = [
  "More booked jobs.",
  "Fewer missed leads.",
  "Hours back every week.",
  "Done-for-you setup.",
];

const TrustStripBold = () => {
  return (
    <section aria-label="What you get" className="bg-muted border-y border-border">
      <div className="container-padding max-w-7xl mx-auto py-8 md:py-10">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 text-center md:text-left">
          {items.map((item) => (
            <li
              key={item}
              className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStripBold;
