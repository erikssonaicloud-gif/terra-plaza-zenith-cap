import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Plus, Printer, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PleadingPaper } from "@/components/pleading-paper";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { draftPleading } from "@/lib/draft";
import {
  JURISDICTIONS,
  SAMPLE_PLEADING,
  TEMPLATES,
  applyMarkdownDraft,
  applyTemplate,
  canUse,
  type JurisdictionId,
} from "@/lib/pleading";
import { retrieve, sourcesForPrompt } from "@/lib/rag";
import { activeDoc, jurisdictionLocked, usePaladin } from "@/lib/store";

export const Route = createFileRoute("/studio")({ component: StudioPage });

function StudioPage() {
  const store = usePaladin();
  const plan = store.plan();
  const doc = activeDoc(store) ?? {
    id: "sample",
    updatedAt: "",
    ...SAMPLE_PLEADING,
  };
  const [tab, setTab] = useState<"compose" | "paper">("compose");
  const [facts, setFacts] = useState(
    "Water shutoff on June 25, 2024 at 12054 Chapin Court without a hearing. Need emergency restoration under Oregon utility rules and due process.",
  );
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [hits, setHits] = useState(() => retrieve(facts));

  useEffect(() => {
    usePaladin.getState().hydrateSample();
  }, []);

  const remaining = store.remainingAi();

  const query = useMemo(
    () => `${doc?.title ?? ""} ${doc?.body ?? ""} ${facts}`,
    [doc?.title, doc?.body, facts],
  );

  useEffect(() => {
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
      const j = JURISDICTIONS.find((x) => x.id === doc.jurisdictionId)!;
      const res = await draftPleading({
        data: {
          facts,
          jurisdiction: j.name,
          title: doc.title,
          parties: `${doc.plaintiffs} v. ${doc.defendants}`,
          caseNo: doc.caseNo,
          sources: sourcesForPrompt(hits),
        },
      });
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

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Studio · {plan} · {remaining} draft{remaining === 1 ? "" : "s"} left
            </p>
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              28-line compositor
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              type="button"
              onClick={() => store.addDoc()}
              disabled={plan === "scout" && store.docs.length >= 1}
            >
              <Plus />
              New
            </Button>
            <Button size="sm" variant="paper" type="button" onClick={() => window.print()}>
              <Printer />
              Print / PDF
            </Button>
            <Button size="sm" variant="terracotta" type="button" disabled={busy} onClick={onDraft}>
              <Sparkles />
              {busy ? "Drafting…" : "Draft with Paladin"}
            </Button>
          </div>
        </div>

        {notice ? (
          <p className="mt-4 rounded-[var(--radius-md)] bg-paper px-4 py-3 text-sm shadow-[var(--shadow-border)]">
            {notice}{" "}
            {plan === "scout" ? (
              <Link to="/pricing" className="text-terracotta underline-offset-2 hover:underline">
                See rates
              </Link>
            ) : null}
          </p>
        ) : null}

        <div className="mt-4 flex gap-2 md:hidden">
          <Button
            size="sm"
            variant={tab === "compose" ? "primary" : "outline"}
            onClick={() => setTab("compose")}
          >
            Compose
          </Button>
          <Button
            size="sm"
            variant={tab === "paper" ? "primary" : "outline"}
            onClick={() => setTab("paper")}
          >
            Paper
          </Button>
        </div>

        <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <section className={tab === "paper" ? "hidden lg:block" : ""}>
            <div className="space-y-4 rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
              <div className="rounded-[var(--radius-lg)] bg-paper p-4">
                <Label htmlFor="tpl">Template</Label>
                <div className="mt-2 grid gap-2">
                  {TEMPLATES.map((t) => {
                    const locked = !canUse(t.minPlan, plan);
                    return (
                      <button
                        key={t.id}
                        type="button"
                        disabled={locked}
                        onClick={() => store.updateActive(applyTemplate(t, doc))}
                        className="flex items-start justify-between gap-2 rounded-[var(--radius-sm)] px-3 py-2 text-left text-sm shadow-[var(--shadow-border)] hover:bg-bg-elevated disabled:opacity-50"
                      >
                        <span>
                          <span className="block font-medium">{t.name}</span>
                          <span className="block text-xs text-muted">{t.blurb}</span>
                        </span>
                        {locked ? <Lock className="mt-0.5 size-3.5 text-muted" /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 rounded-[var(--radius-lg)] bg-paper p-4">
                <div>
                  <Label htmlFor="jur">Court</Label>
                  <select
                    id="jur"
                    className="mt-1 h-11 w-full rounded-[var(--radius-sm)] bg-bg-elevated px-3 text-sm shadow-[var(--shadow-border)]"
                    value={doc.jurisdictionId}
                    onChange={(e) => {
                      const id = e.target.value as JurisdictionId;
                      if (jurisdictionLocked(id, plan)) {
                        setNotice("Other courts ride with Paladin.");
                        return;
                      }
                      store.updateActive({ jurisdictionId: id });
                    }}
                  >
                    {JURISDICTIONS.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.name}
                        {j.minPlan !== "scout" ? " · Paladin" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="county">County (Oregon circuit)</Label>
                  <Input
                    id="county"
                    className="mt-1"
                    value={doc.county}
                    onChange={(e) => store.updateActive({ county: e.target.value.toUpperCase() })}
                  />
                </div>
                <div>
                  <Label htmlFor="pl">Plaintiff / Petitioner</Label>
                  <Input
                    id="pl"
                    className="mt-1"
                    value={doc.plaintiffs}
                    onChange={(e) => store.updateActive({ plaintiffs: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="df">Defendant / Respondent</Label>
                  <Input
                    id="df"
                    className="mt-1"
                    value={doc.defendants}
                    onChange={(e) => store.updateActive({ defendants: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="cn">Case no.</Label>
                  <Input
                    id="cn"
                    className="mt-1"
                    value={doc.caseNo}
                    onChange={(e) => store.updateActive({ caseNo: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="tt">Document title</Label>
                  <Input
                    id="tt"
                    className="mt-1"
                    value={doc.title}
                    onChange={(e) => store.updateActive({ title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="body">Body (markdown)</Label>
                  <Textarea
                    id="body"
                    className="mt-1 min-h-48 font-mono text-[13px] leading-relaxed"
                    value={doc.body}
                    onChange={(e) => store.updateActive({ body: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="dt">Dated</Label>
                    <Input
                      id="dt"
                      className="mt-1"
                      value={doc.dated}
                      onChange={(e) => store.updateActive({ dated: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sn">/s/</Label>
                    <Input
                      id="sn"
                      className="mt-1"
                      value={doc.signName}
                      onChange={(e) => store.updateActive({ signName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="sr">Role under the signature</Label>
                  <Input
                    id="sr"
                    className="mt-1"
                    value={doc.signRole}
                    onChange={(e) => store.updateActive({ signRole: e.target.value })}
                  />
                </div>
                {plan === "posse" ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="lh">Letterhead</Label>
                      <Input
                        id="lh"
                        className="mt-1"
                        value={doc.letterhead}
                        onChange={(e) => store.updateActive({ letterhead: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bt">Bates prefix</Label>
                      <Input
                        id="bt"
                        className="mt-1"
                        value={doc.batesPrefix}
                        onChange={(e) => store.updateActive({ batesPrefix: e.target.value })}
                      />
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="rounded-[var(--radius-lg)] bg-paper p-4">
                <Label htmlFor="facts">Facts for Paladin</Label>
                <Textarea
                  id="facts"
                  className="mt-1 min-h-24"
                  value={facts}
                  onChange={(e) => setFacts(e.target.value)}
                />
                <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted">
                  hyperRAG hits
                </p>
                <ul className="mt-2 space-y-2">
                  {hits.map((h) => (
                    <li key={h.chunk.id} className="text-sm">
                      <p className="font-medium text-fg">{h.chunk.title}</p>
                      <p className="text-xs text-muted">{h.chunk.source}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={tab === "compose" ? "hidden lg:block" : ""}>
            <div className="overflow-auto rounded-[var(--radius-xl)] bg-bg-deep/40 p-3 sm:p-6">
              <div className="paper-zoom">
                <PleadingPaper pleading={doc} plan={plan} />
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
