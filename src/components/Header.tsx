import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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
            <button 
              onClick={() => scrollToSection('conceito')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Conceito
            </button>
            <button 
              onClick={() => scrollToSection('abordagem')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Abordagem
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>
          
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
              <button 
                onClick={() => {
                  scrollToSection('conceito');
                  setIsMenuOpen(false);
                }} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Conceito
              </button>
              <button 
                onClick={() => {
                  scrollToSection('abordagem');
                  setIsMenuOpen(false);
                }} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Abordagem
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contato');
                  setIsMenuOpen(false);
                }} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};