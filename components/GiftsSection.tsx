"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import LeafDivider from "./LeafDivider";
import SectionDivider from "./SectionDivider";
import GiftCard from "./GiftCard";
import { useGifts } from "@/hooks/useGifts";

/**
 * Seção "Lista de Presentes": exibe presentes em cartões,
 * com estados de carregamento e erro.
 */
export default function GiftsSection() {
  const { gifts, loading, error } = useGifts();

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-script text-2xl text-sage-dark mb-2">
          Com carinho
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
          Lista de Presentes
        </h2>


        <p className="font-sans text-sm text-ink-light max-w-xl mx-auto mb-4 leading-relaxed">
          A maior alegria será contar com a presença de cada um de vocês.
          Caso desejem nos presentear, preparamos esta lista com carinho,
          incluindo a opção de contribuir com a nossa lua de mel.
        </p>
      </motion.div>

      <SectionDivider className="mb-10 text-sage" />

      {loading && (
        <div className="flex flex-col items-center gap-3 py-12 text-ink-light">
          <Loader2 className="animate-spin" size={28} />
          <p className="font-sans text-sm">Carregando lista de presentes...</p>
        </div>
      )}

      {error && (
        <p className="font-sans text-sm text-red-700 py-8">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>
      )}
    </section>
  );
}
