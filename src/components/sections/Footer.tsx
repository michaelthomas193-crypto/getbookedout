import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-background">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(185,80%,42%)] flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-background">GetBookedOut</span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Australia's leading lead generation platform for emergency HVAC replacement companies. Get qualified leads that close.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@getbookedout.com.au" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                hello@getbookedout.com.au
              </a>
              <a href="tel:1300000000" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                1300 000 000
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                Sydney, Australia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#how-it-works" className="block text-background/70 hover:text-background transition-colors">
                How It Works
              </a>
              <a href="#why-us" className="block text-background/70 hover:text-background transition-colors">
                Why Us
              </a>
              <a href="#testimonials" className="block text-background/70 hover:text-background transition-colors">
                Results
              </a>
              <a href="#faq" className="block text-background/70 hover:text-background transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-6">Legal</h4>
            <nav className="space-y-3">
              <a href="/privacy" className="block text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-background/70 hover:text-background transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} GetBookedOut. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Made with ❤️ in Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
