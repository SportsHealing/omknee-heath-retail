# OmKneeHealth Refinement — Audit (no changes made)

Existing visual identity, typography, palette and layouts are preserved throughout. This audit classifies everything currently in the site, proposes the revised sitemap, and maps redirects. Nothing is implemented until approved.

## 1. Navigation

| Item | Verdict | Reason |
| --- | --- | --- |
| Knee Health | KEEP BUT MODIFY | Relabel to LOOK AFTER YOUR KNEES; URL `/knee-health` stays. |
| Knee Score | KEEP | Already an entry point rather than an engine. |
| Shop | KEEP BUT MODIFY | Present as THE KNEE SHOP with the six-category taxonomy. |
| Journal | KEEP | Correct destination for question-led content. |
| About | KEEP | Correct, but page content needs trimming. |
| Search | KEEP BUT MODIFY | Index must be updated to the OmKnee Five vocabulary. |
| Basket | KEEP | Restrained utility icon, already present. |
| Account | NEW | Utility slot required by the brief; currently absent. |

## 2. Homepage sections

| Section | Verdict | Reason |
| --- | --- | --- |
| HeroSection | KEEP BUT MODIFY | Adopt "Your knees carry you through life" with CHECK YOUR KNEE / LOOK AFTER YOUR KNEES CTAs. |
| KneeIntroSection | KEEP BUT MODIFY | Becomes UNDERSTAND YOUR KNEE, moved below the OmKnee Five, with a Knee Passport "go deeper" pathway. |
| CornerstonesSection | KEEP BUT MODIFY | Rebuilt as THE OMKNEE FIVE (Wellness, Nourish, Understand, Load, Prepare), one line of copy per card. |
| KneeScorePanel | KEEP BUT MODIFY | Move to position 2, headline "How are your knees today?". |
| ShopDestination | KEEP BUT MODIFY | Move below the education blocks, retitle THE KNEE SHOP. |
| EducationSection | KEEP BUT MODIFY | Repurpose as the Journal teaser at position 10. |
| PhilosophySection | KEEP BUT MODIFY | Becomes WHY LOOK AFTER YOUR KNEES at position 3. |
| OurStorySection | KEEP BUT MODIFY | Compress into EXPERT KNOWLEDGE / WIDER ECOSYSTEM with a restrained clinical-lead link. |
| HomeFAQ | REMOVE (from homepage) | FAQ content already lives at `/faq`; homepage should stay editorial. |
| CTASection | KEEP BUT MODIFY | Convert into the newsletter block at position 11. |
| SignatureProductSection | KEEP BUT MODIFY | Position 8, framed inside NOURISH rather than as a hero product. |
| KneeHealthPillars | KEEP BUT MODIFY | Retire from the homepage; reuse the content inside the pillar pages. |
| KneeComponentsSection | KEEP | Already reused by the Cartilage/Collagen page. |
| CuratedSection | REMOVE | Duplicates ShopDestination since Curated merged into Shop. |
| HEALTHY KNEES THROUGH LIFE band | NEW | Editorial sport → adulthood → midlife → healthy ageing section required at position 6. |

## 3. Knee Health / educational pages

| Page | Verdict | Reason |
| --- | --- | --- |
| `/knee-health` | KEEP BUT MODIFY | Re-hero and restructure around the OmKnee Five. |
| `/your-knee` | KEEP | Correct scope for consumer-level Understand. |
| `/cartilage-collagen-synovial-fluid` | KEEP | Cornerstone retained as listed in the brief. |
| `/knee-movement` | KEEP BUT MODIFY | Position as Movement & Biomechanics under UNDERSTAND. |
| `/knee-health-wellness` | KEEP BUT MODIFY | Becomes the WELLNESS pillar page. |
| `/knee-nutrition-diet` | KEEP BUT MODIFY | Becomes NOURISH — Nutrition & Your Knee. |
| `/knee-biomechanics` | KEEP BUT MODIFY | Strength & Mobility content folds under UNDERSTAND/PREPARE. |
| `/knee-managing-load` | KEEP BUT MODIFY | Becomes the LOAD pillar; remove any fear framing. |
| `/knee-injury-prevention` | KEEP BUT MODIFY | Becomes PREPARE at a new URL; "reduce injury risk" language only. |
| `/healthy-knees-through-life` | KEEP | Matches the brief's cornerstone exactly. |

## 4. Knee Score

| Item | Verdict | Reason |
| --- | --- | --- |
| `/knee-score` page | KEEP BUT MODIFY | Keep as an elegant entry point; strengthen routing to MyKneeScore. |
| Scoring engine, triage calculator, PDF exports | ALREADY MOVED | Removed in the previous pass; MyKneeScore owns the record. |
| Knee + Sleep Score, test packages, imaging/blood-test prompts | ALREADY REMOVED | Confirmed absent; will stay out. |

## 5. Shop

| Item | Verdict | Reason |
| --- | --- | --- |
| `/shop` landing | KEEP BUT MODIFY | Retitle THE KNEE SHOP; category one = KNEE NUTRITION. |
| MovementSupport / RecoveryTools / StrengthEquipment / FootwearGuidance / AfterSurgery | KEEP BUT MODIFY | Map to the six named categories and adopt a shared WHY WE SELECTED IT block. |
| ComfortSolutions, BooksResources | KEEP BUT MODIFY | Fold into Cooling & Recovery and the Journal respectively. |
| CuratedHero / CuratedNav / CuratedCTA | KEEP BUT MODIFY | Re-skin to shop language; remove the "curated resources" framing. |
| SHOP BY NEED pathway | NEW | Six need-led routes that lead to guidance before products. |
| WHY WE SELECTED IT component | NEW | Reusable Purpose / Quality / Evidence / Design / Practicality / Value block. |
| `/product`, `/ingredients/*`, `/how-it-works`, `/who-its-for` | KEEP BUT MODIFY | Retain, but sequence them after the NOURISH education and re-check claim wording. |

## 6. Journal, About, legal, ecosystem

| Item | Verdict | Reason |
| --- | --- | --- |
| `/journal` index | KEEP BUT MODIFY | Add the eight categories from the brief. |
| Five existing `/blog/*` articles | KEEP | Useful search assets; only claim wording reviewed. |
| `/about` | KEEP BUT MODIFY | Trim to five short blocks; biography goes to ChinmayGupte.com. |
| `/partners` | KEEP BUT MODIFY | Reframe as YOUR KNEE JOURNEY rather than a partner directory. |
| Ecosystem footer module | NEW | Understated Understand / Check / Scan / Specialist care / Clinical expertise band. |
| `/faq`, `/contact`, `/legal`, `/privacy-policy`, `/terms-conditions`, `/returns-policy` | KEEP | Required and compliant. |
| `/compliance-playbook`, `/team-resources` | KEEP | Internal tools, excluded from navigation and sitemap. |
| Detailed clinical/condition content | LINK OUT | ACL, meniscus, OA treatment, surgery, MRI and rehab protocols belong to SportsHealing. |
| Imaging content | LINK OUT | Routes to MyKneeScan only when contextually relevant. |

## 7. Proposed sitemap

```text
/
/knee-health                       LOOK AFTER YOUR KNEES (The OmKnee Five)
  /knee-health/wellness
  /knee-health/nourish
  /knee-health/understand
  /knee-health/load
  /knee-health/prepare
  /your-knee
  /cartilage-collagen-synovial-fluid
  /knee-movement
  /healthy-knees-through-life
/knee-score
/shop                              THE KNEE SHOP
  /shop/knee-nutrition
  /shop/braces-supports
  /shop/cooling-recovery
  /shop/after-surgery
  /shop/movement-rehabilitation
  /shop/foot-lower-limb
  /product  /ingredients  /ingredients/*  /how-it-works  /who-its-for
/journal  +  /journal/<article>
/about   /partners   /contact   /faq
/legal /privacy-policy /terms-conditions /returns-policy
```

## 8. Redirect map (301, implemented before any URL changes)

| Old URL | New URL | Note |
| --- | --- | --- |
| `/knee-health-wellness` | `/knee-health/wellness` | Pillar renamed. |
| `/knee-nutrition-diet` | `/knee-health/nourish` | Highest-traffic education page — redirect first. |
| `/knee-biomechanics` | `/knee-health/understand` | Merged into Understand. |
| `/knee-managing-load` | `/knee-health/load` | Pillar renamed. |
| `/knee-injury-prevention` | `/knee-health/prepare` | Language change from prevention to preparation. |
| `/blog/*` | `/journal/*` | Article URLs move with the section. |
| `/curated`, `/assessment`, `/blog`, `/learn`, `/science` | already redirecting | In place from the previous pass; keep. |

Existing pillar URLs stay live until their redirects ship in the same change. Canonicals and `sitemap.xml` are updated in the same step, and old paths are kept as redirects indefinitely.

## 9. Recommended build order

1. Redirects, canonicals and sitemap (no visible change).
2. Navigation relabelling and the Account slot.
3. The OmKnee Five component and `/knee-health` restructure.
4. Homepage resequencing, including Healthy Knees Through Life.
5. Knee Shop taxonomy, Shop by Need, and WHY WE SELECTED IT.
6. Journal categories, About trim, ecosystem footer.
7. Claim-wording review pass across all product and ingredient copy.
