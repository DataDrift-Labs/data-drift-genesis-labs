import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm transform rotate-45" />
            </div>
            <span className="text-xl font-bold text-foreground">DataDrift Labs</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#conceito" className="text-muted-foreground hover:text-foreground transition-colors">
              Conceito
            </a>
            <a href="#abordagem" className="text-muted-foreground hover:text-foreground transition-colors">
              Abordagem
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Começar Projeto
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#conceito" className="text-muted-foreground hover:text-foreground transition-colors">
                Conceito
              </a>
              <a href="#abordagem" className="text-muted-foreground hover:text-foreground transition-colors">
                Abordagem
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full">
                Começar Projeto
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};