import { Card } from "@/components/ui/card";
import { Brain, Lightbulb, Zap, Target } from "lucide-react";

const concepts = [
  {
    icon: Brain,
    title: "Soluções Adaptativas",
    description: "Desenvolvemos sistemas de IA que se adaptam aos desafios específicos de cada parceiro, criando soluções verdadeiramente personalizadas."
  },
  {
    icon: Lightbulb,
    title: "Visão Além do Óbvio",
    description: "Identificamos padrões e oportunidades que ficam invisíveis aos métodos tradicionais de análise."
  },
  {
    icon: Zap,
    title: "Velocidade de Execução",
    description: "Transformamos insights em implementações práticas com a agilidade que apenas a tecnologia de ponta pode oferecer."
  },
  {
    icon: Target,
    title: "Precisão Cirúrgica",
    description: "Cada solução é calibrada especificamente para o contexto e objetivo do seu negócio."
  }
];

export const ConceptSection = () => {
  return (
    <section id="conceito" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Poder do <span className="bg-gradient-primary bg-clip-text text-transparent">DataDrift</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa abordagem colaborativa combina expertise técnica com visão estratégica para 
            desenvolver soluções de IA sob medida para cada desafio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((concept, index) => (
            <Card 
              key={concept.title} 
              className="p-6 bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <concept.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {concept.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {concept.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};