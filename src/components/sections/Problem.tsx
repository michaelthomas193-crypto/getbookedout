import { PhoneOff, Clock, MoonStar, Flame, Star, Wallet } from "lucide-react";

const pains = [
  {
    icon: PhoneOff,
    title: "Every missed call is a job for your competitor",
    body: "Most callers won't leave a voicemail — they just ring the next business on Google. That's revenue walking out the door.",
  },
  {
    icon: Clock,
    title: "Slow replies kill hot leads stone dead",
    body: "Most enquiries go cold inside 5 minutes. By the time you wipe your hands and reply, they've already booked someone else.",
  },
  {
    icon: MoonStar,
    title: "Nights and weekends bleed revenue silently",
    body: "Most trade enquiries land outside business hours. While you're at dinner, your competitors are answering and booking.",
  },
  {
    icon: Flame,
    title: "You're burning out doing admin you hate",
    body: "Voicemails, callbacks, quotes, follow-ups. Hours every week on unpaid admin instead of on the tools — or with your family.",
  },
  {
    icon: Star,
    title: "Ghosted customers tank your reputation",
    body: "Every ignored enquiry is a potential 1-star review or 'never got back to me' Facebook post. Trust takes years to build, minutes to lose.",
  },
  {
    icon: Wallet,
    title: "You paid for those leads — twice",
    body: "Google Ads, Facebook, SEO, vehicle wraps. Every missed lead is money you already spent to win, then chucked in the bin.",
  },
];

const Problem = () => (
  <section className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">What's quietly costing you a fortune</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          You're losing jobs you already paid to win — and you probably don't even know it.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {pains.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
