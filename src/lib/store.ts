import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  SAMPLE_PLEADING,
  newId,
  type JurisdictionId,
  type Pleading,
  type PlanId,
} from "./pleading";
import { makeInvoiceNumber, makeLicenseKey, priceFor } from "./plans";

export interface License {
  plan: PlanId;
  name: string;
  email: string;
  firm: string;
  key: string;
  interval: "month" | "year";
  issuedAt: string;
}

export interface Invoice {
  id: string;
  number: string;
  plan: PlanId;
  interval: "month" | "year";
  amount: number;
  name: string;
  email: string;
  firm: string;
  status: "due" | "paid";
  createdAt: string;
}

export interface Lead {
  id: string;
  email: string;
  role: string;
  at: string;
}

export interface OfficeProfile {
  payTo: string;
  email: string;
  zelle: string;
  notes: string;
}

interface Usage {
  monthKey: string;
  aiDrafts: number;
}

interface PaladinState {
  license: License | null;
  docs: Pleading[];
  activeId: string;
  invoices: Invoice[];
  leads: Lead[];
  office: OfficeProfile;
  usage: Usage;
  hydrateSample: () => void;
  setActive: (id: string) => void;
  updateActive: (patch: Partial<Pleading>) => void;
  addDoc: () => void;
  removeDoc: (id: string) => void;
  unlock: (input: {
    plan: PlanId;
    name: string;
    email: string;
    firm: string;
    interval: "month" | "year";
  }) => Invoice;
  markPaid: (id: string) => void;
  addLead: (email: string, role: string) => void;
  setOffice: (patch: Partial<OfficeProfile>) => void;
  consumeAi: () => { ok: true } | { ok: false; reason: string };
  remainingAi: () => number;
  plan: () => PlanId;
}

function monthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function sampleDoc(): Pleading {
  return {
    id: "sample-rivera",
    updatedAt: "2026-09-05T00:00:00.000Z",
    ...SAMPLE_PLEADING,
  };
}

export const usePaladin = create<PaladinState>()(
  persist(
    (set, get) => ({
      license: null,
      docs: [sampleDoc()],
      activeId: "sample-rivera",
      invoices: [],
      leads: [],
      office: {
        payTo: "Annika Eriksson / PALADIN",
        email: "",
        zelle: "",
        notes: "Memo the invoice number on the transfer.",
      },
      usage: { monthKey: monthKey(), aiDrafts: 0 },
      hydrateSample: () => {
        if (get().docs.length) return;
        const doc = sampleDoc();
        set({ docs: [doc], activeId: doc.id });
      },
      setActive: (id) => set({ activeId: id }),
      updateActive: (patch) => {
        const { docs, activeId } = get();
        set({
          docs: docs.map((d) =>
            d.id === activeId
              ? { ...d, ...patch, updatedAt: new Date().toISOString() }
              : d,
          ),
        });
      },
      addDoc: () => {
        const plan = get().plan();
        if (plan === "scout" && get().docs.length >= 1) return;
        const doc: Pleading = {
          ...sampleDoc(),
          id: newId(),
          title: "DRAFT PLEADING",
          body: "1. ",
          caseNo: "UNASSIGNED",
          updatedAt: new Date().toISOString(),
        };
        set({ docs: [...get().docs, doc], activeId: doc.id });
      },
      removeDoc: (id) => {
        const docs = get().docs.filter((d) => d.id !== id);
        set({
          docs,
          activeId: docs[0]?.id ?? "",
        });
      },
      unlock: ({ plan, name, email, firm, interval }) => {
        const invoice: Invoice = {
          id: newId(),
          number: makeInvoiceNumber(),
          plan,
          interval,
          amount: priceFor(plan, interval),
          name,
          email,
          firm,
          status: "paid",
          createdAt: new Date().toISOString(),
        };
        const license: License = {
          plan,
          name,
          email,
          firm,
          key: makeLicenseKey(plan),
          interval,
          issuedAt: new Date().toISOString(),
        };
        set({
          license,
          invoices: [invoice, ...get().invoices],
        });
        return invoice;
      },
      markPaid: (id) =>
        set({
          invoices: get().invoices.map((inv) =>
            inv.id === id ? { ...inv, status: "paid" } : inv,
          ),
        }),
      addLead: (email, role) => {
        const lead: Lead = {
          id: newId(),
          email: email.trim().toLowerCase(),
          role,
          at: new Date().toISOString(),
        };
        const exists = get().leads.some((l) => l.email === lead.email);
        if (exists) return;
        set({ leads: [lead, ...get().leads] });
      },
      setOffice: (patch) => set({ office: { ...get().office, ...patch } }),
      consumeAi: () => {
        const mk = monthKey();
        let { usage } = get();
        if (usage.monthKey !== mk) usage = { monthKey: mk, aiDrafts: 0 };
        const plan = get().plan();
        const cap = plan === "scout" ? 1 : plan === "paladin" ? 40 : 80;
        if (usage.aiDrafts >= cap) {
          set({ usage });
          return {
            ok: false as const,
            reason:
              plan === "scout"
                ? "Scout includes one Paladin draft. Hire Paladin for a monthly rack of forty."
                : "Monthly draft allotment is spent. It resets on the first.",
          };
        }
        set({ usage: { ...usage, aiDrafts: usage.aiDrafts + 1 } });
        return { ok: true as const };
      },
      remainingAi: () => {
        const mk = monthKey();
        const { usage } = get();
        const used = usage.monthKey === mk ? usage.aiDrafts : 0;
        const plan = get().plan();
        const cap = plan === "scout" ? 1 : plan === "paladin" ? 40 : 80;
        return Math.max(0, cap - used);
      },
      plan: () => get().license?.plan ?? "scout",
    }),
    { name: "paladin-office-v1" },
  ),
);

export function activeDoc(state: PaladinState): Pleading | undefined {
  return state.docs.find((d) => d.id === state.activeId) ?? state.docs[0];
}

export function jurisdictionLocked(id: JurisdictionId, plan: PlanId) {
  if (id === "or-circuit") return false;
  return plan === "scout";
}
