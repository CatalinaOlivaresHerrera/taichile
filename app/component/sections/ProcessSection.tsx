export default function ProcessSection() {
  const processes = [
    { num: "1", title: "Contacto", desc: "Reciba una propuesta personalizada" },
    { num: "2", title: "Diagnóstico", desc: "Evaluamos las necesidades de su planta" },
    { num: "3", title: "Ejecución", desc: "Implementamos la solución" },
    { num: "4", title: "Seguimiento", desc: "Acompañamiento post-servicio" },
  ];

  return (
    <section id="proceso" className="py-20 bg-slate-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestro Proceso</h2>
          <p className="text-lg text-slate-300 mt-2">Eficiencia y calidad en cada etapa</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {processes.map((item) => (
            <div key={item.num} className="rounded-2xl shadow-md p-8 bg-slate-500">
              <div className="flex items-center justify-center h-16 w-16 rounded-full text-white mx-auto mb-6 shadow-lg" style={{ backgroundColor: "rgb(255,60,65)" }}>
                <span className="text-2xl font-bold">{item.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}