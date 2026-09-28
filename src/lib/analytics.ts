/**
 * Lightweight analytics event helper.
 * Pushes to the dataLayer when present, and no-ops otherwise so that the
 * site behaves identically with or without a tag manager installed.
 */

import type { PillarId } from "./omkneeFive";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export type DiagnosePathway = "check" | "assess" | "scan" | "understand";
export type TreatPathway =
  | "manage"
  | "rehabilitate"
  | "support"
  | "intervene"
  | "surgery"
  | "recover";
export type EcosystemDestination =
  | "mykneescore"
  | "mykneescan"
  | "sportshealing"
  | "chinmaygupte";

export const track = (event: string, payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
};

export const trackOmKneeFiveView = () => track("omknee_five_view");
export const trackPillarSelect = (pillar: PillarId) => track("pillar_select", { pillar });
export const trackDiagnosePathway = (pathway: DiagnosePathway) =>
  track("diagnose_pathway_select", { pathway });
export const trackTreatPathway = (pathway: TreatPathway) =>
  track("treat_pathway_select", { pathway });
export const trackEcosystemTransfer = (destination: EcosystemDestination) =>
  track("ecosystem_transfer", { destination });
