import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

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
      content: 'atendimento@mobilecanal.com.br',
      link: 'mailto:atendimento@mobilecanal.com.br',
    },
    {
      icon: Clock,
      title: 'Horário de funcionamento',
      content: 'Segunda a sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="contato" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
            Entre em contato
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Estamos prontos para ajudar você a criar o lar dos seus sonhos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 card-hover"
                  variants={itemVariants}
                >
                  <div className="flex gap-2.5 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-secondary" size={18} />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-0.5 sm:mb-1 md:mb-2">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-secondary transition-colors break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Media */}
            <motion.div 
              className="bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 card-hover"
              variants={itemVariants}
            >
              <div className="flex gap-2.5 sm:gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Instagram className="text-secondary" size={18} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-0.5 sm:mb-1 md:mb-2">Redes sociais</h3>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <a
                      href="https://www.instagram.com/mobilecanal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-secondary transition-colors"
                    >
                      Instagram: @mobilecanal
                    </a>
                    <a
                      href="https://www.facebook.com/MobileCanalMagazine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-secondary transition-colors"
                    >
                      Facebook: Mobile Canal Magazine
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map and CTA */}
          <motion.div 
            className="space-y-4 sm:space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Map */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-[200px] xs:h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px]">
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
            <div className="bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-secondary-foreground shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                Pronto para criar o lar dos seus sonhos?
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 text-secondary-foreground/90">
                Venha nos visitar ou entre em contato para conhecer nossos produtos e condições especiais.
              </p>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <a
                  href="https://wa.me/5527995059840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-white/90 text-secondary px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base text-center transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+5527995059840"
                  className="block w-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground border-2 border-secondary-foreground/60 hover:border-secondary-foreground px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base text-center transition-all duration-300 touch-manipulation"
                >
                  Ligar agora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
