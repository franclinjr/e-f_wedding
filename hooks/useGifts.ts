"use client";

import { useEffect, useState } from "react";
import { Gift } from "@/types";
import { getGifts } from "@/services/giftsService";

/**
 * Hook que carrega a lista de presentes, com estados de loading e erro.
 */
export function useGifts() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await getGifts();
        if (mounted) setGifts(data);
      } catch {
        if (mounted) setError("Não foi possível carregar a lista de presentes.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return { gifts, loading, error };
}
