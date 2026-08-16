# OmKneeHealth Ecosystem Audit

Audit only — no code changes made yet. Verdicts per page and homepage section against the five-site architecture and the target nav (Knee Health / Knee Score / Shop / Journal / About + Search + Basket).

## Summary of the gap

The prototype currently behaves like a hybrid supplement-brand plus mini clinical library: five long pillar essays, an anatomy/conditions "Learn" page, a science hub, seven ingredient pages, an on-site assessment engine with scoring UI and PDF generation, and a single-product shop. The ecosystem role requires: lighter curated Knee Health, a premium Knee Score gateway (not the engine), and a genuine multi-category shop.

## Navigation

| Now | Target |
| --- | --- |
| 5 pillar tabs + Supplements + Curated Knee Products | Knee Health / Knee Score / Shop / Journal / About + Search + Basket |

Pillars become children of a Knee Health menu; Curated + Product merge into Shop; Blog becomes Journal; Assessment becomes Knee Score.

## KEEP

- `Index` hero, `KneeIntroSection`, `KneeComponentsSection`, `PhilosophySection`, `OurStorySection`, `HomeFAQ`, `CTASection` — consumer-level, on-role.
- `About`, `Contact`, `PrivacyPolicy`, `TermsConditions`, `ReturnsPolicy`, `Legal`, `NotFound`.
- `Partners` page and `src/lib/partners.ts` / `PartnerLinks` — the ecosystem routing layer.
- `Curated*` components (movement support, recovery, strength, comfort, footwear) — the seed of the real Shop.
- `Product` page and `ingredients/*` — retail depth for the Nutrition shop category.
- SEO plumbing: `SEO`, schema components, sitemap, `ReferenceList`.
- Blog articles (five) — become Journal.
- `TeamResources`, `CompliancePlaybook` — internal, unlinked.

## MODIFY

- **Header/Footer**: rebuild nav to the five destinations; add Search and Basket affordances; footer columns regrouped (Knee Health, Shop, Ecosystem, Company).
- **Homepage**: reorder to Understand → Look after → Keep moving. Cut `EducationSection` or `CuratedSection` duplication; replace `AssessmentSection` with a premium Knee Score panel; make Shop a visible destination block rather than a single-product pitch.
- **Five pillar pages** (`HealthAndWellness`, `NutritionAndDiet` 738 lines, `Biomechanics`, `ManagingLoad`, `InjuryPrevention`): trim each to a scannable editorial page — intro, 4–6 cards, one "what to do this week", one contextual ecosystem link, references collapsed. Rename to the cornerstone set: Your Knee, Movement, Cartilage/Collagen & Synovial Fluid, Strength & Mobility, Nutrition, Healthy Knees Through Life.
- **`Curated`**: promote to `/shop` with the six categories (Nutrition, Braces & Supports, Cooling & Recovery, After Surgery, Movement & Rehabilitation, Foot & Lower Limb). Current categories map onto four of them; two need new shells.
- **`Product`**: keep as a shop product page under Shop > Nutrition; strip the "whole site's flagship" framing.
- **`Blog`** → `/journal`, same articles, editorial index.
- **`WhoItsFor`, `HowItWorks`, `FAQ`**: fold into Shop/Nutrition and the Knee Health hub rather than standing as separate top-level pages.
- **Partner links**: reduce to one contextually relevant destination per page instead of link blocks.

## MOVE TO ANOTHER ECOSYSTEM SITE

- **Assessment engine** (`Assessment` page, `KneeScoreEmbed` 741 lines, `KneeTriageCalculator`, `FullKneeAssessment`, `TriageGauge`, `RAGGauge`, `RecommendedActions`, triage/assessment PDF generators, `src/shopify/knee-*-embed.html`, `sections/knee-*.liquid`) → **MyKneeScore**. OmKneeHealth keeps a premium introduction and handoff only.
- **`Learn` > `CommonConditions`, detailed `KneeAnatomy`** → **SportsHealing Knee Passport** (link out); keep only a consumer-level knee overview.
- **`Learn` > `SelfCareGuidance` clinical/rehab detail** → SportsHealing rehabilitation.
- **Imaging/diagnostic language** anywhere on site → **MyKneeScan** link.
- **Clinician authority, surgery, consultation content** → **ChinmayGupte.com** link.
- **`Science` page deep mechanism content** → trimmed; evidence framing stays with products.

## REMOVE

- Duplicate homepage sections not in the new flow: `ScienceSection`, `TrustSection`, `ValueProposition`, `ProductIntro` (unused/overlapping).
- On-site scoring UI, gauges and PDF downloads once Knee Score is a handoff.
- Condition-by-condition pages and any diagnostic framing ("symptom checker", "evaluation tool", "triage").
- Liquid/Shopify embed files no longer needed here.
- Redundant standalone `/how-it-works`, `/who-its-for`, `/faq`, `/science` routes after folding (redirect to their new homes).

## NEW CONTENT REQUIRED

1. **Knee Health hub page** (`/knee-health`) — one editorial index of the six cornerstones.
2. **Cornerstone: Your Knee** — short consumer overview replacing the anatomy library, ending in a SportsHealing pathway.
3. **Cornerstone: Healthy Knees Through Life** — decade-by-decade healthy-ageing page (does not exist today).
4. **Cornerstone: Movement** — light movement page distinct from the strength page.
5. **Knee Score landing page** (`/knee-score`) — premium explainer: what the score is, why measure, how it tracks over time, single CTA to MyKneeScore.
6. **Shop landing** (`/shop`) — six category cards, curation promise, evidence-informed tone.
7. **Two new shop categories**: After Surgery, Foot & Lower Limb (curated, small).
8. **Ecosystem pathway module** — one reusable, elegant "next destination" card (replaces link lists).
9. **Search** — site-wide search entry.
10. **Basket** — shell/entry point in the header for retail.
11. Refreshed home hero line reflecting: Understand your knees. Look after them. Keep moving.

## Technical notes

- Route changes need redirects from `/assessment`, `/curated`, `/blog`, `/learn`, `/science` to preserve SEO; sitemap and canonical paths updated in the same pass.
- Deleting the assessment components removes the heaviest bundle in the app (~1,400 lines plus PDF libs).
- Basket/search are UI shells unless a commerce backend is chosen — flag before build.

## Suggested order of work

1. Nav + routing + redirects. 2. Knee Health hub and cornerstone trims. 3. Knee Score handoff page and assessment removal. 4. Shop restructure. 5. Journal + About polish. 6. Homepage reassembly.
