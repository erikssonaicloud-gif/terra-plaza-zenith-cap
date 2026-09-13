import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteFooter, o as SiteHeader, p as formatUsd, t as Button, v as usePaladin } from "./site-header-DcpH-sfS.mjs";
import { i as Textarea, n as Input, r as Label } from "./field-CVw22rGd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/office-DTaI4L47.js
var import_jsx_runtime = require_jsx_runtime();
function OfficePage() {
	const license = usePaladin((s) => s.license);
	const invoices = usePaladin((s) => s.invoices);
	const leads = usePaladin((s) => s.leads);
	const office = usePaladin((s) => s.office);
	const setOffice = usePaladin((s) => s.setOffice);
	const plan = usePaladin((s) => s.plan());
	const roster = leads.map((l) => `${l.at.slice(0, 10)}\t${l.role}\t${l.email}`).join("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-12 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted",
						children: "Chambers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight",
						children: "Office"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-pretty text-muted",
						children: "The lead book and invoice pad live on this device. Fill in how you get paid. That is how Paladin makes money today — before a card processor exists."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[var(--radius-lg)] bg-paper p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl",
									children: "Pay-to"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "payto",
											children: "Payee name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "payto",
											className: "mt-1",
											value: office.payTo,
											onChange: (e) => setOffice({ payTo: e.target.value })
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "oem",
											children: "Collection email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "oem",
											type: "email",
											className: "mt-1",
											value: office.email,
											onChange: (e) => setOffice({ email: e.target.value })
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "zelle",
											children: "Zelle / Venmo / routing memo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "zelle",
											className: "mt-1",
											value: office.zelle,
											onChange: (e) => setOffice({ zelle: e.target.value })
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "notes",
											children: "Invoice footnote"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "notes",
											className: "mt-1 min-h-20",
											value: office.notes,
											onChange: (e) => setOffice({ notes: e.target.value })
										})] })
									]
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[var(--radius-lg)] bg-paper p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl",
										children: "License on this device"
									}),
									license ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-4 space-y-2 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Plan"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "uppercase tracking-wide",
													children: license.plan
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Key"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "font-mono text-xs",
													children: license.key
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Billed to"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: license.name })]
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-muted",
										children: "Riding Scout. Hire Paladin from the rate sheet when a client can pay."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-xs uppercase tracking-[0.14em] text-subtle",
										children: ["Current seat: ", plan]
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-8 rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-lg)] bg-paper p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Invoices"
							}), invoices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "None yet. Checkout writes them here."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 divide-y divide-border",
								children: invoices.map((inv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs",
											children: inv.number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											inv.plan,
											" · ",
											inv.interval
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: formatUsd(inv.amount)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "uppercase tracking-wide text-muted",
											children: inv.status
										})
									]
								}, inv.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-8 rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-lg)] bg-paper p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl",
									children: "Posse list"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									type: "button",
									onClick: () => navigator.clipboard.writeText(roster || "(empty)"),
									children: "Copy roster"
								})]
							}), leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "The waitlist on the front page writes names here."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: leads.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex flex-wrap justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.email }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: l.role
									})]
								}, l.id))
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { OfficePage as component };
