"use client";

import { motion } from "framer-motion";
import LeafDivider from "./LeafDivider";
import SectionDivider from "./SectionDivider";
import { TimelineMilestone } from "@/types";

const MILESTONES: TimelineMilestone[] = [
  {
    date: "2019",
    title: "O primeiro encontro",
    description:
      "Um café marcado às pressas que se transformou em uma conversa de horas — e no início de tudo.",
  },
  {
    date: "2020",
    title: "Primeira viagem juntos",
    description:
      "Entre estradas e novos lugares, percebemos que qualquer destino era especial ao lado um do outro.",
  },
  {
    date: "2022",
    title: "Morando juntos",
    description:
      "Demos um novo passo: criar um lar com nossa rotina, nossos hábitos e muitos planos para o futuro.",
  },
  {
    date: "2025",
    title: "O pedido",
    description:
      "Em uma tarde tranquila, um sim que selou a certeza de que queríamos caminhar juntos para sempre.",
  },
  {
    date: "2026",
    title: "O grande dia",
    description:
      "18 de julho de 2026 — o dia em que celebramos, com quem amamos, o início da nossa nova história.",
  },
];

/**
 * Seção "Nossa História": texto introdutório sobre a trajetória
 * do casal e uma linha do tempo vertical com os marcos principais.
 */
export default function StorySection() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-script text-2xl text-sage-dark mb-2">
          Capítulo um
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
          Nossa História
        </h2>

        <LeafDivider className="mb-6 text-sage-dark" />

        <p className="font-sans text-ink-light leading-relaxed max-w-xl mx-auto">
          Cada história de amor é única, e a nossa começou de forma simples —
          como tantas grandes histórias começam. Entre risadas, parceria e
          muito carinho, fomos construindo, dia após dia, a certeza de que
          queríamos compartilhar a vida. Hoje, convidamos vocês para
          celebrarem com a gente esse novo capítulo.
        </p>
      </motion.div>

      <SectionDivider className="my-12 text-sage" />

      {/* Linha do tempo */}
      <ol className="relative flex flex-col gap-12 text-left">
        <div
          className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-sage/40 md:-translate-x-1/2"
          aria-hidden="true"
        />
        {MILESTONES.map((milestone, index) => (
          <motion.li
            key={milestone.date}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`relative pl-10 md:pl-0 md:w-1/2 ${
              index % 2 === 0
                ? "md:pr-12 md:text-right md:ml-0"
                : "md:pl-12 md:ml-auto"
            }`}
          >
            {/* Marcador */}
            <span className="absolute left-0 md:left-auto top-1 w-6 h-6 rounded-full border border-sage-dark bg-cream-50 flex items-center justify-center text-xs font-serif text-sage-dark md:static md:inline-flex md:mb-2">
              •
            </span>

            <p className="font-serif text-xl text-ink-light tracking-widest2 uppercase text-sm md:text-base">
              {milestone.date}
            </p>
            <h3 className="font-serif text-xl text-ink mt-1 mb-2">
              {milestone.title}
            </h3>
            <p className="font-sans text-sm text-ink-light leading-relaxed">
              {milestone.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
