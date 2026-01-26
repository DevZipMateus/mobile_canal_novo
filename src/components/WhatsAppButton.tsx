import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527995059840"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 sm:p-4 rounded-full shadow-lg transition-colors duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" />
    </a>
  );
};

export default WhatsAppButton;