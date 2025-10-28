import Header from '@/components/Header';
import { Helmet } from 'react-helmet';

const Vitrine = () => {
  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Magazine Ferro e Aço</title>
        <meta name="description" content="Demonstração de vitrine de produtos da Magazine Ferro e Aço" />
      </Helmet>
      <div className="h-screen overflow-hidden bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=magazineferroeaco" 
            className="w-full h-full"
            style={{ border: 'none' }}
            title="Demonstração de Vitrine"
          />
        </main>
      </div>
    </>
  );
};

export default Vitrine;
