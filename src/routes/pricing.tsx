import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { PLANS, formatUsd } from "@/lib/plans";
import { usePaladin } from "@/lib/store";

export const Route = createFileRoute("/pricing")({ component: PricingPage });

function PricingPage() {
  const current = usePaladin((s) => s.plan());

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">The rate sheet</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
          Cash on the barrel. Paper on the docket.
        </h1>
        <p className="mt-3 max-w-xl text-pretty text-muted">
          No card processor on this preview. Generate an invoice, send it, mark it paid,
          and the license unlocks on this device. After you publish, Stripe can ride shotgun.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.id}
              className="rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]"
            >
              <div className="rounded-[var(--radius-lg)] bg-paper p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{p.kicker}</p>
                <h2 className="mt-1 font-display text-2xl">{p.name}</h2>
                <p className="mt-2 font-display text-3xl tabular-nums">
                  {p.monthly === 0 ? "Free" : formatUsd(p.monthly)}
                  {p.monthly > 0 ? <span className="text-base text-muted"> / mo</span> : null}
                </p>
                {p.yearly > 0 ? (
                  <p className="text-sm text-muted">
                    or {formatUsd(p.yearly)} / year (two months standing down)
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f}>— {f}</li>
                  ))}
                </ul>
                {p.id === "scout" ? (
                  <Button asChild className="mt-6 w-full" variant="outline">
                    <Link to="/studio">{current === "scout" ? "Stay on Scout" : "Open studio"}</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="mt-6 w-full"
                    variant={p.id === "paladin" ? "terracotta" : "primary"}
                  >
                    <Link
                      to="/checkout"
                      search={{ plan: p.id === "posse" ? "posse" : "paladin", interval: "month" }}
                    >
                      {current === p.id ? "Already hired" : p.cta}
                    </Link>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
