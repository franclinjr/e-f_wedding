"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift as GiftIcon, Heart, Loader2, Copy, Check } from "lucide-react";
import { Gift } from "@/types";
import { formatCurrency } from "@/utils";
import { initiateGiftPayment } from "@/services/giftsService";

interface GiftCardProps {
  gift: Gift;
}

/**
 * Cartão de presente individual.
 * Ao clicar em "Presentear", inicia o fluxo de pagamento via Pix
 * (estrutura pronta para integração com gateway real).
 */
export default function GiftCard({ gift }: GiftCardProps) {
  const [loading, setLoading] = useState(false);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGift() {
    setLoading(true);
    setError(null);
    try {
      const result = await initiateGiftPayment(gift.id, gift.suggestedValue);
      if (result.success && result.pixCode) {
        setPixCode(result.pixCode);
      } else {
        setError(result.message);
      }
    } catch {
      setError("Não foi possível gerar o Pix agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!pixCode) return;
    await navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-cream-50 border border-ink/10 rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-light/40 text-sage-dark mx-auto">
        {gift.isContribution ? <Heart size={22} strokeWidth={1.5} /> : <GiftIcon size={22} strokeWidth={1.5} />}
      </div>

      <h3 className="font-serif text-lg text-ink text-center">{gift.name}</h3>
      <p className="font-sans text-sm text-ink-light text-center leading-relaxed flex-1">
        {gift.description}
      </p>

      <p className="font-serif text-xl text-sage-dark text-center">
        {formatCurrency(gift.suggestedValue)}
      </p>

      {!pixCode ? (
        <button
          onClick={handleGift}
          disabled={loading}
          className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-cream-50 px-6 py-3 rounded-full font-sans text-xs uppercase tracking-widest2 hover:bg-sage-dark transition-colors duration-300 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Gerando Pix...
            </>
          ) : (
            "Presentear"
          )}
        </button>
      ) : (
        <div className="mt-2 flex flex-col gap-2">
          <p className="font-sans text-xs text-ink-muted text-center">
            Copie o código Pix abaixo:
          </p>
          <div className="flex items-center gap-2 bg-cream-100 border border-ink/10 rounded-lg px-3 py-2">
            <span className="font-mono text-xs text-ink-light truncate flex-1">
              {pixCode}
            </span>
            <button
              onClick={handleCopy}
              aria-label="Copiar código Pix"
              className="text-sage-dark hover:text-ink transition-colors"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      )}

      {error && (
        <p className="text-xs text-red-700 text-center font-sans">{error}</p>
      )}
    </motion.div>
  );
}
