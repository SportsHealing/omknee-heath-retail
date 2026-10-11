/**
 * Lightweight analytics event helper.
 * Pushes to the dataLayer when present, and no-ops otherwise so that the
 * site behaves identically with or without a tag manager installed.
 */

import type { PillarId } from "./omkneeFive";
import type { BookOptionId } from "./navigation";
import type { JoinSource } from "./klaviyo";

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
export const trackBookMenuOpened = () => track("book_menu_opened");
const BOOK_EVENTS: Record<BookOptionId, string> = {
  scan: "book_scan_click",
  "blood-test": "book_blood_test_click",
  consultation: "book_consultation_click",
};
export const trackBookClick = (option: BookOptionId) => track(BOOK_EVENTS[option]);
export const trackClubJoinStarted = (source: JoinSource) => track("club_join_started", { join_source: source });
export const trackClubJoinCompleted = (source: JoinSource) => track("club_join_completed", { join_source: source });
export const trackAddToCart = (handle: string, quantity: number) => track("add_to_cart", { handle, quantity });
export const trackCheckoutStarted = (totalQuantity: number) => track("checkout_started", { total_quantity: totalQuantity });
