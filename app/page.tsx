"use client";
import { useState } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MobileMenu from "./component/layout/MobileMenu";
import HeroSection from "./component/sections/HeroSection";
import ProcessSection from "./component/sections/ProcessSection";
import AboutSection from "./component/sections/AboutSection";
import ServicesSection from "./component/sections/ServicesSection";
import ProductsSection from "./component/sections/ProductsSection";
import AboutTaichileSection from "./component/sections/AboutTaichileSection";
import MissionSection from "./component/sections/MissionSection";
import LocationSection from "./component/sections/LocationSection";
import TeamSection from "./component/sections/TeamSection";
import RepresentedCompanies from "./component/RepresentedCompanies";
import ClientsCarousel from "./component/ClientsCarousel";
import RotatingEquipmentPopup from "./component/popups/RotatingEquipmentPopup";
import WhatsAppWidget from "./component/WhatsAppWidget";




export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    setEnviando(true);
    setError(false);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) setEnviado(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <RotatingEquipmentPopup />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <HeroSection 
        formData={formData}
        setFormData={setFormData}
        enviando={enviando}
        enviado={enviado}
        error={error}
        onSubmit={handleSubmit}
      />
      
      <AboutSection />
      <TeamSection />
      <ProcessSection />
      <ServicesSection />
      <ProductsSection />
      <AboutTaichileSection />
      <MissionSection />
      <LocationSection />
      <RepresentedCompanies />
      <ClientsCarousel />
      
      <Footer />
      <WhatsAppWidget 
        agentName="Ignacio" 
        phoneNumber="56962363384" 
        message={"¿Necesita más información?\nHablemos por acá, te ayudo de inmediato"} 
        isOnline={true} 
      />
    </main>
  );
}