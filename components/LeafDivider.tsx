interface LeafDividerProps {
  className?: string;
  flip?: boolean;
}

/**
 * Ramo de folhas desenhado em SVG, inspirado no ornamento
 * presente no convite (galho com folhas alternadas).
 * Usado como divisor decorativo entre seções.
 */
export default function LeafDivider({ className = "", flip = false }: LeafDividerProps) {
  return (
    <div className={`leaf-divider ${className}`}>
      <svg
        viewBox="0 0 200 60"
        width="160"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
        aria-hidden="true"
      >
        <path
          d="M10 50 C 60 45, 110 35, 190 12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Folhas ao longo do ramo */}
        <g stroke="currentColor" strokeWidth="1.1" fill="none">
          <ellipse cx="40" cy="42" rx="14" ry="6" transform="rotate(-25 40 42)" />
          <ellipse cx="68" cy="34" rx="15" ry="6.5" transform="rotate(-20 68 34)" />
          <ellipse cx="98" cy="27" rx="16" ry="7" transform="rotate(-15 98 27)" />
          <ellipse cx="130" cy="20" rx="16" ry="7" transform="rotate(-12 130 20)" />
          <ellipse cx="162" cy="14" rx="14" ry="6" transform="rotate(-8 162 14)" />
        </g>
      </svg>
    </div>
  );
}
