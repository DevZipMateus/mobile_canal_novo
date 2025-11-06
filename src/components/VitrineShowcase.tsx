import { ShoppingBag, Package, Search, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import productsImage from '@/assets/products-steel.jpg';

const VitrineShowcase = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Package,
      title: 'Catálogo Completo',
      description: 'Visualize todos os nossos produtos disponíveis em estoque',
    },
    {
      icon: Search,
      title: 'Busca Fácil',
      description: 'Encontre rapidamente o material que você precisa',
    },
    {
      icon: CreditCard,
      title: 'Preços Atualizados',
      description: 'Consulte valores em tempo real e condições de pagamento',
    },
  ];

  return (
    <section id="vitrine-showcase" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <ShoppingBag className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">Vitrine Online</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Explore Nossa Vitrine de Produtos
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acesse nossa vitrine online e consulte todos os produtos disponíveis com preços atualizados. 
              Uma maneira rápida e prática de planejar sua compra.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/vitrine')}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 btn-shadow hover:shadow-xl group mt-4"
            >
              Acessar Vitrine
              <ShoppingBag className="ml-2 group-hover:scale-110 transition-transform" size={20} />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={productsImage}
                alt="Produtos na vitrine - Magazine Ferro e Aço"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-xl">
                  Mais de 1000 produtos disponíveis
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineShowcase;
