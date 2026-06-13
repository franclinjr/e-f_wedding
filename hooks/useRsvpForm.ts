"use client";

import { useState } from "react";
import { RsvpFormData, RsvpResponse } from "@/types";
import { submitRsvp } from "@/services/rsvpService";
import { formatPhone, validateRsvp } from "@/utils";

const initialData: RsvpFormData = {
  fullName: "",
  phone: "",
  guestsCount: 1,
  dietaryRestrictions: "",
  message: "",
};

/**
 * Hook que controla o estado, validação e envio do formulário de RSVP.
 */
export function useRsvpForm() {
  const [formData, setFormData] = useState<RsvpFormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<RsvpResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof RsvpFormData>(
    field: K,
    value: RsvpFormData[K]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handlePhoneChange(value: string) {
    updateField("phone", formatPhone(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const validationError = validateRsvp(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitRsvp(formData);
      setResponse(result);
      if (result.success) {
        setFormData(initialData);
      } else {
        setError(result.message);
      }
    } catch {
      setError("Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    formData,
    updateField,
    handlePhoneChange,
    handleSubmit,
    isSubmitting,
    response,
    error,
  };
}
