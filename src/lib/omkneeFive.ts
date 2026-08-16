/**
 * The OmKnee Five - five principles for lifelong knee health.
 * Educational principles, not product categories.
 */

import { HeartPulse, Salad, Brain, Gauge, ShieldCheck, type LucideIcon } from "lucide-react";

export interface OmKneePrinciple {
  id: string;
  to: string;
  label: string;
  proposition: string;
  intro: string;
  icon: LucideIcon;
}

export const OMKNEE_FIVE: OmKneePrinciple[] = [
  {
    id: "wellness",
    to: "/wellness",
    label: "Wellness",
    proposition: "Look after the whole person.",
    intro: "Sleep, recovery, body composition and everyday activity shape how well your knees keep working.",
    icon: HeartPulse,
  },
  {
    id: "nourish",
    to: "/nourish",
    label: "Nourish",
    proposition: "Nourish the body that moves you.",
    intro: "Balanced eating, protein, bone health and what supplements can and cannot do.",
    icon: Salad,
  },
  {
    id: "understand",
    to: "/understand",
    label: "Understand",
    proposition: "Know your knee.",
    intro: "An accessible introduction to the joint, its materials and how it moves.",
    icon: Brain,
  },
  {
    id: "load",
    to: "/load",
    label: "Load",
    proposition: "Understand what you ask it to do.",
    intro: "Knees need appropriate load. Capacity grows when activity is introduced thoughtfully.",
    icon: Gauge,
  },
  {
    id: "prepare",
    to: "/prepare",
    label: "Prepare",
    proposition: "Prepare for what you want to do.",
    intro: "Strength, control, warm-up and progression to help reduce injury risk.",
    icon: ShieldCheck,
  },
];
