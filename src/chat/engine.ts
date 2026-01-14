import { normalizeText } from "@/utils/normalize.ts"
import { matchIntent } from "./matcher"
import { RESPONSES } from "./responses"

export function getStaticReply(message: string): string {
  const normalized = normalizeText(message)
  const intent = matchIntent(normalized)

  const responses = RESPONSES[intent] ?? RESPONSES.unknown

  // 👇 elegir una respuesta al azar
  return responses[Math.floor(Math.random() * responses.length)]
}
