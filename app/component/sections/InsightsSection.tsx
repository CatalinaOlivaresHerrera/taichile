'use client';

import { useState } from "react";

/* ✅ TIPADO */
type Insight = {
  title: string;
  resumen: string;
  detalle: string;
  icon: string;
  links: { url: string; label: string }[];
};

export default function InsightsSection() {

  /* ✅ STATE SIN ERROR */
  const [selected, setSelected] = useState<Insight | null>(null);

  /* ✅ DATA */
  const insights: Insight[] = [
    {
      title: "Panorama de la industria forestal en Chile",
      resumen: "El sector forestal chileno continúa siendo uno de los principales motores exportadores del país, con la celulosa como producto central. La disponibilidad de fibra (principalmente pino radiata y eucalipto) y la eficiencia industrial han permitido posicionar a Chile como actor relevante en mercados globales.",
      detalle: "La competitividad del sector está cada vez más vinculada a la optimización del uso de fibra y eficiencia operacional, especialmente en un contexto de presión por costos y sostenibilidad.",
      icon: "/forest.png",  // ✅ Usa la imagen PNG
      links: [
        {
          url: "https://www.odepa.gob.cl/wp-content/uploads/2017/12/InformeIndustriaForestal2016.pdf",
          label: "Informe ODEPA"
        }
      ]
    },
    {
      title: "Tendencias de sostenibilidad",
      resumen: "Las principales empresas del sector están acelerando sus estrategias de sostenibilidad, con foco en reducción de emisiones, uso eficiente del agua y desarrollo de biomateriales.",
      detalle: "La sostenibilidad está dejando de ser solo reputacional y se está convirtiendo en un driver operacional, impulsando mejoras en control de procesos, eficiencia energética y calidad de fibra.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>`,  // ✅ SVG de la flecha
      links: [
        {
          url: "https://www.cmpc.com/certificaciones-y-reportes/",
          label: "Reportes CMPC"
        }
      ]
    },
    {
      title: "Importancia de la calidad de fibra en productos finales",
      resumen: "La calidad de la fibra es un factor determinante en las propiedades finales del papel, afectando resistencia, formación y eficiencia del proceso productivo.",
      detalle: "Una mejor caracterización y control de la fibra permite optimizar el uso de materia prima, reducir costos y mejorar la calidad del producto final.",
      icon: "/calidad.png",
      links: [
        {
          url: "https://www.eucalyptus.com.br/artigos/2016_Panorama_Cap18_Industria%2BPulpa%2BPapel%2BChile.pdf",
          label: "Estudio fibra"
        }
      ]
    },
    {
      title: "Digitalización y control de procesos en plantas de celulosa",
      resumen: "La digitalización y el uso de tecnologías de medición avanzada están transformando la operación de plantas de celulosa, permitiendo monitoreo en tiempo real y toma de decisiones basada en datos.",
      detalle: "La adopción de estas tecnologías permite reducir variabilidad, mejorar eficiencia y aumentar la estabilidad del proceso, aspectos clave en mercados altamente competitivos.",
      icon: "/icons/digital.png",
      links: [
        {
          url: "https://www.mckinsey.com/industries/packaging-and-paper/our-insights",
          label: "Análisis McKinsey"
        }
      ]
    },
    {
      title: "Evolución de la demanda global de celulosa",
      resumen: "La demanda global de celulosa sigue creciendo, impulsada principalmente por el segmento tissue y packaging, mientras disminuye el papel gráfico.",
      detalle: "Este cambio en la demanda exige adaptación en procesos productivos y estándares de calidad, especialmente en fibras orientadas a nuevos usos.",
      icon: "/evolucion.png",
      links: [
        {
          url: "https://www.statista.com/topics/1701/paper-industry/",
          label: "Datos Statista"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50"
      style={{ backgroundColor: 'rgb(172, 173, 175)' }}>
      
      <div className="container mx-auto px-6">

        {/* TITULO */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Insights del Sector
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

              {/* ICONO + TITULO */}
              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-full">
                  {item.icon.startsWith('<svg') ? (
                    <div 
                      className="w-5 h-5 text-gray-800 [&>svg]:w-full [&>svg]:h-full [&>svg]:text-gray-800"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  ) : (
                    <img src={item.icon} alt="icono" className="w-5 h-5" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>

              </div>

              {/* RESUMEN */}
              <p className="text-gray-600 mb-6">
                {item.resumen}
              </p>

              {/* BOTON */}
              <button
                onClick={() => setSelected(item)}
                className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-4 py-2 rounded-lg"
              >
                Ver más
              </button>

            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg relative">

            {/* CERRAR */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* TITULO */}
            <h3 className="text-2xl font-bold mb-4">
              {selected.title}
            </h3>

            {/* DETALLE */}
            <p className="text-gray-700 leading-relaxed">
              {selected.detalle}
            </p>

            {/* LINKS MULTIPLES */}
            <div className="mt-6 space-y-3">
              {selected.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>

        </div>
      )}

    </section>
  );
}