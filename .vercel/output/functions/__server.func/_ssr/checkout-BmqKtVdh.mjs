import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$3 } from "./router-Ca7XTn_C.mjs";
import { _ as priceFor, a as SiteFooter, o as SiteHeader, p as formatUsd, r as PLANS, t as Button, v as usePaladin } from "./site-header-DcpH-sfS.mjs";
import { n as Input, r as Label } from "./field-CVw22rGd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BmqKtVdh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { plan, interval } = Route$3.useSearch();
	const spec = PLANS.find((p) => p.id === plan);
	const unlock = usePaladin((s) => s.unlock);
	const office = usePaladin((s) => s.office);
	const license = usePaladin((s) => s.license);
	const [name, setName] = (0, import_react.useState)(license?.name ?? "");
	const [email, setEmail] = (0, import_react.useState)(license?.email ?? "");
	const [firm, setFirm] = (0, import_react.useState)(license?.firm ?? "");
	const [done, setDone] = (0, import_react.useState)(null);
	const amount = priceFor(plan, interval);
	const mailto = (0, import_react.useMemo)(() => {
		if (!office.email || !done) return null;
		const subject = encodeURIComponent(`PALADIN invoice ${done}`);
		const body = encodeURIComponent(`Please find invoice ${done} for ${spec.name} (${interval}) — ${formatUsd(amount)}.\n\nPay to: ${office.payTo}\nZelle: ${office.zelle || "—"}\nMemo the invoice number.`);
		return `mailto:${office.email}?subject=${subject}&body=${body}`;
	}, [
		amount,
		done,
		interval,
		office.email,
		office.payTo,
		office.zelle,
		spec.name
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted",
						children: "Hire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight",
						children: [spec.name, " retainer"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-pretty text-muted",
						children: "This preview issues a local license the moment you confirm. Send the invoice however you actually get paid — Zelle, check, wire. Mark it in Office."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 space-y-4",
						onSubmit: (e) => {
							e.preventDefault();
							const inv = unlock({
								plan,
								name,
								email,
								firm,
								interval
							});
							setDone(inv.number);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "nm",
								children: "Your name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "nm",
								required: true,
								value: name,
								className: "mt-1",
								onChange: (e) => setName(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "em",
								children: "Email on the invoice"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "em",
								type: "email",
								required: true,
								value: email,
								className: "mt-1",
								onChange: (e) => setEmail(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "fm",
								children: "Firm / clinic (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "fm",
								value: firm,
								className: "mt-1",
								onChange: (e) => setFirm(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: interval === "month" ? "primary" : "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/checkout",
										search: {
											plan,
											interval: "month"
										},
										children: ["Monthly ", formatUsd(spec.monthly)]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: interval === "year" ? "primary" : "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/checkout",
										search: {
											plan,
											interval: "year"
										},
										children: ["Yearly ", formatUsd(spec.yearly)]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								variant: "terracotta",
								className: "w-full",
								size: "lg",
								children: ["Issue license · ", formatUsd(amount)]
							})
						]
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-[var(--radius-md)] bg-paper p-4 text-sm shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-lg",
								children: [
									"Invoice ",
									done,
									" is in the book."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted",
								children: [spec.name, " is unlocked on this device. Print from the studio. Copy a payment request from Office if you still need to collect."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/studio",
											children: "Open studio"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/office",
											children: "Office ledger"
										})
									}),
									mailto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										variant: "ghost",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: mailto,
											children: "Email invoice"
										})
									}) : null
								]
							})
						]
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "h-fit rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-lg)] bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.16em] text-muted",
								children: "On the paper"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: spec.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", f] }, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs leading-relaxed text-subtle",
								children: "Not a law firm. Not legal advice. Subscription is a software license for typesetting and retrieval. You still sign the pleading."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { CheckoutPage as component };
