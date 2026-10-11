/** Diagram register (handover Appendix C). Briefs double as alt text until final artwork arrives. */
import type { FigureId } from "./figures";

export type DiagramId =
  | "D1" | "D2" | "D3" | "D4" | "D5" | "D6" | "D7" | "D8"
  | "D9" | "D10" | "D11" | "D12" | "D13" | "D14" | "D15";

export interface Diagram {
  id: DiagramId;
  title: string;
  brief: string;
  /** Final artwork, once supplied (src/content/figures.ts). */
  figure?: FigureId;
}

export const DIAGRAMS: Record<DiagramId, Diagram> = {
  D1: { id: "D1", figure: "kneeHealthPyramid", title: "The Knee Health Pyramid", brief: "Three wave-shaped tiers. Base: Protect (sleep, stress, daily rhythm). Middle: Build (nutrition, strength, loading). Top: Perform (prepare, progress). Icon row beneath: lack of sleep, stress, sitting, smoking, alcohol, poor diet, excess weight." },
  D2: { id: "D2", title: "Weekly movement by age", brief: "Three age bands with simple figures, using the WHO figures. Knee-focus line per band. Footer panel: Do less / Do more. Caption credits WHO 2020 guidelines." },
  D3: { id: "D3", figure: "sleepBodyClock", title: "The 24-hour knee clock", brief: "Clock face. 07:30 melatonin ends, 10:00 peak alertness, 15:30 fast reactions, 17:00 strength peak, 21:00 melatonin starts. Early night: deep sleep and growth hormone peak. Overnight: tissue repair. Caption: typical pattern, varies by person." },
  D4: { id: "D4", title: "Day and night cycle", brief: "Two panels. Day: sun, figure walking, label Load. Night: moon, figure sleeping, label Repair. Knee highlighted in both." },
  D5: { id: "D5", title: "Bone through life", brief: "Curve of bone mass by age, rising to a peak around 30 then slowly declining. Two lines: with and without good nutrition and loading." },
  D6: { id: "D6", figure: "kneeHealthPlate", title: "The bone plate", brief: "Plate split into protein, calcium foods, vegetables and fruit, whole grains. Small sun icon for vitamin D." },
  D7: { id: "D7", title: "Four tissues, three inputs", brief: "Knee cross-section showing bone, cartilage, ligament and muscle. Three arrows in: Load, Nourish, Sleep." },
  D8: { id: "D8", title: "Load vs capacity", brief: "Two lines over time: load demand and capacity. Safe zone where capacity stays above load. A spike where load jumps too fast." },
  D9: { id: "D9", title: "The OmKnee week planner", brief: "Seven-day strip with icons for strength, walking, balance, rest, and a moon for sleep each night." },
  D10: { id: "D10", title: "The sleep hourglass", brief: "Hourglass filling through the day (sleep pressure), turning at night. Side note: long naps drain it early." },
  D11: { id: "D11", title: "Sleep and the four tissues", brief: "Sleeping figure with four callouts: muscle, bone, collagen, injury risk." },
  D12: { id: "D12", title: "Sleep yes and no grid", brief: "Six Yes icons and five No icons matching the sleep habit lists. Muted tone for No, not red." },
  D13: { id: "D13", title: "Marginal gains staircase", brief: "Shallow staircase of small steps rising to a goal flag." },
  D14: { id: "D14", title: "The habit loop", brief: "Circular loop: Anchor, Schedule, Track, Share, Celebrate." },
  D15: { id: "D15", title: "The OmKnee Five ring", brief: "Five numbered segments in a ring (Understand, Nourish, Load, Diagnose, Treat) with Wellness at the centre. Arrow from Treat back to Understand." },
};
