import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20">
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
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            Magazine Ferro e Aço
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 animate-fade-in font-normal leading-relaxed">
            Materiais de construção de qualidade para realizar seus sonhos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 animate-fade-in leading-relaxed">
            Construindo confiança, entregando qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in">
            <a
              href="https://wa.me/5585985971085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 btn-shadow hover:shadow-xl group"
            >
              Solicite um orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button
              onClick={() => navigate('/vitrine')}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm group"
            >
              Ver Vitrine
              <ShoppingBag className="ml-2 group-hover:scale-110 transition-transform" size={20} />
            </button>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm"
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
