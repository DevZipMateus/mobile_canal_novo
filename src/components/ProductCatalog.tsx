import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
}

const products: Product[] = [
  // Estofados
  { id: '1', name: 'Estofado Corvette 2.30m Bege', image: '/imagens/estofado_corvette_2.30m bege.png', category: 'Estofados' },
  { id: '2', name: 'Estofado Tókio 2 Módulos e Chaise Direita Bege', image: '/imagens/estofado_tokio_2_modulos_e_chaise_direita_bege.png', category: 'Estofados' },
  { id: '3', name: 'Estofado Toretto 2.90m Bege', image: '/imagens/estofado_toretto_2.90m bege.png', category: 'Estofados' },
  { id: '4', name: 'Estofado Toronto 2.50m Linho', image: '/imagens/estofado_toronto_2.50m linho.png', category: 'Estofados' },
  
  // Sala de Estar
  { id: '5', name: 'Aparador Dune Off White Nature', image: '/imagens/aparador_dune_off_white_nature.png', category: 'Sala de Estar' },
  { id: '6', name: 'Buffet Jurerê Off White Matte Freijó', image: '/imagens/buffet_jurere_off_white_matte_freijo.png', category: 'Sala de Estar' },
  { id: '7', name: 'Cristaleira Dune Nature Off White', image: '/imagens/cristaleira_dune_nature_off_white.png', category: 'Sala de Estar' },
  { id: '8', name: 'Cristaleira Jurerê Off White Matte Freijó', image: '/imagens/cristaleira_jurere_off_white_matte_freijo.png', category: 'Sala de Estar' },
  { id: '9', name: 'Mesa de Centro Tela Sintética 90cm Freijó', image: '/imagens/mesa_de_centro_tela_sintetica_90cm_freijo.png', category: 'Sala de Estar' },
  { id: '10', name: 'Banqueta Classic Tela Facto Marrom Nature', image: '/imagens/banqueta_classic_tela_facto_marrom_nature.png', category: 'Sala de Estar' },
  { id: '11', name: 'Cadeira Oiti Natuame Madeira Linho Bege', image: '/imagens/cadeira_oiti_natuame_madeira_linho_bege.png', category: 'Sala de Estar' },
  
  // Quarto
  { id: '12', name: 'Cabeceira Concept Estofada com Painel Frisado Freijó', image: '/imagens/cabeceira_concept_estofada_com_2_painel_frisado_freijo_bloucle_areia_e_2_mesas_de_cabeceira_concept.png', category: 'Quarto' },
  { id: '13', name: 'Cabeceira New Himalaia Cumaru', image: '/imagens/cabeceira_new_himalaia_cumaru.png', category: 'Quarto' },
  { id: '14', name: 'Roupeiro Arezzo 6 Portas Cinamomo Off White', image: '/imagens/roupeiro_arezzo_6_portas_cinamomo_off_white.png', category: 'Quarto' },
  { id: '15', name: 'Roupeiro Portugal 6 Portas Cinamomo Off White', image: '/imagens/roupeiro_portugal_6_portas_cinamomo_off_white.png', category: 'Quarto' },
  { id: '16', name: 'Mesa de Cabeceira Império Cinamomo Off White', image: '/imagens/mesa_de_cabeceira_imperio_cinamomo_off_white.png', category: 'Quarto' },
  { id: '17', name: 'Colchão Mannes Ottawa', image: '/imagens/colchao_mannes_otawa.png', category: 'Quarto' },
  
  // Home Theater
  { id: '18', name: 'Home Luminare c/ Duas Torres Vidro Reflecta com LED', image: '/imagens/home_luminare_c_duas_torres_vidro_reflecta_com_led_off_white_naturale.png', category: 'Home Theater' },
  { id: '19', name: 'Rack Painel Santorini com LED Tauari Off White Fosco', image: '/imagens/rack_painel_santorini_com_led_tauari_off_white_fosco.png', category: 'Home Theater' },
  { id: '20', name: 'Conjunto Nobre Ripado 230 Painel Naturalle', image: '/imagens/conjunto_nobre_ripado_230_painel_naturalle_e_rack_requinte_naturalle_off_white_pes_madeira.png', category: 'Home Theater' },
  { id: '21', name: 'Painel Ripado Supremo 2.3 Cinamomo', image: '/imagens/painel_ripado_supremo_2.3 cinamomo.png', category: 'Home Theater' },
  
  // Escritório
  { id: '22', name: 'Escrivaninha Prism Off White Cinamomo', image: '/imagens/escrivaninha_prism_off_white_cinamomo.png', category: 'Escritório' },
  { id: '23', name: 'Mesa de Estudo Sevilha Off White Naturalle', image: '/imagens/mesa_de_estudo_sevilha_off_white_naturalle.png', category: 'Escritório' },
  
  // Infantil
  { id: '24', name: 'Linha Baby Biscoito', image: '/imagens/linha_baby_biscoito.png', category: 'Infantil' },
];

const categories = ['Todos', 'Estofados', 'Sala de Estar', 'Quarto', 'Home Theater', 'Escritório', 'Infantil'];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto: ${productName}`);
    window.open(`https://wa.me/5527995059840?text=${message}`, '_blank');
  };

  return (
    <section id="catalogo" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Nosso catálogo
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Confira nossa seleção de móveis e encontre o ideal para sua casa
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="text-sm sm:text-base"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300"
                >
                  <motion.div 
                    className="relative aspect-square overflow-hidden bg-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </motion.div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm sm:text-base mb-3 line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => handleWhatsAppClick(product.name)}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                      >
                        <MessageCircle size={18} className="mr-2" />
                        Consultar preço
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
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Temos muito mais em nossa loja!
          </p>
          <motion.a
            href="https://wa.me/5527995059840"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base transition-all duration-300"
            whileHover={{ scale: 1.02, boxShadow: '0 15px 30px -10px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={20} className="mr-2" />
            Fale com um consultor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;
