import { i as string, r as object } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/draft-DruFTA8v.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	facts: string().min(12).max(4e3),
	jurisdiction: string().max(80),
	title: string().max(200),
	parties: string().max(500),
	caseNo: string().max(80),
	sources: string().max(7e3)
});
var draftPleading_createServerFn_handler = createServerRpc({
	id: "8ff390233cb7d72622c8bcd363be28a7208eb0334cb600d39980c7c8012c365e",
	name: "draftPleading",
	filename: "src/lib/draft.ts"
}, (opts) => draftPleading.__executeServer(opts));
var draftPleading = createServerFn({ method: "POST" }).validator((input) => Input.parse(input)).handler(draftPleading_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Paladin's drafting desk is dark in this environment."
	};
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
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .25,
			max_tokens: 1400,
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content: user
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `Drafting desk returned ${res.status}.`
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "Empty draft."
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { draftPleading_createServerFn_handler };
