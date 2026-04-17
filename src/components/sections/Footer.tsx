import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Overflow answering", to: "/" },
      { label: "Automated answering", to: "/" },
      { label: "Virtual receptionist", to: "/" },
      { label: "Small business call centre", to: "/" },
      { label: "24/7 call answering", to: "/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Trades & home services", to: "/" },
      { label: "Real estate & property", to: "/" },
      { label: "Health & wellness clinics", to: "/" },
      { label: "Beauty & personal care", to: "/" },
      { label: "Automotive & repair", to: "/" },
      { label: "Hospitality & events", to: "/" },
      { label: "Professional services", to: "/" },
      { label: "Any customer-facing business", to: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", to: "/pricing" },
      { label: "About us", to: "/who-we-are" },
      { label: "Why us", to: "/why-us" },
      { label: "Schedule a demo", to: "/schedule-demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", to: "/terms" },
      { label: "Privacy policy", to: "/privacy" },
      { label: "Cookie policy", to: "/cookies" },
      { label: "Unsubscribe", to: "/unsubscribe" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pb-20 md:pb-0">
      <div className="container-padding max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {/* Brand block */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-baseline gap-2 text-3xl font-black tracking-tight">
              <span className="text-white font-semibold">Get</span>
              <span className="text-primary">BOOKED</span>
              <span className="text-white font-semibold">Out</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your AI receptionist — answering calls, booking appointments, and capturing every lead 24/7.
            </p>
            <div className="space-y-2 text-white/70 text-sm">
              <a href="mailto:bookings@getbookedout.com.au" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                bookings@getbookedout.com.au
              </a>
              <a href="tel:0485008132" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                0485 008 132
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61586125082752"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/getbookedout.au/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wide">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/65 hover:text-primary transition-colors text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-padding max-w-7xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs md:text-sm text-white/60">
            © 2025 Get Booked Out. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Built for businesses that don't want to miss a call.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
