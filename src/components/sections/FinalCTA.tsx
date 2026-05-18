import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();
  const goGetStarted = () => {
    navigate("/get-started");
    window.setTimeout(() => {
      if (window.location.pathname !== "/get-started") {
        window.location.assign("/get-started");
      }
    }, 120);
  };
  const goDemo = () => navigate("/schedule-demo");

  return (
    <section id="final-cta" className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/85">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container-padding max-w-4xl mx-auto relative z-10 py-16 md:py-24 text-center text-primary-foreground">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Ready to stop losing jobs to missed calls?
        </h2>
        <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          See how Get Booked Out can answer more leads, book more jobs, and take admin pressure off your team.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            type="button"
            onClick={goGetStarted}
            className="inline-flex items-center justify-center gap-2 min-h-[56px] rounded-full bg-card px-8 text-base font-semibold text-foreground shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goDemo}
            className="inline-flex items-center justify-center min-h-[56px] rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-primary-foreground hover:bg-white/15 transition-all backdrop-blur-sm"
          >
            Book a Demo
          </button>
        </div>

        <p className="mt-5 text-sm text-primary-foreground/85">
          From <span className="font-semibold">$99/week</span> · No lock-in contracts
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
