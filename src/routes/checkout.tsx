import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/field";
import { PLANS, formatUsd, priceFor } from "@/lib/plans";
import type { PlanId } from "@/lib/pleading";
import { usePaladin } from "@/lib/store";

type Search = { plan: PlanId; interval: "month" | "year" };

export const Route = createFileRoute("/checkout")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    plan: raw.plan === "posse" ? "posse" : "paladin",
    interval: raw.interval === "year" ? "year" : "month",
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { plan, interval } = Route.useSearch();
  const spec = PLANS.find((p) => p.id === plan)!;
  const unlock = usePaladin((s) => s.unlock);
  const office = usePaladin((s) => s.office);
  const license = usePaladin((s) => s.license);
  const [name, setName] = useState(license?.name ?? "");
  const [email, setEmail] = useState(license?.email ?? "");
  const [firm, setFirm] = useState(license?.firm ?? "");
  const [done, setDone] = useState<string | null>(null);

  const amount = priceFor(plan, interval);
  const mailto = useMemo(() => {
    if (!office.email || !done) return null;
    const subject = encodeURIComponent(`PALADIN invoice ${done}`);
    const body = encodeURIComponent(
      `Please find invoice ${done} for ${spec.name} (${interval}) — ${formatUsd(amount)}.\n\nPay to: ${office.payTo}\nZelle: ${office.zelle || "—"}\nMemo the invoice number.`,
    );
    return `mailto:${office.email}?subject=${subject}&body=${body}`;
  }, [amount, done, interval, office.email, office.payTo, office.zelle, spec.name]);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Hire</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
            {spec.name} retainer
          </h1>
          <p className="mt-3 text-pretty text-muted">
            This preview issues a local license the moment you confirm. Send the invoice
            however you actually get paid — Zelle, check, wire. Mark it in Office.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const inv = unlock({ plan, name, email, firm, interval });
              setDone(inv.number);
            }}
          >
            <div>
              <Label htmlFor="nm">Your name</Label>
              <Input id="nm" required value={name} className="mt-1" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="em">Email on the invoice</Label>
              <Input
                id="em"
                type="email"
                required
                value={email}
                className="mt-1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="fm">Firm / clinic (optional)</Label>
              <Input id="fm" value={firm} className="mt-1" onChange={(e) => setFirm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button variant={interval === "month" ? "primary" : "outline"} asChild>
                <Link to="/checkout" search={{ plan, interval: "month" }}>
                  Monthly {formatUsd(spec.monthly)}
                </Link>
              </Button>
              <Button variant={interval === "year" ? "primary" : "outline"} asChild>
                <Link to="/checkout" search={{ plan, interval: "year" }}>
                  Yearly {formatUsd(spec.yearly)}
                </Link>
              </Button>
            </div>
            <Button type="submit" variant="terracotta" className="w-full" size="lg">
              Issue license · {formatUsd(amount)}
            </Button>
          </form>

          {done ? (
            <div className="mt-6 rounded-[var(--radius-md)] bg-paper p-4 text-sm shadow-[var(--shadow-border)]">
              <p className="font-display text-lg">Invoice {done} is in the book.</p>
              <p className="mt-1 text-muted">
                {spec.name} is unlocked on this device. Print from the studio. Copy a
                payment request from Office if you still need to collect.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link to="/studio">Open studio</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link to="/office">Office ledger</Link>
                </Button>
                {mailto ? (
                  <Button asChild size="sm" variant="ghost">
                    <a href={mailto}>Email invoice</a>
                  </Button>
                ) : null}
              </div>
            </div>
          ) : null}
        </section>

        <aside className="h-fit rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
          <div className="rounded-[var(--radius-lg)] bg-paper p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">On the paper</p>
            <ul className="mt-3 space-y-2 text-sm">
              {spec.features.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-subtle">
              Not a law firm. Not legal advice. Subscription is a software license for
              typesetting and retrieval. You still sign the pleading.
            </p>
          </div>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
