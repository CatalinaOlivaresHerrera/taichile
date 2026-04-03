export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/taiLogo.png" alt="Taichile" style={{ height: "8rem" }} />
            <p className="mt-4 text-gray-300 text-sm">Psje 25 oriente 2559 Loteo Don Rodolfo, Talca</p>
            <p className="mt-2 text-gray-300 text-sm">📞 +56 071 2243050</p>
            <p className="text-gray-300 text-sm">✉️ contacto@taichile.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sitio Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Inicio", "Servicios", "Proyectos", "Empresa"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Mantención Industrial", "Control de Consistencia", "Capacitación", "Representación"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
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
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 Taichile. Todos los derechos reservados | Design by Catalina</p>
        </div>
      </div>
    </footer>
  );
}