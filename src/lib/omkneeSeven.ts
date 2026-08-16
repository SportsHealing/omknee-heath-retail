/**
 * The OmKnee Seven - a complete approach to lifelong knee health.
 *
 * Structured content: the Seven are defined here once and consumed by the
 * homepage component, the mega-menu, the Look After Your Knees hub and the
 * footer. Nothing about the Seven is hard-coded into a single section.
 */

import {
  HeartPulse,
  Salad,
  Brain,
  Gauge,
  ShieldCheck,
  Stethoscope,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type PillarId =
  | "wellness"
  | "nourish"
  | "understand"
  | "load"
  | "prepare"
  | "diagnose"
  | "treat";

export interface OmKneePillar {
  id: PillarId;
  /** Display number, e.g. "01". */
  number: string;
  to: string;
  name: string;
  strapline: string;
  shortDescription: string;
  icon: LucideIcon;
  /** "foundation" = pillars 01-05, "pathway" = 06-07. */
  group: "foundation" | "pathway";
}

export const OMKNEE_SEVEN: OmKneePillar[] = [
  {
    id: "wellness",
    number: "01",
    to: "/wellness",
    name: "Wellness",
    strapline: "Look after the whole person.",
    shortDescription:
      "Movement, strength, recovery, sleep and healthy ageing. Knees do best inside a body that is generally well looked after.",
    icon: HeartPulse,
    group: "foundation",
  },
  {
    id: "nourish",
    number: "02",
    to: "/nourish",
    name: "Nourish",
    strapline: "Nourish the body that moves you.",
    shortDescription:
      "Balanced eating, protein, bone health, connective tissue and a clear-eyed view of what supplements can and cannot do.",
    icon: Salad,
    group: "foundation",
  },
  {
    id: "understand",
    number: "03",
    to: "/understand",
    name: "Understand",
    strapline: "Know your knee.",
    shortDescription:
      "An accessible introduction to the joint: bones, cartilage, menisci, ligaments, tendons, muscles and synovial fluid.",
    icon: Brain,
    group: "foundation",
  },
  {
    id: "load",
    number: "04",
    to: "/load",
    name: "Load",
    strapline: "Understand what you ask it to do.",
    shortDescription:
      "Knees need movement. Capacity grows when activity is introduced and progressed thoughtfully, with recovery built in.",
    icon: Gauge,
    group: "foundation",
  },
  {
    id: "prepare",
    number: "05",
    to: "/prepare",
    name: "Prepare",
    strapline: "Prepare for what you want to do.",
    shortDescription:
      "Strength, movement control, balance and warm-up: the everyday groundwork that helps reduce injury risk.",
    icon: ShieldCheck,
    group: "foundation",
  },
  {
    id: "diagnose",
    number: "06",
    to: "/diagnose",
    name: "Diagnose",
    strapline: "Understand what is happening.",
    shortDescription:
      "How knees are checked, assessed and investigated, and where to go for each step. Education and signposting, not diagnosis.",
    icon: Stethoscope,
    group: "pathway",
  },
  {
    id: "treat",
    number: "07",
    to: "/treat",
    name: "Treat",
    strapline: "Find the right care at the right time.",
    shortDescription:
      "Treatment does not necessarily mean surgery. An introduction to the continuum, from managing activity to recovery and back to movement.",
    icon: Handshake,
    group: "pathway",
  },
];

export const getPillar = (id: PillarId) =>
  OMKNEE_SEVEN.find((pillar) => pillar.id === id) as OmKneePillar;
