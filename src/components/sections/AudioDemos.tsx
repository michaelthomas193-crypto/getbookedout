import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const demos = [
  {
    title: "Booking a service appointment",
    src: "/audio/dentist.mp3",
    duration: "0:49",
    accent: "from-primary to-primary/60",
  },
  {
    title: "Scheduling a haircut",
    src: "/audio/haircut.mp3",
    duration: "1:20",
    accent: "from-[hsl(var(--warning))] to-[hsl(var(--warning))]/60",
  },
  {
    title: "Requesting a quote",
    src: "/audio/quote.mp3",
    duration: "0:35",
    accent: "from-emerald-500 to-emerald-300",
  },
  {
    title: "Answering a pricing question",
    src: "/audio/pricing.mp3",
    duration: "1:04",
    accent: "from-violet-500 to-violet-300",
  },
];

const AudioDemos = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const toggle = (title: string) => {
    const current = audioRefs.current[title];
    if (!current) return;
    if (playing === title) {
      current.pause();
      setPlaying(null);
      return;
    }
    // Pause any other playing audio
    Object.entries(audioRefs.current).forEach(([t, el]) => {
      if (t !== title && el) {
        el.pause();
        el.currentTime = 0;
      }
    });
    current.play();
    setPlaying(title);
  };

  useEffect(() => {
    const refs = audioRefs.current;
    return () => {
      Object.values(refs).forEach((el) => el?.pause());
    };
  }, []);

  return (
    <section className="section-padding bg-lavender">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Listen for yourself
          </div>
          <h2 className="section-title mb-4">Your customers won't call back. <span className="text-primary">We make sure they don't have to.</span></h2>
          <p className="section-subtitle">
            Real calls, real conversations. This is what your customers will experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {demos.map((d) => {
            const isPlaying = playing === d.title;
            return (
              <button
                key={d.title}
                type="button"
                onClick={() => toggle(d.title)}
                className="group text-left p-5 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all"
              >
                <div className={`relative aspect-[4/3] rounded-xl mb-4 bg-gradient-to-br ${d.accent} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center gap-1 px-6 opacity-40">
                    {[...Array(28)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white rounded-full"
                        style={{
                          height: `${15 + Math.abs(Math.sin(i + (isPlaying ? Date.now() / 200 : 0))) * 60}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-foreground fill-foreground" />
                    ) : (
                      <Play className="w-6 h-6 text-foreground fill-foreground ml-0.5" />
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 leading-snug">
                  {d.title}
                </h3>
                <p className="text-xs text-muted-foreground">{d.duration}</p>
                <audio
                  ref={(el) => {
                    audioRefs.current[d.title] = el;
                  }}
                  src={d.src}
                  preload="none"
                  onEnded={() => setPlaying(null)}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudioDemos;
