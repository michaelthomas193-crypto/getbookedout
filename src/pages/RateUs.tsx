import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOrange from "@/assets/logo-orange.png";

const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ4S7legKrE2sRFnJUnfJgpXA";

const RateUs = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedStar === 0) return;

    if (selectedStar === 5) {
      // Redirect to Google review
      window.location.href = GOOGLE_REVIEW_URL;
    } else {
      // Redirect to internal form for private feedback
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "/schedule-demo";
      }, 2000);
    }
  };

  const starLabels = ["Poor", "Fair", "Good", "Great", "Amazing"];
  const activeStar = hoveredStar || selectedStar;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <img src={logoOrange} alt="Get Booked Out" className="h-10 mx-auto" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Thanks for Your Feedback!
          </h1>
          <p className="text-muted-foreground">
            We appreciate you taking the time. Redirecting you now so we can hear more about your experience…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <img src={logoOrange} alt="Get Booked Out" className="h-10 mx-auto" />

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            How Was Your Experience?
          </h1>
          <p className="text-muted-foreground">
            Your feedback helps us improve. Tap a star to rate us.
          </p>
        </div>

        {/* Star Rating */}
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

        {/* Star Label */}
        <div className="h-6">
          {activeStar > 0 && (
            <p className="text-sm font-medium text-muted-foreground animate-in fade-in duration-200">
              {starLabels[activeStar - 1]}
            </p>
          )}
        </div>

        {/* Submit Button */}
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
