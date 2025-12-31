import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pb-20 md:pb-0">
      <div className="container-padding max-w-7xl mx-auto py-10 md:py-12">
        {/* Stack vertically on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo & Contact - Centered on mobile */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/">
              <img src={logo} alt="Get Booked Out" className="h-10 w-auto" />
            </Link>
            
            <div className="flex flex-col items-center md:items-start space-y-3 text-white/70 text-sm">
              <a 
                href="mailto:info@getbookedout.com.au" 
                className="flex items-center gap-2 hover:text-primary transition-colors min-h-[44px] py-2"
              >
                <Mail className="w-4 h-4" />
                info@getbookedout.com.au
              </a>
              <a 
                href="tel:1300000000" 
                className="flex items-center gap-2 hover:text-primary transition-colors min-h-[44px] py-2"
              >
                <Phone className="w-4 h-4" />
                1300 XXX XXX
              </a>
              <div className="flex items-center gap-2 py-2">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* About Link & Socials - Centered on mobile */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <Link 
              to="/who-we-are" 
              className="text-white/70 hover:text-primary transition-colors font-medium min-h-[44px] flex items-center"
            >
              About Us
            </Link>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding max-w-7xl mx-auto py-4">
          <p className="text-center text-xs md:text-sm text-white/60">
            © 2025 Get Booked Out. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;