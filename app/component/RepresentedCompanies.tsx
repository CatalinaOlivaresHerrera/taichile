// app/component/c.tsx
'use client';

import { useState } from 'react';

const companies = [
  {
    name: 'BTG',
    logo: '/logos/btg-logo.png',
    color: '#003366',
    menuItems: [
      { name: 'PULPA', href: '/productos/btg/pulpa' },
      { name: 'TEJIDO', href: '/productos/btg/tejido' },
      { name: 'EMBALAJE', href: '/productos/btg/embalaje' },
      { name: 'LABORATORIO', href: '/productos/btg/laboratorio' },
      { name: 'CONSISTENCIA', href: '/productos/btg/consistencia' },
    ]
  },
  {
    name: 'MAXCESS',
    logo: '/logos/maxcess-logo.png',
    color: '#0099CC',
    menuItems: [
      { name: 'RotoMetrics', href: '/productos/maxcess/rotometrics' },
      { name: 'Fife', href: '/productos/maxcess/fife' },
      { name: 'Tidland', href: '/productos/maxcess/tidland' },
      { name: 'MAGPOWR', href: '/productos/maxcess/magpowr' },
    ]
  },
  {
    name: 'TECHPAP',
    logo: '/logos/techpap-logo.png',
    color: '#006633',
    menuItems: [
      { name: 'EQUIPOS DE LABORATORIO', href: '/productos/techpap/laboratorio' },
      { name: 'EQUIPOS DE LABORATORIO PARA MEDICION', href: '/productos/techpap/medicion' },
      { name: 'EQUIPOS PARA MEDICION ONLINE', href: '/productos/techpap/online' },
    ]
  }
];

export default function RepresentedCompanies() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Empresas que Representamos</h2>
        <p className="text-center text-gray-600 mb-12">Alianzas estratégicas con líderes mundiales en tecnología industrial</p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {companies.map((company) => (
            <div key={company.name} className="relative">
              <div 
                className="relative bg-white rounded-xl shadow-lg p-6 w-48 text-center cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={() => setOpenMenu(company.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-16 w-auto mx-auto mb-3 object-contain"
                />
                <p className="font-semibold text-gray-700">{company.name}</p>
              </div>
              
              {openMenu === company.name && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-20"
                  onMouseEnter={() => setOpenMenu(company.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="bg-gradient-to-r p-3" style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)` }}>
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}