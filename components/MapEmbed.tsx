"use client";

/**
 * Componente de mapa incorporado via iframe do Google Maps,
 * apontando para o endereço do restaurante.
 */
export default function MapEmbed() {
  const query = encodeURIComponent(
    "Restaurante Tucker Burger & Grill, Rod. Régis Bittencourt, Km 280, Água Morna, Embu das Artes - SP"
  );

  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-ink/10 shadow-sm mb-16">
      <iframe
        title="Mapa do local da celebração"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
