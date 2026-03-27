"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   WhatsApp Widget Component
───────────────────────────────────────────── */
interface WhatsAppWidgetProps {
  agentName?: string;
  agentPhoto?: string;
  message?: string;
  phoneNumber?: string;
  isOnline?: boolean;
}

function WhatsAppWidget({
  agentName = "Víctor",
  agentPhoto,
  message = "¿La mutualidad no te da respuesta?\nHablemos por acá, te ayudo de inmediato",
  phoneNumber = "56712243050",
  isOnline = true,
}: WhatsAppWidgetProps) {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleChat = () => {
    const encoded = encodeURIComponent(
      `Hola ${agentName}, necesito información sobre sus servicios.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        zIndex: 9999,
      }}
    >
      {/* Bubble */}
      <div
        style={{
          position: "relative",
          background: "#ffffff",
          borderRadius: "16px 16px 4px 16px",
          padding: "14px 18px 14px 16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
          maxWidth: "280px",
          minWidth: "220px",
          opacity: show ? 1 : 0,
          transform: show
            ? "translateY(0) scale(1)"
            : "translateY(16px) scale(0.95)",
          transition:
            "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <button
          onClick={() => setVisible(false)}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background: "none",
            border: "1.5px solid #ccc",
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            color: "#888",
            fontSize: "13px",
            lineHeight: 1,
          }}
        >
          ×
        </button>
        <div style={{ paddingLeft: "20px" }}>
          <p style={{ margin: "0 0 2px 0", fontSize: "14px", color: "#111", lineHeight: 1.5 }}>
            Hola, soy <strong>{agentName}</strong>
          </p>
          {message.split("\n").map((line, i) => (
            <p key={i} style={{ margin: 0, fontSize: "13.5px", color: "#333", lineHeight: 1.5 }}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Avatar */}
      <div
        style={{
          position: "relative",
          width: "64px",
          height: "64px",
          cursor: "pointer",
          opacity: show ? 1 : 0,
          transform: show ? "scale(1)" : "scale(0.8)",
          transition:
            "opacity 0.35s ease 0.1s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.1s",
        }}
        onClick={handleChat}
        title={`Chatear con ${agentName}`}
      >
        {agentPhoto ? (
          <img
            src={agentPhoto}
            alt={agentName}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "64px",
              height: "64px",
              border: "2px solid #fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #166534, #15803d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              fontSize: "24px",
            }}
          >
            👷
          </div>
        )}

        {isOnline && (
          <span
            style={{
              position: "absolute",
              top: "2px",
              right: "2px",
              width: "13px",
              height: "13px",
              background: "#44d93d",
              borderRadius: "50%",
              border: "2px solid #fff",
              animation: "waPulse 2s infinite",
            }}
          />
        )}

        <span
          style={{
            position: "absolute",
            bottom: "-4px",
            right: "-6px",
            width: "28px",
            height: "28px",
            background: "#25D366",
            borderRadius: "50%",
            border: "2px solid #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <img src="/LogoWhatsapp.png" width={16} height={16} alt="WhatsApp" />
        </span>
      </div>

      <style>{`
        @keyframes waPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Team Member Card
───────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  desc: string;
  avatarSrc?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Carlos Muñoz", role: "Ingeniero Senior", desc: "Especialista en control de procesos y metrología industrial", avatarSrc: "/worker.png" },
  { name: "Pedro Soto", role: "Técnico de Terreno", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/worker.png" },
  { name: "Luis Herrera", role: "Asesor Metrológico", desc: "Soporte técnico y analítico para industria de celulosa", avatarSrc: "/worker.png" },
  { name: "Andrés Pino", role: "Ingeniero de Proyecto", desc: "Implementación de sistemas de medición de consistencia", avatarSrc: "/worker.png" },
  { name: "Mario Vera", role: "Técnico Especialista", desc: "Personal calificado con más de 15 años de experiencia", avatarSrc: "/worker.png" },
  { name: "Roberto Lagos", role: "Jefe de Operaciones", desc: "Coordinación de equipos de trabajo en terreno", avatarSrc: "/worker.png" },
];

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function Home() {
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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center min-h-[88px]">
          <a href="#" className="flex items-center shrink-0">
            <img src="/tai.png" alt="Taichile" className="h-16 w-auto" style={{ height: "4rem" }} />
          </a>
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#inicio" className="text-white px-4 py-2.5 rounded-md font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>INICIO</a>
            <a href="#clientes" className="text-gray-600 hover:text-green-700 font-medium py-2">CLIENTES</a>
            <a href="#productos" className="text-gray-600 hover:text-green-700 font-medium py-2">PRODUCTOS</a>
            <a href="#proyectos" className="text-gray-600 hover:text-green-700 font-medium py-2">PROYECTOS</a>
            <a href="#servicios" className="text-gray-600 hover:text-green-700 font-medium py-2">SERVICIOS</a>
            <a href="#partners" className="text-gray-600 hover:text-green-700 font-medium py-2">PARTNERS</a>
            <a href="#empresa" className="text-gray-600 hover:text-green-700 font-medium py-2">EMPRESA</a>
            <a href="#contacto" className="text-white px-4 py-2.5 rounded-md font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: "rgb(157,158,160)" }}>CONTACTO</a>
          </div>
          <div className="lg:hidden">
            <button className="text-gray-700 p-2">
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="pt-32 pb-20 bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-gray-300 text-sm font-bold uppercase mb-6">
              Ingeniería Especializada
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Soluciones en <span className="text-green-400">Ingeniería Industrial</span> para su Empresa
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Más de 20 años de experiencia en medición, control de consistencia y servicios de mantención para la industria.
            </p>
            <a href="#proceso" className="text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 inline-flex items-center transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>
              Conocer más <i className="fas fa-arrow-down ml-3"></i>
            </a>
          </div>

          {/* Contact Form */}
          <div id="contacto" className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="text-white p-6" style={{ backgroundColor: "rgb(255,60,65)" }}>
              <h2 className="text-2xl font-bold">Formulario de contacto</h2>
              <p className="text-gray-100 text-sm">Nuestro equipo le responderá en menos de 24 horas.</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Ej: Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Corporativo</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="juan@empresa.cl" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Teléfono / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="+56 9 ...." />
                </div>
                <button className="w-full text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>
                  Solicitar información
                </button>
                <div className="text-center">
                  <a
                    href="https://wa.me/56712243050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all"
                    style={{ backgroundColor: "rgba(255,60,65,0.1)", color: "rgb(255,60,65)" }}
                  >
                    <i className="fab fa-whatsapp text-lg"></i> ¿Dudas? Habla con un experto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso — fondo verde oscuro degradado */}
      <section id="proceso" className="py-20" style={{ background: "linear-gradient(135deg, #868686 0%, #868686 0%, #868686 0%)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestro Proceso</h2>
            <p className="text-lg text-green-200 mt-2">Eficiencia y calidad en cada etapa</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "1", title: "Contacto", desc: "Reciba una propuesta personalizada" },
              { num: "2", title: "Diagnóstico", desc: "Evaluamos las necesidades de su planta" },
              { num: "3", title: "Ejecución", desc: "Implementamos la solución" },
              { num: "4", title: "Seguimiento", desc: "Acompañamiento post-servicio" },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl shadow-md p-8" style={{ backgroundColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full text-white mx-auto mb-6 shadow-lg" style={{ backgroundColor: "rgb(255,60,65)" }}>
                  <span className="text-2xl font-bold">{item.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos — fondo blanco limpio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Quiénes Somos</h2>
              <p className="text-gray-600 mb-4">
                Tai Chile es una empresa familiar, que fue creada en el año 2009 especializándose en medición control de consistencia. Cuenta con un equipo altamente calificado con más de 20 años de experiencia en el área de la ingeniería.
              </p>
              <p className="text-gray-600 mb-6">
                Prestando servicios de mantención y calibración de instrumentación analítica, utilizados mayoritariamente en la industria de la celulosa y papel.
              </p>
              <a href="#" className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-block transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>
                Leer más
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/ab.png" alt="Planta industrial" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios — fondo rojo degradado suave */}
      <section id="servicios" className="py-20" style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Servicios Especializados</h2>
          <p className="text-center text-red-200 mb-12 text-sm">Soluciones a la medida de su industria</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "fa-laptop", title: "Soluciones Industriales", desc: "Análisis global de maquinarias y sistemas en planta", link: null },
              { icon: "fa-chalkboard-user", title: "Servicios de Capacitación", desc: "Para la eficiente utilización de los equipos e instalación", link: "Ingresar" },
              { icon: "fa-newspaper", title: "Encuesta de Satisfacción", desc: "Responde nuestra encuesta para mejorar nuestros cursos", link: "Responder" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <i className={`fas ${s.icon} text-red-200 text-4xl mb-4`}></i>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-red-100">{s.desc}</p>
                {s.link && (
                  <a href="#" className="font-semibold text-sm mt-3 inline-block text-yellow-300 hover:text-yellow-100 transition-colors">
                    {s.link} ››
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acerca de — fondo verde muy claro */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Acerca de Taichile</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "fa-shield", title: "Experiencia", desc: "Más de 20 años en el área de la ingeniería" },
              { icon: "fa-pencil", title: "Calidad", desc: "Soluciones que superan expectativas" },
              { icon: "fa-star", title: "Eficiencia", desc: "Personal calificado y especializado" },
              { icon: "fa-microchip", title: "Alta Tecnología", desc: "Soporte metrológico y analítico" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-green-100">
                <i className={`fas ${item.icon} text-green-600 text-5xl mb-4`}></i>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión — blanco */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Nuestra Misión</h2>
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

      {/* Ubicación — fondo azul-gris industrial */}
      <section id="instalaciones" className="py-20" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1e40af 60%, #1d4ed8 100%)" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Nuestra Ubicación</h2>
          <p className="text-center text-blue-200 mb-12 text-sm">Encuéntrenos en Talca, Región del Maule</p>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "2px solid rgba(255,255,255,0.2)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.9!2d-71.6399!3d-35.4301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+25+Oriente+2559%2C+Talca%2C+Chile!5e0!3m2!1ses!2scl!4v1680000000000!5m2!1ses!2scl&q=Av.+25+Oriente+2559,+Talca,+Chile"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Taichile"
            />
          </div>
        </div>
      </section>

      {/* Equipo — fondo verde claro suave */}
      <section id="equipo" className="py-20" style={{ background: "linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%)" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestro Equipo</h2>

          <div className="relative px-10">
            {/* Prev */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30"
            >
              <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-400 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                  gap: "2rem",
                }}
              >
                {TEAM_MEMBERS.map((member, index) => (
                  <div
                    key={index}
                    style={{ minWidth: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 2 / visibleCount}rem)` }}
                  >
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-100 shadow">
                        <img
                          src={member.avatarSrc ?? "/worker.png"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-green-800">{member.name}</h3>
                      <p className="text-sm font-semibold mb-2" style={{ color: "rgb(255,60,65)" }}>
                        {member.role}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next */}
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30"
            >
              <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? "w-6 bg-red-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/tai.png" alt="Taichile" className="h-12 w-auto" />
              <p className="mt-4 text-gray-300 text-sm">Villa Don Rodolfo, Talca</p>
              <p className="mt-2 text-gray-300 text-sm">📞 +56 071 2243050</p>
              <p className="text-gray-300 text-sm">✉️ contacto@taichile.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sitio Info</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {["Inicio", "Servicios", "Proyectos", "Empresa"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {["Mantención Industrial", "Control de Consistencia", "Capacitación", "Representación"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white text-xl"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-300 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-green-800 pt-6 text-center text-sm text-gray-400">
            <p>© 2019 Taichile. Todos los derechos reservados | Design by greynolds</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget flotante con burbuja */}
      <WhatsAppWidget
        agentName="Víctor"
        phoneNumber="56712243050"
        message={"¿Necesita más información?\nHablemos por acá, te ayudo de inmediato"}
        isOnline={true}
      />
    </main>
  );
}