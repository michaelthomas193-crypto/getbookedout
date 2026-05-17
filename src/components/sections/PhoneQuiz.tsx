import { Sparkles, ArrowRight } from "lucide-react";

const PhoneQuiz = () => {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container-padding max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-14"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 80% 20%, hsl(var(--purple-glow) / 0.4), transparent 60%), linear-gradient(135deg, hsl(var(--purple-deep)) 0%, hsl(var(--purple-mid)) 100%)",
          }}
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wide mb-4">
                <Sparkles className="w-3 h-3" />
                Free 60-second quiz
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                What's your business phone personality?
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                Take this quick quiz to find out how your business handles incoming calls today —
                and unlock a special discount on your first month.
              </p>
            </div>
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center gap-2 min-h-[56px] rounded-full bg-white text-primary font-semibold px-7 shadow-lg hover:scale-105 transition-transform whitespace-nowrap"
            >
              Take the quiz
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Decorative bubble */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-[hsl(var(--purple-glow)/0.3)] blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default PhoneQuiz;
