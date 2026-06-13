"use client";

import { motion } from "framer-motion";
import { GalleryImage } from "@/types";
import LeafDivider from "./LeafDivider";
import PhotoGallery from "./PhotoGallery";

const GALLERY_IMAGES: GalleryImage[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", alt: "Casal sorrindo ao ar livre", width: 800, height: 1000 },
  { id: "2", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Detalhe das mãos do casal", width: 800, height: 1000 },
  { id: "3", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Casal caminhando", width: 800, height: 600 },
  { id: "4", src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80", alt: "Decoração floral", width: 800, height: 1000 },
  { id: "5", src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80", alt: "Mesa decorada", width: 800, height: 600 },
  { id: "6", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", alt: "Buquê de flores", width: 800, height: 1000 },
];

export default function GallerySection() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-script text-2xl text-sage-dark mb-2">Momentos</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
          Galeria de Fotos
        </h2>
        <LeafDivider className="mb-10 text-sage-dark" />
      </motion.div>

      <PhotoGallery images={GALLERY_IMAGES} />
    </section>
  );
}
