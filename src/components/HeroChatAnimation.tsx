import { useEffect, useRef, useState } from "react";
import { Phone, PhoneOff, PhoneIncoming } from "lucide-react";

type Bubble = {
  side: "left" | "right";
  text: string;
};

const conversation: Bubble[] = [
  { side: "right", text: "Hey, this is Sarah — thanks for calling! I'm just with a client. How can I help?" },
  { side: "left", text: "Hey Sarah, I was hoping you could tell me what time you open?" },
  { side: "right", text: "Of course! We're open Monday to Friday, 8am to 6pm, and Saturdays 9am to 1pm." },
  { side: "left", text: "Perfect. Any chance I could book in this Thursday?" },
  { side: "right", text: "Absolutely. I've got 10am, 1pm or 3:30pm available — what suits you best?" },
  { side: "left", text: "Let's do 1pm please." },
  { side: "right", text: "✅ Booked! Thursday at 1pm. You'll get a confirmation text and email shortly." },
];

type Phase = "incoming" | "chat";

const HeroChatAnimation = () => {
  const [phase, setPhase] = useState<Phase>("incoming");
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever a new bubble appears
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleCount, typing]);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      while (!cancelled) {
        // 1. Incoming call screen (shakes for attention)
        setPhase("incoming");
        setVisibleCount(0);
        setTyping(false);
        await wait(2600);
        if (cancelled) return;

        // 2. Switch to chat
        setPhase("chat");
        await wait(500);

        // 3. Play through messages
        for (let i = 0; i < conversation.length; i++) {
          if (cancelled) return;
          setTyping(true);
          await wait(1100);
          if (cancelled) return;
          setTyping(false);
          setVisibleCount(i + 1);
          await wait(1900);
        }

        // 4. Hold the completed conversation
        await wait(2600);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
      {/* Layered purple gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 80% 20%, hsl(var(--purple-glow) / 0.55), transparent 60%), radial-gradient(ellipse 80% 70% at 20% 80%, hsl(var(--purple-deep)), transparent 70%), linear-gradient(135deg, hsl(var(--purple-deep)) 0%, hsl(var(--purple-mid)) 50%, hsl(256 70% 22%) 100%)",
        }}
      />
      {/* Soft light streak */}
      <div
        className="absolute -top-1/4 right-0 w-2/3 h-2/3 opacity-50 blur-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--purple-glow) / 0.6), transparent)",
        }}
      />

      {/* === INCOMING CALL SCREEN === */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between p-8 md:p-10 transition-opacity duration-500 ${
          phase === "incoming" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider mt-2">
          <PhoneIncoming className="w-3.5 h-3.5" />
          Incoming call
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          {/* Avatar with pulsing rings + shake */}
          <div className="relative" style={{ animation: phase === "incoming" ? "ringShake 0.9s ease-in-out infinite" : "none" }}>
            <span className="absolute inset-0 rounded-full bg-white/20" style={{ animation: "ringPulse 2s ease-out infinite" }} />
            <span className="absolute inset-0 rounded-full bg-white/15" style={{ animation: "ringPulse 2s ease-out infinite", animationDelay: "0.6s" }} />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
              <Phone className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </div>
          <div className="text-white">
            <div className="text-2xl md:text-3xl font-semibold tracking-tight">Customer calling…</div>
            <div className="text-sm md:text-base text-white/70 mt-1">+61 4•• ••• 312</div>
          </div>
        </div>

        {/* Faux call action buttons */}
        <div className="flex items-center gap-10 mb-2">
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
            <PhoneOff className="w-6 h-6 text-white" />
          </div>
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg" style={{ animation: "answerPulse 1.4s ease-in-out infinite" }}>
            <Phone className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* === CHAT SCREEN === */}
      <div
        className={`absolute inset-0 flex flex-col transition-opacity duration-500 ${
          phase === "chat" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Scrollable bubble stack */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-hidden flex flex-col justify-end p-6 md:p-8 pt-16 md:pt-20 gap-3 scroll-smooth"
        >
          {conversation.slice(0, visibleCount).map((b, i) => (
            <div
              key={i}
              className={`flex ${b.side === "right" ? "justify-end" : "justify-start"}`}
              style={{ animation: "bubbleIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both" }}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm md:text-[15px] leading-snug shadow-lg backdrop-blur-md ${
                  b.side === "right"
                    ? "bg-white/95 text-foreground rounded-br-md"
                    : "bg-white/15 text-white border border-white/20 rounded-bl-md"
                }`}
              >
                {b.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && visibleCount < conversation.length && (
            <div
              className={`flex ${
                conversation[visibleCount]?.side === "right" ? "justify-end" : "justify-start"
              }`}
              style={{ animation: "bubbleIn 0.3s ease-out both" }}
            >
              <div
                className={`px-4 py-3 rounded-2xl shadow-lg backdrop-blur-md ${
                  conversation[visibleCount]?.side === "right"
                    ? "bg-white/95 rounded-br-md"
                    : "bg-white/15 border border-white/20 rounded-bl-md"
                }`}
              >
                <div className="flex gap-1 items-center">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className={`w-1.5 h-1.5 rounded-full ${
                        conversation[visibleCount]?.side === "right" ? "bg-foreground/40" : "bg-white/70"
                      }`}
                      style={{
                        animation: "typingDot 1.2s ease-in-out infinite",
                        animationDelay: `${d * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Local keyframes */}
      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes ringShake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          15% { transform: translateX(-4px) rotate(-4deg); }
          30% { transform: translateX(4px) rotate(4deg); }
          45% { transform: translateX(-3px) rotate(-3deg); }
          60% { transform: translateX(3px) rotate(3deg); }
          75% { transform: translateX(-1px) rotate(-1deg); }
        }
        @keyframes answerPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 hsl(152 70% 50% / 0.6); }
          50% { transform: scale(1.06); box-shadow: 0 0 0 14px hsl(152 70% 50% / 0); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default HeroChatAnimation;
