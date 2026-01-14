import type { APIRoute } from "astro"
import { matchIntent } from "@/chat/matcher"
import { RESPONSES } from "@/chat/responses"

export const POST: APIRoute = async ({ request }) => {
  const { message } = await request.json()
  const intent = matchIntent(message)

  const response = RESPONSES[intent] ?? RESPONSES.unknown

  return new Response(
    JSON.stringify({
      reply: response.text,
      followUps: response.followUps ?? []
    }),
    { headers: { "Content-Type": "application/json" } }
  )
}
