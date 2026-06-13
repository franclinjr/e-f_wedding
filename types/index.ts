// Tipos compartilhados do projeto

export interface RsvpFormData {
  name: string;
  telephone: string;
  person_quantity: number;
  message: string;
}

export interface RsvpResponse {
  success: boolean;
  message: string;
}

export type GiftCategory = "lua-de-mel" | "casa" | "geral";

export interface Gift {
  id: string;
  name: string;
  description: string;
  suggestedValue: number;
  imageUrl?: string;
  category: GiftCategory;
  isContribution?: boolean;
  paymentUrl: string;
}

export interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
