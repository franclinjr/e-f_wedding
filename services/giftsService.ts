import { Gift } from "@/types";

export async function getGifts(): Promise<Gift[]> {
  return [
    {
      id: "lua-de-mel-contribuicao",
      name: "Contribua com a Lua de Mel",
      description: "Ajude Érika e Franclin a viverem momentos inesquecíveis em sua viagem de lua de mel.",
      suggestedValue: 100,
      category: "lua-de-mel",
      isContribution: true,
      paymentUrl: "https://mpago.la/2bJUdaq",
    },
    {
      id: "jogo-de-jantar",
      name: "Jogo de Jantar",
      description: "Um conjunto completo de pratos para celebrar novas refeições em família.",
      suggestedValue: 250,
      category: "casa",
      paymentUrl: "https://mpago.la/1zzpWK9",
    },
    {
      id: "jogo-de-cama",
      name: "Jogo de Cama Casal",
      description: "Conjunto de lençóis e fronhas de algodão egípcio.",
      suggestedValue: 180,
      category: "casa",
      paymentUrl: "https://mpago.la/2ABkFsc",
    },
    {
      id: "panelas",
      name: "Conjunto de Panelas",
      description: "Panelas antiaderentes para o novo lar do casal.",
      suggestedValue: 320,
      category: "casa",
      paymentUrl: "https://mpago.la/1vANUAc",
    },
    {
      id: "jantar-romantico",
      name: "Jantar Romântico",
      description: "Um jantar especial para celebrar a primeira semana de casados.",
      suggestedValue: 200,
      category: "lua-de-mel",
      paymentUrl: "https://mpago.la/2cL5Hjz",
    },
    {
      id: "utensilios-de-cozinha",
      name: "Utensílios de Cozinha",
      description: "Conjunto de utensílios essenciais para o dia a dia na cozinha.",
      suggestedValue: 60,
      category: "casa",
      paymentUrl: "https://mpago.la/2HqReku",
    },
  ];
}
