import { Package, Wrench, Truck, CheckCircle } from 'lucide-react';
import productsImage from '@/assets/products-steel.jpg';

const Services = () => {
  const products = [
    'Colinas',
    'Vigas',
    'Treliças',
    'Telas',
    'Vergalhões',
    'Lajes',
    'Miudezas em geral',
  ];

  const services = [
    {
      icon: Package,
      title: 'Produtos de qualidade',
      description: 'Amplo estoque de materiais de ferro e aço para sua obra.',
    },
    {
      icon: Wrench,
      title: 'Fabricação sob medida',
      description: 'Fabricamos ferragens em geral de acordo com suas necessidades.',
    },
    {
      icon: Truck,
      title: 'Entrega rápida',
      description: 'Agilidade na entrega para não atrasar sua obra.',
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos produtos e serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para sua construção em um só lugar
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Products Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Products List */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Nossos produtos
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{product}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/5585985971085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 btn-shadow hover:shadow-xl"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>

          {/* Products Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productsImage}
                alt="Produtos de ferro e aço"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
