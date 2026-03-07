import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai"

import { groq } from "@ai-sdk/groq"

export const maxDuration = 30

const SYSTEM_PROMPT = `
Siz Abduxalidov Abdulloh ning shaxsiy AI yordamchisisiz. Siz faqat O'zbek tilida javob berasiz.

Abdulloh haqida ma'lumot:
- Ism: Abduxalidov Abdulloh
- Kasbi: Web Developer, SMM Specialist, Grafik Dizayner
- Joylashuv: O'zbekiston
`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: groq("llama-3.1-8b-instant"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    consumeSseStream: consumeStream,
  })
}
