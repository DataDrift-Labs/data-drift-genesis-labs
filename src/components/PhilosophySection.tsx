import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const PhilosophySection = () => {
  return (
    <section id="abordagem" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-secondary border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-accent mb-6 opacity-50" />
              
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                "Cada linha de código que escrevemos, cada modelo que treinamos, 
                cada algoritmo que otimizamos tem um propósito: 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> transformar o impossível em inevitável</span>."
              </blockquote>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Na DataDrift Labs, não acreditamos em limitações técnicas — acreditamos em 
                  <strong className="text-accent"> parcerias transformadoras</strong>. 
                  Trabalhamos lado a lado com nossos parceiros onde os métodos convencionais encontram seus limites.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Cada projeto é uma colaboração única, onde desenvolvemos soluções de IA 
                  personalizadas que se tornam a chave para desbloquear 
                  complexidades antes impenetráveis.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">O futuro não é algo que aguardamos</strong> — 
                  é algo que construímos, um algoritmo de cada vez.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};