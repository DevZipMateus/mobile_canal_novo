import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <img
              src={logo}
              alt="Mobile Canal"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mb-2 sm:mb-3 md:mb-4"
            />
            <p className="text-secondary-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed">
              Seu lugar é aqui! Móveis, estofados, colchões e decorações de qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Links rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-secondary-foreground/80 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Contato</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base">
                <MapPin className="flex-shrink-0 text-white/80 mt-0.5" size={14} />
                <span className="text-secondary-foreground/80">
                  Av. Arthur Haese, 388<br />Vale das Palmas, Marechal Floriano - ES
                </span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base">
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/5527995059840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-white transition-colors"
                >
                  (27) 99505-9840
                </a>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base">
                <Mail className="flex-shrink-0 text-white/80 mt-0.5" size={14} />
                <a
                  href="mailto:atendimento@mobilecanal.com.br"
                  className="text-secondary-foreground/80 hover:text-white transition-colors break-all"
                >
                  atendimento@mobilecanal.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Hours and Social */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Horário</h3>
            <div className="flex items-start gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
              <Clock className="flex-shrink-0 text-white/80 mt-0.5" size={14} />
              <div className="text-xs sm:text-sm md:text-base text-secondary-foreground/80">
                <p>Seg - Sex: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 12:00</p>
              </div>
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Siga-nos</h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="https://www.instagram.com/mobilecanal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-secondary-foreground/80 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                <Instagram size={16} className="flex-shrink-0" />
                <span>@mobilecanal</span>
              </a>
              <a
                href="https://www.facebook.com/MobileCanalMagazine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-secondary-foreground/80 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
              >
                <Facebook size={16} className="flex-shrink-0" />
                <span>Mobile Canal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm text-secondary-foreground/60 text-center sm:text-left">
            <p>
              © {currentYear} Mobile Canal. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: 51.641.909/0001-60
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
