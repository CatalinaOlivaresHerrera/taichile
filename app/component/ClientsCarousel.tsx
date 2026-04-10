// app/component/ClientsCarousel.tsx
'use client';

import { useState, useEffect } from 'react';

const clients = [
  { name: 'Cliente 1', logo: '/cliente1.png' },
  { name: 'Cliente 2', logo: '/cliente2.png' },
  { name: 'Cliente 3', logo: '/cliente3.png' },
  { name: 'Cliente 4', logo: '/cliente4.png' },
  { name: 'Cliente 5', logo: '/cliente5.jpeg' },
  { name: 'Cliente 6', logo: '/cliente6.jpeg' },
  // Agrega más logos según te los entreguen
];

export default function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (clients.length - visibleCount + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, clients.length - visibleCount));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  if (clients.length === 0) return null;

  return (
    <section className="py-16 bg-red">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Nuestros Clientes</h2>
        <p className="text-center text-gray-600 mb-12">Empresas que confían en nosotros</p>
        
        <div className="relative px-12">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index}
                  style={{ minWidth: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 2 / visibleCount}rem)` }}
                  className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-32"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={next}
            disabled={currentIndex >= clients.length - visibleCount}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: clients.length - visibleCount + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-6 bg-red-500' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}