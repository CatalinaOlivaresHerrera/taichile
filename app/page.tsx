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

// 🔥 Función para validar teléfono chileno (+56 seguido de 9 dígitos)
const validarTelefonoChile = (telefono: string): boolean => {
  // Eliminar espacios, guiones y puntos
  const telefonoLimpio = telefono.replace(/[\s\-\.]/g, '');
  // Expresión regular: +56 seguido de exactamente 9 dígitos
  const regex = /^\+56\d{9}$/;
  return regex.test(telefonoLimpio);
};

// 🔥 Función para formatear teléfono mientras escribe
const formatearTelefono = (valor: string): string => {
  // Eliminar todo lo que no sea números y el signo +
  let numeros = valor.replace(/[^\d+]/g, '');
  
  // Si no empieza con +, agregarlo
  if (!numeros.startsWith('+')) {
    if (numeros.startsWith('56')) {
      numeros = '+' + numeros;
    } else if (numeros.startsWith('9')) {
      numeros = '+56' + numeros;
    }
  }
  
  // Limitar a +56 + 9 dígitos = 12 caracteres máximo
  if (numeros.length > 12) {
    numeros = numeros.slice(0, 12);
  }
  
  return numeros;
};

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
  const [mensajeError, setMensajeError] = useState(""); // 🔥 Nuevo estado

  const handleSubmit = async () => {
    // Validar campos requeridos
    if (!formData.nombre || !formData.email || !formData.telefono) {
      setMensajeError("Por favor, complete todos los campos requeridos");
      setError(true);
      setTimeout(() => {
        setError(false);
        setMensajeError("");
      }, 3000);
      return;
    }

    // 🔥 VALIDACIÓN DE TELÉFONO CHILENO
    if (!validarTelefonoChile(formData.telefono)) {
      setMensajeError("El teléfono debe tener el formato: +56 9XXXXXXXX (ej: +56912345678)");
      setError(true);
      setTimeout(() => {
        setError(false);
        setMensajeError("");
      }, 5000);
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMensajeError("Ingrese un email válido (ej: nombre@dominio.com)");
      setError(true);
      setTimeout(() => {
        setError(false);
        setMensajeError("");
      }, 3000);
      return;
    }

    setEnviando(true);
    setError(false);
    setMensajeError("");

    try {
      const res = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          producto: formData.producto || 'No especificado',
          servicio: formData.servicio || 'No especificado',
        })
      });
      
      const data = await res.json();
      if (data.success) {
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
        setMensajeError(data.message || "Error al enviar. Intente nuevamente.");
        setError(true);
        setTimeout(() => {
          setError(false);
          setMensajeError("");
        }, 3000);
      }
    } catch {
      setMensajeError("Error de conexión. Intente nuevamente.");
      setError(true);
      setTimeout(() => {
        setError(false);
        setMensajeError("");
      }, 3000);
    } finally {
      setEnviando(false);
    }
  };

  // 🔥 Manejador para el teléfono con formateo automático
  const handleTelefonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormateado = formatearTelefono(e.target.value);
    setFormData({ ...formData, telefono: valorFormateado });
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
            mensajeError={mensajeError}
            onTelefonoChange={handleTelefonoChange}
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