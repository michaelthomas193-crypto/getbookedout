import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const MobileStickyCTA = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if any form is in view - if so, hide the CTA
      const allForms = document.querySelectorAll('form');
      let anyFormInView = false;
      const windowHeight = window.innerHeight;
      
      allForms.forEach((form) => {
        const formRect = form.getBoundingClientRect();
        if (formRect.top < windowHeight && formRect.bottom > 100) {
          anyFormInView = true;
        }
      });

      setIsHidden(anyFormInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isHidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-bottom">
      <div className="flex items-center gap-3 bg-background p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] border-t border-border">
        {/* Call Now Button */}
        <a href="tel:0485008132" className="flex-1">
          <Button size="lg" className="w-full min-h-[52px] gap-2 text-base font-semibold rounded-full">
            <Phone className="w-5 h-5" />
            CALL NOW - 0485 008 132
          </Button>
        </a>
        {/* Spacer for external chat widget (approx 60px bubble + padding) */}
        <div className="w-[60px] h-[52px] flex-shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
};

export default MobileStickyCTA;