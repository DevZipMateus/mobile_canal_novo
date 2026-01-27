import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProductCatalog from '@/components/ProductCatalog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Cart from '@/components/Cart';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProductCatalog />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
