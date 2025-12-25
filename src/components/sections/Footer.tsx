import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/50 border-t border-border/50">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(200,100%,50%)] flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">GetBookedOut</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Australia's leading lead generation platform for emergency HVAC replacement companies. Get qualified leads that close.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@getbookedout.com.au" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                hello@getbookedout.com.au
              </a>
              <a href="tel:1300000000" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                1300 000 000
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Sydney, Australia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#why-us" className="block text-muted-foreground hover:text-foreground transition-colors">
                Why Us
              </a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">
                Results
              </a>
              <a href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Legal</h4>
            <nav className="space-y-3">
              <a href="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GetBookedOut. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ in Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
