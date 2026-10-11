/**
 * Building blocks for editorial pages (pillar pages and the Wellness hub).
 * Copy lives in data files; src/components/content/ContentSections.tsx renders it.
 * Any text may contain [SQUARE BRACKET] placeholders, which render visibly.
 */
import type { DiagnosePathway, TreatPathway, EcosystemDestination } from "@/lib/analytics";
import type { DiagramId } from "./diagrams";

export interface ContentLink {
  label: string;
  /** Internal route. */
  to?: string;
  /** External URL. */
  href?: string;
}

export interface ContentCta extends ContentLink {
  ecosystem?: EcosystemDestination;
  destinationLabel?: string;
  diagnosePathway?: DiagnosePathway;
  treatPathway?: TreatPathway;
  /** "button" renders a filled button; default is a text link. */
  style?: "button" | "link";
}

/** A table cell is plain text or a link (rendered as a button). */
export type TableCell = string | ContentLink;

export interface ListItem {
  text: string;
  link?: ContentLink;
}

export type ContentBlock =
  | { type: "p"; text: string; link?: ContentLink }
  | { type: "h3"; text: string }
  | { type: "list"; items: (string | ListItem)[]; ordered?: boolean; title?: string }
  | { type: "table"; columns: string[]; rows: TableCell[][]; note?: string }
  | { type: "diagram"; id: DiagramId }
  | { type: "cards"; items: { title: string; copy: string }[] }
  | { type: "callout"; text: string }
  | { type: "cta"; cta: ContentCta }
  | { type: "doDont"; doTitle: string; doItems: string[]; dontTitle: string; dontItems: string[]; ordered?: boolean }
  | { type: "timeline"; items: { label: string; copy: string }[] }
  | { type: "cycle"; steps: { label: string; link?: ContentLink }[] }
  | { type: "smallPrint"; text: string };

export interface ContentSection {
  /** Anchor id, e.g. "sleep" for /wellness#sleep. */
  id?: string;
  eyebrow?: string;
  title?: string;
  /** Tinted background for the section. */
  tone?: "sage" | "sand";
  blocks: ContentBlock[];
}

/** Closing band shared by pillar pages and the Wellness hub. */
export interface ContentClosing {
  principle: string;
  makeItStick?: string;
  /** Text links shown before the main CTA. */
  links?: ContentLink[];
  cta?: ContentLink;
}
