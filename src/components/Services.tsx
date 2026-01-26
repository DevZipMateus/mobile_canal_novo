import { Sofa, Bed, UtensilsCrossed, Palette, ShowerHead, Layers, Truck, Headphones, Wrench } from 'lucide-react';
import productsImage from '@/assets/services-furniture.jpg';

const Services = () => {
  const productCategories = [
    {
      icon: Sofa,
      title: 'Móveis para sala',
      items: ['Sofás e sofá-cama', 'Poltronas', 'Mesas de centro', 'Estantes', 'Painéis e aparadores'],
    },
    {
      icon: Bed,
      title: 'Móveis para quarto',
      items: ['Camas', 'Guarda-roupas', 'Cômodas', 'Cabeceiras', 'Penteadeiras'],
    },
    {
      icon: UtensilsCrossed,
      title: 'Móveis para cozinha',
      items: ['Mesas de jantar', 'Cadeiras e bancos', 'Armários', 'Bancadas'],
    },
    {
      icon: Palette,
      title: 'Decorações e complementos',
      items: ['Tapetes', 'Cortinas', 'Quadros decorativos', 'Luminárias', 'Objetos decorativos'],
    },
    {
      icon: ShowerHead,
      title: 'Cama, mesa e banho',
      items: ['Conjuntos de cama', 'Toalhas', 'Jogos americanos', 'Utensílios decorativos'],
    },
    {
      icon: Layers,
      title: 'Soluções multifuncionais',
      items: ['Móveis modulares', 'Soluções para espaços pequenos', 'Design inteligente'],
    },
  ];

  const services = [
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
    {
      icon: Wrench,
      title: 'Decoração e marcenaria',
      description: 'Serviços de decoração personalizada e marcenaria especializada.',
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

        {/* Products Hero */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Products Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productsImage}
                alt="Móveis e decorações - Mobile Canal"
                className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Encontre tudo para o seu lar
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Oferecemos uma linha completa de móveis e decorações para todos os ambientes da sua casa. 
              Nossa equipe está pronta para ajudar você a escolher as melhores peças que combinam 
              qualidade, design e conforto.
            </p>
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

        {/* Product Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 sm:p-8 card-hover"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm sm:text-base text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
