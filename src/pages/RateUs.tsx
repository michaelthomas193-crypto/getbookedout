import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ4S7legKrE2sRFnJUnfJgpXA";

const RateUs = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = () => {
    if (selectedStar === 0) return;

    if (selectedStar === 5) {
      window.location.href = GOOGLE_REVIEW_URL;
    } else {
      setSubmitted(true);
    }
  };

  const starLabels = ["Poor", "Fair", "Good", "Great", "Amazing"];
  const activeStar = hoveredStar || selectedStar;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center space-y-6">
          <img src={logo} alt="Get Booked Out" className="h-10 mx-auto" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            We'd Love to Hear More
          </h1>
          <p className="text-muted-foreground">
            Thanks for rating us. Let us know how we can do better — your feedback stays private.
          </p>
          <div className="w-full">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/K90zyVa6HE0X17tLPc6i"
              style={{ width: "100%", height: 313, border: "none", borderRadius: 3 }}
              id="inline-K90zyVa6HE0X17tLPc6i"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Survey Feedback"
              data-height="313"
              data-layout-iframe-id="inline-K90zyVa6HE0X17tLPc6i"
              data-form-id="K90zyVa6HE0X17tLPc6i"
              title="Survey Feedback"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        <img src={logo} alt="Get Booked Out" className="h-10 mx-auto" />

        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            How Was Your Experience?
          </h1>
          <p className="text-muted-foreground">
            Your feedback helps us improve. Tap a star to rate us.
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => setSelectedStar(star)}
              className="p-1 transition-transform duration-150 hover:scale-110 focus:outline-none"
              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
            >
              <Star
                className={`w-12 h-12 md:w-14 md:h-14 transition-colors duration-150 ${
                  star <= activeStar
                    ? "fill-[hsl(var(--warning))] text-[hsl(var(--warning))]"
                    : "text-border fill-transparent"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="h-6">
          {activeStar > 0 && (
            <p className="text-sm font-medium text-muted-foreground animate-in fade-in duration-200">
              {starLabels[activeStar - 1]}
            </p>
          )}
        </div>

        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={selectedStar === 0}
          className="w-full max-w-xs mx-auto"
        >
          Submit Rating
        </Button>
      </div>
    </div>
  );
};

export default RateUs;
