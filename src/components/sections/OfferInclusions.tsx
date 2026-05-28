import { Check } from "lucide-react";

const inclusions = [
  { title: "24/7 call answering", body: "Every call picked up in your business's voice — day, night, weekends." },
  { title: "Instant SMS & website chat replies", body: "New enquiries answered in seconds, before the lead goes cold." },
  { title: "Calendar booking integration", body: "Jobs dropped straight into Google Calendar, Outlook, or your job-management tool." },
  { title: "Missed-call text-back flows", body: "Automatic SMS recovery on any call you can't take." },
  { title: "Lead qualification", body: "AI captures the job, location, urgency and contact details — ready for you to run." },
  { title: "Review follow-up support", body: "Automated 5-star Google review requests after every completed job." },
];

const OfferInclusions = () => (
  <section id="whats-included" className="section-padding bg-background">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">What's included</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          Everything you need to stop losing jobs to missed calls.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {inclusions.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{i.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfferInclusions;
