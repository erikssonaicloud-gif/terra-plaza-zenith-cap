import type { PlanId } from "./pleading";

export interface Plan {
  id: PlanId;
  name: string;
  kicker: string;
  monthly: number;
  yearly: number;
  blurb: string;
  features: string[];
  cta: string;
}

export const PLANS: Plan[] = [
  {
    id: "scout",
    name: "Scout",
    kicker: "Rides free",
    monthly: 0,
    yearly: 0,
    blurb: "One live pleading on Oregon circuit paper. Enough to file. Not enough to hide in.",
    features: [
      "1 active pleading",
      "Oregon Circuit Court grid",
      "2 templates (injunction + declaration)",
      "1 Paladin draft as a trial shot",
      "Scout footer on the page",
    ],
    cta: "Ride Scout free",
  },
  {
    id: "paladin",
    name: "Paladin",
    kicker: "Have brief — will gavel",
    monthly: 29,
    yearly: 290,
    blurb: "The hired gun. Unlimited paper, twelve courts, grounded drafts, clean footer.",
    features: [
      "Unlimited pleadings",
      "7 jurisdictions",
      "Full template rack",
      "hyperRAG over the authorities pack",
      "40 Paladin drafts / month",
      "Print-ready pages, no Scout mark",
    ],
    cta: "Hire Paladin",
  },
  {
    id: "posse",
    name: "Posse",
    kicker: "Holds the town",
    monthly: 99,
    yearly: 990,
    blurb: "Chambers pack for a clinic or a small firm. Letterhead, Bates, invoices you can send today.",
    features: [
      "Everything in Paladin",
      "Firm letterhead on page one",
      "Bates prefixes",
      "Invoice pad for your own clients",
      "Waitlist + lead book",
      "Five-seat honor system",
    ],
    cta: "Raise a Posse",
  },
];

export function priceFor(plan: PlanId, interval: "month" | "year") {
  const p = PLANS.find((x) => x.id === plan)!;
  return interval === "year" ? p.yearly : p.monthly;
}

export function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function makeLicenseKey(plan: PlanId) {
  const chunk = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PAL-${plan.slice(0, 3).toUpperCase()}-${chunk()}-${chunk()}`;
}

export function makeInvoiceNumber() {
  const y = new Date().getFullYear();
  const n = Math.floor(1000 + Math.random() * 9000);
  return `PAL-${y}-${n}`;
}
