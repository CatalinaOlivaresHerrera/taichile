"use client";
import { useState } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MobileMenu from "./component/layout/MobileMenu";
import HeroSection from "./component/sections/HeroSection";
import ProcessSection from "./component/sections/ProcessSection";
import AboutSection from "./component/sections/AboutSection";
import InsightsSection from "./component/sections/InsightsSection";
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
import ContactFormSection from "./component/sections/ContactFormSection";

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
    producto: '',
    servicio: ''
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
          producto: formData.producto,
          servicio: formData.servicio
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setEnviado(true);
        setFormData({ 
          nombre: '', 
          email: '', 
          telefono: '',
          producto: '',
          servicio: ''
        });
        setTimeout(() => setEnviado(false), 5000);
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
      
      {/* HERO SECTION */}
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section id="process">
        <ProcessSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="products">
        <ProductsSection />
      </section>
      
      <section id="about-taichile">
        <AboutTaichileSection />
      </section>
      
      <section id="mission">
        <MissionSection />
      </section>
      
      <section id="location">
        <LocationSection />
      </section>
      
      <section id="InsightsSection">
        <InsightsSection />
      </section>
      
      {/* FORMULARIO DE CONTACTO */}
      <section id="contactFormSection" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl">
          <ContactFormSection 
            formData={formData}
            setFormData={setFormData}
            enviando={enviando}
            enviado={enviado}
            error={error}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
      
      <section id="represented-companies">
        <RepresentedCompanies />
      </section>
      
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