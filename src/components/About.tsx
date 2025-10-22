import { Target, Eye, Heart, Award } from 'lucide-react';
import aboutImage from '@/assets/about-warehouse.jpg';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Depósito Magazine Ferro e Aço"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold">6+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sobre nós
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Iniciei a empresa em agosto de 2018 com a missão de ajudar pessoas a realizar sonhos. 
              Atuamos no mercado de ferro e aço no Ceará, oferecendo produtos e serviços de qualidade 
              para a construção civil.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Missão</h3>
                  <p className="text-muted-foreground">
                    Oferecer produtos de qualidade no setor de materiais de construção e ferragens, 
                    garantindo confiança, agilidade e excelência no atendimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência regional em soluções para construção civil, reconhecida pela 
                    qualidade, compromisso e satisfação de nossos clientes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Valores</h3>
                  <p className="text-muted-foreground">
                    Ética, respeito, comprometimento, inovação, sustentabilidade e excelência 
                    em cada atendimento.
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
