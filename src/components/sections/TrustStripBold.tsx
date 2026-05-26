const items = [
  "More booked jobs.",
  "Fewer missed leads.",
  "Hours back every week.",
  "Done-for-you setup.",
];

const TrustStripBold = () => {
  return (
    <section aria-label="What you get" className="bg-muted border-y border-border">
      <div className="container-padding max-w-7xl mx-auto py-10 md:py-14">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 text-center">
          {items.map((item) => (
            <li
              key={item}
              className="whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-foreground leading-none"
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
