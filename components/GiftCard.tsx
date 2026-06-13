"use client";

import { motion } from "framer-motion";
import { Gift as GiftIcon, Heart } from "lucide-react";
import { Gift } from "@/types";
import { formatCurrency } from "@/utils";

interface GiftCardProps {
  gift: Gift;
}

export default function GiftCard({ gift }: GiftCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-cream-50 border border-ink/10 rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-light/40 text-sage-dark mx-auto">
        {gift.isContribution
          ? <Heart size={22} strokeWidth={1.5} />
          : <GiftIcon size={22} strokeWidth={1.5} />
        }
      </div>

      <h3 className="font-serif text-lg text-ink text-center">{gift.name}</h3>
      <p className="font-sans text-sm text-ink-light text-center leading-relaxed flex-1">
        {gift.description}
      </p>

      <p className="font-serif text-xl text-sage-dark text-center">
        {formatCurrency(gift.suggestedValue)}
      </p>

      <a
        href={gift.paymentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center bg-ink text-cream-50 px-6 py-3 rounded-full font-sans text-xs uppercase tracking-widest2 hover:bg-sage-dark transition-colors duration-300"
      >
        Presentear
      </a>
    </motion.div>
  );
}
