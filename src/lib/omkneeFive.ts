/** The definitive OmKnee Five journey, shared across navigation and pages. */
import {
  Brain,
  Salad,
  Gauge,
  Stethoscope,
  Handshake,
  Moon,
  type LucideIcon,
} from "lucide-react";

import imgUnderstand from "@/assets/sketch-knee-anterior.png";
import imgNourish from "@/assets/photo-nutrition.jpg";
import imgLoad from "@/assets/illus-knee-load-tyres.jpg";
import imgDiagnose from "@/assets/sketch-mri-scanner.png";
import imgTreat from "@/assets/illus-knee-anatomy-colour.jpg";
import imgWellness from "@/assets/photo-sleep.jpg";

export type PillarId = "understand" | "nourish" | "load" | "diagnose" | "treat";

export interface OmKneePillar {
  id: PillarId;
  number: string;
  to: string;
  name: string;
  /** Label used in the site header, footer and mobile menu when it differs from the name. */
  navLabel?: string;
  strapline: string;
  shortDescription: string;
  ctaLabel: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const OMKNEE_FIVE: OmKneePillar[] = [
  {
    id: "understand",
    number: "01",
    to: "/understand",
    name: "Understand",
    strapline: "Know your knee.",
    shortDescription:
      "Every part of your knee is alive. Learn how each tissue adapts to load, food and rest.",
    ctaLabel: "Meet Your Knee",
    icon: Brain,
    image: imgUnderstand,
    imageAlt: "Pencil sketch of the knee joint from the front",
  },
  {
    id: "nourish",
    number: "02",
    to: "/nourish",
    name: "Nourish",
    strapline: "Nourish the body that moves you.",
    shortDescription:
      "Bone-first nutrition: protein, calcium, vitamin D, vitamin C and collagen, food first.",
    ctaLabel: "Explore Nourish",
    icon: Salad,
    image: imgNourish,
    imageAlt: "Overhead pencil study of whole foods, vegetables, fish, pulses and nuts",
  },
  {
    id: "load",
    number: "03",
    to: "/load",
    name: "Load",
    strapline: "Move it to keep it.",
    shortDescription:
      "Build strength and capacity at the right pace, and prepare for the activities you love.",
    ctaLabel: "Understand Knee Load",
    icon: Gauge,
    image: imgLoad,
    imageAlt: "Illustration comparing the knee joint to a pair of tyres carrying load",
  },
  {
    id: "diagnose",
    number: "04",
    to: "/diagnose",
    name: "Diagnose",
    navLabel: "Scans & Tests",
    strapline: "Understand what is happening.",
    shortDescription:
      "Start with the Knee Score, then add scans or blood tests when they are useful.",
    ctaLabel: "Understand Diagnosis",
    icon: Stethoscope,
    image: imgDiagnose,
    imageAlt: "Line drawing of an MRI scanner used to assess the knee",
  },
  {
    id: "treat",
    number: "05",
    to: "/treat",
    name: "Treat",
    navLabel: "Consultations",
    strapline: "Find the right care at the right time.",
    shortDescription:
      "See a knee specialist online or at our clinics on Harley Street, in Chiswick or at the Platinum Medical Centre.",
    ctaLabel: "Understand Treatment",
    icon: Handshake,
    image: imgTreat,
    imageAlt: "Anatomical illustration of the knee joint surfaces and cartilage",
  },
];

export const getPillar = (id: PillarId) => OMKNEE_FIVE.find((pillar) => pillar.id === id);
/**
 * Wellness is the ring around the OmKnee Five, not a sixth step. It shares the
 * pillar shape so cards and navigation can render it alongside the five.
 */
export const WELLNESS_HUB = {
  id: "wellness",
  to: "/wellness",
  name: "Wellness",
  strapline: "Look after the whole person.",
  shortDescription: "Sleep, recovery and the habits that make it stick.",
  ctaLabel: "Explore Wellness",
  icon: Moon,
  image: imgWellness,
  imageAlt: "Pencil study of a person sleeping",
} as const;

/** The pillar's label for navigation: "Scans & Tests" for Diagnose, "Consultations" for Treat. */
export const pillarNavLabel = (pillar: OmKneePillar) => pillar.navLabel ?? pillar.name;
