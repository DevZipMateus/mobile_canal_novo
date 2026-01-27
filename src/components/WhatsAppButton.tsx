import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527995059840"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition-colors duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
    </a>
  );
};

export default WhatsAppButton;