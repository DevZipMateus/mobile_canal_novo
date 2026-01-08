const VitrineEmbed = () => {
  return (
    <section id="vitrine" className="pt-4 pb-16 sm:pb-20 lg:pb-24 bg-muted/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=magazineferroeaco" 
            className="w-full"
            style={{ border: 'none', height: '2400px' }}
            title="Vitrine de Produtos - Magazine Ferro e Aço"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
};

export default VitrineEmbed;
