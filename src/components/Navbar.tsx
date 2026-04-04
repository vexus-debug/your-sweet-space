import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm transition-colors duration-500 ${
          scrolled
            ? "bg-primary/95 border-primary/20"
            : "bg-card/95 border-border"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoIcon}
                alt="Bridge Dental"
                className={`h-10 w-10 transition-all duration-500 ${scrolled ? "brightness-200" : ""}`}
              />
              <div className="flex flex-col">
                <span className={`font-heading text-xl font-bold leading-tight transition-colors duration-500 ${
                  scrolled ? "text-primary-foreground" : "text-foreground"
                }`}>Bridge Dental</span>
                <span className={`text-xs tracking-wider transition-colors duration-500 ${
                  scrolled ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>CLINIC</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? location.pathname === link.path
                        ? "text-primary-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                      : location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+2348160090708"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  scrolled
                    ? "text-primary-foreground/80 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Phone className="h-4 w-4" />
                +234 816 009 0708
              </a>
              <Button
                asChild
                variant={scrolled ? "secondary" : "default"}
              >
                <Link to="/booking">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 relative z-[60] transition-colors duration-500 ${
                isOpen ? "text-primary-foreground" : scrolled ? "text-primary-foreground" : "text-foreground"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer — Teal background */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-primary z-[56] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-primary-foreground/20">
            <a
              href="tel:+2348160090708"
              className="flex items-center gap-3 px-4 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +234 816 009 0708
            </a>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/booking" onClick={() => setIsOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
