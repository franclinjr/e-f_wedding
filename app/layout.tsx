import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Tipografia serifada elegante para títulos e monograma
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

// Script delicada para frases de destaque, no clima do convite
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

// Sans-serif limpa para textos corridos e UI
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Érika & Franclin Júnior | 18.07.2026",
  description:
    "Confirme sua presença no casamento de Érika e Franclin Júnior, dia 18 de julho de 2026, em Embu das Artes, SP.",
  openGraph: {
    title: "Érika & Franclin Júnior | 18.07.2026",
    description:
      "Temos a alegria de convidá-los para um almoço especial em comemoração ao nosso casamento.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${jost.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
