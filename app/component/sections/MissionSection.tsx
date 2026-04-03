// app/component/sections/MissionSection.tsx
export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión</h2>
            <p className="text-gray-600 mb-4">
              Proveer soluciones de ingeniería especializadas por medio de sistemas funcionales, desarrollados con tecnología de punta que cumpla eficientemente las exigencias del cliente, procurando el cuidado medioambiental.
            </p>
            <a href="#" className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-block transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>
              Leer más
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/banner_mid.jpeg" alt="Misión Taichile" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}