import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { a as Plus, i as Printer, r as Sparkles, s as Lock } from "../_libs/lucide-react.mjs";
import { a as SiteFooter, c as activeDoc, d as canUse, f as cn, g as layoutPages, h as jurisdictionLocked, i as SAMPLE_PLEADING, l as applyMarkdownDraft, m as headerFor, n as JURISDICTIONS, o as SiteHeader, s as TEMPLATES, t as Button, u as applyTemplate, v as usePaladin } from "./site-header-DcpH-sfS.mjs";
import { i as Textarea, n as Input$1, r as Label } from "./field-CVw22rGd.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-BAIMekXz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LineGutter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "absolute top-[0.95in] bottom-[0.85in] left-[0.72in] flex w-[0.42in] select-none flex-col justify-between font-serif text-[10px] leading-none text-ink/55",
		children: Array.from({ length: 28 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "text-right tabular-nums",
			children: i + 1
		}, i))
	});
}
function DoubleRule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-[0.95in] bottom-[0.8in] left-[1.22in] w-[3px] border-l border-r border-ink" });
}
function PleadingPaper({ pleading, plan, className }) {
	const j = JURISDICTIONS.find((x) => x.id === pleading.jurisdictionId) ?? JURISDICTIONS[0];
	const { line1, line2 } = headerFor(pleading, j);
	const { pages } = layoutPages(pleading);
	const footerLeft = plan === "scout" ? "PALADIN Scout · JustiTeX 28-line grid · not a certified copy" : pleading.letterhead?.trim() ? pleading.letterhead : "JustiTeX 28-line golden grid";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "print-root",
		className: cn("flex flex-col gap-6", className),
		children: pages.map((pg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "pleading-sheet relative mx-auto overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineGutter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pt-[0.95in] pr-[0.9in] pb-[0.95in] pl-[1.45in] text-[11.5px] leading-[23.14px]",
					children: [
						pleading.letterhead && plan === "posse" && pg.kind === "first" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-[2px] text-[10px] tracking-wide text-ink/80",
							children: pleading.letterhead
						}) : null,
						pg.kind === "first" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-[11px] font-semibold uppercase tracking-[0.08em]",
								children: line1
							}),
							line2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-[11px] font-semibold uppercase tracking-[0.08em]",
								children: line2
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[6px] grid grid-cols-[1.1fr_0.9fr] border border-ink text-[10.5px] leading-[13px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-r border-ink p-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "uppercase",
											children: [pleading.plaintiffs, ","]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "pl-6 italic",
											children: "Plaintiff,"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "pl-3",
											children: "v."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "uppercase",
											children: [pleading.defendants, ","]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "pl-6 italic",
											children: "Defendant."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"Case No.",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: pleading.caseNo || "UNASSIGNED"
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-semibold uppercase tracking-wide",
										children: pleading.title
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[8px] text-center text-[11px] font-semibold uppercase underline decoration-ink underline-offset-2",
								children: pleading.title
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-[10px] uppercase tracking-[0.14em] text-ink/70",
							children: [
								pleading.title,
								" — page ",
								pg.page,
								" of ",
								pg.total
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[4px]",
							children: pg.bodyLines.map((line, i) => {
								const isHead = line.length > 0 && line === line.toUpperCase() && /^(I{1,3}|IV|V|VI|VII|VIII|IX|X)\./.test(line);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("min-h-[23.14px]", isHead && "text-center font-semibold"),
									children: line || "\xA0"
								}, i);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-[0.9in] bottom-[0.42in] left-[1.45in] flex items-end justify-between text-[9.5px] text-ink/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [footerLeft, plan === "posse" && pleading.batesPrefix ? ` · ${pleading.batesPrefix}-${String(pg.page).padStart(4, "0")}` : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Page ",
						pg.page,
						" of ",
						pg.total
					] })]
				}),
				plan === "scout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rotate-[-28deg] font-display text-5xl font-semibold tracking-wide text-teal/10",
						children: "SCOUT"
					})
				}) : null
			]
		}, pg.page))
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var draftPleading = createServerFn({ method: "POST" }).validator((input) => Input.parse(input)).handler(createSsrRpc("8ff390233cb7d72622c8bcd363be28a7208eb0334cb600d39980c7c8012c365e"));
var CORPUS = [
	{
		id: "utcr-2010",
		title: "UTCR 2.010 — Form of documents",
		source: "Oregon Uniform Trial Court Rules 2.010",
		tags: [
			"oregon",
			"pleading",
			"paper",
			"lines",
			"caption"
		],
		text: "Oregon UTCR 2.010 requires documents filed in circuit court to be on 8.5 by 11 inch paper with numbered lines, not more than 28 lines per page. The caption states the court, the title of the action, the register number, and a document title. Printing is to be double-spaced except for the caption, quoted material, footnotes, and similar matter. JustiTeX freezes a 28-line grid with a double left rule so the body tracks the numbers."
	},
	{
		id: "orcp-71",
		title: "ORCP 71 — Relief from judgment",
		source: "Oregon Rules of Civil Procedure 71",
		tags: [
			"oregon",
			"void",
			"judgment",
			"jurisdiction",
			"relief"
		],
		text: "ORCP 71 B permits relief from a judgment for mistake, newly discovered evidence, fraud, or because the judgment is void. ORCP 71 B(1)(d) covers a void judgment. ORCP 71 C preserves the court's inherent power to set aside a judgment for fraud upon the court or because it is void. A void judgment may be attacked at any time; ordinary reasonableness clocks that constrain voidable judgments do not apply."
	},
	{
		id: "bailey",
		title: "Bailey v. Vanderkloot — void judgments",
		source: "Oregon case law (void-judgment doctrine)",
		tags: [
			"oregon",
			"void",
			"jurisdiction",
			"nullity"
		],
		text: "Oregon courts treat a judgment entered without subject-matter jurisdiction as a legal nullity. It confers no rights, binds no one, and may be disregarded or vacated when the defect appears. Counsel should not cite a specific reporter page unless the source is in the file; state the doctrine and attach the judgment."
	},
	{
		id: "ors-757",
		title: "ORS 757.760 — utility discontinuance",
		source: "Oregon Revised Statutes 757.760",
		tags: [
			"oregon",
			"utility",
			"water",
			"shutoff",
			"notice"
		],
		text: "Oregon law governing public utilities requires notice and process before residential service is discontinued for nonpayment. A municipal water shutoff without pre-deprivation notice or hearing can support claims for injunctive relief and, where state action is present, a due-process claim. Immediate irreparable harm is the loss of water for drinking, sanitation, and fire protection."
	},
	{
		id: "1983",
		title: "42 U.S.C. § 1983 — state-action deprivation",
		source: "42 U.S.C. § 1983",
		tags: [
			"federal",
			"section 1983",
			"due process",
			"injunction"
		],
		text: "Section 1983 creates a civil action against a person who, under color of state law, deprives another of rights secured by the Constitution or federal law. Municipalities and municipal officials acting in official capacity are persons. A procedural-due-process claim requires a protected interest, a deprivation, and inadequate process. Injunctive relief is available to restore the status quo."
	},
	{
		id: "injunction",
		title: "Preliminary injunction standard",
		source: "Winter / Oregon analogue",
		tags: [
			"injunction",
			"tro",
			"irreparable",
			"equity"
		],
		text: "A preliminary injunction generally requires likelihood of success on the merits, likelihood of irreparable harm in the absence of relief, a balance of equities tipping toward the movant, and that an injunction is in the public interest. A TRO is a short, sometimes ex parte, version of the same showing, with a certification of notice or why notice should not be required. Water, housing, and bodily safety are classic irreparable injuries."
	},
	{
		id: "frcp-10",
		title: "FRCP 10 — caption and form",
		source: "Federal Rules of Civil Procedure 10",
		tags: [
			"federal",
			"caption",
			"pleading"
		],
		text: "Federal Rule 10 requires a caption with the court's name, a title including all parties in the complaint, a file number, and a Rule 7(a) designation. Paragraphs must be numbered. Claims are stated in numbered counts. Adopted exhibits are part of the pleading. JustiTeX keeps a 28-line numbered grid even in federal practice because many districts still expect it or tolerate it."
	},
	{
		id: "orcp-47",
		title: "ORCP 47 — summary judgment",
		source: "Oregon Rules of Civil Procedure 47",
		tags: [
			"oregon",
			"summary judgment",
			"record"
		],
		text: "ORCP 47 allows judgment when there is no genuine issue of material fact and the movant is entitled to judgment as a matter of law. The opponent must produce evidence on any issue where they would bear the burden at trial. Affidavits are made on personal knowledge and attach sworn or certified copies of documents."
	},
	{
		id: "caption-box",
		title: "Caption-box conventions",
		source: "JustiTeX frozen caption",
		tags: [
			"caption",
			"parties",
			"case number",
			"title"
		],
		text: "A JustiTeX caption is a two-column locked box. Left column: parties stacked, Plaintiff / Petitioner, v., Defendant / Respondent. Right column: Case No. on the first line, document title in small caps beneath. Court name sits above the box, centered, two lines. Signature blocks belong at the end of the last page, not in the caption."
	},
	{
		id: "prose",
		title: "Pro se filings",
		source: "Access-to-justice practice notes",
		tags: [
			"pro se",
			"legal aid",
			"signature"
		],
		text: "A pro se litigant signs in their own name, adds 'Plaintiff, Pro Se' or equivalent, and prints a mailing address and telephone number under the signature. They do not use a bar number. Courts still require the same caption, line numbering, and service. PALADIN Scout is built so a person without counsel can still hand the clerk paper that looks like paper."
	}
];
function tokenize(s) {
	return s.toLowerCase().replace(/[^a-z0-9§]+/g, " ").split(/\s+/).filter((w) => w.length > 2);
}
function retrieve(query, k = 4) {
	const q = tokenize(query);
	if (!q.length) return CORPUS.slice(0, k).map((chunk) => ({
		chunk,
		score: 0
	}));
	return CORPUS.map((chunk) => {
		const hay = tokenize(`${chunk.title} ${chunk.tags.join(" ")} ${chunk.text}`);
		let score = 0;
		for (const t of q) {
			const hits = hay.filter((h) => h === t || h.includes(t) || t.includes(h)).length;
			const titleBoost = tokenize(chunk.title).includes(t) ? 3 : 0;
			const tagBoost = chunk.tags.some((tag) => tag.includes(t) || t.includes(tag)) ? 2 : 0;
			score += hits + titleBoost + tagBoost;
		}
		return {
			chunk,
			score
		};
	}).filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, k);
}
function sourcesForPrompt(hits) {
	return hits.map((h, i) => `[S${i + 1}] ${h.chunk.title} (${h.chunk.source})\n${h.chunk.text}`).join("\n\n");
}
function StudioPage() {
	const store = usePaladin();
	const plan = store.plan();
	const doc = activeDoc(store) ?? {
		id: "sample",
		updatedAt: "",
		...SAMPLE_PLEADING
	};
	const [tab, setTab] = (0, import_react.useState)("compose");
	const [facts, setFacts] = (0, import_react.useState)("Water shutoff on June 25, 2024 at 12054 Chapin Court without a hearing. Need emergency restoration under Oregon utility rules and due process.");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const [hits, setHits] = (0, import_react.useState)(() => retrieve(facts));
	(0, import_react.useEffect)(() => {
		usePaladin.getState().hydrateSample();
	}, []);
	const remaining = store.remainingAi();
	const query = (0, import_react.useMemo)(() => `${doc?.title ?? ""} ${doc?.body ?? ""} ${facts}`, [
		doc?.title,
		doc?.body,
		facts
	]);
	(0, import_react.useEffect)(() => {
		setHits(retrieve(query));
	}, [query]);
	async function onDraft() {
		setNotice(null);
		const gate = store.consumeAi();
		if (!gate.ok) {
			setNotice(gate.reason);
			return;
		}
		setBusy(true);
		try {
			const j = JURISDICTIONS.find((x) => x.id === doc.jurisdictionId);
			const res = await draftPleading({ data: {
				facts,
				jurisdiction: j.name,
				title: doc.title,
				parties: `${doc.plaintiffs} v. ${doc.defendants}`,
				caseNo: doc.caseNo,
				sources: sourcesForPrompt(hits)
			} });
			if (!res.ok) {
				setNotice(res.error);
				return;
			}
			store.updateActive(applyMarkdownDraft(doc, res.text));
			setTab("paper");
		} catch (err) {
			setNotice(err instanceof Error ? err.message : "Drafting desk failed.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1400px] px-4 py-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted",
							children: [
								"Studio · ",
								plan,
								" · ",
								remaining,
								" draft",
								remaining === 1 ? "" : "s",
								" left"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-semibold tracking-tight",
							children: "28-line compositor"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									type: "button",
									onClick: () => store.addDoc(),
									disabled: plan === "scout" && store.docs.length >= 1,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "New"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "paper",
									type: "button",
									onClick: () => window.print(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Print / PDF"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "terracotta",
									type: "button",
									disabled: busy,
									onClick: onDraft,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), busy ? "Drafting…" : "Draft with Paladin"]
								})
							]
						})]
					}),
					notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-[var(--radius-md)] bg-paper px-4 py-3 text-sm shadow-[var(--shadow-border)]",
						children: [
							notice,
							" ",
							plan === "scout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "text-terracotta underline-offset-2 hover:underline",
								children: "See rates"
							}) : null
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: tab === "compose" ? "primary" : "outline",
							onClick: () => setTab("compose"),
							children: "Compose"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: tab === "paper" ? "primary" : "outline",
							onClick: () => setTab("paper"),
							children: "Paper"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							className: tab === "paper" ? "hidden lg:block" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[var(--radius-lg)] bg-paper p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "tpl",
											children: "Template"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 grid gap-2",
											children: TEMPLATES.map((t) => {
												const locked = !canUse(t.minPlan, plan);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													disabled: locked,
													onClick: () => store.updateActive(applyTemplate(t, doc)),
													className: "flex items-start justify-between gap-2 rounded-[var(--radius-sm)] px-3 py-2 text-left text-sm shadow-[var(--shadow-border)] hover:bg-bg-elevated disabled:opacity-50",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block font-medium",
														children: t.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs text-muted",
														children: t.blurb
													})] }), locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mt-0.5 size-3.5 text-muted" }) : null]
												}, t.id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 rounded-[var(--radius-lg)] bg-paper p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "jur",
												children: "Court"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												id: "jur",
												className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] bg-bg-elevated px-3 text-sm shadow-[var(--shadow-border)]",
												value: doc.jurisdictionId,
												onChange: (e) => {
													const id = e.target.value;
													if (jurisdictionLocked(id, plan)) {
														setNotice("Other courts ride with Paladin.");
														return;
													}
													store.updateActive({ jurisdictionId: id });
												},
												children: JURISDICTIONS.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: j.id,
													children: [j.name, j.minPlan !== "scout" ? " · Paladin" : ""]
												}, j.id))
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "county",
												children: "County (Oregon circuit)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
												id: "county",
												className: "mt-1",
												value: doc.county,
												onChange: (e) => store.updateActive({ county: e.target.value.toUpperCase() })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pl",
												children: "Plaintiff / Petitioner"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
												id: "pl",
												className: "mt-1",
												value: doc.plaintiffs,
												onChange: (e) => store.updateActive({ plaintiffs: e.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "df",
												children: "Defendant / Respondent"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
												id: "df",
												className: "mt-1",
												value: doc.defendants,
												onChange: (e) => store.updateActive({ defendants: e.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "cn",
												children: "Case no."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
												id: "cn",
												className: "mt-1",
												value: doc.caseNo,
												onChange: (e) => store.updateActive({ caseNo: e.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "tt",
												children: "Document title"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
												id: "tt",
												className: "mt-1",
												value: doc.title,
												onChange: (e) => store.updateActive({ title: e.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "body",
												children: "Body (markdown)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												id: "body",
												className: "mt-1 min-h-48 font-mono text-[13px] leading-relaxed",
												value: doc.body,
												onChange: (e) => store.updateActive({ body: e.target.value })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "dt",
													children: "Dated"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
													id: "dt",
													className: "mt-1",
													value: doc.dated,
													onChange: (e) => store.updateActive({ dated: e.target.value })
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "sn",
													children: "/s/"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
													id: "sn",
													className: "mt-1",
													value: doc.signName,
													onChange: (e) => store.updateActive({ signName: e.target.value })
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "sr",
												children: "Role under the signature"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
												id: "sr",
												className: "mt-1",
												value: doc.signRole,
												onChange: (e) => store.updateActive({ signRole: e.target.value })
											})] }),
											plan === "posse" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "lh",
													children: "Letterhead"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
													id: "lh",
													className: "mt-1",
													value: doc.letterhead,
													onChange: (e) => store.updateActive({ letterhead: e.target.value })
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													htmlFor: "bt",
													children: "Bates prefix"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
													id: "bt",
													className: "mt-1",
													value: doc.batesPrefix,
													onChange: (e) => store.updateActive({ batesPrefix: e.target.value })
												})] })]
											}) : null
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[var(--radius-lg)] bg-paper p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "facts",
												children: "Facts for Paladin"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												id: "facts",
												className: "mt-1 min-h-24",
												value: facts,
												onChange: (e) => setFacts(e.target.value)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-[11px] uppercase tracking-[0.14em] text-muted",
												children: "hyperRAG hits"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-2",
												children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium text-fg",
														children: h.chunk.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted",
														children: h.chunk.source
													})]
												}, h.chunk.id))
											})
										]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							className: tab === "compose" ? "hidden lg:block" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-auto rounded-[var(--radius-xl)] bg-bg-deep/40 p-3 sm:p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "paper-zoom",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PleadingPaper, {
										pleading: doc,
										plan
									})
								})
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { StudioPage as component };
