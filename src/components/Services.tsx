import { Sofa, Bed, UtensilsCrossed, Palette, ShowerHead, Layers, Truck, Headphones, Wrench } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import productsImage from '@/assets/services-furniture.jpg';
import whatsappIcon from '@/assets/whatsapp-icon.png';
import bgServices from '@/assets/bg-services.jpg';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const productCategories = [
    {
      icon: Sofa,
      title: 'Móveis para sala',
      items: ['Sofás e sofá-cama', 'Poltronas e cadeiras de descanso', 'Mesas de centro e laterais', 'Estantes e prateleiras', 'Painéis e aparadores'],
    },
    {
      icon: Bed,
      title: 'Móveis para quarto',
      items: ['Camas (casal, solteiro, beliche)', 'Guarda-roupas e roupeiros', 'Cômodas e criados-mudos', 'Cabeceiras e cabeceiras estofadas', 'Espelhos e penteadeiras'],
    },
    {
      icon: UtensilsCrossed,
      title: 'Móveis para cozinha',
      items: ['Mesas de jantar', 'Cadeiras e bancos', 'Bancadas e ilhas', 'Armários e despensas'],
    },
    {
      icon: Palette,
      title: 'Decorações e complementos',
      items: ['Tapetes e passadeiras', 'Cortinas e persianas', 'Quadros e painéis decorativos', 'Luminárias e abajures', 'Objetos decorativos'],
    },
    {
      icon: ShowerHead,
      title: 'Cama, mesa e banho',
      items: ['Conjuntos de cama (lençóis, edredons, colchas)', 'Toalhas de banho e rosto', 'Jogos americanos e tapetes de mesa', 'Utensílios decorativos para cozinha'],
    },
    {
      icon: Layers,
      title: 'Soluções multifuncionais',
      items: ['Móveis modulares e versáteis', 'Soluções para espaços pequenos', 'Móveis com design inteligente'],
    },
  ];

  const services = [
    {
      icon: Headphones,
      title: 'Atendimento personalizado',
      description: 'Equipe dedicada para ajudar você a encontrar o que precisa.',
    },
    {
      icon: Truck,
      title: 'Entrega e montagem grátis',
      description: 'Levamos e montamos seus móveis sem custos adicionais.',
    },
    {
      icon: Wrench,
      title: 'Decoração e marcenaria',
      description: 'Serviços de decoração personalizada e marcenaria especializada.',
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
    <section id="produtos" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bgServices})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[1px]" />
      </div>
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
            Nossos produtos e serviços
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Tudo para transformar sua casa em um lar aconchegante
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 group cursor-pointer card-glow shine-effect icon-float"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:bg-secondary/20 transition-all duration-500 icon-float-target">
                  <Icon className="text-secondary" size={22} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Products Hero */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Products Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productsImage}
                alt="Móveis e decorações - Mobile Canal"
                className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              Encontre tudo para o seu lar
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Oferecemos uma linha completa de móveis e decorações para todos os ambientes da sua casa. 
              Nossa equipe está pronta para ajudar você a escolher as melhores peças que combinam 
              qualidade, design e conforto.
            </p>
            <motion.a
              href="https://wa.me/5527995059840"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 btn-shadow touch-manipulation"
              whileHover={{ scale: 1.02, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Fale com um consultor
            </motion.a>
          </motion.div>
        </div>

        {/* Product Categories Accordion */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-center">Categorias de produtos</h3>
          <Accordion type="multiple" className="space-y-2 sm:space-y-3 md:space-y-4">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-3 sm:py-4 md:py-5">
                    <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-secondary" size={18} />
                      </div>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-left">{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 sm:pb-4 md:pb-5">
                    <ul className="space-y-1.5 sm:space-y-2 pl-10 sm:pl-12 md:pl-14 lg:pl-16">
                      {category.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="text-xs sm:text-sm md:text-base text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.04 }}
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
