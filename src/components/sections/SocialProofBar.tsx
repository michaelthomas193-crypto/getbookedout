import { Star } from "lucide-react";

const quotes = [
  {
    text: "It's the real deal. We've tried all the others and this is the only one that's easy to set up and sounds so realistic.",
    author: "Crunch Fitness",
    role: "Franchisee",
  },
  {
    text: "I replaced my old answering service and the difference is noticeable.",
    author: "John",
    role: "First Class Luxury Limos",
  },
  {
    text: "I don't feel obligated to stop my current task because of getting distracted by a phone call.",
    author: "Crystal Clear Quotes",
    role: "Owner",
  },
];

const SocialProofBar = () => {
  return (
    <section className="py-12 md:py-16 bg-card border-y border-border">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            Trusted by hundreds of local businesses
          </h2>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10">
            <span className="font-bold text-primary">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[hsl(var(--warning))] text-[hsl(var(--warning))]" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">from 50+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {quotes.map((q) => (
            <figure
              key={q.author}
              className="p-5 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <blockquote className="text-sm md:text-base text-foreground leading-relaxed mb-4">
                "{q.text}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                  {q.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{q.author}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
