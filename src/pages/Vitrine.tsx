import Header from '@/components/Header';
import { Helmet } from 'react-helmet';

const Vitrine = () => {
  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Magazine Ferro e Aço</title>
        <meta name="description" content="Demonstração de vitrine de produtos da Magazine Ferro e Aço" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 sm:pt-20">
          <div className="w-full">
            <iframe 
              src="https://v4.egestor.com.br/vitrine/?s=magazineferroeaco" 
              style={{ width: '100%', height: '800px', border: 'none' }}
              title="Demonstração de Vitrine"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Vitrine;
