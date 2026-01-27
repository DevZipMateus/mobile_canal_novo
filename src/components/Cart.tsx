import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, clearCart, totalItems } = useCart();

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    const itemsList = items
      .map(item => `• ${item.name} (Qtd: ${item.quantity})`)
      .join('\n');

    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para os seguintes itens:\n\n${itemsList}\n\nAguardo retorno. Obrigado!`
    );

    window.open(`https://wa.me/5527995059840?text=${message}`, '_blank');
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 md:right-6 z-40 bg-secondary hover:bg-secondary/90 text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir carrinho"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center"
          >
            {totalItems > 99 ? '99+' : totalItems}
          </motion.span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} />
                  <h2 className="text-lg font-semibold">Meu carrinho</h2>
                  {totalItems > 0 && (
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
                      {totalItems} {totalItems === 1 ? 'item' : 'itens'}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Fechar carrinho"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <ShoppingCart size={48} className="mb-4 opacity-50" />
                    <p className="text-center">Seu carrinho está vazio</p>
                    <p className="text-sm text-center mt-1">Adicione produtos da vitrine</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map(item => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex gap-3 bg-muted/50 rounded-lg p-3"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm line-clamp-2 mb-2">{item.name}</h3>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-background border border-border rounded-md hover:bg-muted transition-colors"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-background border border-border rounded-md hover:bg-muted transition-colors"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus size={14} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto p-1.5 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                              aria-label="Remover item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-border p-4 space-y-3">
                  <Button
                    onClick={handleSendWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-12 text-base font-semibold"
                  >
                    <Send size={18} className="mr-2" />
                    Enviar pedido via WhatsApp
                  </Button>
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Limpar carrinho
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
