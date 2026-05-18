import { Star, Check, MessageSquare, Calendar, Phone } from "lucide-react";

const Proof = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-padding max-w-6xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">Proof</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          What it looks like in the real world.
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Real workflows from Australian service businesses using Get Booked Out — calls answered, messages replied to, jobs booked.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Review card */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-4">
            Google review placeholder — real customer reviews will appear here once published.
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">GR</div>
            <div>
              <p className="text-xs font-semibold text-foreground">Verified customer</p>
              <p className="text-[11px] text-muted-foreground">Google review</p>
            </div>
          </div>
        </div>

        {/* Booking confirmation */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-emerald-600" />
            </div>
            <p className="text-sm font-semibold text-foreground">Booking confirmed</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Customer</span><span className="font-medium text-foreground">Sarah M.</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span className="font-medium text-foreground">Blocked drain</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">When</span><span className="font-medium text-foreground">Tue · 8:30 am</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Source</span><span className="font-medium text-foreground">Inbound call</span></div>
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <Check className="h-3.5 w-3.5" strokeWidth={3} /> Synced to calendar
          </div>
        </div>

        {/* SMS reply */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Instant SMS reply · 4s</p>
          </div>
          <div className="space-y-2">
            <div className="bg-muted/60 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-foreground max-w-[85%]">
              Hi, do you do same-day fence repairs?
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-3 py-2 text-sm max-w-[85%] ml-auto">
              Yes — can have someone out today. What's the address?
            </div>
          </div>
        </div>

        {/* Missed-call text-back */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Missed-call text-back</p>
          </div>
          <p className="text-sm text-muted-foreground mb-3">When you can't answer, a text goes out in seconds:</p>
          <div className="bg-muted/60 rounded-xl p-3 text-sm text-foreground leading-relaxed">
            "Hi, sorry we missed you. This is Get Booked Out. What can we help with?"
          </div>
        </div>

        {/* Before / after */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm font-semibold text-foreground mb-4">Before → After</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-muted/60 p-3">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Before</p>
              <p className="text-foreground">14 missed calls last week</p>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <p className="text-[11px] uppercase tracking-wider text-primary mb-2">After</p>
              <p className="text-foreground font-semibold">0 missed · 11 booked</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Illustrative placeholder — replace with real customer data.</p>
        </div>

        {/* Case study */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Case study</p>
          <h3 className="text-base font-semibold text-foreground mb-2">Sydney plumber, solo operator</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Case study placeholder — real customer story (industry, location, outcome) will go here.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Proof;
