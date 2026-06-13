"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Monogram from "./Monogram";

const NAV_LINKS = [
  { href: "#celebracao", label: "Celebração" },
  { href: "#presentes", label: "Presentes" },
  { href: "#rsvp", label: "Confirmar Presença" },
];

/**
 * Barra de navegação fixa, translúcida, com menu responsivo.
 * Em telas pequenas, exibe um menu suspenso (drawer simples).
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/85 backdrop-blur-sm border-b border-ink/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Monogram size="sm" />
        </Link>

        {/* Navegação desktop */}
        <ul className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest2 text-ink-light">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-sage-dark transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Drawer mobile */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-8 font-sans text-sm uppercase tracking-widest2 text-ink-light border-t border-ink/10 bg-cream-50">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-sage-dark transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
