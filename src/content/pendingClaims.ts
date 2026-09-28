/**
 * Placeholder-bracketed claims from the master rewrite deck that were held back
 * from the live pillar copy pending sign-off from Chinmay and Cynthia.
 * Source: the original pillar rewrite, now mapped to the OmKnee Five.
 */

export type ClaimStatus = "pending" | "approved" | "rejected";

export interface PendingClaim {
  id: string;
  pillar: string;
  /** Where the line would sit if approved. */
  page: string;
  path: string;
  section: string;
  /** Verbatim bracketed text from the rewrite deck. */
  original: string;
  /** Why it was held back. */
  note: string;
  owner: string;
}

export const PENDING_CLAIMS: PendingClaim[] = [
  {
    id: "wellness-clinic-observation",
    pillar: "02 Nourish",
    page: "Nourish",
    path: "/nourish",
    section: "Look after the whole person (intro)",
    original:
      "[In clinic] the knees that do well long term belong to people who are strong, active, sleep reasonably and haven't stopped moving out of fear.",
    note: "Clinical-observation framing. Needs a named clinician voice, or drop \u201cin clinic\u201d and keep it general.",
    owner: "Chinmay",
  },
  {
    id: "wellness-strength-evidence",
    pillar: "02 Nourish",
    page: "Nourish",
    path: "/nourish",
    section: "Get strong",
    original:
      "[The evidence for strength training in later life is some of the most convincing in the field.]",
    note: "Evidence-strength claim. Needs a citation before publication.",
    owner: "Cynthia",
  },
  {
    id: "nourish-protein-figures",
    pillar: "02 Nourish",
    page: "Nourish",
    path: "/nourish",
    section: "Protein and training",
    original:
      "[Guidance figures for protein intake if the team wants them; otherwise leave qualitative.]",
    note: "Open decision: publish g/kg figures or keep qualitative. Numeric intake guidance carries FSA risk.",
    owner: "Cynthia",
  },
  {
    id: "understand-meniscus-anecdote",
    pillar: "01 Understand",
    page: "Understand",
    path: "/understand",
    section: "Meniscus",
    original:
      "[Anecdote or line on how often meniscal findings show up on scans of people with no symptoms, if Chinmay wants one here.]",
    note: "Optional. If included, needs a prevalence figure with a source.",
    owner: "Chinmay",
  },
  {
    id: "load-clinic-belief",
    pillar: "03 Load",
    page: "Load",
    path: "/load",
    section: "Load is not the enemy",
    original:
      "[One of the most common things we undo in clinic] is the belief that load is bad for knees and that the safest thing is to do less.",
    note: "Clinical-observation framing again. Same decision as the Wellness line \u2014 keep the voice consistent.",
    owner: "Chinmay",
  },
  {
    id: "prepare-ski-timeline",
    pillar: "03 Load",
    page: "Load",
    path: "/load",
    section: "Prepare for the activity · Skiing",
    original: "[Six weeks is a reasonable minimum, if the team wants a figure.]",
    note: "Specific preparation timeline. Low risk, but confirm the figure before it becomes a quoted number.",
    owner: "Chinmay",
  },
  {
    id: "diagnose-before-scan",
    pillar: "04 Diagnose",
    page: "Diagnose",
    path: "/diagnose",
    section: "What a good assessment looks like",
    original: "[Most of the diagnosis is usually made before anyone orders a scan.]",
    note: "Strong diagnostic statement on a signposting page. Confirm wording so it stays educational, not diagnostic.",
    owner: "Chinmay",
  },
  {
    id: "treat-surgeon-attribution",
    pillar: "05 Treat",
    page: "Treat",
    path: "/treat",
    section: "Treatment does not usually mean surgery",
    original:
      "And, said plainly by [a knee surgeon]: treatment does not usually mean surgery.",
    note: "Attribution placeholder. Either name the surgeon or remove the attribution entirely.",
    owner: "Chinmay",
  },
  {
    id: "hub-journey-framing",
    pillar: "Hub",
    page: "Look After Your Knees",
    path: "/knee-health",
    section: "One connected journey",
    original:
      "Hub intro currently summarises the Five without any clinician attribution \u2014 confirm whether the ecosystem framing should credit SportsHealing explicitly here.",
    note: "Open editorial question raised during the rewrite, not a bracketed line in the deck.",
    owner: "Cynthia",
  },
];
