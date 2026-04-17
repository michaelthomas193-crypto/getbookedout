import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

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

const HeroChatAnimation = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        for (let i = 0; i < conversation.length; i++) {
          if (cancelled) return;
          setTyping(true);
          await new Promise((r) => setTimeout(r, 900));
          if (cancelled) return;
          setTyping(false);
          setVisibleCount(i + 1);
          await new Promise((r) => setTimeout(r, 1800));
        }
        // Hold then reset
        await new Promise((r) => setTimeout(r, 1500));
        if (cancelled) return;
        setVisibleCount(0);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
      {/* Layered purple gradient background — Rosie style */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 80% 20%, hsl(var(--purple-glow) / 0.55), transparent 60%), radial-gradient(ellipse 80% 70% at 20% 80%, hsl(var(--purple-deep)), transparent 70%), linear-gradient(135deg, hsl(var(--purple-deep)) 0%, hsl(var(--purple-mid)) 50%, hsl(256 70% 22%) 100%)",
        }}
      />
      {/* Soft light streak */}
      <div
        className="absolute -top-1/4 right-0 w-2/3 h-2/3 opacity-50 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--purple-glow) / 0.6), transparent)",
        }}
      />

      {/* Chat content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8 gap-3">
        {/* Phone tag */}
        <div className="absolute top-5 left-5 md:top-6 md:left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Phone className="w-3 h-3" />
          AI receptionist · answering now
        </div>

        {/* Bubbles */}
        <div className="flex flex-col gap-3 transition-all duration-500">
          {conversation.slice(0, visibleCount).map((b, i) => (
            <div
              key={`${visibleCount}-${i}`}
              className={`flex animate-fade-up ${b.side === "right" ? "justify-end" : "justify-start"}`}
              style={{ animationDuration: "0.45s" }}
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
              className={`flex animate-fade-up ${
                conversation[visibleCount]?.side === "right" ? "justify-end" : "justify-start"
              }`}
              style={{ animationDuration: "0.3s" }}
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
      `}</style>
    </div>
  );
};

export default HeroChatAnimation;
