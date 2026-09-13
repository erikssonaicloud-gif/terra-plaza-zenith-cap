import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { formatUsd } from "@/lib/plans";
import { usePaladin } from "@/lib/store";

export const Route = createFileRoute("/office")({ component: OfficePage });

function OfficePage() {
  const license = usePaladin((s) => s.license);
  const invoices = usePaladin((s) => s.invoices);
  const leads = usePaladin((s) => s.leads);
  const office = usePaladin((s) => s.office);
  const setOffice = usePaladin((s) => s.setOffice);
  const plan = usePaladin((s) => s.plan());

  const roster = leads
    .map((l) => `${l.at.slice(0, 10)}\t${l.role}\t${l.email}`)
    .join("\n");

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Chambers</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Office</h1>
        <p className="mt-3 max-w-xl text-pretty text-muted">
          The lead book and invoice pad live on this device. Fill in how you get paid.
          That is how Paladin makes money today — before a card processor exists.
        </p>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
            <div className="rounded-[var(--radius-lg)] bg-paper p-5">
              <h2 className="font-display text-xl">Pay-to</h2>
              <div className="mt-4 space-y-3">
                <div>
                  <Label htmlFor="payto">Payee name</Label>
                  <Input
                    id="payto"
                    className="mt-1"
                    value={office.payTo}
                    onChange={(e) => setOffice({ payTo: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="oem">Collection email</Label>
                  <Input
                    id="oem"
                    type="email"
                    className="mt-1"
                    value={office.email}
                    onChange={(e) => setOffice({ email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="zelle">Zelle / Venmo / routing memo</Label>
                  <Input
                    id="zelle"
                    className="mt-1"
                    value={office.zelle}
                    onChange={(e) => setOffice({ zelle: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Invoice footnote</Label>
                  <Textarea
                    id="notes"
                    className="mt-1 min-h-20"
                    value={office.notes}
                    onChange={(e) => setOffice({ notes: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
            <div className="rounded-[var(--radius-lg)] bg-paper p-5">
              <h2 className="font-display text-xl">License on this device</h2>
              {license ? (
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Plan</dt>
                    <dd className="uppercase tracking-wide">{license.plan}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Key</dt>
                    <dd className="font-mono text-xs">{license.key}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Billed to</dt>
                    <dd>{license.name}</dd>
                  </div>
                </dl>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  Riding Scout. Hire Paladin from the rate sheet when a client can pay.
                </p>
              )}
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-subtle">
                Current seat: {plan}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
          <div className="rounded-[var(--radius-lg)] bg-paper p-5">
            <h2 className="font-display text-xl">Invoices</h2>
            {invoices.length === 0 ? (
              <p className="mt-3 text-sm text-muted">None yet. Checkout writes them here.</p>
            ) : (
              <ul className="mt-4 divide-y divide-border">
                {invoices.map((inv) => (
                  <li key={inv.id} className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm">
                    <span className="font-mono text-xs">{inv.number}</span>
                    <span>
                      {inv.plan} · {inv.interval}
                    </span>
                    <span className="tabular-nums">{formatUsd(inv.amount)}</span>
                    <span className="uppercase tracking-wide text-muted">{inv.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="mt-8 rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
          <div className="rounded-[var(--radius-lg)] bg-paper p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-xl">Posse list</h2>
              <Button
                size="sm"
                variant="outline"
                type="button"
                onClick={() => navigator.clipboard.writeText(roster || "(empty)")}
              >
                Copy roster
              </Button>
            </div>
            {leads.length === 0 ? (
              <p className="mt-3 text-sm text-muted">
                The waitlist on the front page writes names here.
              </p>
            ) : (
              <ul className="mt-4 space-y-2 text-sm">
                {leads.map((l) => (
                  <li key={l.id} className="flex flex-wrap justify-between gap-2">
                    <span>{l.email}</span>
                    <span className="text-muted">{l.role}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
