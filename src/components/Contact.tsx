import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida Arthur Haese, 388 - Vale das Palmas, Marechal Floriano - ES, 29255-000',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(27) 99505-9840',
      link: 'https://wa.me/5527995059840',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'mobilecanal@hotmail.com',
      link: 'mailto:mobilecanal@hotmail.com',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Segunda a sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00',
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para ajudar você a criar o lar dos seus sonhos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 sm:p-6 card-hover"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-secondary" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-muted-foreground hover:text-secondary transition-colors break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 card-hover">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Instagram className="text-secondary" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Redes sociais</h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.instagram.com/mobilecanal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-secondary transition-colors"
                    >
                      Instagram: @mobilecanal
                    </a>
                    <a
                      href="https://www.facebook.com/MobileCanalMagazine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-secondary transition-colors"
                    >
                      Facebook: Mobile Canal Magazine
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d937.3857805524106!2d-40.87385598474257!3d-19.985707318707508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b5d1ffde43f5%3A0x3cd48c774810c18!2sMobile%20Canal%20Magazine!5e0!3m2!1spt-BR!2sbr!4v1758045475063!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mobile Canal"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-secondary rounded-2xl p-6 sm:p-8 text-secondary-foreground shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Pronto para criar o lar dos seus sonhos?
              </h3>
              <p className="text-base sm:text-lg mb-6 text-secondary-foreground/90">
                Venha nos visitar ou entre em contato para conhecer nossos produtos e condições especiais.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://wa.me/5527995059840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-white/90 text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+5527995059840"
                  className="block w-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground border-2 border-secondary-foreground/60 hover:border-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base text-center transition-all duration-300"
                >
                  Ligar agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;