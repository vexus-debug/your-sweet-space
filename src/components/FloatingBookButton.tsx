import { Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { memo } from "react";

const FloatingBookButton = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/booking') return null;
  return (
    <Button onClick={() => navigate('/booking')} className="fixed bottom-6 right-6 z-40 btn-hero shadow-2xl hover:shadow-gold/50 group px-6 py-6 rounded-full animate-fade-in" size="lg">
      <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
      <span className="font-semibold">Book Now</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </Button>
  );
});
FloatingBookButton.displayName = "FloatingBookButton";
export default FloatingBookButton;