import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para <span className="bg-gradient-primary bg-clip-text text-transparent">Explorar o Impossível</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toda revolução começa com uma conversa. Vamos descobrir juntos que oportunidades 
            estão esperando para serem transformadas em realidade.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card border-border hover:shadow-card transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-glow-pulse">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground">
                Vamos Conversar Sobre Seu Próximo Projeto
              </h3>
              
              <p className="text-muted-foreground">
                Compartilhe conosco seus desafios mais complexos. 
                Nossa equipe está pronta para transformar impossibilidades em oportunidades reais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                  <Mail className="mr-2 w-4 h-4" />
                  Iniciar Conversa
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-card">
                  Ver Cases de Sucesso
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { value: "100+", label: "Problemas Resolvidos" },
            { value: "∞", label: "Possibilidades Exploradas" },
            { value: "24/7", label: "IA Trabalhando" },
            { value: "0", label: "Limitações Aceitas" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};