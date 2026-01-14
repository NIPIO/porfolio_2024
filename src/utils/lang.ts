import { LANGS, type Lang } from "@/i18n"

export function getLangFromUrl(url: URL): Lang {
  const lang = url.pathname.split("/")[1]
  return LANGS.includes(lang as Lang) ? (lang as Lang) : "es"
}
