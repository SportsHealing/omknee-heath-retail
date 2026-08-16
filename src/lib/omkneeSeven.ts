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
  /** Approved call to action label from the master copy deck. */
  ctaLabel: string;
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
      "Healthy movement starts with more than the knee itself. Regular activity, strength, recovery, sleep, mobility and your wider health all contribute to your ability to stay active.",
    ctaLabel: "Explore Wellness",
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
      "Good nutrition provides the energy and nutrients your body needs for everyday life, physical activity and the maintenance of normal tissues. Understand food, protein, bone health, connective tissue and the role that supplements may play alongside a balanced diet.",
    ctaLabel: "Explore Nutrition",
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
      "Your knee is more than a simple hinge. Bones, cartilage, menisci, ligaments, tendons, muscles and synovial fluid work together to create movement while responding to the demands of everyday life. Understanding the joint is the first step towards understanding how to look after it.",
    ctaLabel: "Meet Your Knee",
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
      "Every step, squat, run and jump places demands on your knees. That is normal. The important question is not how to avoid load, but how activity relates to your current strength, conditioning and capacity.",
    ctaLabel: "Understand Knee Load",
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
      "Whether you are walking further, returning to the gym, running, skiing or playing sport, preparation matters. Strength, balance, movement control and sensible progression can help prepare your body for the demands ahead.",
    ctaLabel: "Prepare Your Knees",
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
      "Sometimes a knee changes. There may be pain, swelling, instability, stiffness, an injury or simply a loss of confidence in what the knee can do. Understanding what is happening may involve assessment and, when appropriate, further investigation.",
    ctaLabel: "Understand Diagnosis",
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
      "Treatment does not necessarily mean surgery. Depending on the problem, care may involve advice, rehabilitation, changes in activity, physiotherapy, support, selected procedures or surgery. The right approach starts with understanding the individual and the knee.",
    ctaLabel: "Understand Treatment",
    icon: Handshake,
    group: "pathway",
  },
];

export const getPillar = (id: PillarId) =>
  OMKNEE_SEVEN.find((pillar) => pillar.id === id) as OmKneePillar;
