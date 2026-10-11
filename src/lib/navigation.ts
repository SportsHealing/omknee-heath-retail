/**
 * Shared site navigation. Header, mobile menu, bottom bar and footer all read
 * from here; pillar labels come from OMKNEE_FIVE so the framework cannot drift.
 */
import { getPillar, pillarNavLabel, WELLNESS_HUB, type OmKneePillar } from "./omkneeFive";
import { SUPPLEMENT_PATH } from "@/content/supplement";

const diagnose = getPillar("diagnose") as OmKneePillar;
const treat = getPillar("treat") as OmKneePillar;

export interface NavLink {
  to: string;
  label: string;
}

/** Desktop header order: Shop · Scans & Tests · Consultations · Learn (dropdown) · Wellness · Club. */
export const NAV = {
  shop: { to: "/shop", label: "Shop" },
  scansTests: { to: diagnose.to, label: pillarNavLabel(diagnose) },
  consultations: { to: treat.to, label: pillarNavLabel(treat) },
  learn: { to: "/learn", label: "Learn" },
  wellness: { to: WELLNESS_HUB.to, label: WELLNESS_HUB.name },
  club: { to: "/club", label: "Club" },
} satisfies Record<string, NavLink>;

export const SUPPLEMENT_LINK: NavLink = { to: SUPPLEMENT_PATH, label: "OmKneeHealth Supplement" };

export type BookOptionId = "scan" | "blood-test" | "consultation";

export interface BookOption {
  id: BookOptionId;
  label: string;
  provider: string;
  /** Internal route or absolute partner URL. */
  href: string;
  external: boolean;
}

/** The gold Book button menu. */
export const BOOK_OPTIONS: BookOption[] = [
  {
    id: "scan",
    label: "Book a knee scan",
    provider: "MyKneeScan",
    href: "https://www.mykneescan.com/booking",
    external: true,
  },
  {
    id: "blood-test",
    label: "Book a blood test",
    provider: "Randox Health",
    href: `${diagnose.to}#blood-tests`,
    external: false,
  },
  {
    id: "consultation",
    label: "Book a consultation",
    provider: "SportsHealing",
    href: treat.to,
    external: false,
  },
];
