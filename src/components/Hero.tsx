import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-furniture.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-14 sm:pt-16 md:pt-18 lg:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={heroImage}
          alt="Showroom de móveis e decorações - Mobile Canal"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-overlay)' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 py-10 sm:py-14 md:py-18 lg:py-24 xl:py-28 2xl:py-32">
        <div className="max-w-4xl 2xl:max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            Mobile Canal
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-white/90 mb-4 sm:mb-6 md:mb-8 font-normal leading-relaxed max-w-3xl 2xl:max-w-4xl"
          >
            Móveis, estofados, colchões e decorações de qualidade para transformar sua casa em um verdadeiro lar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white/80 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
          >
            Qualidade, design e conforto para seu lar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4"
          >
            <a
              href="https://wa.me/5527995059840"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-secondary px-5 sm:px-6 md:px-7 lg:px-8 2xl:px-10 py-3 sm:py-3.5 md:py-4 2xl:py-5 rounded-lg font-semibold text-sm sm:text-base md:text-base 2xl:text-lg transition-all duration-300 btn-shadow hover:shadow-xl group touch-manipulation"
            >
              Fale conosco
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#vitrine"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#vitrine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white px-5 sm:px-6 md:px-7 lg:px-8 2xl:px-10 py-3 sm:py-3.5 md:py-4 2xl:py-5 rounded-lg font-semibold text-sm sm:text-base md:text-base 2xl:text-lg transition-all duration-300 backdrop-blur-sm touch-manipulation"
            >
              Ver produtos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
