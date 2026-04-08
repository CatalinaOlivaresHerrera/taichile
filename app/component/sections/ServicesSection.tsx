export default function ServicesSection() {
  const services = [
    {
      title: "Instalación de equipos",
      description: "Instalación profesional y puesta en marcha de equipos industriales con estándares de calidad.",
      image: "/Instalacion.png"
    },
    {
      title: "Calibración y análisis de laboratorio",
      description: "Servicios de calibración precisa y análisis especializados en laboratorio.",
      image: "/CaliYana.png"
    },
    {
      title: "Mantención de equipos y planta",
      description: "Mantenimiento preventivo y correctivo para equipos y plantas industriales.",
      image: "/Manten.png"
    },
    {
      title: "Análisis de eficiencia de procesos productivos",
      description: "Optimización y mejora continua de procesos para maximizar la productividad.",
      image: "/TAIChile_DSC3188.jpg"
    }
  ];

  return (
    <section id="servicios" className="py-20" style={{ background: "linear-gradient(135deg, #b91c1c 100%, #b91c1c 100%, #b91c1c 100%)" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Servicios Especializados</h2>
        <p className="text-center text-red-200 mb-12 text-sm">Soluciones a la medida de su industria</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {/* Imagen */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 text-center">{service.title}</h3>
                <p className="text-red-100 text-sm text-center">{service.description}</p>
                
                {/* Botón opcional */}
                <div className="flex justify-center mt-4">
                  <a 
                    href="#contacto" 
                    className="text-sm font-semibold px-4 py-1.5 rounded-full transition-all hover:opacity-80"
                    style={{ backgroundColor: "rgba(23,162,184,0.8)", color: "white" }}
                  >
                    Consultar ›
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}