import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="depoimentos" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 relative group"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Quote className="absolute top-4 right-4 text-secondary/20 group-hover:text-secondary/30 transition-colors" size={32} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="text-secondary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="font-semibold text-foreground">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
