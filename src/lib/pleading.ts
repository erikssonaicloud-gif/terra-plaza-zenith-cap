export type PlanId = "scout" | "paladin" | "posse";

export type JurisdictionId =
  | "or-circuit"
  | "or-appeals"
  | "d-or"
  | "ca9"
  | "ca-superior"
  | "wa-superior"
  | "federal";

export interface Jurisdiction {
  id: JurisdictionId;
  name: string;
  header: string;
  header2: string;
  minPlan: PlanId;
  captionNote: string;
}

export const JURISDICTIONS: Jurisdiction[] = [
  {
    id: "or-circuit",
    name: "Oregon Circuit Court",
    header: "IN THE CIRCUIT COURT OF THE STATE OF OREGON",
    header2: "FOR THE COUNTY OF CLACKAMAS",
    minPlan: "scout",
    captionNote: "UTCR 2.010 28-line pleading paper",
  },
  {
    id: "or-appeals",
    name: "Oregon Court of Appeals",
    header: "IN THE COURT OF APPEALS OF THE STATE OF OREGON",
    header2: "",
    minPlan: "paladin",
    captionNote: "ORAP caption + UTCR grid",
  },
  {
    id: "d-or",
    name: "U.S. District Court, District of Oregon",
    header: "IN THE UNITED STATES DISTRICT COURT",
    header2: "FOR THE DISTRICT OF OREGON",
    minPlan: "paladin",
    captionNote: "FRCP 10 caption on 28-line paper",
  },
  {
    id: "ca9",
    name: "U.S. Court of Appeals, Ninth Circuit",
    header: "IN THE UNITED STATES COURT OF APPEALS",
    header2: "FOR THE NINTH CIRCUIT",
    minPlan: "paladin",
    captionNote: "Circuit caption, JustiTeX grid",
  },
  {
    id: "ca-superior",
    name: "California Superior Court",
    header: "SUPERIOR COURT OF THE STATE OF CALIFORNIA",
    header2: "COUNTY OF LOS ANGELES",
    minPlan: "paladin",
    captionNote: "CRC pleading paper, 28 numbered lines",
  },
  {
    id: "wa-superior",
    name: "Washington Superior Court",
    header: "IN THE SUPERIOR COURT OF THE STATE OF WASHINGTON",
    header2: "IN AND FOR THE COUNTY OF KING",
    minPlan: "paladin",
    captionNote: "Washington pleading format",
  },
  {
    id: "federal",
    name: "Federal (generic district)",
    header: "IN THE UNITED STATES DISTRICT COURT",
    header2: "FOR THE DISTRICT OF ________",
    minPlan: "paladin",
    captionNote: "FRCP 7 / 10",
  },
];

export interface Pleading {
  id: string;
  jurisdictionId: JurisdictionId;
  county: string;
  plaintiffs: string;
  defendants: string;
  caseNo: string;
  title: string;
  body: string;
  dated: string;
  signName: string;
  signRole: string;
  letterhead: string;
  batesPrefix: string;
  updatedAt: string;
}

export interface Template {
  id: string;
  name: string;
  blurb: string;
  minPlan: PlanId;
  title: string;
  body: string;
}

export const TEMPLATES: Template[] = [
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

C. Grant such other relief as is just and proper.`,
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

I declare under penalty of perjury under the laws of the State of Oregon that the foregoing is true and correct.`,
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

For the foregoing reasons, Plaintiff respectfully requests that this Court vacate the judgment and grant such other relief as is just and proper.`,
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

The Court should enter judgment for Plaintiff and grant such other relief as is just and proper.`,
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

The complaint should be dismissed, with / without leave to amend.`,
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

Plaintiff requests that any security be set at a nominal amount because [reason].`,
  },
  {
    id: "appeal",
    name: "Notice of appeal",
    blurb: "Preserve the record. File on time.",
    minPlan: "paladin",
    title: "NOTICE OF APPEAL",
    body: `Plaintiff / Appellant hereby appeals to the [Oregon Court of Appeals / United States Court of Appeals for the Ninth Circuit] from the [Limited / General] Judgment entered on [date].

The judgment is [attached / designated]. Appellant designates the entire trial-court file as the record on appeal.

This notice is timely filed.`,
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

This letter is not a complete statement of my claims or waivers.`,
  },
];

export const SAMPLE_PLEADING: Omit<Pleading, "id" | "updatedAt"> = {
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
  batesPrefix: "",
};

export function newId() {
  return crypto.randomUUID();
}

export function planRank(plan: PlanId) {
  return plan === "posse" ? 2 : plan === "paladin" ? 1 : 0;
}

export function canUse(minPlan: PlanId, plan: PlanId) {
  return planRank(plan) >= planRank(minPlan);
}

export function headerFor(p: Pleading, j: Jurisdiction) {
  const line2 =
    j.id === "or-circuit"
      ? `FOR THE COUNTY OF ${p.county.trim().toUpperCase() || "CLACKAMAS"}`
      : j.header2;
  return { line1: j.header, line2 };
}

export function wrapLine(text: string, width = 72): string[] {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) return [""];
  const words = cleaned.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > width && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = next;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

export interface LaidPage {
  page: number;
  total: number;
  kind: "first" | "cont";
  bodyLines: string[];
}

function bodyToLines(body: string): string[] {
  const lines: string[] = [];
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

export function layoutPages(p: Pleading): { captionLines: number; pages: LaidPage[] } {
  const body = bodyToLines(p.body);
  const signature = [
    "",
    `DATED this ${p.dated}.`,
    "",
    "Respectfully submitted,",
    "",
    `/s/ ${p.signName}`,
    p.signName.toUpperCase(),
    p.signRole,
  ];
  const all = [...body, ...signature];
  const firstCapacity = 16;
  const contCapacity = 26;
  const pages: LaidPage[] = [];
  let offset = 0;
  let page = 1;
  const first = all.slice(0, firstCapacity);
  offset = first.length;
  pages.push({ page, total: 0, kind: "first", bodyLines: first });
  page += 1;
  while (offset < all.length) {
    pages.push({
      page,
      total: 0,
      kind: "cont",
      bodyLines: all.slice(offset, offset + contCapacity),
    });
    offset += contCapacity;
    page += 1;
  }
  const total = pages.length;
  return { captionLines: 9, pages: pages.map((pg) => ({ ...pg, total })) };
}

export function applyTemplate(t: Template, current: Pleading): Pleading {
  return {
    ...current,
    title: t.title,
    body: t.body,
    updatedAt: new Date().toISOString(),
  };
}

export function applyMarkdownDraft(p: Pleading, md: string): Pleading {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let title = p.title;
  let caseNo = p.caseNo;
  const bodyLines: string[] = [];
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
    if (inBody && !/^respectfully/i.test(t) && !t.startsWith("/s/")) {
      bodyLines.push(line);
    }
  }

  const body = bodyLines.join("\n").trim() || p.body;
  return {
    ...p,
    title,
    caseNo,
    body,
    signName,
    dated,
    updatedAt: new Date().toISOString(),
  };
}
