import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-accent p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a href="tel:1300000000" className="block">
        <Button variant="cta" size="lg" className="w-full gap-2">
          <Phone className="w-5 h-5" />
          CALL NOW - 1300 000 000
        </Button>
      </a>
    </div>
  );
};

export default MobileStickyCTA;