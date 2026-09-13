import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as cn } from "./site-header-DcpH-sfS.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("block text-[11px] font-medium uppercase tracking-[0.14em] text-muted", className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-[var(--radius-sm)] bg-paper px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-teal/40", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-[var(--radius-sm)] bg-paper px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-teal/40", className),
		...props
	});
}
function Badge({ className, tone = "teal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em]", {
			teal: "bg-teal text-teal-fg",
			terracotta: "bg-terracotta text-terracotta-fg",
			paper: "bg-paper text-ink shadow-[var(--shadow-border)]"
		}[tone], className),
		...props
	});
}
//#endregion
export { Textarea as i, Input as n, Label as r, Badge as t };
