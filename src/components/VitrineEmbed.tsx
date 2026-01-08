const VitrineEmbed = () => {
  return (
    <section id="vitrine" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=magazineferroeaco" 
            className="w-full"
            style={{ border: 'none', height: '80vh', minHeight: '600px' }}
            title="Vitrine de Produtos - Magazine Ferro e Aço"
          />
        </div>
      </div>
    </section>
  );
};

export default VitrineEmbed;
