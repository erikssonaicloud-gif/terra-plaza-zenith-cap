import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteFooter, o as SiteHeader, p as formatUsd, r as PLANS, t as Button, v as usePaladin } from "./site-header-DcpH-sfS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-CQJFJByY.js
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	const current = usePaladin((s) => s.plan());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted",
						children: "The rate sheet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight",
						children: "Cash on the barrel. Paper on the docket."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-pretty text-muted",
						children: "No card processor on this preview. Generate an invoice, send it, mark it paid, and the license unlocks on this device. After you publish, Stripe can ride shotgun."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 lg:grid-cols-3",
						children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[var(--radius-lg)] bg-paper p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.16em] text-muted",
										children: p.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
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
									p.yearly > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											"or ",
											formatUsd(p.yearly),
											" / year (two months standing down)"
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: p.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-1.5 text-sm",
										children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", f] }, f))
									}),
									p.id === "scout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-6 w-full",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/studio",
											children: current === "scout" ? "Stay on Scout" : "Open studio"
										})
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-6 w-full",
										variant: p.id === "paladin" ? "terracotta" : "primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/checkout",
											search: {
												plan: p.id === "posse" ? "posse" : "paladin",
												interval: "month"
											},
											children: current === p.id ? "Already hired" : p.cta
										})
									})
								]
							})
						}, p.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PricingPage as component };
