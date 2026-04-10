'use client';

import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  producto: string;
  servicio: string;
}

interface ContactFormProps {
  formData: FormData;
  setFormData: (data: FormData | ((prev: FormData) => FormData)) => void;
  enviando: boolean;
  enviado: boolean;
  error: boolean;
  onSubmit: () => void;
}

export default function ContactForm({ 
  formData, 
  setFormData, 
  enviando, 
  enviado, 
  error, 
  onSubmit 
}: ContactFormProps) {
  
  // Prueba con diferentes imágenes
  const imagenesFondo = [
    '/Panorama_TAIChile_03.jpg',
    '/somos5.jpg',
    '/somos1.jpg',
    '/somos2.jpg',
  ];
  
  const [imagenActual] = useState(imagenesFondo[1]); // Usa somos5.jpg que sabemos que funciona

  // Opciones para PRODUCTOS
  const opcionesProductos = [
    { value: "", label: "Seleccione un producto" },
    { value: "MEK STRATUS 360", label: "MEK STRATUS 360" },
    { value: "Transmisores de Consistencia", label: "Transmisores de Consistencia" },
    { value: "Transmisores de Blancura", label: "Transmisores de Blancura" },
    { value: "Analizadores de Número de Kappa", label: "Analizadores de Número de Kappa" },
    { value: "Sistemas de Guiado de Banda", label: "Sistemas de Guiado de Banda" }
  ];

  // Opciones para SERVICIOS
  const opcionesServicios = [
    { value: "", label: "Seleccione un servicio" },
    { value: "Instalación de equipos", label: "Instalación de equipos" },
    { value: "Calibración y análisis de laboratorio", label: "Calibración y análisis de laboratorio" },
    { value: "Mantención de equipos y planta", label: "Mantención de equipos y planta" },
    { value: "Análisis de eficiencia de procesos productivos", label: "Análisis de eficiencia de procesos productivos" }
  ];

  return (
    <div 
      id="contacto" 
      className="relative rounded-2xl shadow-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('${imagenActual}')`,
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Contenido del formulario */}
      <div className="relative z-10">
        {/* Header rojo */}
        <div className="text-white p-6" style={{ backgroundColor: "rgb(255,60,65)" }}>
          <h2 className="text-2xl font-bold">Formulario de contacto</h2>
          <p className="text-gray-100 text-sm">Nuestro equipo le responderá en menos de 24 horas.</p>
        </div>
        
        {/* Cuerpo del formulario */}
        <div className="p-6 bg-white/95 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase mb-1">Nombre</label>
              <input 
                type="text" 
                value={formData.nombre} 
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none text-gray-900 font-medium" 
                placeholder="Ej: Juan Pérez" 
                required
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase mb-1">Email Corporativo</label>
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none text-gray-900 font-medium" 
                placeholder="juan@empresa.cl" 
                required
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase mb-1">Teléfono / WhatsApp</label>
              <input 
                type="tel" 
                value={formData.telefono} 
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none text-gray-900 font-medium" 
                placeholder="+56 9 ...." 
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase mb-1">
                Producto de interés
              </label>
              <div className="relative">
                <select
                  value={formData.producto}
                  onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none appearance-none bg-white cursor-pointer text-gray-900 font-medium"
                >
                  {opcionesProductos.map((opcion, idx) => (
                    <option key={idx} value={opcion.value}>
                      {opcion.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-800 uppercase mb-1">
                Servicio de interés
              </label>
              <div className="relative">
                <select
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none appearance-none bg-white cursor-pointer text-gray-900 font-medium"
                >
                  {opcionesServicios.map((opcion, idx) => (
                    <option key={idx} value={opcion.value}>
                      {opcion.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {enviado ? (
              <div className="text-center py-3 rounded-xl font-bold" style={{ backgroundColor: "#e0f7fa", color: "#0e7490" }}>
                ✅ Mensaje enviado con éxito
              </div>
            ) : (
              <button 
                onClick={onSubmit} 
                disabled={enviando} 
                className="w-full text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-60" 
                style={{ backgroundColor: "rgb(255,60,65)" }}
              >
                {enviando ? 'Enviando...' : 'Solicitar información'}
              </button>
            )}
            
            {error && (
              <p className="text-center text-sm" style={{ color: "rgb(255,60,65)" }}>
                Hubo un error al enviar. Intenta de nuevo.
              </p>
            )}
            
            <div className="text-center">
              <a 
                href="https://wa.me/56962363384" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all" 
                style={{ backgroundColor: "rgba(255,60,65,0.1)", color: "rgb(255,60,65)" }}
              >
                <i className="fab fa-whatsapp text-lg"></i> ¿Dudas? Habla con un experto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}