import { Sofa, Bed, UtensilsCrossed, Palette, ShowerHead, Layers, Truck, Headphones, Wrench } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import productsImage from '@/assets/services-furniture.jpg';

const Services = () => {
  const productCategories = [
    {
      icon: Sofa,
      title: 'Móveis para sala',
      items: ['Sofás e sofá-cama', 'Poltronas e cadeiras de descanso', 'Mesas de centro e laterais', 'Estantes e prateleiras', 'Painéis e aparadores'],
    },
    {
      icon: Bed,
      title: 'Móveis para quarto',
      items: ['Camas (casal, solteiro, beliche)', 'Guarda-roupas e roupeiros', 'Cômodas e criados-mudos', 'Cabeceiras e cabeceiras estofadas', 'Espelhos e penteadeiras'],
    },
    {
      icon: UtensilsCrossed,
      title: 'Móveis para cozinha',
      items: ['Mesas de jantar', 'Cadeiras e bancos', 'Bancadas e ilhas', 'Armários e despensas'],
    },
    {
      icon: Palette,
      title: 'Decorações e complementos',
      items: ['Tapetes e passadeiras', 'Cortinas e persianas', 'Quadros e painéis decorativos', 'Luminárias e abajures', 'Objetos decorativos'],
    },
    {
      icon: ShowerHead,
      title: 'Cama, mesa e banho',
      items: ['Conjuntos de cama (lençóis, edredons, colchas)', 'Toalhas de banho e rosto', 'Jogos americanos e tapetes de mesa', 'Utensílios decorativos para cozinha'],
    },
    {
      icon: Layers,
      title: 'Soluções multifuncionais',
      items: ['Móveis modulares e versáteis', 'Soluções para espaços pequenos', 'Móveis com design inteligente'],
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

        {/* Product Categories Accordion */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Categorias de produtos</h3>
          <Accordion type="multiple" className="space-y-4">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-secondary" size={22} />
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-left">{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-2 pl-14 sm:pl-16">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm sm:text-base text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
