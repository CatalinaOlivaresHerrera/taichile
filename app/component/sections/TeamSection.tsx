// app/component/sections/TeamSection.tsx
'use client';

import { useState, useEffect } from 'react';

interface TeamMember { name: string; role: string; desc: string; avatarSrc?: string; }

const TEAM_MEMBERS: TeamMember[] = [
  { name: "José Sepúlveda", role: "Gerente Técnico – Ingeniero Electrónico", desc: "Especialista en control de procesos y metrología industrial", avatarSrc: "/franciscoCar.jpeg" },
  { name: "Ignacio Chacón", role: "Gerente Desarrollo-Ingeniero Agrónomo", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/ignacio.jpg" },
  { name: "Francisco Carreño", role: "Ingeniero Especialista – Ingeniero Mecatrónico", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/joseSe.jpeg" },
  { name: "Ricardo Chacón", role: "Asesor Desarrollo – PhD Economics of Education", desc: "Especialista en control de procesos y metrología industrial", avatarSrc: "/BaselinePerson.png" },
  //{ name: "Claudio Pereda", role: "Técnico de Terreno", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/BaselinePerson.png" },
  //{ name: "Bladimir Valenzuela", role: "Técnico de Terreno", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/BaselinePerson.png" },
  //{ name: "Rodrigo Abarza", role: "Ingeniero Informatico", desc: "Especialista en control de procesos y metrología industrial", avatarSrc: "/BaselinePerson.png" },
  //{ name: "Bastian Tapia", role: "Técnico de Terreno", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/BaselinePerson.png" }
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = TEAM_MEMBERS.length - visibleCount;
  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestro Equipo</h2>
        <div className="relative px-10">
          <button onClick={prev} disabled={currentIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-400 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`, gap: "2rem" }}>
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} style={{ minWidth: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 2 / visibleCount}rem)` }}>
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow">
                      <img src={member.avatarSrc ?? "/ignacioWhats.png"} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: "rgb(255,60,65)" }}>{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={next} disabled={currentIndex >= maxIndex} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`h-2 rounded-full transition-all ${currentIndex === idx ? "w-6 bg-red-500" : "w-2 bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}