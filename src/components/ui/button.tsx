import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color] duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-teal text-teal-fg shadow-[var(--shadow-border)] hover:bg-teal-deep active:scale-[0.98]",
        terracotta:
          "bg-terracotta text-terracotta-fg shadow-[var(--shadow-border)] hover:bg-terracotta-deep active:scale-[0.98]",
        outline:
          "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-bg-elevated",
        ghost: "bg-transparent text-fg hover:bg-bg-deep/60",
        paper:
          "bg-paper text-ink shadow-[var(--shadow-border)] hover:bg-bg-elevated",
      },
      size: {
        sm: "h-9 rounded-[var(--radius-sm)] px-3 text-sm",
        md: "h-11 rounded-[var(--radius-md)] px-4 text-sm",
        lg: "h-12 rounded-[var(--radius-md)] px-5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
