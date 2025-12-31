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

  const navLinks = [
    { label: "Solutions", href: "/#features" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Pricing", href: "/pricing" },
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Resources", href: "/#faq" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-sm py-2 text-center">
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
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Get Booked Out" className="h-10 md:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#login"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                Dashboard Login
              </a>
              <Button size="default">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
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

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}
                <a
                  href="#login"
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                >
                  Dashboard Login
                </a>
                <Button className="w-full mt-2">Get Started</Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
