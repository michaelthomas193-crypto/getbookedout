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
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] border-t border-border safe-area-bottom">
      <a href="tel:0485008132" className="block">
        <Button size="lg" className="w-full min-h-[52px] gap-2 text-base font-semibold">
          <Phone className="w-5 h-5" />
          CALL NOW - 0485 008 132
        </Button>
      </a>
    </div>
  );
};

export default MobileStickyCTA;