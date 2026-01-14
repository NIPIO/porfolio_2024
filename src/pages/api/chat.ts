import type { APIRoute } from "astro"
import { getStaticReply } from "@/chat/engine"

export const POST: APIRoute = async ({ request }) => {
  const { message } = await request.json()

  const reply = getStaticReply(message)

  return new Response(
    JSON.stringify({ reply }),
    { headers: { "Content-Type": "application/json" } }
  )
}
