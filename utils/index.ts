// Funções utilitárias gerais do projeto

/**
 * Formata um valor numérico para moeda brasileira (BRL).
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Realiza uma máscara simples de telefone brasileiro enquanto o usuário digita.
 * Ex: 11999998888 -> (11) 99999-8888
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/**
 * Validação básica de um formulário de RSVP.
 */
export function validateRsvp(data: {
  fullName: string;
  phone: string;
}): string | null {
  if (!data.fullName.trim()) {
    return "Por favor, informe seu nome completo.";
  }
  if (data.fullName.trim().length < 3) {
    return "Nome muito curto. Verifique os dados informados.";
  }
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10) {
    return "Por favor, informe um telefone válido com DDD.";
  }
  return null;
}

/**
 * Junta classes condicionalmente (substituto leve para clsx).
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
