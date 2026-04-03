export interface TeamMember { 
  name: string; 
  role: string; 
  desc: string; 
  avatarSrc?: string; 
}

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Carlos Muñoz", role: "Ingeniero Senior", desc: "Especialista en control de procesos y metrología industrial", avatarSrc: "/worker.png" },
  { name: "Pedro Soto", role: "Técnico de Terreno", desc: "Mantención y calibración de instrumentación analítica", avatarSrc: "/worker.png" },
  { name: "Luis Herrera", role: "Asesor Metrológico", desc: "Soporte técnico y analítico para industria de celulosa", avatarSrc: "/worker.png" },
  { name: "Andrés Pino", role: "Ingeniero de Proyecto", desc: "Implementación de sistemas de medición de consistencia", avatarSrc: "/worker.png" },
  { name: "Mario Vera", role: "Técnico Especialista", desc: "Personal calificado con más de 15 años de experiencia", avatarSrc: "/worker.png" },
  { name: "Roberto Lagos", role: "Jefe de Operaciones", desc: "Coordinación de equipos de trabajo en terreno", avatarSrc: "/worker.png" },
];