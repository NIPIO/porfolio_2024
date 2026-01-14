import { INTENT_KEYWORDS, type Intent } from "./intents"

export function detectIntent(message: string): Intent {
  const text = message.toLowerCase()

  for (const intent in INTENT_KEYWORDS) {
    if (
      INTENT_KEYWORDS[intent as Intent].some(keyword =>
        text.includes(keyword)
      )
    ) {
      return intent as Intent
    }
  }

  return "unknown"
}
