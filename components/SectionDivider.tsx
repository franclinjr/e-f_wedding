interface SectionDividerProps {
  className?: string;
}

/**
 * Linha divisória com ponto central, replicando o detalhe
 * gráfico usado no convite entre o texto e a data/horário.
 */
export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`divider-dot text-ink/60 ${className}`} aria-hidden="true">
      <span className="dot" />
    </div>
  );
}
