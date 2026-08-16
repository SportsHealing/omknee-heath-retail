# OmKnee Seven — Revised Architecture & Implementation Plan

Baseline: the completed audit plus the OmKnee Five build now in code. No changes made.

## A. What changes from the original audit

- **Five becomes Seven.** `src/lib/omkneeFive.ts` and `OmKneeFive.tsx` are superseded by `omkneeSeven.ts` and a new editorial `OmKneeSeven` component. Wellness, Nourish, Understand, Load, Prepare keep their content; Diagnose and Treat are new.
- **The audit's "move all clinical content out" verdict softens.** Diagnose and Treat now legitimately live here as *education and signposting* pages — concept explainers with no diagnosis, no scoring, no recommendations.
- **Pathway routing is no longer ad-hoc.** The audit's "one contextual ecosystem link per page" becomes a defined link map (section E) driven from `src/lib/partners.ts`.
- **Pillar URLs flatten.** `/knee-health/<pillar>` becomes `/<pillar>` per the brief, with redirects from every current path.
- **Cornerstones superseded.** `CornerstonesSection.tsx` (six cards) is retired in favour of the Seven.
- **Journal gains a pillar taxonomy** (seven pillars + Sport + Healthy Ageing) instead of ad-hoc categories.
- **Content-depth rule** replaces the audit's "trim each pillar essay": existing long pages become the pillar landing pages, with sub-topics as in-page sections rather than new URLs.

## B. Gap analysis by pillar

| Pillar | Reuse | Modify | Missing | Lives elsewhere | Components |
| --- | --- | --- | --- | --- | --- |
| 01 Wellness | `HealthAndWellness` (sleep, weight, stress, movement), `ThroughLife` | Reframe as the Wellness landing page; absorb Through Life as a section, keep its URL | Recovery/mobility section | Clinical fatigue/illness advice → SportsHealing | `PillarHero`, `PillarSectionNav` |
| 02 Nourish | `NutritionAndDiet` (gut foundation, plant-based table, glycation, FAQ), ingredient pages | Trim to landing depth; education-before-product ordering; one bridge into Knee Nutrition | Bone health + vitamin D section; "what supplements can and cannot do" | Clinical nutrition/therapeutic dosing → SportsHealing | Reuse `ReferenceList`, `FAQSchema` |
| 03 Understand | `Understand` hub, `YourKnee`, `CartilageCollagen`, `Movement`, `KneeIntroSection`, `KneeComponentsSection` | Collapse into one landing with sections; keep deep pages as children only where strong | Nothing significant | Detailed anatomy/biomechanics → SportsHealing Knee Passport | `EcosystemPathway` (exists) |
| 04 Load | `ManagingLoad`, load infographic | Remove any fear framing; add "returning after inactivity", occupational load | Load-vs-capacity explainer graphic | Clinical load rehab → SportsHealing | `JourneyStrip` |
| 05 Prepare | `InjuryPrevention`, `Biomechanics` (strength & mobility) | Merge Biomechanics strength content in; enforce "reduce injury risk" wording | Sport-specific prep (running, football, ski, racquet, gym), footwear cross-link | Injury management/rehab → SportsHealing | `SportPrepCards` |
| 06 Diagnose | `KneeScore` page, `partners.ts` | Reposition Knee Score as the CHECK entry, not a pillar | Whole page: When should I seek help / Check / Assess / Scan / Understand | Assessment → SportsHealing; imaging service → MyKneeScan; imaging education → SportsHealing | `PathwayFour`, `EcosystemPathway`; no supplement blocks |
| 07 Treat | `AfterSurgery` shop block (products only) | Keep products in Shop, not on Treat | Whole page: Manage → Rehabilitate → Support → Intervene → Surgery → Recover → Return to wellness | Depth → SportsHealing; surgery/clinician → ChinmayGupte.com | `TreatContinuum` (stepped, calm) |

## C. Revised homepage map

| # | Section | Current component | Action |
| --- | --- | --- | --- |
| 1 | Hero | `HeroSection` | MODIFY — philosophy copy, CTAs Check your knee / Look after your knees |
| 2 | Knee Score | `KneeScorePanel` | KEEP |
| 3 | Why knee health matters | `EducationSection` | MODIFY — retitle, tighten |
| 4 | The OmKnee Seven | `OmKneeFive` | REMOVE → NEW `OmKneeSeven` (numbered 01–07, 05/06 divider, cyclical 07 → 01) |
| 5 | Understand your knee | `KneeIntroSection` | KEEP |
| 6 | Healthy knees through life | `ThroughLifeBand` | KEEP |
| 7 | The Knee Shop | `ShopDestination` | KEEP — must stay below the Seven |
| 8 | Signature formulation | `SignatureProductSection` | KEEP |
| 9 | Go deeper / ecosystem | `ExpertKnowledge` | MODIFY — retitle "Go deeper", add ecosystem_transfer tracking |
| 10 | Journal | `JournalTeaser` | KEEP |
| 11 | Newsletter | `NewsletterSection` | KEEP |
| 12 | Footer | `Footer` | MODIFY — Seven listed under Look After Your Knees |
| — | `CornerstonesSection`, `CuratedSection`, `KneeHealthPillars`, `CTASection`, `HomeFAQ`, `PhilosophySection`, `OurStorySection` | RETIRE from home (Philosophy/Story move to About) |

## D. URL map

| Current | Proposed | Action |
| --- | --- | --- |
| `/knee-health` | `/knee-health` | MODIFY — hub becomes the Seven index |
| `/knee-health/wellness` | `/wellness` | REDIRECT |
| `/knee-health/nourish` | `/nourish` | REDIRECT |
| `/knee-health/understand` | `/understand` | REDIRECT |
| `/knee-health/load` | `/load` | REDIRECT |
| `/knee-health/prepare` | `/prepare` | REDIRECT |
| `/knee-health/strength-mobility` | `/prepare#strength` | REDIRECT (content merged) |
| `/your-knee`, `/knee-movement`, `/cartilage-collagen-synovial-fluid` | keep as Understand children | KEEP, re-parent breadcrumbs |
| `/healthy-knees-through-life` | keep as Wellness child | KEEP |
| — | `/diagnose` | NEW |
| — | `/treat` | NEW |
| `/knee-score` | `/knee-score` | MODIFY — About + Take (→ MyKneeScore) |
| `/shop` + category anchors | `/shop/<category>` real pages | MODIFY (Phase 2), anchors keep redirecting meanwhile |
| `/product`, `/ingredients/*` | under Shop > Knee Nutrition | KEEP |
| `/how-it-works`, `/who-its-for`, `/faq` | fold into `/product` and `/nourish` | REDIRECT |
| `/partners` | `/about/ecosystem` | REDIRECT |
| legacy `/blog/*`, `/curated`, `/assessment`, `/learn`, `/science`, `/knee-*` | unchanged | KEEP existing redirects |

No live URL is deleted without a redirect; sitemap and canonicals updated in the same pass.

## E. Cross-ecosystem link map

- **MyKneeScore** — homepage Knee Score panel; `/knee-score` primary CTA; `/diagnose` CHECK step. Nowhere else.
- **MyKneeScan** — `/diagnose` SCAN step only (plus one footer ecosystem link).
- **SportsHealing** — `/understand` (Knee Passport depth), `/load` (clinical rehab), `/prepare` (injury management), `/diagnose` ASSESS + UNDERSTAND, `/treat` rehabilitation & procedures.
- **ChinmayGupte.com** — `/treat` surgery step; About > clinical approach. Nowhere else.
- One pathway module per page maximum, rendered via `EcosystemPathway`.

## F. Build list

**Launch** — Seven data model + homepage component (mobile-first vertical journey); mega-menu; seven pillar landing pages (`/diagnose` and `/treat` new, five reworked); redirects + sitemap; Knee Score page reposition; Journal pillar taxonomy; footer/nav update; analytics events.

**Phase 2** — real `/shop/<category>` pages and product remap; About sub-pages; sport-specific Prepare sections; Journal category pages; CMS/metaobject-shaped content source.

**Future** — Knee Score green/amber/red routing surface, basket/checkout, account, personalisation.

## G. Risks

- **SEO** — flattening pillar URLs touches the strongest ranking pages; ship redirects, canonicals and sitemap in the same commit and keep H1/keyword coverage when trimming.
- **Broken links** — many in-page anchors point at `/knee-health/*`; a repo-wide link sweep and a route smoke test are required.
- **Duplicate content** — Understand vs SportsHealing Knee Passport, and Treat vs ChinmayGupte.com: keep OmKneeHealth to introductory depth and link out.
- **Shop** — category anchors becoming pages risks orphaned products; remap before switching nav links.
- **Regulatory** — Diagnose must carry no product blocks; Treat must not frame supplements as treatment; "supports/helps/maintains" is not automatically compliant and each product claim needs separate verification; device copy stays within the manufacturer's intended purpose.
- **Mobile** — seven items compressed into cards loses the journey; build the numbered vertical/swipe treatment deliberately.
- **Analytics** — `omknee_seven_view`, `pillar_select`, `diagnose_pathway_select`, `treat_pathway_select`, `ecosystem_transfer` need a single event helper rather than scattered calls.
