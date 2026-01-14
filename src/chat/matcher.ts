import { INTENT_KEYWORDS, Intent } from "./intents"

export function matchIntent(text: string): Intent {
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        return intent as Intent
      }
    }
  }
  return "unknown"
}
