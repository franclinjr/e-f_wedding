"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Info } from "lucide-react";
import { GalleryImage } from "@/types";
import SectionDivider from "./SectionDivider";
import MapEmbed from "./MapEmbed";

/**
 * Seção "Informações da Celebração": data, horário, endereço,
 * mapa e orientações importantes para os convidados.
 */
export default function CelebrationSection() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-script text-2xl text-sage-dark mb-2">
          Quando e onde
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
          A Celebração
        </h2>

      </motion.div>

      {/* Destaque almoço intimista */}
      <div className="bg-sage-light/30 border border-sage/40 rounded-2xl px-6 py-5 mb-10 inline-flex flex-col items-center gap-2 max-w-lg mx-auto">
        <p className="font-script text-xl text-sage-dark">
          Um momento especial
        </p>
        <p className="font-sans text-sm text-ink-light leading-relaxed">
          Nossa celebração acontecerá em formato de{" "}
          <strong className="text-ink">almoço simples</strong>, reunindo as
          pessoas mais queridas para um momento de muito carinho e boa
          companhia.
        </p>
      </div>

      {/* Data e horário */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 mb-10">
        <div className="flex flex-col items-center gap-2">
          <CalendarDays className="text-sage-dark" size={28} strokeWidth={1.5} />
          <p className="font-serif text-2xl text-ink">18.07.2026</p>
          <p className="font-sans text-xs uppercase tracking-widest2 text-ink-muted">
            Sábado
          </p>
        </div>
        <div className="hidden sm:block w-px bg-ink/10" />
        <div className="flex flex-col items-center gap-2">
          <Clock className="text-sage-dark" size={28} strokeWidth={1.5} />
          <p className="font-serif text-2xl text-ink">12h30</p>
          <p className="font-sans text-xs uppercase tracking-widest2 text-ink-muted">
            Almoço
          </p>
        </div>
      </div>

      <SectionDivider className="mb-10 text-sage" />

      {/* Endereço */}
      <div className="flex flex-col items-center gap-2 mb-10" >
        <MapPin className="text-sage-dark" size={28} strokeWidth={1.5} />
        <p className="font-serif text-lg text-ink uppercase tracking-wide">
          Restaurante Tucker Burger &amp; Grill
        </p>
        <p className="font-sans text-sm text-ink-light leading-relaxed">
          Rod. Régis Bittencourt, Km 280
          <br />
          Água Morna — Embu das Artes / SP
        </p>
      </div>

      {/* Mapa */}
      <MapEmbed />


      {/* Cardápio */}
      <div className="mt-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mt-12 mb-10"
        >
          <p className="font-script text-2xl text-sage-dark mb-2">Menu E|F</p>
          <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">
            Cardápio do Evento
          </h3>
          <p className="font-sans text-sm text-ink-light mb-6">
            Escolha a entrada, o prato principal e a sobremesa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-cream-100 border border-ink/10 rounded-2xl overflow-hidden"
        >
          {/* Entradas */}
          <div className="px-8 py-4">
            <p className="font-sans text-xs uppercase tracking-widest2 text-sage-dark mb-1">
              Entradas
            </p>
            <div className="space-y-2">
              <div className="text-left">
                <p className="font-serif text-base text-ink">Mix de Folhas</p>
                <p className="font-sans text-sm text-ink-light mt-0.5">
                  Mix de folhas com vinagrete da casa
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-base text-ink">Aussie Fries</p>
                <p className="font-sans text-sm text-ink-light mt-0.5">
                  Batata canoa fritas
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-ink/8 mx-8" />

          {/* Pratos principais */}
          <div className="px-8 py-4">
            <p className="font-sans text-xs uppercase tracking-widest2 text-sage-dark mb-1">
              Pratos Principais
            </p>
            <p className="font-sans text-sm text-ink-muted mb-3">
              Pratos elaborados pelo chef
            </p>
            <div className="space-y-2">
              <div className="text-left">
                <p className="font-serif text-base text-ink">Chorizo Steak</p>
                <p className="font-sans text-sm text-ink-light mt-0.5">
                  Bife de chorizo grelhado acompanhado de arroz, feijão, farofa e vinagrete
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-base text-ink">Crusted Salmon</p>
                <p className="font-sans text-sm text-ink-light mt-0.5">
                  Salmão grelhado com molho de mostarda e mel, acompanhado de purê de batata, arroz e legumes grelhados
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-ink/8 mx-8" />

          {/* Sobremesas */}
          <div className="px-8 py-4">
            <p className="font-sans text-xs uppercase tracking-widest2 text-sage-dark mb-1">
              Sobremesas
            </p>
            <p className="font-sans text-sm text-ink-muted mb-3">
              Sobremesas clássicas para compartilhar
            </p>
            <div className="space-y-2">
              <div className="text-left">
                <p className="font-serif text-base text-ink">Brownie Down Under</p>
                <p className="font-sans text-sm text-ink-light mt-0.5">
                  Brownie quente servido com sorvete de chocolate
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-base text-ink">Ice Cream Sundae</p>
                <p className="font-sans text-sm text-ink-light mt-0.5">
                  Sorvete artesanal (Chocolate ou Baunilha)
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-ink/8 mx-8" />

          {/* Preço */}
          <div className="px-8 py-5 flex items-center justify-between bg-sage-light/20">
            <div className="text-left">
              <p className="font-sans text-sm text-ink-light">Valor por pessoa</p>
              <p className="font-sans text-xs text-ink-muted mt-0.5">
                Inclui entrada, prato principal e sobremesa 
              </p>
            </div>
            <p className="font-serif text-xl text-ink">R$ 97</p>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}
