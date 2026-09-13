import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-DcpH-sfS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function KnightMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "4",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 24h16v1.5H8V24zm2.2-2.2c.4-3.2 1.4-5.4 3.2-7.1-.8.2-1.7.3-2.6.2 1.3-1.8 3.2-3 5.5-4.1-.9.9-1.3 1.8-1.2 2.8 2.4-1.1 4.4-1.3 6.4-.4-1.5.2-2.6.8-3.3 1.7 2.1.2 3.6 1.3 4.4 3.1-1.6-.4-2.9-.3-3.8.3 1.6 1.4 2.4 3.1 2.6 5.5H10.2z",
			fill: "var(--color-bg)"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color] duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-teal text-teal-fg shadow-[var(--shadow-border)] hover:bg-teal-deep active:scale-[0.98]",
			terracotta: "bg-terracotta text-terracotta-fg shadow-[var(--shadow-border)] hover:bg-terracotta-deep active:scale-[0.98]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-bg-deep/60",
			paper: "bg-paper text-ink shadow-[var(--shadow-border)] hover:bg-bg-elevated"
		},
		size: {
			sm: "h-9 rounded-[var(--radius-sm)] px-3 text-sm",
			md: "h-11 rounded-[var(--radius-md)] px-4 text-sm",
			lg: "h-12 rounded-[var(--radius-md)] px-5 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var JURISDICTIONS = [
	{
		id: "or-circuit",
		name: "Oregon Circuit Court",
		header: "IN THE CIRCUIT COURT OF THE STATE OF OREGON",
		header2: "FOR THE COUNTY OF CLACKAMAS",
		minPlan: "scout",
		captionNote: "UTCR 2.010 28-line pleading paper"
	},
	{
		id: "or-appeals",
		name: "Oregon Court of Appeals",
		header: "IN THE COURT OF APPEALS OF THE STATE OF OREGON",
		header2: "",
		minPlan: "paladin",
		captionNote: "ORAP caption + UTCR grid"
	},
	{
		id: "d-or",
		name: "U.S. District Court, District of Oregon",
		header: "IN THE UNITED STATES DISTRICT COURT",
		header2: "FOR THE DISTRICT OF OREGON",
		minPlan: "paladin",
		captionNote: "FRCP 10 caption on 28-line paper"
	},
	{
		id: "ca9",
		name: "U.S. Court of Appeals, Ninth Circuit",
		header: "IN THE UNITED STATES COURT OF APPEALS",
		header2: "FOR THE NINTH CIRCUIT",
		minPlan: "paladin",
		captionNote: "Circuit caption, JustiTeX grid"
	},
	{
		id: "ca-superior",
		name: "California Superior Court",
		header: "SUPERIOR COURT OF THE STATE OF CALIFORNIA",
		header2: "COUNTY OF LOS ANGELES",
		minPlan: "paladin",
		captionNote: "CRC pleading paper, 28 numbered lines"
	},
	{
		id: "wa-superior",
		name: "Washington Superior Court",
		header: "IN THE SUPERIOR COURT OF THE STATE OF WASHINGTON",
		header2: "IN AND FOR THE COUNTY OF KING",
		minPlan: "paladin",
		captionNote: "Washington pleading format"
	},
	{
		id: "federal",
		name: "Federal (generic district)",
		header: "IN THE UNITED STATES DISTRICT COURT",
		header2: "FOR THE DISTRICT OF ________",
		minPlan: "paladin",
		captionNote: "FRCP 7 / 10"
	}
];
var TEMPLATES = [
	{
		id: "emergency-injunction",
		name: "Emergency injunctive relief",
		blurb: "Restore a status quo before the hearing.",
		minPlan: "scout",
		title: "MOTION FOR EMERGENCY INJUNCTIVE RELIEF",
		body: `## I. INTRODUCTION

Plaintiff moves this Court for an emergency order restoring the status quo and enjoining Defendant from the conduct described below.

## II. FACTS

1. Plaintiff is a resident of the county named in the caption.

2. On [date], Defendant [act] without prior notice or hearing.

3. Plaintiff has no adequate remedy at law. Immediate and irreparable injury will result unless this Court acts.

## III. ARGUMENT

A moving party is entitled to a preliminary injunction upon a showing of likelihood of success, irreparable harm, a balance of equities, and the public interest. The denial of an essential public service without pre-deprivation process is a classic irreparable injury.

## IV. REQUEST FOR RELIEF

WHEREFORE, Plaintiff respectfully requests that this Court:

A. Enter an emergency order restoring the status quo;

B. Set a prompt hearing on a preliminary injunction; and

C. Grant such other relief as is just and proper.`
	},
	{
		id: "declaration",
		name: "Declaration",
		blurb: "First-person facts under penalty of perjury.",
		minPlan: "scout",
		title: "DECLARATION OF [NAME] IN SUPPORT OF MOTION",
		body: `I, [Name], declare:

1. I am the Plaintiff in this action. I have personal knowledge of the facts set forth herein and could testify competently thereto if called.

2. [Fact.]

3. [Fact.]

4. Attached as Exhibit A is a true and correct copy of [document].

I declare under penalty of perjury under the laws of the State of Oregon that the foregoing is true and correct.`
	},
	{
		id: "orcp-71",
		name: "ORCP 71 — set aside void judgment",
		blurb: "Attack a judgment entered without jurisdiction.",
		minPlan: "paladin",
		title: "MOTION TO SET ASIDE VOID JUDGMENT",
		body: `## I. INTRODUCTION

Plaintiff moves this Court for an order setting aside the judgment entered herein pursuant to ORCP 71 B(1)(d) and ORCP 71 C.

As set forth below, the judgment is void ab initio for lack of subject-matter jurisdiction and may be challenged at any time.

## II. ARGUMENT

Under Oregon law, a judgment entered without subject-matter jurisdiction is a legal nullity. A void judgment may be set aside without regard to the ordinary time limits that constrain motions for relief from a merely voidable judgment.

1. [Identify the jurisdictional defect.]

2. [Identify the date the judgment was entered and why it could not confer power.]

3. Because the judgment is void, this Court retains inherent authority to vacate it.

## III. CONCLUSION

For the foregoing reasons, Plaintiff respectfully requests that this Court vacate the judgment and grant such other relief as is just and proper.`
	},
	{
		id: "msj",
		name: "Motion for summary judgment",
		blurb: "No genuine issue of material fact.",
		minPlan: "paladin",
		title: "MOTION FOR SUMMARY JUDGMENT",
		body: `## I. INTRODUCTION

Plaintiff moves for summary judgment pursuant to ORCP 47. There is no genuine issue of material fact, and Plaintiff is entitled to judgment as a matter of law.

## II. STATEMENT OF UNDISPUTED FACTS

1. [Undisputed fact, with record cite.]

2. [Undisputed fact, with record cite.]

## III. ARGUMENT

Summary judgment is proper when the pleadings, depositions, and affidavits show that there is no genuine issue as to any material fact. The opposing party may not rest on the allegations of the pleadings.

## IV. CONCLUSION

The Court should enter judgment for Plaintiff and grant such other relief as is just and proper.`
	},
	{
		id: "mtd",
		name: "Motion to dismiss",
		blurb: "Failure to state a claim, or want of jurisdiction.",
		minPlan: "paladin",
		title: "MOTION TO DISMISS",
		body: `## I. INTRODUCTION

Defendant moves to dismiss the complaint for [lack of subject-matter jurisdiction / failure to state a claim].

## II. ARGUMENT

1. [Ground one.]

2. [Ground two.]

A complaint must allege facts which, if true, would entitle the pleader to relief. Legal conclusions dressed as facts do not suffice.

## III. CONCLUSION

The complaint should be dismissed, with / without leave to amend.`
	},
	{
		id: "tro",
		name: "Temporary restraining order",
		blurb: "Ex parte hold while the motion is noticed.",
		minPlan: "paladin",
		title: "MOTION FOR TEMPORARY RESTRAINING ORDER",
		body: `## I. INTRODUCTION

Plaintiff moves for a temporary restraining order to preserve the status quo until a hearing can be held.

## II. CERTIFICATION OF NOTICE

Counsel / Plaintiff [did / did not] give notice to the opposing party because [reason]. Immediate and irreparable injury will result before the opposing party can be heard.

## III. ARGUMENT

The same four-factor test that governs preliminary injunctions applies with greater urgency. The requested order is narrow, time-limited, and keyed to specific conduct.

## IV. BOND

Plaintiff requests that any security be set at a nominal amount because [reason].`
	},
	{
		id: "appeal",
		name: "Notice of appeal",
		blurb: "Preserve the record. File on time.",
		minPlan: "paladin",
		title: "NOTICE OF APPEAL",
		body: `Plaintiff / Appellant hereby appeals to the [Oregon Court of Appeals / United States Court of Appeals for the Ninth Circuit] from the [Limited / General] Judgment entered on [date].

The judgment is [attached / designated]. Appellant designates the entire trial-court file as the record on appeal.

This notice is timely filed.`
	},
	{
		id: "demand",
		name: "Pre-suit demand",
		blurb: "A letter that still looks like it belongs in a file.",
		minPlan: "paladin",
		title: "DEMAND LETTER",
		body: `## Re: [Matter]

I write concerning [matter]. The facts, in brief:

1. [Fact.]

2. [Fact.]

Demand is hereby made that you [specific act] within fourteen (14) days of this letter. If you fail to do so I will pursue all available remedies, including costs and fees where authorized.

This letter is not a complete statement of my claims or waivers.`
	}
];
var SAMPLE_PLEADING = {
	jurisdictionId: "or-circuit",
	county: "CLACKAMAS",
	plaintiffs: "RIVERA HOLDINGS LLC",
	defendants: "MILLTOWN WATER DISTRICT",
	caseNo: "24CV21417",
	title: "MOTION FOR EMERGENCY INJUNCTIVE RELIEF",
	body: `## I. INTRODUCTION

Plaintiff moves this Court for an emergency order restoring municipal water service to 12054 Chapin Court, Oregon City.

## II. FACTS

1. Plaintiff is the occupant of the property and has paid or tendered all lawfully due charges.

2. On June 25, 2024, Defendant disconnected municipal water service without a pre-deprivation hearing.

3. Water is an essential public service. The shutoff has left the household without sanitation, cooking water, or fire protection.

## III. ARGUMENT

Under ORS 757.760 and 42 U.S.C. § 1983, the unconstitutional denial of essential public utility service constitutes immediate irreparable harm. Likelihood of success, the balance of equities, and the public interest all favor restoration pending a hearing.

## IV. REQUEST FOR RELIEF

WHEREFORE, Plaintiff respectfully requests that this Court restore service forthwith, set a prompt hearing, and grant such other relief as is just and proper.`,
	dated: "September 5, 2026",
	signName: "M. Rivera",
	signRole: "Plaintiff, Pro Se",
	letterhead: "",
	batesPrefix: ""
};
function newId() {
	return crypto.randomUUID();
}
function planRank(plan) {
	return plan === "posse" ? 2 : plan === "paladin" ? 1 : 0;
}
function canUse(minPlan, plan) {
	return planRank(plan) >= planRank(minPlan);
}
function headerFor(p, j) {
	const line2 = j.id === "or-circuit" ? `FOR THE COUNTY OF ${p.county.trim().toUpperCase() || "CLACKAMAS"}` : j.header2;
	return {
		line1: j.header,
		line2
	};
}
function wrapLine(text, width = 72) {
	const cleaned = text.replace(/\s+/g, " ").trim();
	if (!cleaned) return [""];
	const words = cleaned.split(" ");
	const lines = [];
	let cur = "";
	for (const w of words) {
		const next = cur ? `${cur} ${w}` : w;
		if (next.length > width && cur) {
			lines.push(cur);
			cur = w;
		} else cur = next;
	}
	if (cur) lines.push(cur);
	return lines;
}
function bodyToLines(body) {
	const lines = [];
	const blocks = body.replace(/\r\n/g, "\n").split(/\n\n+/);
	for (const block of blocks) {
		const raw = block.trim();
		if (!raw) continue;
		if (raw.startsWith("## ")) {
			if (lines.length) lines.push("");
			lines.push(raw.replace(/^##\s+/, "").toUpperCase());
			lines.push("");
			continue;
		}
		for (const para of raw.split("\n")) {
			const t = para.trim();
			if (!t) {
				lines.push("");
				continue;
			}
			const wrapped = wrapLine(t, 70);
			lines.push(...wrapped);
			lines.push("");
		}
	}
	while (lines.length && lines[lines.length - 1] === "") lines.pop();
	return lines;
}
function layoutPages(p) {
	const body = bodyToLines(p.body);
	const signature = [
		"",
		`DATED this ${p.dated}.`,
		"",
		"Respectfully submitted,",
		"",
		`/s/ ${p.signName}`,
		p.signName.toUpperCase(),
		p.signRole
	];
	const all = [...body, ...signature];
	const firstCapacity = 16;
	const contCapacity = 26;
	const pages = [];
	let offset = 0;
	let page = 1;
	const first = all.slice(0, firstCapacity);
	offset = first.length;
	pages.push({
		page,
		total: 0,
		kind: "first",
		bodyLines: first
	});
	page += 1;
	while (offset < all.length) {
		pages.push({
			page,
			total: 0,
			kind: "cont",
			bodyLines: all.slice(offset, offset + contCapacity)
		});
		offset += contCapacity;
		page += 1;
	}
	const total = pages.length;
	return {
		captionLines: 9,
		pages: pages.map((pg) => ({
			...pg,
			total
		}))
	};
}
function applyTemplate(t, current) {
	return {
		...current,
		title: t.title,
		body: t.body,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function applyMarkdownDraft(p, md) {
	const lines = md.replace(/\r\n/g, "\n").split("\n");
	let title = p.title;
	let caseNo = p.caseNo;
	const bodyLines = [];
	let inBody = false;
	let signName = p.signName;
	let dated = p.dated;
	for (const line of lines) {
		const t = line.trim();
		if (/^case\s*no\.?/i.test(t)) {
			caseNo = t.replace(/^case\s*no\.?\s*/i, "").trim() || caseNo;
			inBody = true;
			continue;
		}
		if (t.startsWith("## ")) {
			if (!inBody && t.length > 4) title = t.replace(/^##\s+/, "");
			else bodyLines.push(t);
			inBody = true;
			continue;
		}
		if (/^dated/i.test(t)) {
			dated = t.replace(/^dated( this)?/i, "").replace(/\.$/, "").trim() || dated;
			continue;
		}
		if (t.startsWith("/s/")) {
			signName = t.replace(/^\/s\/\s*/, "") || signName;
			continue;
		}
		if (!inBody && t && !t.startsWith("#")) continue;
		if (inBody && !/^respectfully/i.test(t) && !t.startsWith("/s/")) bodyLines.push(line);
	}
	const body = bodyLines.join("\n").trim() || p.body;
	return {
		...p,
		title,
		caseNo,
		body,
		signName,
		dated,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
var PLANS = [
	{
		id: "scout",
		name: "Scout",
		kicker: "Rides free",
		monthly: 0,
		yearly: 0,
		blurb: "One live pleading on Oregon circuit paper. Enough to file. Not enough to hide in.",
		features: [
			"1 active pleading",
			"Oregon Circuit Court grid",
			"2 templates (injunction + declaration)",
			"1 Paladin draft as a trial shot",
			"Scout footer on the page"
		],
		cta: "Ride Scout free"
	},
	{
		id: "paladin",
		name: "Paladin",
		kicker: "Have brief — will gavel",
		monthly: 29,
		yearly: 290,
		blurb: "The hired gun. Unlimited paper, twelve courts, grounded drafts, clean footer.",
		features: [
			"Unlimited pleadings",
			"7 jurisdictions",
			"Full template rack",
			"hyperRAG over the authorities pack",
			"40 Paladin drafts / month",
			"Print-ready pages, no Scout mark"
		],
		cta: "Hire Paladin"
	},
	{
		id: "posse",
		name: "Posse",
		kicker: "Holds the town",
		monthly: 99,
		yearly: 990,
		blurb: "Chambers pack for a clinic or a small firm. Letterhead, Bates, invoices you can send today.",
		features: [
			"Everything in Paladin",
			"Firm letterhead on page one",
			"Bates prefixes",
			"Invoice pad for your own clients",
			"Waitlist + lead book",
			"Five-seat honor system"
		],
		cta: "Raise a Posse"
	}
];
function priceFor(plan, interval) {
	const p = PLANS.find((x) => x.id === plan);
	return interval === "year" ? p.yearly : p.monthly;
}
function formatUsd(n) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(n);
}
function makeLicenseKey(plan) {
	const chunk = () => Math.random().toString(36).slice(2, 6).toUpperCase();
	return `PAL-${plan.slice(0, 3).toUpperCase()}-${chunk()}-${chunk()}`;
}
function makeInvoiceNumber() {
	return `PAL-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function monthKey() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function sampleDoc() {
	return {
		id: "sample-rivera",
		updatedAt: "2026-09-05T00:00:00.000Z",
		...SAMPLE_PLEADING
	};
}
var usePaladin = create()(persist((set, get) => ({
	license: null,
	docs: [sampleDoc()],
	activeId: "sample-rivera",
	invoices: [],
	leads: [],
	office: {
		payTo: "Annika Eriksson / PALADIN",
		email: "",
		zelle: "",
		notes: "Memo the invoice number on the transfer."
	},
	usage: {
		monthKey: monthKey(),
		aiDrafts: 0
	},
	hydrateSample: () => {
		if (get().docs.length) return;
		const doc = sampleDoc();
		set({
			docs: [doc],
			activeId: doc.id
		});
	},
	setActive: (id) => set({ activeId: id }),
	updateActive: (patch) => {
		const { docs, activeId } = get();
		set({ docs: docs.map((d) => d.id === activeId ? {
			...d,
			...patch,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d) });
	},
	addDoc: () => {
		if (get().plan() === "scout" && get().docs.length >= 1) return;
		const doc = {
			...sampleDoc(),
			id: newId(),
			title: "DRAFT PLEADING",
			body: "1. ",
			caseNo: "UNASSIGNED",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({
			docs: [...get().docs, doc],
			activeId: doc.id
		});
	},
	removeDoc: (id) => {
		const docs = get().docs.filter((d) => d.id !== id);
		set({
			docs,
			activeId: docs[0]?.id ?? ""
		});
	},
	unlock: ({ plan, name, email, firm, interval }) => {
		const invoice = {
			id: newId(),
			number: makeInvoiceNumber(),
			plan,
			interval,
			amount: priceFor(plan, interval),
			name,
			email,
			firm,
			status: "paid",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({
			license: {
				plan,
				name,
				email,
				firm,
				key: makeLicenseKey(plan),
				interval,
				issuedAt: (/* @__PURE__ */ new Date()).toISOString()
			},
			invoices: [invoice, ...get().invoices]
		});
		return invoice;
	},
	markPaid: (id) => set({ invoices: get().invoices.map((inv) => inv.id === id ? {
		...inv,
		status: "paid"
	} : inv) }),
	addLead: (email, role) => {
		const lead = {
			id: newId(),
			email: email.trim().toLowerCase(),
			role,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (get().leads.some((l) => l.email === lead.email)) return;
		set({ leads: [lead, ...get().leads] });
	},
	setOffice: (patch) => set({ office: {
		...get().office,
		...patch
	} }),
	consumeAi: () => {
		const mk = monthKey();
		let { usage } = get();
		if (usage.monthKey !== mk) usage = {
			monthKey: mk,
			aiDrafts: 0
		};
		const plan = get().plan();
		const cap = plan === "scout" ? 1 : plan === "paladin" ? 40 : 80;
		if (usage.aiDrafts >= cap) {
			set({ usage });
			return {
				ok: false,
				reason: plan === "scout" ? "Scout includes one Paladin draft. Hire Paladin for a monthly rack of forty." : "Monthly draft allotment is spent. It resets on the first."
			};
		}
		set({ usage: {
			...usage,
			aiDrafts: usage.aiDrafts + 1
		} });
		return { ok: true };
	},
	remainingAi: () => {
		const mk = monthKey();
		const { usage } = get();
		const used = usage.monthKey === mk ? usage.aiDrafts : 0;
		const plan = get().plan();
		return Math.max(0, (plan === "scout" ? 1 : plan === "paladin" ? 40 : 80) - used);
	},
	plan: () => get().license?.plan ?? "scout"
}), { name: "paladin-office-v1" }));
function activeDoc(state) {
	return state.docs.find((d) => d.id === state.activeId) ?? state.docs[0];
}
function jurisdictionLocked(id, plan) {
	if (id === "or-circuit") return false;
	return plan === "scout";
}
var NAV = [
	{
		to: "/",
		label: "The brief"
	},
	{
		to: "/studio",
		label: "Studio"
	},
	{
		to: "/pricing",
		label: "Rates"
	},
	{
		to: "/office",
		label: "Office"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const plan = usePaladin((s) => s.plan());
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "no-print sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnightMark, { className: "size-8 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "PALADIN"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: cn("text-sm tracking-wide text-muted transition-colors hover:text-fg", pathname === n.to && "text-fg"),
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.16em] text-muted",
						children: plan
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: plan === "scout" ? "terracotta" : "primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: plan === "scout" ? "/pricing" : "/studio",
							children: plan === "scout" ? "Hire Paladin" : "Open studio"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative size-11 md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "mx-auto size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg-elevated px-4 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-[var(--radius-sm)] px-3 py-3 text-base text-fg hover:bg-bg-deep/50",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2",
					variant: "terracotta",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						onClick: () => setOpen(false),
						children: "Hire Paladin"
					})
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "no-print border-t border-border bg-bg-elevated/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base text-fg",
				children: "PALADIN"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-md text-pretty",
				children: "Typesetting and retrieval. Not a law firm. Not legal advice. Not a substitute for counsel. The clerk still has to take the paper."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.14em]",
				children: "JustiTeX · hyperRAG · P.A.L.A.D.I.N."
			})]
		})
	});
}
//#endregion
export { priceFor as _, SiteFooter as a, activeDoc as c, canUse as d, cn as f, layoutPages as g, jurisdictionLocked as h, SAMPLE_PLEADING as i, applyMarkdownDraft as l, headerFor as m, JURISDICTIONS as n, SiteHeader as o, formatUsd as p, PLANS as r, TEMPLATES as s, Button as t, applyTemplate as u, usePaladin as v };
