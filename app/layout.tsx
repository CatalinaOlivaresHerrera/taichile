import type { Metadata } from "next";
import { Raleway, Source_Code_Pro } from 'next/font/google'
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  title: "TaiChile",
  description: "Tecnologías de Aplicación Industrial",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${raleway.variable} ${sourceCodePro.variable}`}>
      <body>{children}</body>
    </html>
  )
}