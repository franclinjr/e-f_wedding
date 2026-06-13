import { cn } from "@/utils";

interface MonogramProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-2xl gap-2",
  md: "text-4xl gap-3",
  lg: "text-6xl md:text-7xl gap-4",
};

export default function Monogram({ className = "", size = "md" }: MonogramProps) {
  return (
    <div
      className={cn(
        "flex items-center font-serif tracking-widest",
        sizeMap[size],
        className
      )}
      aria-label="Monograma Érika e Franclin"
    >
      <span>E</span>
      <span className="h-[1em] w-px bg-current opacity-50" />
      <span>F</span>
    </div>
  );
}
