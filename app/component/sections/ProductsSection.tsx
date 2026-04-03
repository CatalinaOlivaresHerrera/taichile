export default function ProductsSection() {
  const productImages = [
    "/MEK-STRATUS-360.gif",
    "/SZP-16-optimized-live.png",
    "/producto3.jpg",
    "/producto4.jpg",
    "/producto5.jpg"
  ];

  return (
    <section
      id="productos"
      className="py-20"
      style={{
        background:
          "linear-gradient(140deg, #fffbf9cd 10%, #9c9898 50%, #b91c1c 100%)"
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-200 mt-2">
            Soluciones de alta calidad para la industria
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productImages.map((src, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={src}
                  alt={`Producto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {i === 0 && (
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Destacado
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-600 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Ver más <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN */}
        <div className="text-center mt-12">
          <a
            href="#todos-productos"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-[rgb(255,60,65)] hover:bg-[rgb(255,60,65)] hover:text-white"
          >
            Ver todos los productos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}