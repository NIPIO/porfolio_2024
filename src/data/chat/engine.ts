import { detectIntent } from "./matcher"
import { RESPONSES } from "./responses"

export function getStaticReply(message: string): string {
  const intent = detectIntent(message)
  const options = RESPONSES[intent]
  return options[Math.floor(Math.random() * options.length)]
}
