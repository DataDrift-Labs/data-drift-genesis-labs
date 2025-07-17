export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm transform rotate-45" />
            </div>
            <div>
              <span className="text-lg font-bold text-foreground">DataDrift Labs</span>
              <p className="text-sm text-muted-foreground">Transformando o impossível em inevitável</p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 DataDrift Labs. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              CNPJ: 61.738.333/0001-07
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Construído com IA e muita ambição
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};