import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "2348160090708";
  const message = encodeURIComponent("Hello Bridge Dental Clinic! I'd like to book an appointment.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="h-5 w-5 fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
