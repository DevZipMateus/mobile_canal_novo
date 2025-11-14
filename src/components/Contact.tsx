import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av Senador Almir Pinto, 1809 - Novo Maranguape 2, Maranguape - CE',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(85) 98597-1085',
      link: 'https://wa.me/5585985971085',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'magazineferroeaco01@outlook.com',
      link: 'mailto:magazineferroeaco01@outlook.com',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Segunda a sexta: 07:00 às 18:00 | Sábado: 07:00 às 12:00',
    },
  ];

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender você e ajudar com seu projeto
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
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-words"
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Instagram className="text-primary" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Redes sociais</h3>
                  <a
                    href="https://www.instagram.com/magazine_ferro_e_aco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    @magazine_ferro_e_aco
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 lg:p-12 text-primary-foreground shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-foreground/90">
              Entre em contato agora mesmo e receba um orçamento personalizado para suas necessidades.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="https://wa.me/5585985971085"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-white/90 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5585985971085"
                className="block w-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/60 hover:border-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base text-center transition-all duration-300"
              >
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
