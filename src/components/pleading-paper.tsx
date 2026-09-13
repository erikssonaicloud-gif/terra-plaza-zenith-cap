import { headerFor, layoutPages, type Pleading, type PlanId } from "@/lib/pleading";
import { JURISDICTIONS } from "@/lib/pleading";
import { cn } from "@/lib/cn";

function LineGutter() {
  return (
    <ol className="absolute top-[0.95in] bottom-[0.85in] left-[0.72in] flex w-[0.42in] select-none flex-col justify-between font-serif text-[10px] leading-none text-ink/55">
      {Array.from({ length: 28 }, (_, i) => (
        <li key={i} className="text-right tabular-nums">
          {i + 1}
        </li>
      ))}
    </ol>
  );
}

function DoubleRule() {
  return (
    <div className="pointer-events-none absolute top-[0.95in] bottom-[0.8in] left-[1.22in] w-[3px] border-l border-r border-ink" />
  );
}

export function PleadingPaper({
  pleading,
  plan,
  className,
}: {
  pleading: Pleading;
  plan: PlanId;
  className?: string;
}) {
  const j =
    JURISDICTIONS.find((x) => x.id === pleading.jurisdictionId) ?? JURISDICTIONS[0];
  const { line1, line2 } = headerFor(pleading, j);
  const { pages } = layoutPages(pleading);
  const footerLeft =
    plan === "scout"
      ? "PALADIN Scout · JustiTeX 28-line grid · not a certified copy"
      : pleading.letterhead?.trim()
        ? pleading.letterhead
        : "JustiTeX 28-line golden grid";

  return (
    <div id="print-root" className={cn("flex flex-col gap-6", className)}>
      {pages.map((pg) => (
        <article
          key={pg.page}
          className="pleading-sheet relative mx-auto overflow-hidden"
        >
          <LineGutter />
          <DoubleRule />
          <div className="relative pt-[0.95in] pr-[0.9in] pb-[0.95in] pl-[1.45in] text-[11.5px] leading-[23.14px]">
            {pleading.letterhead && plan === "posse" && pg.kind === "first" ? (
              <p className="mb-[2px] text-[10px] tracking-wide text-ink/80">
                {pleading.letterhead}
              </p>
            ) : null}

            {pg.kind === "first" ? (
              <>
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.08em]">
                  {line1}
                </p>
                {line2 ? (
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.08em]">
                    {line2}
                  </p>
                ) : null}

                <div className="mt-[6px] grid grid-cols-[1.1fr_0.9fr] border border-ink text-[10.5px] leading-[13px]">
                  <div className="border-r border-ink p-2">
                    <p className="uppercase">{pleading.plaintiffs},</p>
                    <p className="pl-6 italic">Plaintiff,</p>
                    <p className="pl-3">v.</p>
                    <p className="uppercase">{pleading.defendants},</p>
                    <p className="pl-6 italic">Defendant.</p>
                  </div>
                  <div className="p-2">
                    <p>
                      Case No.{" "}
                      <span className="font-semibold">{pleading.caseNo || "UNASSIGNED"}</span>
                    </p>
                    <p className="mt-3 font-semibold uppercase tracking-wide">
                      {pleading.title}
                    </p>
                  </div>
                </div>

                <p className="mt-[8px] text-center text-[11px] font-semibold uppercase underline decoration-ink underline-offset-2">
                  {pleading.title}
                </p>
              </>
            ) : (
              <p className="text-center text-[10px] uppercase tracking-[0.14em] text-ink/70">
                {pleading.title} — page {pg.page} of {pg.total}
              </p>
            )}

            <div className="mt-[4px]">
              {pg.bodyLines.map((line, i) => {
                const isHead =
                  line.length > 0 &&
                  line === line.toUpperCase() &&
                  /^(I{1,3}|IV|V|VI|VII|VIII|IX|X)\./.test(line);
                return (
                  <p
                    key={i}
                    className={cn(
                      "min-h-[23.14px]",
                      isHead && "text-center font-semibold",
                    )}
                  >
                    {line || "\u00a0"}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="absolute right-[0.9in] bottom-[0.42in] left-[1.45in] flex items-end justify-between text-[9.5px] text-ink/70">
            <span>
              {footerLeft}
              {plan === "posse" && pleading.batesPrefix
                ? ` · ${pleading.batesPrefix}-${String(pg.page).padStart(4, "0")}`
                : ""}
            </span>
            <span>
              Page {pg.page} of {pg.total}
            </span>
          </div>

          {plan === "scout" ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="rotate-[-28deg] font-display text-5xl font-semibold tracking-wide text-teal/10">
                SCOUT
              </p>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
