import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full" style={{ marginTop: '80px' }}>
        <iframe
          src="https://mobicanal.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full border-none"
          style={{ height: 'calc(100vh - 80px - 63px)' }}
          allowFullScreen
        />
      </main>
    </div>
  );
};

export default Vitrine;
