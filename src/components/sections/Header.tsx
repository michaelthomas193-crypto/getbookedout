import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(200,100%,50%)] flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">GetBookedOut</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              1300 000 000
            </Button>
            <Button variant="hero" size="default">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                How It Works
              </a>
              <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Why Us
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Results
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                FAQ
              </a>
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Button variant="ghost" className="w-full justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  1300 000 000
                </Button>
                <Button variant="hero" className="w-full">
                  Book a Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
