import es from "./es"
import en from "./en"
import pt from "./pt"

export const LANGS = ["es", "en", "pt"] as const
export type Lang = typeof LANGS[number]

const dict = { es, en, pt }

export function getI18n(lang: Lang) {
  return dict[lang] ?? dict.es
}