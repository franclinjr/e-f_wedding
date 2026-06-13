import { Instagram } from "lucide-react";
import LeafDivider from "./LeafDivider";
import Monogram from "./Monogram";

/**
 * Rodapé do site: mensagem de agradecimento, assinatura
 * e links para redes sociais, no mesmo clima do convite.
 */
export default function Footer() {
  return (
    <footer className="bg-ink text-cream-100 py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">

        <p className="font-script text-2xl md:text-3xl text-sage-light">
          Com amor e gratidão,
        </p>

        <Monogram size="md" className="text-cream-100" />

        <p className="font-serif text-lg tracking-wide">
          Érika &amp; Franclin Júnior
        </p>

        <p className="font-sans text-sm text-cream-100/70 max-w-md">
          Obrigado por fazer parte da nossa história. Sua presença é o maior
          presente que poderíamos receber.
        </p>

        <p className="text-xs text-cream-100/40 mt-8">
          18 · 07 · 2026 — Embu das Artes, SP
        </p>

        <p className="text-xs text-cream-100/30">
          © 2026 Érika &amp; Franclin &nbsp;•&nbsp; Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/franclin-junior-728310207/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-cream-100/60 transition-colors"
          >
            Franclin Junior
          </a>
        </p>
      </div>
    </footer>
  );
}
