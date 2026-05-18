import { PhoneCall, Timer, CalendarCheck, Inbox, Smile, Moon } from "lucide-react";

const benefits = [
  { icon: PhoneCall, title: "More calls answered", body: "Every ring picked up — no voicemail, no lost leads." },
  { icon: Timer, title: "Faster lead response", body: "Replies in seconds, not hours. Beat your competitors to the booking." },
  { icon: CalendarCheck, title: "More jobs booked", body: "Qualified leads dropped straight into your calendar, ready to work." },
  { icon: Inbox, title: "Less admin chaos", body: "No more chasing voicemails, callbacks or scribbled job notes." },
  { icon: Smile, title: "Better customer experience", body: "Customers get a fast, professional response every single time." },
  { icon: Moon, title: "24/7 coverage", body: "Nights, weekends, public holidays — covered, without hiring." },
];

const Benefits = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">The outcome</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          What changes when every lead gets answered fast.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {benefits.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
            <Icon className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
