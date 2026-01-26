import { Target, Eye, Heart } from 'lucide-react';
import aboutImage from '@/assets/about-showroom.jpg';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Showroom Mobile Canal - Móveis e decorações"
                className="w-full h-[250px] sm:h-[320px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-secondary text-secondary-foreground p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold">✓</div>
                <div className="text-xs sm:text-sm">Qualidade garantida</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
              Sobre nós
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              A Mobile Canal é uma empresa de Marechal Floriano, Espírito Santo, especializada em móveis 
              e decorações para o lar. Oferecemos uma ampla linha de produtos que incluem móveis de qualidade, 
              itens de cama, mesa e banho, colchões e eletrodomésticos, sempre com o objetivo de proporcionar 
              conforto e praticidade para sua casa.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Com uma equipe dedicada e comprometida, buscamos oferecer um atendimento personalizado, 
              ajudando nossos clientes a encontrarem as melhores soluções para o seu lar.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Target className="text-secondary" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Missão</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Transformar a casa dos nossos clientes em um verdadeiro lar, através de produtos 
                    que aliam design, conforto e durabilidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Eye className="text-secondary" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Visão</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Ser referência em móveis e decorações na região, reconhecida pela qualidade 
                    dos produtos e excelência no atendimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Heart className="text-secondary" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Valores</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Qualidade, atendimento personalizado, satisfação do cliente e compromisso 
                    em ajudar você a criar o lar dos seus sonhos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;