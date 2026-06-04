import { Star } from "lucide-react";

const GoogleLogo = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.2 5.2C40.9 36 44 30.6 44 24c0-1.3-.1-2.3-.4-3.5z" />
  </svg>
);

const reviews = [
  {
    name: "Joe McKenzie",
    role: "Trades2You",
    initial: "J",
    color: "from-blue-500 to-blue-700",
    date: "2 weeks ago",
    quote:
      "If I'm working on something technical or knocked off for the day I can't get to the phone. I knew it was costing me jobs. Get Booked Out fixed it without me having to hire someone. Absolute game changer.",
  },
  {
    name: "Lili Mansour",
    role: "Suite 3 Hair, Paddington",
    initial: "L",
    color: "from-pink-500 to-rose-600",
    date: "3 weeks ago",
    quote:
      "We are slammed back-to-back with clients all day. Now every missed call gets a text back instantly and the bookings just appear in our calendar. Don't know how we ran the salon without it.",
  },
  {
    name: "Sheen",
    role: "Sheen Hair Salon",
    initial: "S",
    color: "from-purple-500 to-fuchsia-600",
    date: "1 month ago",
    quote:
      "Honestly didn't expect it to be this good. The follow-ups bring back people we'd never have chased and the reviews have shot up. Worth every cent.",
  },
  {
    name: "Mark — Clean and Co",
    role: "Mobile car detailing",
    initial: "M",
    color: "from-emerald-500 to-teal-600",
    date: "1 month ago",
    quote:
      "I'm not a tech guy and the admin was driving me mad so I just ignored it. Now my life is organised for me and I focus on making money with less brain damage.",
  },
  {
    name: "Daniel — Car Farm",
    role: "Used car dealership",
    initial: "D",
    color: "from-amber-500 to-orange-600",
    date: "2 months ago",
    quote:
      "Sales is about speed and you can't have speed when you're with a customer. The first time we got a booking made for us while none of us were free we knew this would make us money.",
  },
  {
    name: "Priya K.",
    role: "Allied health clinic",
    initial: "P",
    color: "from-cyan-500 to-blue-600",
    date: "2 months ago",
    quote:
      "Reception used to be chaos between appointments. Now patients get answered instantly day or night and our no-show rate has dropped right off. Highly recommend.",
  },
];

const GoogleReviews = () => {
  return (
    <section id="reviews" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container-padding max-w-6xl mx-auto">
        {/* Summary header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-5">
            <GoogleLogo className="h-4 w-4" />
            <span className="text-xs font-semibold text-foreground tracking-wide">Reviewed on Google</span>
          </div>
          <h2 className="section-title mb-4">
            What our clients <span className="text-primary">actually say.</span>
          </h2>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <GoogleLogo className="h-8 w-8" />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Based on verified Google reviews</p>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <a
              href="https://www.google.com/search?q=Get+Booked+Out+reviews"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-semibold text-primary hover:underline"
            >
              See all reviews →
            </a>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative flex flex-col bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <GoogleLogo className="absolute top-5 right-5 h-5 w-5 opacity-90" />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.color} text-white font-bold flex items-center justify-center shadow-sm`}>
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs text-muted-foreground">{r.date}</span>
              </div>

              <p className="text-sm text-foreground leading-relaxed">
                {r.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
