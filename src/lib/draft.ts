import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  facts: z.string().min(12).max(4000),
  jurisdiction: z.string().max(80),
  title: z.string().max(200),
  parties: z.string().max(500),
  caseNo: z.string().max(80),
  sources: z.string().max(7000),
});

export const draftPleading = createServerFn({ method: "POST" })
  .validator((input: unknown) => Input.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "Paladin's drafting desk is dark in this environment." };
    }

    const system = `You are PALADIN, a court-pleading typesetter — not a lawyer, not a firm.
Write a JustiTeX markdown pleading from the user's facts and ONLY the supplied authorities.
Rules:
- Output markdown only. No preamble.
- First lines: court headers as "# IN THE …" then parties, "Case No.", then "## TITLE".
- Body uses ## roman-numeral headings and numbered paragraphs (1. 2. 3.).
- Cite authorities by the [S#] labels provided. Never invent case names, reporter cites, statutes, or dates.
- If a needed authority is missing, write a bracketed placeholder like [cite the judgment date from the file] instead of fabricating.
- Tone: dry, precise, filed-in-the-clerk's-office. No theatrics.
- End with a DATED line and a Respectfully submitted /s/ signature block using the party name given.
- Do not give legal advice. This is typesetting.`;

    const user = `Jurisdiction: ${data.jurisdiction}
Caption parties: ${data.parties}
Case No.: ${data.caseNo}
Document title: ${data.title}

Facts / instructions:
${data.facts}

Authorities (hyperRAG):
${data.sources || "(none retrieved — do not invent citations)"}`;

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.25,
        max_tokens: 1400,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: `Drafting desk returned ${res.status}.` };
    }
    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "Empty draft." };
    return { ok: true as const, text };
  });
