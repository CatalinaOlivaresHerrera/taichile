export default function ServicesSection() {
  const services = [
    { icon: "fa-laptop", title: "Soluciones Industriales", desc: "Análisis global de maquinarias y sistemas en planta", link: null },
    { icon: "fa-chalkboard-user", title: "Servicios de Capacitación", desc: "Para la eficiente utilización de los equipos e instalación", link: "Ingresar" },
    { icon: "fa-newspaper", title: "Encuesta de Satisfacción", desc: "Responde nuestra encuesta para mejorar nuestros cursos", link: "Responder" },
  ];

  return (
    <section id="servicios" className="py-20" style={{ background: "linear-gradient(135deg, #b91c1c 100%, #b91c1c 100%, #b91c1c 100%)" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Servicios Especializados</h2>
        <p className="text-center text-red-200 mb-12 text-sm">Soluciones a la medida de su industria</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <i className={`fas ${s.icon} text-red-200 text-4xl mb-4`}></i>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-red-100">{s.desc}</p>
              {s.link && (
                <a href="#" className="font-semibold text-sm mt-3 inline-block hover:opacity-80 transition-colors" style={{ color: "#17a2b8" }}>
                  {s.link} ››
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}