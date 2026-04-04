import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="Bridge Dental" className="h-10 w-10 brightness-200" />
              <div>
                <h3 className="font-heading text-xl font-bold">Bridge Dental</h3>
                <p className="text-xs tracking-wider opacity-70">CLINIC</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Premier destination for dental healthcare in Warri-Effurun. Providing comprehensive, compassionate dental care 24/7.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-sm ml-2 opacity-70">4.7 Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Book Appointment", path: "/booking" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Teeth Whitening</li>
              <li>Pediatric Dentistry</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="opacity-80">39 Airport Road, opposite Tivo Supermarket, Effurun 332011, Delta State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+2348160090708" className="opacity-80 hover:opacity-100">+234 816 009 0708</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="opacity-80">info@bridgedentalclinic.ng</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span className="opacity-80">Open 24 Hours, Every Day</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Bridge Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6 text-xs opacity-60">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
