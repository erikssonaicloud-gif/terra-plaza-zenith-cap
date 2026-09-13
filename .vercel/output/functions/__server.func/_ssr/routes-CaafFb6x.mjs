import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Library, d as ArrowRight, i as Printer, l as Gavel, u as FileStack } from "../_libs/lucide-react.mjs";
import { a as SiteFooter, o as SiteHeader, p as formatUsd, r as PLANS, t as Button, v as usePaladin } from "./site-header-DcpH-sfS.mjs";
import { n as Input, r as Label, t as Badge } from "./field-CVw22rGd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CaafFb6x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STACK = [
	{
		mark: "I",
		name: "JustiTeX",
		line: "The frozen 28-line grid. Caption lock. Widow and orphan control. Paper the clerk has already seen."
	},
	{
		mark: "II",
		name: "hyperRAG",
		line: "Authorities as a hypergraph, not a vibe. Drafts cite the pack you loaded — or they cite nothing."
	},
	{
		mark: "III",
		name: "P.A.L.A.D.I.N.",
		line: "Pleading Assembly, Legal Analysis, Docket Intelligence Network. The hired gun that typesets."
	}
];
var FEATURES = [
	{
		icon: Printer,
		title: "Court paper, not a PDF costume",
		body: "Letter size, double left rule, 28 numbered lines. Oregon UTCR 2.010 by default. Other courts on Paladin."
	},
	{
		icon: Library,
		title: "Grounded, or silent",
		body: "hyperRAG retrieves from a sealed authorities pack. Paladin will not invent a reporter cite to look clever."
	},
	{
		icon: FileStack,
		title: "Templates with teeth",
		body: "Injunction, declaration, ORCP 71, summary judgment, TRO, notice of appeal. Scout gets two. Paladin gets the rack."
	},
	{
		icon: Gavel,
		title: "A rate a clinic can pay",
		body: "Scout rides free forever. Paladin is twenty-nine a month. Posse is chambers for a legal-aid shop."
	}
];
var QUOTES = [
	{
		who: "Lina V., Clackamas clinic",
		what: "We stopped fighting Word's line numbers. The paper looks like the paper the other side files."
	},
	{
		who: "M. Okonkwo, solo",
		what: "I hired Paladin for captions. I stayed for the invoice pad. My clients pay me; I pay the tool."
	},
	{
		who: "Scout rider, Oregon City",
		what: "I am not a lawyer. The clerk took the motion. That is the whole product."
	}
];
function Home() {
	const addLead = usePaladin((s) => s.addLead);
	const [email, setEmail] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("pro se");
	const [joined, setJoined] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Digital Frontier Posse · est. territorial court" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-fg sm:text-6xl",
							children: "Have Brief — Will Gavel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted",
							children: "Court-ready 28-line pleadings for people who cannot rent a pinstripe. Scout files free. Paladin bills by the month. Posse holds the town."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "terracotta",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/studio",
									children: ["Open the studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									children: "See the rates"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs uppercase tracking-[0.16em] text-subtle",
							children: "Typesetting tool · not a law firm · not legal advice"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border bg-bg-elevated/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3",
						children: STACK.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg-elevated px-6 py-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm text-terracotta",
									children: s.mark
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-2xl text-fg",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-pretty text-sm leading-relaxed text-muted",
									children: s.line
								})
							]
						}, s.name))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "product",
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted",
							children: "Why this exists"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "The other side already owns the typesetting."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2",
							children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[var(--radius-lg)] bg-paper p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5 text-teal" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-xl text-fg",
											children: f.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-pretty text-sm leading-relaxed text-muted",
											children: f.body
										})
									]
								})
							}, f.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "rates",
					className: "border-y border-border bg-teal text-teal-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-teal-fg/70",
								children: "Rates"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold tracking-tight",
								children: "Scout. Paladin. Posse."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 lg:grid-cols-3",
								children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "rounded-[var(--radius-xl)] bg-teal-deep/50 p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[var(--radius-lg)] bg-bg p-6 text-fg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] uppercase tracking-[0.16em] text-muted",
												children: p.kicker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 font-display text-2xl",
												children: p.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 font-display text-3xl tabular-nums",
												children: [p.monthly === 0 ? "Free" : formatUsd(p.monthly), p.monthly > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-base text-muted",
													children: " / mo"
												}) : null]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-muted",
												children: p.blurb
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-4 space-y-1.5 text-sm text-fg",
												children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" }), f]
												}, f))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												className: "mt-6 w-full",
												variant: p.id === "paladin" ? "terracotta" : "outline",
												children: p.id === "scout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/studio",
													children: p.cta
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/checkout",
													search: {
														plan: p.id === "posse" ? "posse" : "paladin",
														interval: "month"
													},
													children: p.cta
												})
											})
										]
									})
								}, p.id))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted",
							children: "From the Digital Frontier Posse"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight",
							children: "Early riders."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-3",
							children: QUOTES.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-[var(--radius-lg)] bg-bg-elevated p-5 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-lg leading-snug text-fg",
									children: [
										"“",
										q.what,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
									className: "mt-4 text-xs uppercase tracking-[0.14em] text-muted",
									children: q.who
								})]
							}, q.who))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-subtle",
							children: "Composite notes from early access. Not paid endorsements."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border bg-bg-elevated/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-xl px-4 py-16 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-semibold tracking-tight",
								children: "Join the posse list"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "Clinics, pro se desks, and small firms. We keep the name on this device and in the Office lead book so you can actually bill someone today."
							}),
							joined ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 rounded-[var(--radius-md)] bg-paper p-4 text-sm shadow-[var(--shadow-border)]",
								children: "You are on the list. Open Office to copy the roster."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-6 space-y-3",
								onSubmit: (e) => {
									e.preventDefault();
									if (!email.includes("@")) return;
									addLead(email, role);
									setJoined(true);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "wait-email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "wait-email",
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "you@clinic.org",
										className: "mt-1"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "wait-role",
										children: "I ride as"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "wait-role",
										value: role,
										onChange: (e) => setRole(e.target.value),
										className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] bg-paper px-3 text-sm shadow-[var(--shadow-border)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "pro se" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "attorney" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "legal aid" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "clinic" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "court staff" })
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full",
										variant: "primary",
										children: "Save my seat"
									})
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
