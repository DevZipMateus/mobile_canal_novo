import { Star, Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const testimonials = [
    {
      name: 'Ygor Gustavo',
      text: 'Atendimento excelente! A loja é super organizada, com grande variedade de móveis de ótima qualidade e preços justos. Fui muito bem atendido desde o primeiro contato até a entrega, que chegou no prazo certinho. Recomendo demais!',
    },
    {
      name: 'Juliana Queiroz',
      text: 'Minha experiência na loja foi excelente! O ambiente é muito limpo e organizado, os produtos são de ótima qualidade e com preços justos. Fui atendida pelo Gustavo, que foi extremamente atencioso e paciente. Recomendo a todos!',
    },
    {
      name: 'Petra Oliveira',
      text: 'Ótimo! A loja oferece uma grande variedade de móveis e o atendimento é excepcional. Com certeza voltarei mais vezes!',
    },
    {
      name: 'Christiane Knaak',
      text: 'Muito satisfeita com minhas compras, o vendedor nos atendeu muito bem, voltaremos a comprar mais vezes na loja.',
    },
    {
      name: 'Nathalia Queiroz',
      text: 'A melhor loja de móveis e decorações que já conheci! Atendimento excelente e equipe qualificada, além dos móveis com qualidade única. Me senti muito segura na compra.',
    },
    {
      name: 'Flávia Radael',
      text: 'Maravilhosa! Loja com diversidade incrível de móveis, e outras variedades de enfeites para casa. Atendimento altamente qualificado, com entrega e montagem em prazos recordes!',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="depoimentos" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 relative group card-glow shine-effect"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 text-secondary/20 group-hover:text-secondary/30 transition-colors" size={24} />
              
              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <Star className="text-amber-400 fill-amber-400" size={14} />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="text-secondary font-semibold text-xs sm:text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-semibold text-sm sm:text-base text-foreground">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
