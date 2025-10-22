import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Materiais de construção - ferro e aço"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-overlay)' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Magazine Ferro e Aço
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in font-normal">
            Materiais de construção de qualidade para realizar seus sonhos
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 animate-fade-in leading-relaxed">
            Construindo confiança, entregando qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <a
              href="https://wa.me/5585985971085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 btn-shadow hover:shadow-xl group"
            >
              Solicite um orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Conheça mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
