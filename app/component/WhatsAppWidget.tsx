// app/component/WhatsAppWidget.tsx
'use client';

import { useState, useEffect } from "react";

interface WhatsAppWidgetProps {
  agentName?: string;
  agentPhoto?: string;
  message?: string;
  phoneNumber?: string;
  isOnline?: boolean;
}

export default function WhatsAppWidget({
  agentName = "Ignacio",
  agentPhoto,
  message = "¿Necesita más información?\nHablemos por acá, te ayudo de inmediato",
  phoneNumber = "56962363384",
  isOnline = true,
}: WhatsAppWidgetProps) {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleChat = () => {
    const encoded = encodeURIComponent(`Hola ${agentName}, necesito información sobre sus servicios.`);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px", fontFamily: "var(--font-source-code-pro), monospace", zIndex: 9999 }}>
      <div style={{ position: "relative", background: "#ffffff", borderRadius: "16px 16px 4px 16px", padding: "14px 18px 14px 16px", boxShadow: "0 4px 24px rgba(0,0,0,0.13)", maxWidth: "280px", minWidth: "220px", opacity: show ? 1 : 0, transform: show ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)", transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <button onClick={() => setVisible(false)} aria-label="Cerrar" style={{ position: "absolute", top: "8px", left: "8px", background: "none", border: "1.5px solid #ccc", borderRadius: "50%", width: "22px", height: "22px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#888", fontSize: "13px", lineHeight: 1 }}>×</button>
        <div style={{ paddingLeft: "20px" }}>
          <p style={{ margin: "0 0 2px 0", fontSize: "14px", color: "#111", lineHeight: 1.5 }}>Hola, soy <strong>{agentName}</strong></p>
          {message.split("\n").map((line, i) => (<p key={i} style={{ margin: 0, fontSize: "13.5px", color: "#333", lineHeight: 1.5 }}>{line}</p>))}
        </div>
      </div>
      <div style={{ position: "relative", width: "64px", height: "64px", cursor: "pointer", opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.8)", transition: "opacity 0.35s ease 0.1s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.1s" }} onClick={handleChat} title={`Chatear con ${agentName}`}>
        <img 
          src={agentPhoto || "/ignacioWhats.png"} 
          alt={agentName} 
          style={{ 
            borderRadius: "50%", 
            objectFit: "cover", 
            width: "64px", 
            height: "64px", 
            border: "2px solid #fff", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            display: "block" 
          }} 
        />
        {isOnline && (<span style={{ position: "absolute", top: "2px", right: "2px", width: "13px", height: "13px", background: "#44d93d", borderRadius: "50%", border: "2px solid #fff", animation: "waPulse 2s infinite" }} />)}
        <span style={{ position: "absolute", bottom: "-4px", right: "-6px", width: "28px", height: "28px", background: "#25D366", borderRadius: "50%", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}>
          <img src="/LogoWhatsapp.png" width={16} height={16} alt="WhatsApp" />
        </span>
      </div>
      <style>{`@keyframes waPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.2); } }`}</style>
    </div>
  );
}