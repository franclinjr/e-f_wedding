import { RsvpFormData, RsvpResponse } from "@/types";
import { supabase } from "@/lib/supabase";

export async function submitRsvp(data: RsvpFormData): Promise<RsvpResponse> {
  try {
    const { error } = await supabase.from("presence-confirmation").insert({
      name: data.name,
      telephone: data.telephone,
      person_quantity: data.person_quantity,
      message: data.message,
    });

    if (error) throw error;

    return { success: true, message: "Presença confirmada com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar RSVP:", error);
    return {
      success: false,
      message: "Não foi possível enviar sua confirmação agora. Tente novamente em instantes.",
    };
  }
}
