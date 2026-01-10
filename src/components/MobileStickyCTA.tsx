import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero form and final CTA form positions
      const heroForm = document.getElementById('hero-form');
      const finalCTA = document.querySelector('section:has(form)');
      
      if (!heroForm) {
        setIsVisible(true);
        return;
      }

      const heroRect = heroForm.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hide when hero form is in view (within viewport)
      const heroInView = heroRect.top < windowHeight && heroRect.bottom > 100;
      
      // Also check for any form section near the bottom
      const allForms = document.querySelectorAll('form');
      let anyFormInView = false;
      
      allForms.forEach((form) => {
        const formRect = form.getBoundingClientRect();
        if (formRect.top < windowHeight && formRect.bottom > 100) {
          anyFormInView = true;
        }
      });

      setIsVisible(!heroInView && !anyFormInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] border-t border-border safe-area-bottom">
      <a href="tel:0468092946" className="block">
        <Button size="lg" className="w-full min-h-[52px] gap-2 text-base font-semibold">
          <Phone className="w-5 h-5" />
          CALL NOW - 0468 092 946
        </Button>
      </a>
    </div>
  );
};

export default MobileStickyCTA;