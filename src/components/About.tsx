import { Target, Eye, Heart, Building2, Star, Users, Shield, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-showroom.jpg';
import bgAbout from '@/assets/bg-about.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const values = [
    { icon: Star, title: 'Qualidade', description: 'Produtos duráveis e bem acabados' },
    { icon: Users, title: 'Atendimento', description: 'Relacionamento próximo e personalizado' },
    { icon: Shield, title: 'Confiança', description: 'Transparência e ética nas relações' },
    { icon: Lightbulb, title: 'Inovação', description: 'Busca constante por novidades e tendências' },
    { icon: CheckCircle, title: 'Compromisso', description: 'Cumprimento de prazos e promessas' },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="sobre" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <img src={bgAbout} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
      </div>
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Showroom Mobile Canal - Móveis e decorações"
                className="w-full h-[200px] xs:h-[250px] sm:h-[280px] md:h-[320px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <motion.div 
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-secondary text-secondary-foreground p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">✓</div>
                <div className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Qualidade garantida</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-foreground">
              Sobre nós
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              A Mobile Canal é uma empresa de Marechal Floriano, Espírito Santo, especializada em móveis 
              e decorações para o lar. Oferecemos uma ampla linha de produtos que incluem móveis de qualidade, 
              itens de cama, mesa e banho, colchões e eletrodomésticos, sempre com o objetivo de proporcionar 
              conforto e praticidade para sua casa.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Com uma equipe dedicada e comprometida, buscamos oferecer um atendimento personalizado, 
              ajudando nossos clientes a encontrarem as melhores soluções para o seu lar.
            </p>

            {/* Mission, Vision */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 md:mb-8">
              <motion.div 
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Target className="text-secondary" size={18} />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">Missão</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Transformar residências em lares dos sonhos através de móveis e decorações de qualidade, 
                    oferecendo soluções completas para o lar com atendimento personalizado e excelência.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Eye className="text-secondary" size={18} />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">Visão</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Ser a referência em móveis e decorações no Espírito Santo, reconhecida pela qualidade 
                    dos produtos, inovação em design e compromisso com a satisfação dos clientes.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Heart className="text-secondary" size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-0.5 sm:mb-1">Nossos valores</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 text-center card-hover group cursor-pointer card-glow shine-effect icon-float"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-secondary/20 transition-all duration-500 icon-float-target">
                    <Icon className="text-secondary" size={16} />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">{value.title}</h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Market Section */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Building2 className="text-secondary" size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-0.5 sm:mb-1">Mercado de atuação</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            A Mobile Canal atua no segmento de móveis e decorações para o lar, atendendo o mercado varejista 
            do Espírito Santo, com foco especial nas regiões de Marechal Floriano e Domingos Martins. Nosso 
            mercado compreende famílias e residências que buscam transformar seus espaços em ambientes 
            confortáveis, funcionais e esteticamente harmoniosos, oferecendo soluções completas que vão 
            desde móveis essenciais até itens decorativos que personalizam cada lar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
