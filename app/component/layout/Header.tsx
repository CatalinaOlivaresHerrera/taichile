'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar qué sección está visible en el viewport
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img 
            src="/taiLogo.png" 
            alt="Taichile" 
            className="h-32 w-auto" 
            style={{ height: "8rem" }} 
          />
        </a>
        
        <div className="hidden lg:flex items-center space-x-6">
          {/* INICIO */}
          <a 
            href="#inicio" 
            className={`font-medium py-2 transition-all ${
              activeSection === 'inicio'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            INICIO
          </a>
          
          {/* QUIÉNES SOMOS */}
          <a 
            href="#quienes-somos" 
            className={`font-medium py-2 transition-all ${
              activeSection === 'quienes-somos'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            QUIÉNES SOMOS
          </a>
          
          {/* PROYECTOS con submenú de Productos y Servicios */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className={`font-medium py-2 flex items-center gap-1 transition-all ${
                activeSection === 'proyectos' || activeSection === 'productos' || activeSection === 'servicios'
                  ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              PROYECTOS
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                <a 
                  href="#productos" 
                  className={`block px-4 py-2 transition-colors ${
                    activeSection === 'productos'
                      ? 'bg-cyan-50 text-cyan-600 font-semibold'
                      : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
                  }`}
                >
                  Productos
                </a>
                <a 
                  href="#servicios" 
                  className={`block px-4 py-2 transition-colors ${
                    activeSection === 'servicios'
                      ? 'bg-cyan-50 text-cyan-600 font-semibold'
                      : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
                  }`}
                >
                  Servicios
                </a>
              </div>
            )}
          </div>
          
          {/* NUESTRO EQUIPO */}
          <a 
            href="#equipo" 
            className={`font-medium py-2 transition-all ${
              activeSection === 'equipo'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            NUESTRO EQUIPO
          </a>
          
          {/* CLIENTES */}
          <a 
            href="#clientes" 
            className={`font-medium py-2 transition-all ${
              activeSection === 'clientes'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            CLIENTES
          </a>
          
          {/* REPRESENTACIONES */}
          <a 
            href="#representaciones" 
            className={`font-medium py-2 transition-all ${
              activeSection === 'representaciones'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            REPRESENTACIONES
          </a>
          
          {/* CONTACTO - Botón destacado */}
          <a 
            href="#contacto" 
            className="text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all" 
            style={{ backgroundColor: "rgb(157,158,160)" }}
          >
            CONTACTO
          </a>
        </div>
        
        {/* Botón menú móvil */}
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