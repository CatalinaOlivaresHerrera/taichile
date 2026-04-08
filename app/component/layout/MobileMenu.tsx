'use client';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { name: "QUIÉNES SOMOS", href: "#about", primary: false },
    { name: "PRODUCTOS", href: "#products", primary: false },
    { name: "SERVICIOS", href: "#services", primary: false },
    { name: "NUESTRO EQUIPO", href: "#team", primary: false },
    { name: "CLIENTES", href: "#clients", primary: false },
    { name: "REPRESENTACIONES", href: "#represented-companies", primary: false },
    { name: "CONTACTO", href: "#hero", primary: true, isContact: true },
  ];

  const handleClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 56;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={onClose} 
      />
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4 border-b">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 p-2" aria-label="Cerrar menú">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-3">
          {menuItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleClick(item.href)}
              className={`text-left px-4 py-2.5 rounded-md font-semibold transition-all ${
                item.primary
                  ? item.isContact ? "text-white" : "text-white bg-red-500"
                  : "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
              }`}
              style={item.primary && item.isContact ? { backgroundColor: "rgb(157,158,160)" } : undefined}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}