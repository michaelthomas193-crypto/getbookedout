import { useEffect, useState } from "react";
import { Phone, MessageSquare, Globe, Calendar, Check } from "lucide-react";

/**
 * HeroMultiChannel
 * Visualises one AI receptionist handling 4 channels at once:
 * 1. Incoming phone call (answered)
 * 2. SMS conversation
 * 3. Website chat reply
 * 4. Appointment added to calendar
 */
const HeroMultiChannel = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => (t + 1) % 4), 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 80% 15%, hsl(285 80% 78% / 0.55), transparent 60%), radial-gradient(ellipse 80% 70% at 15% 85%, hsl(266 70% 42%), transparent 70%), linear-gradient(135deg, hsl(266 72% 55%) 0%, hsl(266 70% 48%) 50%, hsl(258 70% 38%) 100%)",
        }}
      />
      <div
        className="absolute -top-1/4 right-0 w-2/3 h-2/3 opacity-40 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(285 80% 80% / 0.55), transparent)" }}
      />

      {/* Channel cards - 4 corners */}
      <div className="absolute inset-0 p-4 md:p-6 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
        {/* 1. Incoming call (top-left) */}
        <ChannelCard active={tick === 0} icon={<Phone className="w-3.5 h-3.5" />} label="Call answered">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
              <Phone className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-foreground truncate">+61 4•• ••• 312</div>
              <div className="text-[10px] text-emerald-600 font-medium">Live · 0:42</div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-muted-foreground leading-snug">
            "Hi, thanks for calling — how can I help?"
          </div>
        </ChannelCard>

        {/* 2. SMS (top-right) */}
        <ChannelCard active={tick === 1} icon={<MessageSquare className="w-3.5 h-3.5" />} label="Text reply">
          <div className="space-y-1">
            <Bubble side="left">Can I book Thursday?</Bubble>
            <Bubble side="right">Yes! 10am, 1pm or 3:30pm?</Bubble>
          </div>
        </ChannelCard>

        {/* 3. Website chat (bottom-left) */}
        <ChannelCard active={tick === 2} icon={<Globe className="w-3.5 h-3.5" />} label="Website chat">
          <div className="space-y-1">
            <Bubble side="left">Do you service Bondi?</Bubble>
            <Bubble side="right">We sure do — want to book in?</Bubble>
          </div>
        </ChannelCard>

        {/* 4. Calendar (bottom-right) */}
        <ChannelCard active={tick === 3} icon={<Calendar className="w-3.5 h-3.5" />} label="Booked in">
          <div className="rounded-lg border border-border/60 bg-background/70 p-2">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold text-foreground">Thu 14 Nov</div>
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <div className="min-w-0">
                <div className="text-[10px] font-semibold text-foreground truncate">1:00 PM · New booking</div>
                <div className="text-[9px] text-muted-foreground truncate">Sarah M. · Confirmed</div>
              </div>
            </div>
          </div>
        </ChannelCard>
      </div>

      <style>{`
        @keyframes orbPulse {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes cardGlow {
          0%, 100% { box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
          50% { box-shadow: 0 12px 36px hsl(266 80% 60% / 0.55), 0 0 0 2px hsl(285 80% 80% / 0.5) inset; }
        }
      `}</style>
    </div>
  );
};

const ChannelCard = ({
  active,
  icon,
  label,
  children,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div
    className="relative rounded-2xl bg-white/95 backdrop-blur-md p-2.5 md:p-3 flex flex-col transition-transform duration-500"
    style={{
      animation: active ? "cardGlow 1.6s ease-in-out" : undefined,
      transform: active ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
    }}
  >
    <div className="flex items-center gap-1.5 mb-1.5">
      <span className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center">{icon}</span>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
    </div>
    <div className="flex-1 min-h-0">{children}</div>
  </div>
);

const Bubble = ({ side, children }: { side: "left" | "right"; children: React.ReactNode }) => (
  <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[90%] px-2 py-1 rounded-lg text-[10px] leading-snug ${
        side === "right"
          ? "bg-primary text-primary-foreground rounded-br-sm"
          : "bg-secondary text-foreground rounded-bl-sm"
      }`}
    >
      {children}
    </div>
  </div>
);

export default HeroMultiChannel;
