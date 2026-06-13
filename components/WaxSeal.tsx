interface WaxSealProps {
  className?: string;
  size?: number;
}

/**
 * Selo de cera com a árvore estilizada e iniciais "E F",
 * elemento de assinatura recorrente da identidade visual,
 * recriado em SVG/CSS (sem dependência de imagem).
 */
export default function WaxSeal({ className = "", size = 96 }: WaxSealProps) {
  return (
    <div
      className={`wax-seal ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Selo de cera com monograma E F"
    >
      <svg
        viewBox="0 0 100 100"
        width={size * 0.62}
        height={size * 0.62}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tronco */}
        <path
          d="M50 90 L50 55"
          stroke="#D9D6CE"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Copa estilizada (árvore) */}
        <circle cx="50" cy="40" r="22" stroke="#D9D6CE" strokeWidth="1.5" opacity="0.8" />
        <circle cx="38" cy="32" r="9" stroke="#D9D6CE" strokeWidth="1.3" opacity="0.7" />
        <circle cx="62" cy="32" r="9" stroke="#D9D6CE" strokeWidth="1.3" opacity="0.7" />
        <circle cx="50" cy="22" r="8" stroke="#D9D6CE" strokeWidth="1.3" opacity="0.7" />
        {/* Iniciais */}
        <text
          x="50"
          y="46"
          textAnchor="middle"
          fontSize="14"
          fill="#D9D6CE"
          fontFamily="Georgia, serif"
          letterSpacing="2"
        >
          E F
        </text>
      </svg>
    </div>
  );
}
