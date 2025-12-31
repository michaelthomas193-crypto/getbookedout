import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-padding max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left - Logo & Contact */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-bold">
                <span className="text-white">Get </span>
                <span className="text-primary">Booked</span>
                <span className="text-white"> Out</span>
              </span>
            </div>
            
            <div className="space-y-2 text-white/70 text-sm">
              <a href="mailto:info@getbookedout.com.au" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@getbookedout.com.au
              </a>
              <a href="tel:1300000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                1300 XXX XXX
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Right - About Link & Socials */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link 
              to="/who-we-are" 
              className="text-white/70 hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
            
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding max-w-7xl mx-auto py-4">
          <p className="text-center text-sm text-white/60">
            © 2025 Get Booked Out. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
