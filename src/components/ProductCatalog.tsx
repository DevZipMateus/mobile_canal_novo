import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import whatsappIcon from '@/assets/whatsapp-icon.png';
import bgVitrine from '@/assets/bg-vitrine.jpg';

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: '1', name: 'Estofado Corvette 2.30m Bege', image: '/imagens/estofado_corvette_2.30m bege.png', category: 'Estofados' },
  { id: '2', name: 'Estofado Tókio 2 Módulos e Chaise Direita Bege', image: '/imagens/estofado_tokio_2_modulos_e_chaise_direita_bege.png', category: 'Estofados' },
  { id: '3', name: 'Estofado Toretto 2.90m Bege', image: '/imagens/estofado_toretto_2.90m bege.png', category: 'Estofados' },
  { id: '4', name: 'Estofado Toronto 2.50m Linho', image: '/imagens/estofado_toronto_2.50m linho.png', category: 'Estofados' },
  { id: '5', name: 'Aparador Dune Off White Nature', image: '/imagens/aparador_dune_off_white_nature.png', category: 'Sala de Estar' },
  { id: '6', name: 'Buffet Jurerê Off White Matte Freijó', image: '/imagens/buffet_jurere_off_white_matte_freijo.png', category: 'Sala de Estar' },
  { id: '7', name: 'Cristaleira Dune Nature Off White', image: '/imagens/cristaleira_dune_nature_off_white.png', category: 'Sala de Estar' },
  { id: '8', name: 'Cristaleira Jurerê Off White Matte Freijó', image: '/imagens/cristaleira_jurere_off_white_matte_freijo.png', category: 'Sala de Estar' },
  { id: '9', name: 'Mesa de Centro Tela Sintética 90cm Freijó', image: '/imagens/mesa_de_centro_tela_sintetica_90cm_freijo.png', category: 'Sala de Estar' },
  { id: '10', name: 'Banqueta Classic Tela Facto Marrom Nature', image: '/imagens/banqueta_classic_tela_facto_marrom_nature.png', category: 'Sala de Estar' },
  { id: '11', name: 'Cadeira Oiti Natuame Madeira Linho Bege', image: '/imagens/cadeira_oiti_natuame_madeira_linho_bege.png', category: 'Sala de Estar' },
  { id: '12', name: 'Cabeceira Concept Estofada com Painel Frisado Freijó', image: '/imagens/cabeceira_concept_estofada_com_2_painel_frisado_freijo_bloucle_areia_e_2_mesas_de_cabeceira_concept.png', category: 'Quarto' },
  { id: '13', name: 'Cabeceira New Himalaia Cumaru', image: '/imagens/cabeceira_new_himalaia_cumaru.png', category: 'Quarto' },
  { id: '14', name: 'Roupeiro Arezzo 6 Portas Cinamomo Off White', image: '/imagens/roupeiro_arezzo_6_portas_cinamomo_off_white.png', category: 'Quarto' },
  { id: '15', name: 'Roupeiro Portugal 6 Portas Cinamomo Off White', image: '/imagens/roupeiro_portugal_6_portas_cinamomo_off_white.png', category: 'Quarto' },
  { id: '16', name: 'Mesa de Cabeceira Império Cinamomo Off White', image: '/imagens/mesa_de_cabeceira_imperio_cinamomo_off_white.png', category: 'Quarto' },
  { id: '17', name: 'Colchão Mannes Ottawa', image: '/imagens/colchao_mannes_otawa.png', category: 'Quarto' },
  { id: '18', name: 'Home Luminare c/ Duas Torres Vidro Reflecta com LED', image: '/imagens/home_luminare_c_duas_torres_vidro_reflecta_com_led_off_white_naturale.png', category: 'Home Theater' },
  { id: '19', name: 'Rack Painel Santorini com LED Tauari Off White Fosco', image: '/imagens/rack_painel_santorini_com_led_tauari_off_white_fosco.png', category: 'Home Theater' },
  { id: '20', name: 'Conjunto Nobre Ripado 230 Painel Naturalle', image: '/imagens/conjunto_nobre_ripado_230_painel_naturalle_e_rack_requinte_naturalle_off_white_pes_madeira.png', category: 'Home Theater' },
  { id: '21', name: 'Painel Ripado Supremo 2.3 Cinamomo', image: '/imagens/painel_ripado_supremo_2.3 cinamomo.png', category: 'Home Theater' },
  { id: '22', name: 'Escrivaninha Prism Off White Cinamomo', image: '/imagens/escrivaninha_prism_off_white_cinamomo.png', category: 'Escritório' },
  { id: '23', name: 'Mesa de Estudo Sevilha Off White Naturalle', image: '/imagens/mesa_de_estudo_sevilha_off_white_naturalle.png', category: 'Escritório' },
  { id: '24', name: 'Linha Baby Biscoito', image: '/imagens/linha_baby_biscoito.png', category: 'Infantil' },
];

const categories = ['Todos', 'Estofados', 'Sala de Estar', 'Quarto', 'Home Theater', 'Escritório', 'Infantil'];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [expandedProduct, setExpandedProduct] = useState<Product | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getQuantity = (productId: string) => quantities[productId] || 1;

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = getQuantity(product.id);
    addToCart({ id: product.id, name: product.name, image: product.image }, quantity);
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  return (
    <section id="vitrine" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${bgVitrine})` }}
      >
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[1px]" />
      </div>
      <div className="container-custom px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
            Vitrine
          </h2>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl text-muted-foreground max-w-2xl 2xl:max-w-3xl mx-auto px-2">
            Confira nossa seleção de móveis e encontre o ideal para sua casa
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="text-xs sm:text-sm md:text-base 2xl:text-lg px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 h-auto touch-manipulation"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-7"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: Math.min(filteredProducts.indexOf(product) * 0.05, 0.4) }}
                whileHover={{ y: -6 }}
              >
                <Card 
                  className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300 h-full card-glow shine-effect icon-float"
                >
                  <motion.div 
                    className="relative aspect-square overflow-hidden bg-white cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setExpandedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 sm:p-3 md:p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
                      <span className="bg-secondary text-secondary-foreground text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </motion.div>
                  <CardContent className="p-2.5 sm:p-3 md:p-4 2xl:p-5">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base 2xl:text-lg mb-2 sm:mb-3 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] 2xl:min-h-[3rem]">
                      {product.name}
                    </h3>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors touch-manipulation"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm 2xl:text-base font-medium">
                        {getQuantity(product.id)}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors touch-manipulation"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs sm:text-sm 2xl:text-base h-8 sm:h-9 md:h-10 2xl:h-11 touch-manipulation"
                      >
                        <ShoppingCart size={14} className="mr-1.5 sm:mr-2" />
                        Adicionar ao carrinho
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-muted-foreground mb-3 sm:mb-4">
            Não encontrou o que procura? Temos muito mais em nossa loja!
          </p>
          <motion.a
            href="https://wa.me/5527995059840"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 sm:px-6 md:px-8 2xl:px-10 py-2.5 sm:py-3 md:py-4 2xl:py-5 rounded-lg font-semibold text-sm sm:text-base 2xl:text-lg transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.02, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 mr-2" />
            Fale com um consultor
          </motion.a>
        </motion.div>

        {/* Image Expand Dialog */}
        <Dialog open={!!expandedProduct} onOpenChange={(open) => !open && setExpandedProduct(null)}>
          <DialogContent className="max-w-[92vw] max-h-[90vh] sm:max-w-2xl md:max-w-3xl 2xl:max-w-4xl p-3 sm:p-4 md:p-6 bg-white">
            <DialogTitle className="text-sm sm:text-base md:text-lg 2xl:text-xl font-semibold text-center">
              {expandedProduct?.name}
            </DialogTitle>
            {expandedProduct && (
              <img
                src={expandedProduct.image}
                alt={expandedProduct.name}
                className="w-full max-h-[70vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductCatalog;
