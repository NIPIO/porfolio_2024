export type ChatResponse = {
  text: string
  followUps?: string[]
}

/**
 * 👉 Agregar o modificar RESPUESTAS
 * Las respuestas están organizadas por idioma en:
 * - responses.es.ts (Español)
 * - responses.en.ts (Inglés)
 * - responses.pt.ts (Portugués)
 */

import { RESPONSES_ES } from "./responses.es"
import { RESPONSES_EN } from "./responses.en"
import { RESPONSES_PT } from "./responses.pt"
import type { Lang } from "@/i18n"

export function getResponses(lang: Lang): Record<string, ChatResponse> {
  switch (lang) {
    case "en":
      return RESPONSES_EN
    case "pt":
      return RESPONSES_PT
    case "es":
    default:
      return RESPONSES_ES
  }
}
