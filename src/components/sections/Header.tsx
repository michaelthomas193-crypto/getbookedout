import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-primary-foreground">
              Get Booked Out
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#services"
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Results
            </a>
            <a
              href="#faq"
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:1300000000"
              className="flex items-center gap-2 text-primary-foreground font-semibold hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>1300 000 000</span>
            </a>
            <Button variant="cta" size="default">
              GET FREE QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy border-t border-primary-foreground/10 shadow-lg animate-fade-in">
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="#services"
                className="text-primary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-primary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-primary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
              >
                Results
              </a>
              <a
                href="#faq"
                className="text-primary-foreground/80 hover:text-primary transition-colors py-2 font-medium"
              >
                FAQ
              </a>
              <div className="pt-4 border-t border-primary-foreground/10 space-y-3">
                <a
                  href="tel:1300000000"
                  className="flex items-center justify-center gap-2 text-primary-foreground font-semibold py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>1300 000 000</span>
                </a>
                <Button variant="cta" className="w-full">
                  GET FREE QUOTE
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