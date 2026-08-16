---
name: OmKnee Seven architecture
description: The definitive seven-pillar framework, URLs, ecosystem routing and regulatory guardrails for OmKneeHealth
type: feature
---
THE OMKNEE SEVEN is the central navigational and intellectual framework (supersedes OmKnee Five/Six).

01 Wellness /wellness — Look after the whole person.
02 Nourish /nourish — Nourish the body that moves you.
03 Understand /understand — Know your knee.
04 Load /load — Understand what you ask it to do.
05 Prepare /prepare — Prepare for what you want to do.
06 Diagnose /diagnose — Understand what is happening.
07 Treat /treat — Find the right care at the right time.

Cyclical: 07 → recover → return to wellness (01). Pillars 01-05 are foundations; 06-07 sit after a subtle, calm divider — never red, never hospital-like.

Data lives in `src/lib/omkneeSeven.ts` and drives the homepage component, mega-menu and footer. Analytics events in `src/lib/analytics.ts`: omknee_seven_view, pillar_select, diagnose_pathway_select, treat_pathway_select, ecosystem_transfer.

Main nav: Look After Your Knees (mega-menu of the Seven) | Knee Score | Shop | Journal | About + Search/Account/Basket.

Ecosystem routing: MyKneeScore = check/measure; SportsHealing = clinical assessment, rehab, procedures, deep education; MyKneeScan = imaging service; ChinmayGupte.com = surgery/clinician authority. OmKneeHealth explains the journey; the ecosystem provides depth.

Guardrails: Diagnose and Treat pages are education and signposting only — no diagnosis, no product upselling, no implication that supplements treat anything.
