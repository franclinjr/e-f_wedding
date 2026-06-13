"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/types";

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  function close() {
    setSelected(null);
  }

  function next() {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  }

  function prev() {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => setSelected(index)}
            className={`relative overflow-hidden rounded-xl group ${
              index % 5 === 0 ? "row-span-2 aspect-[4/5]" : "aspect-square"
            }`}
            aria-label={`Abrir foto: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/90 flex items-center justify-center px-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização de foto em destaque"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-cream-50 hover:text-sage-light transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-10 text-cream-50 hover:text-sage-light transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full aspect-[4/5] md:aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                fill
                sizes="90vw"
                className="object-contain rounded-lg"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-10 text-cream-50 hover:text-sage-light transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
