import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Janna Aesthetics Logo" 
              className="h-12 w-auto"
            />
            <div>
              <p className="text-xs text-muted-foreground">Premium Aesthetics</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-primary transition-colors font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}>Home</Link>
            <Link to="/about" className={`hover:text-primary transition-colors font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}>About</Link>
            <Link to="/services" className={`hover:text-primary transition-colors font-medium ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}>Services</Link>
            <Link to="/gallery" className={`hover:text-primary transition-colors font-medium ${isActive('/gallery') ? 'text-primary' : 'text-foreground'}`}>Gallery</Link>
            <Link to="/contact" className={`hover:text-primary transition-colors font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}>Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+234 802 293 6328</span>
            </div>
            <Link to="/booking">
              <Button className="btn-gold">Book Now</Button>
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3">
              <Link to="/" onClick={closeMenu} className={`text-left py-2 hover:text-primary transition-colors font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}>Home</Link>
              <Link to="/about" onClick={closeMenu} className={`text-left py-2 hover:text-primary transition-colors font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}>About</Link>
              <Link to="/services" onClick={closeMenu} className={`text-left py-2 hover:text-primary transition-colors font-medium ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}>Services</Link>
              <Link to="/gallery" onClick={closeMenu} className={`text-left py-2 hover:text-primary transition-colors font-medium ${isActive('/gallery') ? 'text-primary' : 'text-foreground'}`}>Gallery</Link>
              <Link to="/contact" onClick={closeMenu} className={`text-left py-2 hover:text-primary transition-colors font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}>Contact</Link>
              <div className="flex items-center space-x-2 py-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+234 802 293 6328</span>
              </div>
              <Link to="/booking" onClick={closeMenu}>
                <Button className="btn-gold w-full mt-2">Book Appointment</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;