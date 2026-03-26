export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header -  */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo como imagen */}
          <a href="#" className="flex items-center">
            <img 
              src="/tai.png" 
              alt="Taichile" 
              className="h-12 w-auto"
            />
          </a>

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#inicio" className="font-medium" style={{ color: 'rgb(255, 60, 65)' }}>Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-green-700 font-medium">Servicios</a>
            <a href="#instalaciones" className="text-gray-600 hover:text-green-700 font-medium">Instalaciones</a>
            <a href="#equipo" className="text-gray-600 hover:text-green-700 font-medium">Equipo</a>
            <a href="#beneficios" className="text-gray-600 hover:text-green-700 font-medium">Beneficios</a>
            <a href="#contacto" className="text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>Cotizar</a>
          </div>

          {/* Botón Acceso Clientes */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="px-4 py-2 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-all" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
              Acceso Clientes
            </a>
          </div>

          {/* Botón móvil */}
          <div className="lg:hidden">
            <button className="text-green-700">
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Gradiente verde/azul con formulario */}
      <section id="inicio" className="pt-32 pb-20 bg-gradient-to-r from-green-800 to-blue-800">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 text-sm font-bold uppercase mb-6">
              Ingeniería Especializada
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Soluciones en <span className="text-green-400">Ingeniería Industrial</span> para su Empresa
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Más de 20 años de experiencia en medición, control de consistencia y servicios de mantención para la industria.
            </p>
            <a href="#proceso" className="text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 inline-flex items-center transition-all" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
              Conocer más <i className="fas fa-arrow-down ml-3"></i>
            </a>
          </div>

          {/* Formulario de contacto */}
          <div id="contacto" className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="text-white p-6" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
              <h2 className="text-2xl font-bold">Solicite una cotización</h2>
              <p className="text-gray-100 text-sm">Nuestro equipo le responderá en menos de 24 horas.</p>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Ej: Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Corporativo</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="juan@empresa.cl" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Teléfono / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="+56 9 ...." />
                </div>
                <button type="submit" className="w-full text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
                  Solicitar información
                </button>
                <div className="text-center mt-4">
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all" style={{ backgroundColor: 'rgba(255, 60, 65, 0.1)', color: 'rgb(255, 60, 65)' }}>
                    <i className="fab fa-whatsapp text-lg"></i> ¿Dudas? Habla con un experto
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proceso - 4 pasos */}
      <section id="proceso" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">Nuestro Proceso</h2>
            <p className="text-lg text-gray-600 mt-2">Eficiencia y calidad en cada etapa</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "1", title: "Contacto", desc: "Reciba una propuesta personalizada" },
              { num: "2", title: "Diagnóstico", desc: "Evaluamos las necesidades de su planta" },
              { num: "3", title: "Ejecución", desc: "Implementamos la solución" },
              { num: "4", title: "Seguimiento", desc: "Acompañamiento post-servicio" }
            ].map((item) => (
              <div key={item.num} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex items-center justify-center h-16 w-16 rounded-full text-white mx-auto mb-6 shadow-lg" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
                  <span className="text-2xl font-bold">{item.num}</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos - Texto original de taichile.com */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Quiénes Somos</h2>
              <p className="text-gray-600 mb-4">
                Tai Chile es una empresa familiar, que fue creada en el año 2009 especializándose en medición control de consistencia. Cuenta con un equipo, altamente calificado con más de 20 años de experiencia en el área de la ingeniería
              </p>
              <p className="text-gray-600 mb-6">
                prestando servicios de mantención y calibración de instrumentación analítica, utilizados mayoritariamente en la industria de la celulosa y papel.
              </p>
              <a href="#" className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-block transition-all" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
                Leer más
              </a>
            </div>
            <div className="bg-green-100 rounded-2xl h-64 flex items-center justify-center text-green-700 text-6xl">
              🏭
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Industriales - Texto original */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Servicios Especializados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <i className="fas fa-laptop text-green-700 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-green-800 mb-2">Soluciones Industriales</h3>
              <p className="text-gray-600">Análisis global de maquinarias y sistemas en planta</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <i className="fas fa-chalkboard-user text-green-700 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-green-800 mb-2">Servicios de Capacitación</h3>
              <p className="text-gray-600">Para la eficiente utilización de los equipos e instalación</p>
              <a href="#" className="font-semibold text-sm mt-2 inline-block hover:underline" style={{ color: 'rgb(255, 60, 65)' }}>Ingresar ››</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <i className="fas fa-newspaper text-green-700 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-green-800 mb-2">Encuesta de Satisfacción</h3>
              <p className="text-gray-600">Responde nuestra encuesta para mejorar nuestros cursos</p>
              <a href="#" className="font-semibold text-sm mt-2 inline-block hover:underline" style={{ color: 'rgb(255, 60, 65)' }}>Responder ››</a>
            </div>
          </div>
        </div>
      </section>

      {/* Acerca de Taichile - 4 pilares */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Acerca de Taichile</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "fa-shield", title: "Experiencia", desc: "Más de 20 años en el área de la ingeniería" },
              { icon: "fa-pencil", title: "Calidad", desc: "Soluciones que superan expectativas" },
              { icon: "fa-star", title: "Eficiencia", desc: "Personal calificado y especializado" },
              { icon: "fa-microchip", title: "Alta Tecnología", desc: "Soporte metrológico y analítico" }
            ].map((item, idx) => (
              <div key={idx}>
                <i className={`fas ${item.icon} text-green-700 text-5xl mb-4`}></i>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Nuestra Misión</h2>
            <p className="text-gray-600 mb-6">
              Proveer soluciones de ingeniería especializadas por medio de sistemas funcionales, desarrollados con tecnología de punta que cumpla eficientemente las exigencias del cliente, procurando el cuidado medioambiental.
            </p>
            <a href="#" className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-block transition-all" style={{ backgroundColor: 'rgb(255, 60, 65)' }}>
              Leer más
            </a>
          </div>
          <div className="bg-blue-100 rounded-2xl h-64 flex items-center justify-center text-blue-700 text-6xl">
            🌿
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section id="instalaciones" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestras Instalaciones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="h-48 bg-green-200 rounded-xl mb-4 flex items-center justify-center text-4xl text-green-700">🏭</div>
              <h3 className="text-xl font-bold text-green-800">Oficina Central</h3>
              <p className="text-gray-600">Villa Don Rodolfo, Talca</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="h-48 bg-blue-200 rounded-xl mb-4 flex items-center justify-center text-4xl text-blue-700">🔧</div>
              <h3 className="text-xl font-bold text-green-800">Operativos en Terreno</h3>
              <p className="text-gray-600">Llevamos la solución a su planta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-green-700">👨‍🔧</div>
              <h3 className="text-xl font-bold text-green-800">Ingenieros Senior</h3>
              <p className="text-gray-600">Especialistas en control de procesos</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-green-700">👥</div>
              <h3 className="text-xl font-bold text-green-800">Equipo Técnico</h3>
              <p className="text-gray-600">Personal calificado y especializado</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-green-700">📊</div>
              <h3 className="text-xl font-bold text-green-800">Asesores</h3>
              <p className="text-gray-600">Soporte metrológico y analítico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="#" className="text-2xl font-bold text-white">Tai<span className="text-blue-400">Chile</span></a>
              <p className="mt-4 text-gray-300 text-sm">Villa Don Rodolfo, Talca</p>
              <p className="mt-2 text-gray-300 text-sm">📞 +56 071 2243050</p>
              <p className="text-gray-300 text-sm">✉️ contacto@taichile.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sitio Info</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Inicio</a></li>
                <li><a href="#" className="hover:text-white">Servicios</a></li>
                <li><a href="#" className="hover:text-white">Proyectos</a></li>
                <li><a href="#" className="hover:text-white">Empresa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Mantención Industrial</a></li>
                <li><a href="#" className="hover:text-white">Control de Consistencia</a></li>
                <li><a href="#" className="hover:text-white">Capacitación</a></li>
                <li><a href="#" className="hover:text-white">Representación</a></li>
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

      {/* WhatsApp flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/56712243050?text=Hola%20quiero%20información" target="_blank" className="bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all inline-block">
          <i className="fab fa-whatsapp text-white text-3xl"></i>
        </a>
      </div>
    </main>
  );
}