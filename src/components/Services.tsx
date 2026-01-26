import { Sofa, Bed, Frame, Truck, CheckCircle, Headphones } from 'lucide-react';
import productsImage from '@/assets/services-furniture.jpg';

const Services = () => {
  const products = [
    'Móveis para sala',
    'Móveis para quarto',
    'Estofados',
    'Colchões',
    'Cama, mesa e banho',
    'Quadros decorativos',
    'Eletrodomésticos',
  ];

  const services = [
    {
      icon: Sofa,
      title: 'Móveis de qualidade',
      description: 'Ampla variedade de móveis para todos os ambientes da sua casa.',
    },
    {
      icon: Headphones,
      title: 'Atendimento personalizado',
      description: 'Equipe dedicada para ajudar você a encontrar o que precisa.',
    },
    {
      icon: Truck,
      title: 'Entrega e montagem grátis',
      description: 'Levamos e montamos seus móveis sem custos adicionais.',
    },
  ];

  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Nossos produtos e serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tudo para transformar sua casa em um lar aconchegante
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 sm:p-8 card-hover"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Products Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Products List */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              O que oferecemos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-foreground font-medium">{product}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8">
              <a
                href="https://wa.me/5527995059840"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base transition-all duration-300 btn-shadow hover:shadow-xl"
              >
                Fale com um consultor
              </a>
            </div>
          </div>

          {/* Products Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productsImage}
                alt="Móveis e decorações - Mobile Canal"
                className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;