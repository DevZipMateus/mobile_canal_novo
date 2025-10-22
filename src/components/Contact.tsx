import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Irmã Vivencia, 26 - Novo Maranguape, CE',
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
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e ajudar com seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media */}
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Instagram className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Redes sociais</h3>
                  <a
                    href="https://www.instagram.com/magazine_ferro_e_aco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @magazine_ferro_e_aco
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-primary-foreground shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Entre em contato agora mesmo e receba um orçamento personalizado para suas necessidades.
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/5585985971085"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5585985971085"
                className="block w-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/60 hover:border-primary-foreground px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
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
