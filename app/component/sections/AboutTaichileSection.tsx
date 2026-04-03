// app/component/sections/AboutTaichileSection.tsx
export default function AboutTaichileSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Acerca de Taichile</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "fa-shield", title: "Experiencia", desc: "Más de 20 años en el área de la ingeniería" },
            { icon: "fa-pencil", title: "Calidad", desc: "Soluciones que superan expectativas" },
            { icon: "fa-star", title: "Eficiencia", desc: "Personal calificado y especializado" },
            { icon: "fa-microchip", title: "Alta Tecnología", desc: "Soporte metrológico y analítico" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <i className={`fas ${item.icon} text-5xl mb-4`} style={{ color: "#17a2b8" }}></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}