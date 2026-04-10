// app/component/sections/LocationSection.tsx
export default function LocationSection() {
  return (
    <section id="instalaciones" className="py-20" style={{ backgroundColor: 'rgb(48, 104, 215)' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Nuestra Ubicación</h2>
        <p className="text-center text-blue-200 mb-12 text-sm">Encuéntrenos en Talca, Región del Maule</p>
        <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "2px solid rgba(255,255,255,0.2)" }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.9!2d-71.6399!3d-35.4301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+25+Oriente+2559%2C+Talca%2C+Chile!5e0!3m2!1ses!2scl!4v1680000000000!5m2!1ses!2scl&q=Av.+25+Oriente+2559,+Talca,+Chile"
            width="100%" 
            height="420" 
            style={{ border: 0, display: "block" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Ubicación Taichile" 
          />
        </div>
      </div>
    </section>
  );
}