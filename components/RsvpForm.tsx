"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Minus, Plus } from "lucide-react";
import { useRsvpForm } from "@/hooks/useRsvpForm";
import LeafDivider from "./LeafDivider";
import SectionDivider from "./SectionDivider";

/**
 * Formulário de confirmação de presença (RSVP).
 * Utiliza o hook useRsvpForm, que encapsula estado, validação
 * e chamada ao serviço (pronto para Supabase/Firebase/API própria).
 */
export default function RsvpForm() {
  const {
    formData,
    updateField,
    handlePhoneChange,
    handleSubmit,
    isSubmitting,
    response,
    error,
  } = useRsvpForm();

  if (response?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto text-center bg-cream-100 border border-sage/40 rounded-2xl px-8 py-12 flex flex-col items-center gap-4"
      >
        <CheckCircle2 className="text-sage-dark" size={48} strokeWidth={1.5} />
        <h3 className="font-serif text-2xl text-ink">
          Obrigado, {formData.fullName.split(" ")[0] || "querido(a)"}!
        </h3>
        <p className="font-sans text-sm text-ink-light leading-relaxed">
          Sua presença está confirmada e já significa muito para nós. Estamos
          ansiosos para celebrar esse dia especial com você!
        </p>
        <LeafDivider className="text-sage-dark mt-2" />
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto flex flex-col gap-5 text-left"
      noValidate
    >
      {/* Nome completo */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="font-sans text-xs uppercase tracking-widest2 text-ink-muted">
          Nome completo
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Seu nome completo"
          className="bg-transparent border-b border-ink/30 focus:border-sage-dark outline-none py-2 font-sans text-ink placeholder:text-ink-muted/60 transition-colors"
        />
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="font-sans text-xs uppercase tracking-widest2 text-ink-muted">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder="(11) 99999-9999"
          className="bg-transparent border-b border-ink/30 focus:border-sage-dark outline-none py-2 font-sans text-ink placeholder:text-ink-muted/60 transition-colors"
        />
      </div>

      {/* Quantidade de adultos */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="guestsCount" className="font-sans text-xs uppercase tracking-widest2 text-ink-muted">
          Quantidade de adultos envolvendo você
        </label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() =>
              updateField("guestsCount", Math.max(1, formData.guestsCount - 1))
            }
            className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:border-sage-dark hover:text-sage-dark transition-colors"
            aria-label="Diminuir quantidade"
          >
            <Minus size={16} />
          </button>
          <span className="font-serif text-xl text-ink w-8 text-center" id="guestsCount">
            {formData.guestsCount}
          </span>
          <button
            type="button"
            onClick={() => updateField("guestsCount", formData.guestsCount + 1)}
            className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:border-sage-dark hover:text-sage-dark transition-colors"
            aria-label="Aumentar quantidade"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-sans text-xs uppercase tracking-widest2 text-ink-muted">
          Deixe uma mensagem para os noivos
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Escreva aqui seu carinho..."
          className="bg-transparent border border-ink/20 focus:border-sage-dark outline-none rounded-xl p-3 font-sans text-ink placeholder:text-ink-muted/60 transition-colors resize-none"
        />
      </div>

      {/* Erro */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-sm font-sans"
          >
            <AlertCircle size={16} />
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <SectionDivider className="text-sage my-2" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 bg-ink text-cream-50 px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest2 hover:bg-sage-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Enviando...
          </>
        ) : (
          "Confirmar Presença"
        )}
      </button>
    </form>
  );
}
