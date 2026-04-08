'use client';

import { useState } from 'react';

// Definir el tipo del producto
interface Product {
  id: number;
  title: string;
  mainImage: string;
  additionalImages: string[];
  details: string;
}

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Productos con sus detalles, imágenes adicionales y texto
  const products: Product[] = [
    {
      id: 0,
      title: "MEK STRATUS 360",
      mainImage: "/MEK-STRATUS-360.gif",
      additionalImages: ["/MEK-STRATUS-360.gif", "/mex.png"],
      details: `Nuestro sensor de consistencia de fuerza de corte más potente hasta la fecha.
Construido para durar, con el doble de torque.
Medir con precisión la consistencia de la fibra durante toda la producción.`
    },
    {
      id: 1,
      title: "Transmisores de Consistencia",
      mainImage: "/produc2ofi.png",
      additionalImages: ["/produc2.1.png", "/produc2.2.png", "/produc2ofi.png"],
      details: `Transmisores de Consistencia: La consistencia es el parámetro fundamental en todos los procesos de fabricación de pulpa y papel para administrar el flujo másico en la consistencia objetivo y administrarlo correctamente es fundamental. Los transmisores permiten monitorear dicha consistencia, fundamental en la calidad y eficiencia de la producción.`
    },
    {
      id: 2,
      title: "Transmisores de Blancura",
      mainImage: "/produc3ofi.png",
      additionalImages: ["/produc3.1.png", "/produc3ofi.png"],
      details: `Transmisores de blancura: Los transmisores de blancura (whiteness o brightness transmitters) BTG son instrumentos en línea utilizados en la industria de la pulpa y el papel para medir propiedades ópticas del material durante el proceso, especialmente en el blanqueo y control de calidad.

Son sensores industriales instalados directamente en tuberías o equipos que miden continuamente la blancura o brillo (brightness) de la pulpa o papel, permitiendo control automático del proceso.`
    },
    {
      id: 3,
      title: "Analizadores de Número de Kappa",
      mainImage: "/produc4ofi.png",
      additionalImages: ["/produc4.1.png", "/produc4ofi.png"],
      details: `Analizadores de número de cappa: El analizador Kappa de punto único de BTG, SPK-5500, es un analizador kappa en línea que mide el contenido de lignina de las fibras de pulpa. Opcionalmente también puede medir ácido hexenurónico (HexA). SPK-5500, integra todas las funciones en un solo equipo: Muestreo, cribado, lavado, medición óptica de Kappa.`
    },
    {
      id: 4,
      title: "Sistemas de Guiado de Banda",
      mainImage: "/produc5ofi.png",
      additionalImages: ["/produc5.1.png", "/produc5.2.png", "/produc5ofi.png"],
      details: `Sistemas de guiado de banda: Esenciales en la industria de la pulpa y el papel, ya que aseguran que la banda (papel, cartón o pulpa) se mantenga correctamente alineada durante el proceso productivo.

Es un sistema automático que detecta y corrige desviaciones laterales de la banda en tiempo real, evitando que el material se desplace fuera de su trayectoria ideal.`
    }
  ];

  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="w-full h-full object-contain bg-gray-100 group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {product.id === 0 && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">{product.title}</h3>
                  <button className="text-red-500 hover:text-red-600 font-semibold text-sm inline-flex items-center gap-1 transition-colors">
                    Ver más <span>→</span>
                  </button>
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

      {/* MODAL / VENTANA EMERGENTE */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-white rounded-t-2xl border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.title}</h3>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              {/* Descripción principal */}
              <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                {selectedProduct.details}
              </p>

              {/* Galería de imágenes adicionales */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Galería de imágenes</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProduct.additionalImages.map((img: string, idx: number) => (
                    <div key={idx} className="rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={img} 
                        alt={`${selectedProduct.title} - Imagen ${idx + 1}`}
                        className="w-full h-48 object-contain bg-gray-50"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/600x400/cccccc/666666?text=" + encodeURIComponent(selectedProduct.title) + "+" + (idx + 1);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de cierre */}
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}