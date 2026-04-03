// app/component/ui/ContactForm.tsx
'use client';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
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
  return (
    <div id="contacto" className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="text-white p-6" style={{ backgroundColor: "rgb(255,60,65)" }}>
        <h2 className="text-2xl font-bold">Formulario de contacto</h2>
        <p className="text-gray-100 text-sm">Nuestro equipo le responderá en menos de 24 horas.</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre</label>
            <input 
              type="text" 
              value={formData.nombre} 
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none" 
              placeholder="Ej: Juan Pérez" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Corporativo</label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none" 
              placeholder="juan@empresa.cl" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Teléfono / WhatsApp</label>
            <input 
              type="tel" 
              value={formData.telefono} 
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none" 
              placeholder="+56 9 ...." 
            />
          </div>
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
          {error && <p className="text-center text-sm" style={{ color: "rgb(255,60,65)" }}>Hubo un error al enviar. Intenta de nuevo.</p>}
          <div className="text-center">
            <a href="https://wa.me/56962363384" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all" style={{ backgroundColor: "rgba(255,60,65,0.1)", color: "rgb(255,60,65)" }}>
              <i className="fab fa-whatsapp text-lg"></i> ¿Dudas? Habla con un experto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}