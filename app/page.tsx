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

// Definir la interfaz FormData
interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  producto: string;
  servicio: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({ 
    nombre: '', 
    email: '', 
    telefono: '',
    producto: '',   // ← AGREGADO
    servicio: ''    // ← AGREGADO
  });
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
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          producto: formData.producto,   // ← ENVIAR
          servicio: formData.servicio    // ← ENVIAR
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setEnviado(true);
        // Resetear el formulario incluyendo producto y servicio
        setFormData({ 
          nombre: '', 
          email: '', 
          telefono: '',
          producto: '',
          servicio: ''
        });
      } else {
        setError(true);
      }
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
      
      {/* INICIO - HeroSection */}
      <section id="hero">
        <HeroSection 
          formData={formData}
          setFormData={setFormData}
          enviando={enviando}
          enviado={enviado}
          error={error}
          onSubmit={handleSubmit}
        />
      </section>
      
      {/* QUIÉNES SOMOS - AboutSection */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* NUESTRO EQUIPO - TeamSection */}
      <section id="team">
        <TeamSection />
      </section>
      
      {/* ProcessSection (opcional, no está en el header pero se mantiene) */}
      <section id="process">
        <ProcessSection />
      </section>
      
      {/* SERVICIOS - ServicesSection */}
      <section id="services">
        <ServicesSection />
      </section>
      
      {/* PRODUCTOS - ProductsSection */}
      <section id="products">
        <ProductsSection />
      </section>
      
      {/* AboutTaichileSection (opcional) */}
      <section id="about-taichile">
        <AboutTaichileSection />
      </section>
      
      {/* MissionSection (opcional) */}
      <section id="mission">
        <MissionSection />
      </section>
      
      {/* CONTACTO - LocationSection */}
      <section id="location">
        <LocationSection />
      </section>
      
      {/* REPRESENTACIONES - RepresentedCompanies */}
      <section id="represented-companies">
        <RepresentedCompanies />
      </section>
      
      {/* CLIENTES - ClientsCarousel */}
      <section id="clients">
        <ClientsCarousel />
      </section>
      
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