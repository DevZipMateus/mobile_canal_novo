import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';

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
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Mobile Canal"
              className="h-12 sm:h-14 lg:h-16 w-auto mb-3 sm:mb-4"
            />
            <p className="text-secondary-foreground/80 text-sm sm:text-base leading-relaxed">
              Seu lugar é aqui! Móveis, estofados, colchões e decorações de qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-secondary-foreground/80 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <MapPin className="flex-shrink-0 text-white/80 mt-0.5" size={16} />
                <span className="text-secondary-foreground/80">
                  Av. Arthur Haese, 388<br />Vale das Palmas, Marechal Floriano - ES
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <Phone className="flex-shrink-0 text-white/80" size={16} />
                <a
                  href="https://wa.me/5527995059840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-white transition-colors"
                >
                  (27) 99505-9840
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <Mail className="flex-shrink-0 text-white/80 mt-0.5" size={16} />
                <a
                  href="mailto:mobilecanal@hotmail.com"
                  className="text-secondary-foreground/80 hover:text-white transition-colors break-all"
                >
                  mobilecanal@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours and Social */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Horário</h3>
            <div className="flex items-start gap-2 mb-4 sm:mb-6">
              <Clock className="flex-shrink-0 text-white/80 mt-0.5" size={16} />
              <div className="text-sm sm:text-base text-secondary-foreground/80">
                <p>Seg - Sex: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 13:00</p>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Siga-nos</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/mobilecanal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Instagram size={18} className="flex-shrink-0" />
                <span>@mobilecanal</span>
              </a>
              <a
                href="https://www.facebook.com/MobileCanalMagazine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary-foreground/80 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Facebook size={18} className="flex-shrink-0" />
                <span>Mobile Canal Magazine</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-secondary-foreground/60 text-center sm:text-left">
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