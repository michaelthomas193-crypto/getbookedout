import { Smartphone, Bell, MessageSquare, PhoneCall } from "lucide-react";

const features = [
  { icon: PhoneCall, label: "Live call summaries the moment a call ends" },
  { icon: MessageSquare, label: "Reply to leads via SMS straight from your phone" },
  { icon: Bell, label: "Instant push notifications for every new booking" },
];

const MobileApp = () => {
  return (
    <section className="section-padding bg-secondary/40 overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone mockup */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute inset-0 -m-8 rounded-[3rem] blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, hsl(var(--purple-glow) / 0.5), transparent 60%), radial-gradient(circle at 70% 70%, hsl(var(--purple-mid) / 0.4), transparent 60%)",
              }}
            />
            <div className="relative flex justify-center gap-4">
              {/* Phone 1 */}
              <div className="relative w-[220px] md:w-[260px] aspect-[9/19] rounded-[2.2rem] bg-foreground p-2 shadow-2xl rotate-[-6deg] -mr-6 mt-6">
                <div className="w-full h-full rounded-[1.8rem] bg-gradient-to-br from-[hsl(var(--purple-deep))] to-[hsl(var(--purple-mid))] p-4 flex flex-col gap-3 overflow-hidden">
                  <div className="text-white/70 text-[10px] font-medium tracking-wide uppercase">Recent calls</div>
                  {[
                    { name: "Sarah Mitchell", note: "Booked · Thu 1pm", time: "2m" },
                    { name: "+61 412 ••• 998", note: "Quote requested", time: "14m" },
                    { name: "James K.", note: "Voicemail", time: "1h" },
                  ].map((c) => (
                    <div key={c.name} className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-[11px] font-semibold">{c.name}</span>
                        <span className="text-white/50 text-[9px]">{c.time}</span>
                      </div>
                      <span className="text-white/70 text-[10px]">{c.note}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Phone 2 */}
              <div className="relative w-[220px] md:w-[260px] aspect-[9/19] rounded-[2.2rem] bg-foreground p-2 shadow-2xl rotate-[6deg] -ml-6">
                <div className="w-full h-full rounded-[1.8rem] bg-white p-4 flex flex-col gap-3 overflow-hidden">
                  <div className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">Call summary</div>
                  <div className="text-foreground text-[12px] font-bold">New booking · Sarah Mitchell</div>
                  <div className="bg-secondary rounded-xl p-2.5">
                    <p className="text-foreground/80 text-[10px] leading-snug">
                      Caller asked about opening hours and booked Thursday at 1pm. Confirmation sent.
                    </p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {["Booking", "New lead"].map((t) => (
                      <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>
                    ))}
                  </div>
                  <button className="mt-auto w-full rounded-xl bg-primary text-primary-foreground text-[11px] font-semibold py-2">
                    Call back
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              <Smartphone className="w-3 h-3" />
              Mobile app
            </div>
            <h2 className="section-title mb-4">
              Manage your calls <span className="text-primary">on the go.</span>
            </h2>
            <p className="section-subtitle mx-0 lg:max-w-none mb-6">
              Every call your AI receptionist handles is in your pocket within seconds. Read the transcript,
              listen to the recording, or text the lead back — all from one app.
            </p>
            <ul className="space-y-3 mb-7">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <span className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4" />
                  </span>
                  <span className="text-foreground text-base leading-relaxed pt-1">{f.label}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">iOS &amp; Android — included with every plan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
