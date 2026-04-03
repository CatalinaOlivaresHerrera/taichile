// app/components/sections/AboutSection.tsx
export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          {/* TEXTO */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Quiénes Somos
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-justify">
              Tecnologias de Aplicación Industrial, TAI Chile, es una empresa familiar fundada en el año 2009. Desde nuestros inicios, nos hemos especializado en medición y control de consistencia, distribuyendo equipamiento y servicios de mantención y calibración analítica utilizados mayoritariamente en la industria de la celulosa y el papel.
            </p>

            <p className="text-gray-800 mb-6 leading-relaxed text-justify">
              Con un equipo profesional altamente calificado, representamos a lideres mundiales en soluciones de instrumentación analítica, incrementando la eficiencia y operación de las empresas.
            </p>

            <a
              href="#"
              className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-block transition-all"
              style={{ backgroundColor: "rgb(255,60,65)" }}
            >
              Leer más
            </a>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/ab.png"
              alt="Planta industrial"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}