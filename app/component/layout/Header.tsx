'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('hero');

  // Función para scroll suave hasta el inicio de la sección
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Medir el header dinámicamente para compensar siempre la altura real
    const headerHeight = document.querySelector('header')?.offsetHeight ?? 56;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    window.history.pushState({}, '', `#${sectionId}`);
    setActiveSection(sectionId);
  };

  // Detectar sección visible
  useEffect(() => {
    const sections = [
      'hero',
      'about', 
      'team',
      'process',
      'services',
      'products',
      'about-taichile',
      'mission',
      'location',
      'represented-companies',
      'clients'
    ];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let section: Element | null = entry.target;
            while (section && !sections.includes(section.id)) {
              section = section.parentElement;
            }
            if (section && section.id) {
              setActiveSection(section.id);
              window.history.replaceState({}, '', `#${section.id}`);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-56px 0px 0px 0px'
      }
    );

    // Observar cada sección directamente
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    // Verificar hash inicial
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          const headerHeight = document.querySelector('header')?.offsetHeight ?? 56;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="flex items-center shrink-0"
        >
          <img
            src="/taiLogo.png"
            alt="Taichile"
            className="h-20 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center space-x-6">
          {/* QUIÉNES SOMOS */}
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className={`font-medium py-2 transition-all ${
              activeSection === 'about'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            QUIÉNES SOMOS
          </a>

          {/* PRODUCTOS */}
          <a
            href="#products"
            onClick={(e) => handleSmoothScroll(e, 'products')}
            className={`font-medium py-2 transition-all ${
              activeSection === 'products'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            PRODUCTOS
          </a>

          {/* SERVICIOS */}
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className={`font-medium py-2 transition-all ${
              activeSection === 'services'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            SERVICIOS
          </a>

          {/* NUESTRO EQUIPO */}
          <a
            href="#team"
            onClick={(e) => handleSmoothScroll(e, 'team')}
            className={`font-medium py-2 transition-all ${
              activeSection === 'team'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            NUESTRO EQUIPO
          </a>

          {/* CLIENTES */}
          <a
            href="#clients"
            onClick={(e) => handleSmoothScroll(e, 'clients')}
            className={`font-medium py-2 transition-all ${
              activeSection === 'clients'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            CLIENTES
          </a>

          {/* REPRESENTACIONES */}
          <a
            href="#represented-companies"
            onClick={(e) => handleSmoothScroll(e, 'represented-companies')}
            className={`font-medium py-2 transition-all ${
              activeSection === 'represented-companies'
                ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600'
                : 'text-gray-600 hover:text-cyan-600'
            }`}
          >
            REPRESENTACIONES
          </a>

          {/* CONTACTO */}
          <a
            href="#location"
            onClick={(e) => handleSmoothScroll(e, 'location')}
            className="text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: 'rgb(157,158,160)' }}
          >
            CONTACTO
          </a>
        </div>

        {/* Botón menú móvil */}
        <div className="lg:hidden">
          <button
            onClick={onMenuOpen}
            className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}