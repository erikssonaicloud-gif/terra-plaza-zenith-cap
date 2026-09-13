import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileStack, Gavel, Library, Printer } from "lucide-react";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge, Input, Label } from "@/components/ui/field";
import { PLANS, formatUsd } from "@/lib/plans";
import { usePaladin } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

const STACK = [
  {
    mark: "I",
    name: "JustiTeX",
    line: "The frozen 28-line grid. Caption lock. Widow and orphan control. Paper the clerk has already seen.",
  },
  {
    mark: "II",
    name: "hyperRAG",
    line: "Authorities as a hypergraph, not a vibe. Drafts cite the pack you loaded — or they cite nothing.",
  },
  {
    mark: "III",
    name: "P.A.L.A.D.I.N.",
    line: "Pleading Assembly, Legal Analysis, Docket Intelligence Network. The hired gun that typesets.",
  },
];

const FEATURES = [
  {
    icon: Printer,
    title: "Court paper, not a PDF costume",
    body: "Letter size, double left rule, 28 numbered lines. Oregon UTCR 2.010 by default. Other courts on Paladin.",
  },
  {
    icon: Library,
    title: "Grounded, or silent",
    body: "hyperRAG retrieves from a sealed authorities pack. Paladin will not invent a reporter cite to look clever.",
  },
  {
    icon: FileStack,
    title: "Templates with teeth",
    body: "Injunction, declaration, ORCP 71, summary judgment, TRO, notice of appeal. Scout gets two. Paladin gets the rack.",
  },
  {
    icon: Gavel,
    title: "A rate a clinic can pay",
    body: "Scout rides free forever. Paladin is twenty-nine a month. Posse is chambers for a legal-aid shop.",
  },
];

const QUOTES = [
  {
    who: "Lina V., Clackamas clinic",
    what: "We stopped fighting Word's line numbers. The paper looks like the paper the other side files.",
  },
  {
    who: "M. Okonkwo, solo",
    what: "I hired Paladin for captions. I stayed for the invoice pad. My clients pay me; I pay the tool.",
  },
  {
    who: "Scout rider, Oregon City",
    what: "I am not a lawyer. The clerk took the motion. That is the whole product.",
  },
];

function Home() {
  const addLead = usePaladin((s) => s.addLead);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("pro se");
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
          <Badge>Digital Frontier Posse · est. territorial court</Badge>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-fg sm:text-6xl">
            Have Brief — Will Gavel
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Court-ready 28-line pleadings for people who cannot rent a pinstripe.
            Scout files free. Paladin bills by the month. Posse holds the town.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="terracotta">
              <Link to="/studio">
                Open the studio
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">See the rates</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-subtle">
            Typesetting tool · not a law firm · not legal advice
          </p>
        </section>

        <section className="border-y border-border bg-bg-elevated/60">
          <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
            {STACK.map((s) => (
              <div key={s.name} className="bg-bg-elevated px-6 py-8">
                <p className="font-display text-sm text-terracotta">{s.mark}</p>
                <h2 className="mt-2 font-display text-2xl text-fg">{s.name}</h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{s.line}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="product" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Why this exists</p>
          <h2 className="mt-2 max-w-xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The other side already owns the typesetting.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="rounded-[var(--radius-xl)] bg-bg-elevated p-2 shadow-[var(--shadow-border)]"
              >
                <div className="rounded-[var(--radius-lg)] bg-paper p-5">
                  <f.icon className="size-5 text-teal" />
                  <h3 className="mt-3 font-display text-xl text-fg">{f.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="rates" className="border-y border-border bg-teal text-teal-fg">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-teal-fg/70">Rates</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Scout. Paladin. Posse.
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {PLANS.map((p) => (
                <article
                  key={p.id}
                  className="rounded-[var(--radius-xl)] bg-teal-deep/50 p-2"
                >
                  <div className="rounded-[var(--radius-lg)] bg-bg p-6 text-fg">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{p.kicker}</p>
                    <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
                    <p className="mt-2 font-display text-3xl tabular-nums">
                      {p.monthly === 0 ? "Free" : formatUsd(p.monthly)}
                      {p.monthly > 0 ? (
                        <span className="text-base text-muted"> / mo</span>
                      ) : null}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-fg">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="mt-6 w-full"
                      variant={p.id === "paladin" ? "terracotta" : "outline"}
                    >
                      {p.id === "scout" ? (
                        <Link to="/studio">{p.cta}</Link>
                      ) : (
                        <Link
                          to="/checkout"
                          search={{
                            plan: p.id === "posse" ? "posse" : "paladin",
                            interval: "month",
                          }}
                        >
                          {p.cta}
                        </Link>
                      )}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            From the Digital Frontier Posse
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            Early riders.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {QUOTES.map((q) => (
              <blockquote
                key={q.who}
                className="rounded-[var(--radius-lg)] bg-bg-elevated p-5 shadow-[var(--shadow-border)]"
              >
                <p className="font-display text-lg leading-snug text-fg">“{q.what}”</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                  {q.who}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-4 text-xs text-subtle">
            Composite notes from early access. Not paid endorsements.
          </p>
        </section>

        <section className="border-t border-border bg-bg-elevated/50">
          <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Join the posse list
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Clinics, pro se desks, and small firms. We keep the name on this device and
              in the Office lead book so you can actually bill someone today.
            </p>
            {joined ? (
              <p className="mt-6 rounded-[var(--radius-md)] bg-paper p-4 text-sm shadow-[var(--shadow-border)]">
                You are on the list. Open Office to copy the roster.
              </p>
            ) : (
              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email.includes("@")) return;
                  addLead(email, role);
                  setJoined(true);
                }}
              >
                <div>
                  <Label htmlFor="wait-email">Email</Label>
                  <Input
                    id="wait-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@clinic.org"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="wait-role">I ride as</Label>
                  <select
                    id="wait-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 h-11 w-full rounded-[var(--radius-sm)] bg-paper px-3 text-sm shadow-[var(--shadow-border)]"
                  >
                    <option>pro se</option>
                    <option>attorney</option>
                    <option>legal aid</option>
                    <option>clinic</option>
                    <option>court staff</option>
                  </select>
                </div>
                <Button type="submit" className="w-full" variant="primary">
                  Save my seat
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
