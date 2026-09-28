/** The definitive OmKnee Five journey, shared across navigation and pages. */
import {
  Brain,
  Salad,
  Gauge,
  Stethoscope,
  Handshake,
  type LucideIcon,
} from "lucide-react";

import imgUnderstand from "@/assets/sketch-knee-anterior.png";
import imgNourish from "@/assets/photo-nutrition.jpg";
import imgLoad from "@/assets/illus-knee-load-tyres.jpg";
import imgDiagnose from "@/assets/sketch-mri-scanner.png";
import imgTreat from "@/assets/illus-knee-anatomy-colour.jpg";

export type PillarId = "understand" | "nourish" | "load" | "diagnose" | "treat";

export interface OmKneePillar {
  id: PillarId;
  number: string;
  to: string;
  name: string;
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
      "Meet the structures that make movement possible and understand how the knee works with the rest of your body.",
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
    strapline: "Look after the whole person.",
    shortDescription:
      "Bring together movement, strength, recovery, sleep, gut health and balanced nutrition to support the body that carries your knees.",
    ctaLabel: "Explore Whole-Person Health",
    icon: Salad,
    image: imgNourish,
    imageAlt: "Overhead pencil study of whole foods, vegetables, fish, pulses and nuts",
  },
  {
    id: "load",
    number: "03",
    to: "/load",
    name: "Load",
    strapline: "Build capacity for what you want to do.",
    shortDescription:
      "Understand demand, build strength and prepare progressively for walking, work, exercise and sport.",
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
    strapline: "Understand what is happening.",
    shortDescription:
      "Learn how symptoms, assessment and imaging fit together when a knee changes.",
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
    strapline: "Find the right care at the right time.",
    shortDescription:
      "Understand the range of care, from rehabilitation and support to procedures and surgery when appropriate.",
    ctaLabel: "Understand Treatment",
    icon: Handshake,
    image: imgTreat,
    imageAlt: "Anatomical illustration of the knee joint surfaces and cartilage",
  },
];

export const getPillar = (id: PillarId) => OMKNEE_FIVE.find((pillar) => pillar.id === id);