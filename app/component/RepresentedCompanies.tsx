'use client';

import { useState } from 'react';

const companies = [
  {
    name: 'BTG',
    logo: '/btg.png',
    color: '#003366',
    menuItems: [
      { name: 'PULPA', href: '/productos/btg/pulpa' },
      { name: 'TEJIDO', href: '/productos/btg/tejido' },
      { name: 'EMBALAJE', href: '/productos/btg/embalaje' },
      { name: 'LABORATORIO', href: '/productos/btg/laboratorio' },
      { name: 'CONSISTENCIA', href: '/productos/btg/consistencia' },
    ],
  },
  {
    name: 'MAXCESS',
    logo: '/maxcess.png',
    color: '#0099CC',
    menuItems: [
      { name: 'RotoMetrics', href: '/productos/maxcess/rotometrics' },
      { name: 'Fife', href: '/productos/maxcess/fife' },
      { name: 'Tidland', href: '/productos/maxcess/tidland' },
      { name: 'MAGPOWR', href: '/productos/maxcess/magpowr' },
    ],
  },
  {
    name: 'TECHPAP',
    logo: '/techpap.png',
    color: '#006633',
    menuItems: [
      { name: 'EQUIPOS DE LABORATORIO', href: '/productos/techpap/laboratorio' },
      { name: 'EQUIPOS DE LABORATORIO PARA MEDICION', href: '/productos/techpap/medicion' },
      { name: 'EQUIPOS PARA MEDICION ONLINE', href: '/productos/techpap/online' },
    ],
  },
];

export default function RepresentedCompanies() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isTouch = () =>
    typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches;

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-4">
          Empresas que Representamos
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base px-4">
          Alianzas estratégicas con líderes mundiales en tecnología industrial
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {companies.map((company) => (
            <div key={company.name} className="relative flex flex-col">

              {/* Tarjeta */}
              <div
                className="bg-white rounded-xl shadow-lg p-5 text-center cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 select-none"
                onMouseEnter={() => { if (!isTouch()) setOpenMenu(company.name); }}
                onMouseLeave={() => { if (!isTouch()) setOpenMenu(null); }}
                onClick={() => {
                  if (isTouch()) setOpenMenu((prev) => prev === company.name ? null : company.name);
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-14 md:h-16 w-auto mx-auto mb-3 object-contain"
                />
                <p className="font-semibold text-gray-700">{company.name}</p>
                <span className="mt-2 inline-block text-gray-400 text-xs md:hidden">
                  {openMenu === company.name ? '▲ cerrar' : '▼ ver productos'}
                </span>
              </div>

              {openMenu === company.name && (
                <>
                  {/* MOVIL: fluye en el documento */}
                  <div className="md:hidden mt-2 bg-white rounded-xl shadow-xl overflow-hidden">
                    <div
                      className="p-3"
                      style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)` }}
                    >
                      <p className="text-white font-bold text-center text-sm">{company.name}</p>
                    </div>
                    <div className="py-1">
                      {company.menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm border-b border-gray-50 last:border-0"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* DESKTOP: posicion absoluta */}
                  <div
                    className="hidden md:block absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-20"
                    onMouseEnter={() => setOpenMenu(company.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <div
                      className="p-3"
                      style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)` }}
                    >
                      <p className="text-white font-bold text-center">{company.name}</p>
                    </div>
                    <div className="py-2">
                      {company.menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}