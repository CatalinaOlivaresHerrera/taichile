'use client';

import ContactForm from '../ui/ContactForm';

// Define el tipo del formulario (debe coincidir con el de ContactForm)
interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  producto: string;  // ← agregar
  servicio: string;   // ← agregar
}

interface HeroSectionProps {
  formData: FormData;
  setFormData: (data: FormData | ((prev: FormData) => FormData)) => void;
  enviando: boolean;
  enviado: boolean;
  error: boolean;
  onSubmit: () => void;
}

export default function HeroSection({ 
  formData, 
  setFormData, 
  enviando, 
  enviado, 
  error, 
  onSubmit 
}: HeroSectionProps) {
  return (
    <section id="inicio" className="pt-20 pb-20 bg-gradient-to-r from-gray-800 to-gray-600">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-200 text-sm font-bold uppercase mb-6">
            Ingeniería Especializada
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Soluciones en <span style={{ color: "#17a2b8" }}>Ingeniería Industrial</span> para su Empresa
          </h1>
          <p className="text-xl text-gray-200 mb-10">
            Más de 20 años de experiencia en medición, control de consistencia y servicios de mantención para la industria.
          </p>
          <a href="#proceso" className="text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 inline-flex items-center transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>
            Conocer más <i className="fas fa-arrow-down ml-3"></i>
          </a>
        </div>

        <ContactForm 
          formData={formData}
          setFormData={setFormData}
          enviando={enviando}
          enviado={enviado}
          error={error}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}