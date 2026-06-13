# Érika & Franclin Júnior — Site de Casamento

Site oficial do casamento de Érika e Franclin Júnior, 18.07.2026.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — identidade visual derivada do convite (off-white, tinta escura, verde-sálvia, tipografia serifada + script)
- **Framer Motion** — animações sutis de entrada e transição
- **lucide-react** — ícones

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura de pastas

```
app/
  layout.tsx          # layout raiz, fontes, navbar/footer
  page.tsx            # home (todas as seções)
  historia/page.tsx   # Nossa História
  celebracao/page.tsx # Informações da Celebração
  rsvp/page.tsx       # Confirmação de Presença
  presentes/page.tsx  # Lista de Presentes
  galeria/page.tsx    # Galeria de Fotos
  globals.css

components/
  Navbar.tsx, Footer.tsx, Hero.tsx
  Monogram.tsx, LeafDivider.tsx, WaxSeal.tsx, SectionDivider.tsx
  StorySection.tsx, CelebrationSection.tsx, MapEmbed.tsx
  RsvpForm.tsx, GiftsSection.tsx, GiftCard.tsx, GallerySection.tsx

hooks/
  useRsvpForm.ts       # estado/validação/envio do RSVP
  useGifts.ts          # carregamento da lista de presentes

services/
  rsvpService.ts       # camada de integração (Supabase/Firebase/API)
  giftsService.ts      # presentes + geração de Pix

types/
  index.ts             # tipos compartilhados

utils/
  index.ts             # helpers (máscara de telefone, validação, moeda)
```

## Integrações futuras

### RSVP (Supabase / Firebase / API própria)
Edite `services/rsvpService.ts`. Exemplos comentados de cada integração já estão no arquivo.

### Lista de presentes + Pix
Edite `services/giftsService.ts`. A função `initiateGiftPayment` deve ser conectada a um gateway de pagamento Pix real (ex: Mercado Pago, PagSeguro).

### Fotos da galeria
Substitua as URLs em `components/GallerySection.tsx` pelas fotos reais do casal, idealmente hospedadas em `/public/images` e referenciadas via `next/image`.

## Identidade visual

- **Cores**: creme/papel (`#F7F3EC`), tinta escura (`#2B2A28`), verde-sálvia (`#A6AD8E`)
- **Tipografia**: Playfair Display (serifada, títulos), Great Vibes (script, destaques), Jost (sans-serif, corpo de texto)
- **Ornamentos**: ramos de folhas em SVG e selo de cera com monograma "E F", reaproveitados como elementos decorativos recorrentes
