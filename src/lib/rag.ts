export interface RagChunk {
  id: string;
  title: string;
  source: string;
  text: string;
  tags: string[];
}

export const CORPUS: RagChunk[] = [
  {
    id: "utcr-2010",
    title: "UTCR 2.010 — Form of documents",
    source: "Oregon Uniform Trial Court Rules 2.010",
    tags: ["oregon", "pleading", "paper", "lines", "caption"],
    text: "Oregon UTCR 2.010 requires documents filed in circuit court to be on 8.5 by 11 inch paper with numbered lines, not more than 28 lines per page. The caption states the court, the title of the action, the register number, and a document title. Printing is to be double-spaced except for the caption, quoted material, footnotes, and similar matter. JustiTeX freezes a 28-line grid with a double left rule so the body tracks the numbers.",
  },
  {
    id: "orcp-71",
    title: "ORCP 71 — Relief from judgment",
    source: "Oregon Rules of Civil Procedure 71",
    tags: ["oregon", "void", "judgment", "jurisdiction", "relief"],
    text: "ORCP 71 B permits relief from a judgment for mistake, newly discovered evidence, fraud, or because the judgment is void. ORCP 71 B(1)(d) covers a void judgment. ORCP 71 C preserves the court's inherent power to set aside a judgment for fraud upon the court or because it is void. A void judgment may be attacked at any time; ordinary reasonableness clocks that constrain voidable judgments do not apply.",
  },
  {
    id: "bailey",
    title: "Bailey v. Vanderkloot — void judgments",
    source: "Oregon case law (void-judgment doctrine)",
    tags: ["oregon", "void", "jurisdiction", "nullity"],
    text: "Oregon courts treat a judgment entered without subject-matter jurisdiction as a legal nullity. It confers no rights, binds no one, and may be disregarded or vacated when the defect appears. Counsel should not cite a specific reporter page unless the source is in the file; state the doctrine and attach the judgment.",
  },
  {
    id: "ors-757",
    title: "ORS 757.760 — utility discontinuance",
    source: "Oregon Revised Statutes 757.760",
    tags: ["oregon", "utility", "water", "shutoff", "notice"],
    text: "Oregon law governing public utilities requires notice and process before residential service is discontinued for nonpayment. A municipal water shutoff without pre-deprivation notice or hearing can support claims for injunctive relief and, where state action is present, a due-process claim. Immediate irreparable harm is the loss of water for drinking, sanitation, and fire protection.",
  },
  {
    id: "1983",
    title: "42 U.S.C. § 1983 — state-action deprivation",
    source: "42 U.S.C. § 1983",
    tags: ["federal", "section 1983", "due process", "injunction"],
    text: "Section 1983 creates a civil action against a person who, under color of state law, deprives another of rights secured by the Constitution or federal law. Municipalities and municipal officials acting in official capacity are persons. A procedural-due-process claim requires a protected interest, a deprivation, and inadequate process. Injunctive relief is available to restore the status quo.",
  },
  {
    id: "injunction",
    title: "Preliminary injunction standard",
    source: "Winter / Oregon analogue",
    tags: ["injunction", "tro", "irreparable", "equity"],
    text: "A preliminary injunction generally requires likelihood of success on the merits, likelihood of irreparable harm in the absence of relief, a balance of equities tipping toward the movant, and that an injunction is in the public interest. A TRO is a short, sometimes ex parte, version of the same showing, with a certification of notice or why notice should not be required. Water, housing, and bodily safety are classic irreparable injuries.",
  },
  {
    id: "frcp-10",
    title: "FRCP 10 — caption and form",
    source: "Federal Rules of Civil Procedure 10",
    tags: ["federal", "caption", "pleading"],
    text: "Federal Rule 10 requires a caption with the court's name, a title including all parties in the complaint, a file number, and a Rule 7(a) designation. Paragraphs must be numbered. Claims are stated in numbered counts. Adopted exhibits are part of the pleading. JustiTeX keeps a 28-line numbered grid even in federal practice because many districts still expect it or tolerate it.",
  },
  {
    id: "orcp-47",
    title: "ORCP 47 — summary judgment",
    source: "Oregon Rules of Civil Procedure 47",
    tags: ["oregon", "summary judgment", "record"],
    text: "ORCP 47 allows judgment when there is no genuine issue of material fact and the movant is entitled to judgment as a matter of law. The opponent must produce evidence on any issue where they would bear the burden at trial. Affidavits are made on personal knowledge and attach sworn or certified copies of documents.",
  },
  {
    id: "caption-box",
    title: "Caption-box conventions",
    source: "JustiTeX frozen caption",
    tags: ["caption", "parties", "case number", "title"],
    text: "A JustiTeX caption is a two-column locked box. Left column: parties stacked, Plaintiff / Petitioner, v., Defendant / Respondent. Right column: Case No. on the first line, document title in small caps beneath. Court name sits above the box, centered, two lines. Signature blocks belong at the end of the last page, not in the caption.",
  },
  {
    id: "prose",
    title: "Pro se filings",
    source: "Access-to-justice practice notes",
    tags: ["pro se", "legal aid", "signature"],
    text: "A pro se litigant signs in their own name, adds 'Plaintiff, Pro Se' or equivalent, and prints a mailing address and telephone number under the signature. They do not use a bar number. Courts still require the same caption, line numbering, and service. PALADIN Scout is built so a person without counsel can still hand the clerk paper that looks like paper.",
  },
];

function tokenize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9§]+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

export function retrieve(query: string, k = 4): { chunk: RagChunk; score: number }[] {
  const q = tokenize(query);
  if (!q.length) return CORPUS.slice(0, k).map((chunk) => ({ chunk, score: 0 }));
  const scored = CORPUS.map((chunk) => {
    const hay = tokenize(`${chunk.title} ${chunk.tags.join(" ")} ${chunk.text}`);
    let score = 0;
    for (const t of q) {
      const hits = hay.filter((h) => h === t || h.includes(t) || t.includes(h)).length;
      const titleBoost = tokenize(chunk.title).includes(t) ? 3 : 0;
      const tagBoost = chunk.tags.some((tag) => tag.includes(t) || t.includes(tag)) ? 2 : 0;
      score += hits + titleBoost + tagBoost;
    }
    return { chunk, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

export function sourcesForPrompt(hits: { chunk: RagChunk; score: number }[]) {
  return hits
    .map(
      (h, i) =>
        `[S${i + 1}] ${h.chunk.title} (${h.chunk.source})\n${h.chunk.text}`,
    )
    .join("\n\n");
}
