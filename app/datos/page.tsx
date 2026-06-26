"use client";
import { useState } from "react";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import MobileMenu from "../component/layout/MobileMenu";
import WhatsAppWidget from "../component/WhatsAppWidget";
import ResidualPeroxido from "../component/ResidualPeroxido";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-200">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ResidualPeroxido />
      <Footer />
      <WhatsAppWidget
        agentName="Ignacio"
        phoneNumber="56962363384"
        message={"¿Necesita más información?\nHablemos por acá, te ayudo de inmediato"}
        isOnline={true}
      />
    </main>
  );
}