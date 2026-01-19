import type { APIRoute } from "astro"
import { matchIntent } from "@/chat/matcher"
import { getResponses } from "@/chat/responses"
import { getLangFromUrl } from "@/utils/lang"
import type { Lang } from "@/i18n"
import { LANGS } from "@/i18n"

export const POST: APIRoute = async ({ request, url }) => {
  const { message, lang: langFromBody } = await request.json()
  
  // Priorizar el idioma del body, luego de la URL, luego español por defecto
  let lang: Lang = "es"
  if (langFromBody && LANGS.includes(langFromBody as Lang)) {
    lang = langFromBody as Lang
  } else {
    lang = getLangFromUrl(url)
  }
  
  const intent = matchIntent(message, lang)
  const RESPONSES = getResponses(lang)
  const response = RESPONSES[intent] ?? RESPONSES.unknown

  return new Response(
    JSON.stringify({
      reply: response.text,
      followUps: response.followUps ?? []
    }),
    { headers: { "Content-Type": "application/json" } }
  )
}
