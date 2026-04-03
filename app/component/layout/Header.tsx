'use client';

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-1 flex justify-between items-center">
        <a href="#" className="flex items-center shrink-0 relative">
          <img src="/taiLogo.png" alt="Taichile" className="h-32 w-auto relative z-10" style={{ height: "8rem" }} />
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <img src="/taiLogo.png" alt="" className="h-40 w-auto" />
          </div>
        </a>
        
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#inicio" className="text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: "rgb(255,60,65)" }}>INICIO</a>
          <a href="#clientes" className="text-gray-600 hover:text-cyan-600 font-medium py-2">CLIENTES</a>
          <a href="#productos" className="text-gray-600 hover:text-cyan-600 font-medium py-2">PRODUCTOS</a>
          <a href="#proyectos" className="text-gray-600 hover:text-cyan-600 font-medium py-2">PROYECTOS</a>
          <a href="#servicios" className="text-gray-600 hover:text-cyan-600 font-medium py-2">SERVICIOS</a>
          <a href="#partners" className="text-gray-600 hover:text-cyan-600 font-medium py-2">PARTNERS</a>
          <a href="#empresa" className="text-gray-600 hover:text-cyan-600 font-medium py-2">EMPRESA</a>
          <a href="#contacto" className="text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: "rgb(157,158,160)" }}>CONTACTO</a>
        </div>
        
        <div className="lg:hidden">
          <button onClick={onMenuOpen} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Abrir menú">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}