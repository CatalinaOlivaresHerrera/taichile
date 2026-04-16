'use client';

import Image from "next/image";

export default function QuienesSomosSection() {
  return (
    <section className="bg-[#3d3d3d]">
      {/* COLLAGE DE IMÁGENES */}
      <div className="relative flex h-[200px] md:h-[240px] bg-black">
        <div className="relative flex-1 overflow-hidden z-[4] -mr-[100px] [clip-path:polygon(0_0,92%_0,82%_100%,0_100%)]">
          <Image src="/somos2.jpg" alt="Maquinaria industrial" fill sizes="25vw" loading="eager" fetchPriority="high" className="object-cover" />
        </div>
        <div className="relative flex-1 overflow-hidden z-[3] -mr-[100px] [clip-path:polygon(18%_0,92%_0,82%_100%,8%_100%)]">
          <Image src="/somos3.jpg" alt="Puente metálico" fill sizes="25vw" loading="eager" className="object-cover object-top" />
        </div>
        <div className="relative flex-1 overflow-hidden z-[2] -mr-[100px] [clip-path:polygon(18%_0,92%_0,82%_100%,8%_100%)]">
          <Image src="/somos4.jpg" alt="Madera celulosa" fill sizes="25vw" loading="eager" className="object-cover" />
        </div>
        <div className="relative flex-1 overflow-hidden z-[1] [clip-path:polygon(18%_0,100%_0,100%_100%,8%_100%)]">
          <Image src="/somos1.jpg" alt="Troncos apilados" fill sizes="25vw" loading="eager" className="object-cover object-top" />
        </div>
      </div>

      {/* SECCIÓN HERO */}
      <div className="relative flex min-h-[340px] overflow-hidden border-t-10 border-black">
        <div
          className="relative z-10 w-[62%] flex-shrink-0 bg-[#3d3d3d] p-8 md:p-12 pr-24"
          style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 0 100%)" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-5">
            Ingeniería especializada
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Soluciones en{" "}
            <span className="text-red-400 font-mono">Ingeniería<br />Industrial</span>{" "}
            para su Empresa
          </h1>

          <p className="text-sm md:text-base text-gray-300 mb-8 font-mono max-w-md">
            Más de 20 años de experiencia en medición, control de consistencia
            y servicios de mantención para la industria.
          </p>
        </div>

        <div className="absolute inset-y-0 right-0 left-[52%] z-0 border-4 border-black">
          <Image
            src="/somos5.jpg"
            alt="Bobinas de papel en planta industrial"
            fill
            sizes="48vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}