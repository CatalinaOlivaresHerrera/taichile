// C:\Users\cata\taichile\app\component\popups\RotatingEquipmentPopup.tsx
'use client';

import { useState, useEffect } from 'react';

export default function RotatingEquipmentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
        >
          ✕
        </button>
        
        <div className="relative">
          <img 
            src="/equipo-rotatorio.gif" 
            alt="Equipo Rotatorio - Nueva Tecnología" 
            className="w-full h-auto"
            onError={(e) => {
              e.currentTarget.src = 'MEK-STRATUS-360/.gif';
              e.currentTarget.alt = 'Imagen no disponible';
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-white text-2xl font-bold">Nueva Tecnología</h3>
            <p className="text-gray-200">Equipos rotatorios de última generación</p>
          </div>
        </div>
        
        <div className="p-6 text-center">
          <button
            onClick={() => window.open('https://www.btg.com/mekstratus/', '_blank')}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
          >
            Conocer más sobre nuestros equipos →
          </button>
        </div>
      </div>
    </div>
  );
}