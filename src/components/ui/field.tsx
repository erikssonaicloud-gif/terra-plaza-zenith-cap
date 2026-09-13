import * as React from "react";
import { cn } from "@/lib/cn";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "block text-[11px] font-medium uppercase tracking-[0.14em] text-muted",
        className,
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[var(--radius-sm)] bg-paper px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-teal/40",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-[var(--radius-sm)] bg-paper px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-teal/40",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  tone = "teal",
  ...props
}: React.ComponentProps<"span"> & { tone?: "teal" | "terracotta" | "paper" }) {
  const tones = {
    teal: "bg-teal text-teal-fg",
    terracotta: "bg-terracotta text-terracotta-fg",
    paper: "bg-paper text-ink shadow-[var(--shadow-border)]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
