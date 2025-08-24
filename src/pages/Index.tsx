import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ConceptSection } from "@/components/ConceptSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ConceptSection />
      <PhilosophySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
