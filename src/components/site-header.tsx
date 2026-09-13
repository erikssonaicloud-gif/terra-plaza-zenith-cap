import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { KnightMark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { usePaladin } from "@/lib/store";

const NAV = [
  { to: "/", label: "The brief" },
  { to: "/studio", label: "Studio" },
  { to: "/pricing", label: "Rates" },
  { to: "/office", label: "Office" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const plan = usePaladin((s) => s.plan());
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 text-fg">
          <KnightMark className="size-8 text-teal" />
          <span className="font-display text-lg font-semibold tracking-tight">
            PALADIN
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "text-sm tracking-wide text-muted transition-colors hover:text-fg",
                pathname === n.to && "text-fg",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
            {plan}
          </span>
          <Button asChild size="sm" variant={plan === "scout" ? "terracotta" : "primary"}>
            <Link to={plan === "scout" ? "/pricing" : "/studio"}>
              {plan === "scout" ? "Hire Paladin" : "Open studio"}
            </Link>
          </Button>
        </div>
        <button
          type="button"
          className="relative size-11 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="mx-auto size-5" /> : <Menu className="mx-auto size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-bg-elevated px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-base text-fg hover:bg-bg-deep/50"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2" variant="terracotta">
              <Link to="/pricing" onClick={() => setOpen(false)}>
                Hire Paladin
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border bg-bg-elevated/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-base text-fg">PALADIN</p>
          <p className="mt-1 max-w-md text-pretty">
            Typesetting and retrieval. Not a law firm. Not legal advice. Not a substitute
            for counsel. The clerk still has to take the paper.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.14em]">
          JustiTeX · hyperRAG · P.A.L.A.D.I.N.
        </p>
      </div>
    </footer>
  );
}
