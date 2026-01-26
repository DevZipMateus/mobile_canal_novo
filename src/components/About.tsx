import { Target, Eye, Heart, Building2, Star, Users, Shield, Lightbulb, CheckCircle } from 'lucide-react';
import aboutImage from '@/assets/about-showroom.jpg';

const About = () => {
  const values = [
    { icon: Star, title: 'Qualidade', description: 'Produtos duráveis e bem acabados' },
    { icon: Users, title: 'Atendimento', description: 'Relacionamento próximo e personalizado' },
    { icon: Shield, title: 'Confiança', description: 'Transparência e ética nas relações' },
    { icon: Lightbulb, title: 'Inovação', description: 'Busca constante por novidades e tendências' },
    { icon: CheckCircle, title: 'Compromisso', description: 'Cumprimento de prazos e promessas' },
  ];

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

            {/* Mission, Vision */}
            <div className="space-y-4 sm:space-y-6 mb-8">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Target className="text-secondary" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Missão</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Transformar residências em lares dos sonhos através de móveis e decorações de qualidade, 
                    oferecendo soluções completas para o lar com atendimento personalizado e excelência.
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
                    Ser a referência em móveis e decorações no Espírito Santo, reconhecida pela qualidade 
                    dos produtos, inovação em design e compromisso com a satisfação dos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 sm:mt-16">
          <div className="flex gap-3 sm:gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Heart className="text-secondary" size={20} />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Nossos valores</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-4 sm:p-6 text-center card-hover">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-secondary" size={20} />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Market Section */}
        <div className="mt-12 sm:mt-16 bg-card border border-border rounded-2xl p-6 sm:p-8">
          <div className="flex gap-3 sm:gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Building2 className="text-secondary" size={20} />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Mercado de atuação</h3>
            </div>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A Mobile Canal atua no segmento de móveis e decorações para o lar, atendendo o mercado varejista 
            do Espírito Santo, com foco especial nas regiões de Marechal Floriano e Domingos Martins. Nosso 
            mercado compreende famílias e residências que buscam transformar seus espaços em ambientes 
            confortáveis, funcionais e esteticamente harmoniosos, oferecendo soluções completas que vão 
            desde móveis essenciais até itens decorativos que personalizam cada lar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
