import cacaPlantaoLogo from "/lovable-uploads/75dfbd24-48e8-4ead-85fe-cc23abd5fde8.png";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções inovadoras desenvolvidas pela DataDrift Labs para revolucionar diferentes setores
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={cacaPlantaoLogo} 
                  alt="Caça Plantão - Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Caça Plantão
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Plataforma que centraliza oportunidades de plantões médicos, coletando vagas de grupos de WhatsApp 
                  e outros canais públicos em um só lugar. Com mais de 300 vagas novas por dia, economize tempo 
                  na busca e encontre plantões ideais para sua especialidade.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>+300 vagas novas por dia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Atualização em tempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Filtros por especialidade e cidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Interface simples e organizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Economize 5h por semana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Teste grátis por 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};