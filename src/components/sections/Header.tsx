import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Solutions", href: "/#features" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Pricing", href: "/pricing" },
    { label: "Who We Are", href: "/who-we-are" },
  ];

  return (
    <>
      {/* Top Banner - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block bg-primary text-primary-foreground text-sm py-2 text-center">
        <span className="font-medium">Questions? Call us: </span>
        <a href="tel:1300000000" className="font-bold hover:underline">
          1300 000 000
        </a>
        <span className="mx-2">|</span>
        <a href="mailto:hello@getbookedout.com.au" className="hover:underline">
          hello@getbookedout.com.au
        </a>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="container-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Get Booked Out" className="h-12 md:h-20 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-end flex-1 ml-12">
              <div className="flex items-center gap-12">
                {navLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-muted-foreground hover:text-primary font-medium transition-colors text-sm tracking-wide"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary font-medium transition-colors text-sm tracking-wide"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 -mr-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <nav className="relative h-full flex flex-col pt-20 px-6 pb-8 bg-background">
            <div className="flex flex-col gap-2 flex-1">
              {navLinks.map((link) =>
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-foreground hover:text-primary font-semibold text-xl py-4 border-b border-border transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-foreground hover:text-primary font-semibold text-xl py-4 border-b border-border transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
            
            {/* Get Started Button - Prominent at bottom */}
            <div className="mt-auto pt-6">
              <Button 
                size="lg" 
                className="w-full min-h-[56px] text-lg font-semibold"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="/#hero">Get Started</a>
              </Button>
              
              {/* Contact info on mobile */}
              <div className="mt-6 text-center space-y-2 text-muted-foreground">
                <a href="tel:1300000000" className="block py-2 font-medium hover:text-primary">
                  1300 000 000
                </a>
                <a href="mailto:hello@getbookedout.com.au" className="block py-2 hover:text-primary">
                  hello@getbookedout.com.au
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;