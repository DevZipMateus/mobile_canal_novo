import whatsappIcon from '@/assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527995059840"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 z-40 transition-transform duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg"
      />
    </a>
  );
};

export default WhatsAppButton;
