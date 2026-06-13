"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Monogram from "./Monogram";
import LeafDivider from "./LeafDivider";
import SectionDivider from "./SectionDivider";

/**
 * Seção Hero — primeira tela do site.
 * Reproduz a composição central do convite: monograma,
 * ramo de folhas, nomes dos noivos e chamada para o RSVP.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Textura sutil de fundo */}
      <div className="absolute inset-0 bg-paper-texture pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-xl"
      >
        <Monogram size="lg" />


        <p className="font-script text-2xl md:text-3xl text-sage-dark">
          Temos a alegria de convidá-los
        </p>

        <h1 className="font-serif text-4xl md:text-6xl tracking-wide text-ink leading-tight">
          Érika
          <span className="block font-script text-2xl md:text-3xl text-sage-dark my-2">
            e
          </span>
          Franclin Júnior
        </h1>

        <p className="font-sans text-sm md:text-base text-ink-light max-w-md leading-relaxed">
          para um almoço especial em comemoração ao nosso casamento.
          Contamos com a sua presença para celebrar esse novo começo.
        </p>

        <SectionDivider className="my-2" />

        <div className="flex flex-col sm:flex-row items-center gap-4 font-serif text-lg md:text-xl text-ink">
          <div className="flex flex-col items-center">
            <span className="tracking-widest2 text-xs font-sans text-ink-muted uppercase mb-1">
              Data
            </span>
            18 · 07 · 2026
          </div>
          <div className="hidden sm:block h-10 w-px bg-ink/20" />
          <div className="flex flex-col items-center">
            <span className="tracking-widest2 text-xs font-sans text-ink-muted uppercase mb-1">
              Horário
            </span>
            12h30 — Almoço
          </div>
        </div>

        <Link
          href="#rsvp"
          className="mt-6 inline-block bg-ink text-cream-50 px-10 py-4 rounded-full font-sans text-sm uppercase tracking-widest2 hover:bg-sage-dark transition-colors duration-300 shadow-sm"
        >
          Confirmar Presença
        </Link>
      </motion.div>
    </section>
  );
}
