import { Gift } from "@/types";

/**
 * Serviço da Lista de Presentes.
 *
 * Atualmente retorna dados mockados. Para conectar a um backend real:
 *
 *  - Supabase: `const { data } = await supabase.from('gifts').select('*')`
 *  - Firebase: `getDocs(collection(db, 'gifts'))`
 *  - API própria: `fetch('/api/gifts')`
 */
export async function getGifts(): Promise<Gift[]> {
  // Simulação de latência de rede
  await new Promise((resolve) => setTimeout(resolve, 400));

  return [
    {
      id: "lua-de-mel-contribuicao",
      name: "Contribua com a Lua de Mel",
      description:
        "Ajude Érika e Franclin a viverem momentos inesquecíveis em sua viagem de lua de mel.",
      suggestedValue: 100,
      category: "lua-de-mel",
      isContribution: true,
    },
    {
      id: "jogo-de-jantar",
      name: "Jogo de Jantar",
      description:
        "Um conjunto completo de pratos para celebrar novas refeições em família.",
      suggestedValue: 250,
      category: "casa",
    },
    {
      id: "jogo-de-cama",
      name: "Jogo de Cama Casal",
      description: "Conjunto de lençóis e fronhas de algodão egípcio.",
      suggestedValue: 180,
      category: "casa",
    },
    {
      id: "panelas",
      name: "Conjunto de Panelas",
      description: "Panelas antiaderentes para o novo lar do casal.",
      suggestedValue: 320,
      category: "casa",
    },
    {
      id: "jantar-romantico",
      name: "Jantar Romântico",
      description: "Um jantar especial para celebrar a primeira semana de casados.",
      suggestedValue: 150,
      category: "lua-de-mel",
    },
    {
      id: "experiencia-spa",
      name: "Dia de Spa para o Casal",
      description: "Um momento de relaxamento e cuidado para os dois.",
      suggestedValue: 280,
      category: "lua-de-mel",
    },
  ];
}

/**
 * Inicia o processo de "presentear" um item da lista.
 *
 * Estrutura preparada para integração com Pix:
 *  - Gerar QR Code dinâmico via API de pagamento (ex: Mercado Pago, PagSeguro, Pix direto via banco)
 *  - Retornar a chave Pix / código copia-e-cola para o convidado
 */
export async function initiateGiftPayment(
  giftId: string,
  amount: number
): Promise<{ success: boolean; pixCode?: string; message: string }> {
  // ----------------------------------------------------------------
  // EXEMPLO - Integração com gateway de pagamento Pix:
  //
  // const res = await fetch("/api/payments/pix", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ giftId, amount }),
  // });
  // const data = await res.json();
  // return { success: true, pixCode: data.pixCode, message: "Pix gerado!" };
  // ----------------------------------------------------------------

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    pixCode: "00020126580014BR.GOV.BCB.PIX-EXEMPLO-CHAVE-PIX-AQUI",
    message:
      "Chave Pix gerada com sucesso! Copie o código para concluir o presente.",
  };
}
