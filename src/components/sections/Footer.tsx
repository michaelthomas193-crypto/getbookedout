import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const whatWeSolve = [
    { label: "Stop Losing Leads", href: "#problems" },
    { label: "Fill Your Calendar", href: "#features" },
    { label: "Build Your Reputation", href: "#features" },
    { label: "Save Hours on Admin", href: "#how-it-works" },
    { label: "Look Professional Online", href: "#features" },
  ];

  const solutions = [
    { label: "Instant Lead Response", href: "#features" },
    { label: "Automated Booking", href: "#features" },
    { label: "Review Generator", href: "#features" },
    { label: "Landing Pages", href: "#features" },
    { label: "Missed Call Text-Back", href: "#features" },
  ];

  const company = [
    { label: "About Us", href: "#about" },
    { label: "Results", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-background">Get </span>
                <span className="text-primary">Booked</span>
                <span className="text-background"> Out</span>
              </span>
            </div>
            
            <div className="space-y-4 text-background/70">
              <a href="mailto:info@getbookedout.com.au" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                info@getbookedout.com.au
              </a>
              <a href="tel:1300000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                1300 XXX XXX
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Column 2 - What We Solve */}
          <div>
            <h4 className="font-semibold text-lg mb-6">What We Solve</h4>
            <ul className="space-y-3">
              {whatWeSolve.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-padding max-w-7xl mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 Get Booked Out. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
