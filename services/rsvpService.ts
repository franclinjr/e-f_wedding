import { RsvpFormData, RsvpResponse } from "@/types";

/**
 * Serviço de RSVP.
 *
 * Esta camada isola a lógica de envio do formulário de confirmação de
 * presença, permitindo trocar facilmente a implementação por:
 *  - Supabase: substituir o fetch por `supabase.from('rsvps').insert(...)`
 *  - Firebase: substituir por `addDoc(collection(db, 'rsvps'), ...)`
 *  - API própria: manter o fetch, apenas ajustando a URL/endpoint.
 *
 * Mantemos a assinatura da função estável para que os componentes
 * não precisem ser alterados ao trocar o backend.
 */
export async function submitRsvp(
  data: RsvpFormData
): Promise<RsvpResponse> {
  try {
    // ----------------------------------------------------------------
    // EXEMPLO - Integração com API própria (endpoint /api/rsvp):
    //
    // const res = await fetch("/api/rsvp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    // if (!res.ok) throw new Error("Falha ao enviar confirmação");
    // return await res.json();
    //
    // ----------------------------------------------------------------
    // EXEMPLO - Integração com Supabase:
    //
    // import { supabase } from "@/services/supabaseClient";
    // const { error } = await supabase.from("rsvps").insert({
    //   full_name: data.fullName,
    //   phone: data.phone,
    //   guests_count: data.guestsCount,
    //   dietary_restrictions: data.dietaryRestrictions,
    //   message: data.message,
    // });
    // if (error) throw error;
    //
    // ----------------------------------------------------------------
    // EXEMPLO - Integração com Firebase:
    //
    // import { db } from "@/services/firebaseClient";
    // import { addDoc, collection } from "firebase/firestore";
    // await addDoc(collection(db, "rsvps"), data);
    //
    // ----------------------------------------------------------------

    // Simulação de chamada assíncrona (substituir pela integração real).
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return {
      success: true,
      message: "Presença confirmada com sucesso!",
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Não foi possível enviar sua confirmação agora. Tente novamente em instantes.",
    };
  }
}
