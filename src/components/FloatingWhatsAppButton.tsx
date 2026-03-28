import { memo } from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsAppButton = memo(() => {
  const whatsappNumber = "2348022936328";
  const defaultMessage = "Hi! I'd like to book an appointment at Janna Aesthetics.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-28 right-6 z-50 group" aria-label="Book via WhatsApp">
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]">
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce"><span className="text-white text-xs font-bold">1</span></div>
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-elegant"><p className="text-sm font-medium text-foreground">Book via WhatsApp</p><p className="text-xs text-muted-foreground">Chat with us now!</p></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full"><div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-border" /></div>
      </div>
    </a>
  );
});
FloatingWhatsAppButton.displayName = "FloatingWhatsAppButton";
export default FloatingWhatsAppButton;