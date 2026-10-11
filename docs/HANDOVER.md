# OmKneeHealth: The OmKnee Club. Claude Code handover

Site: www.kneelens.com (staging for omkneehealth.com)
Repo: `SportsHealing/omknee-heath-retail` (Lovable, Vite, React, TypeScript, Tailwind, shadcn/ui)
Prepared: 11 October 2026
Owner: SportsHealing team (Chinmay Gupte, Cynthia Gupte, Amirah, Indi, Jose)

---

## 0. How to use this document

- Read the whole document before changing any code.
- Then read `AGENTS.md`, `src/lib/omkneeFive.ts`, `src/content/pillarContent.ts`, `src/components/PillarPage.tsx`, `src/App.tsx` and `src/lib/partners.ts`.
- Work on a branch, never directly on `main`. Lovable syncs from `main`.
- Open one pull request per phase in section 6. Each PR description lists what changed and every placeholder still open.
- Do not edit in Lovable while a Claude Code branch is open for the same files.
- Copy in Appendix A is final wording. Use it word for word. Do not add marketing copy of your own.
- Never use em dashes in site copy. Use full stops, commas or colons.
- Text in `[SQUARE BRACKETS]` is a placeholder. Render it visibly as a placeholder in development and list it in the PR.
- If an instruction here conflicts with a compliance rule in Appendix D, the compliance rule wins. Flag the conflict in the PR.

---

## 1. Purpose of the site

OmKneeHealth is a free members' club for knee and musculoskeletal health.

When a visitor lands, they should feel their whole knee and musculoskeletal health is looked after by a specialist team, with expert-selected products and services, all in one place.

The site does four jobs:

1. **Educate** through the OmKnee Five framework and the Wellness hub.
2. **Sell** OmKneeHealth products: the OmKneeHealth Supplement, braces, after-surgery dressings, recovery and movement products.
3. **Route to assessment**: Knee Score (MyKneeScore), knee scans (MyKneeScan) and blood tests (Randox Health).
4. **Route to treatment**: SportsHealing clinics and Chinmay Gupte's team, online or in person.

The club exists to build traction: sign-ups, repeat visits and first purchases or bookings.

---

## 2. The ecosystem

| Brand | Role | Domain | What it sells |
| --- | --- | --- | --- |
| OmKneeHealth | Education, wellness and retail. This site | omkneehealth.com (staged at kneelens.com) | Supplement, braces, after-surgery, recovery, movement products |
| MyKneeScore | Knee Score, monitoring, personal record | mykneescore.com | Free score and tracking |
| MyKneeScan | Direct-access knee imaging | mykneescan.com | Same-day knee MRI (from £550), ultrasound, expert review |
| SportsHealing | Clinics. Where people are treated | sportshealing.com | Consultations, operations, reviews |
| ChinmayGupte.com | Consultant knee surgeon profile and clinical content | chinmaygupte.com | Specialist knee practice and surgery |
| Randox Health | Blood test partner | [Randox partner URL] | Clinic blood draws and lab analysis |

**Clinics (SportsHealing):**

- SportsHealing Harley Street, London `[address]`
- SportsHealing at HCA Chiswick `[address]`
- HCA Platinum Medical Centre, at The Wellington Hospital `[address]`

---

## 3. Decisions log

| # | Decision | Status |
| --- | --- | --- |
| D1 | The OmKnee Club is free at launch | Decided |
| D2 | Join offer: £100 credit towards a MyKneeScan scan, plus 15% off the OmKneeHealth shop | Decided |
| D3 | Referral reward: £10 shop credit each, when the friend joins and makes a first purchase | Decided |
| D4 | Framework: Wellness hub plus the OmKnee Five: 01 Understand, 02 Nourish, 03 Load, 04 Diagnose, 05 Treat | Decided |
| D5 | Wellness becomes its own hub at `/wellness` (sleep, recovery, behaviour change, curated products). It is no longer merged into Nourish | Decided |
| D6 | Nourish becomes bone-first nutrition. Its H1 is "Nourish the body that moves you." | Decided |
| D7 | Prepare content stays merged into Load | Decided (already in code) |
| D8 | One supplement only: "OmKneeHealth Supplement", marine formula. Drop the Vegetarian variant | Decided |
| D9 | Supplement price £62.50 per 300 g pack. Member price £53.13 | Decided. Servings per pack to confirm (see Appendix B) |
| D10 | The full formula appears only in one collapsed tab on the product page, as UK law requires before purchase. Nowhere else shows doses | Decided |
| D11 | Blood tests: Randox Health, clinic blood draws only. Sold on OmKneeHealth and MyKneeScan | Decided. Draw locations to confirm |
| D12 | Clinics: Harley St, Chiswick, Platinum Medical Centre | Decided |
| D13 | Email and club sign-up: Klaviyo | Decided |
| D14 | Commerce: Shopify as a plug-in for the shop, plus Square | Decided. Split of roles to confirm (Appendix E) |
| D15 | Build in Claude Code. Lovable stays for hosting and visual tweaks | Decided |
| D16 | No superlatives such as "world's top". Use named, verifiable credentials | Decided (compliance) |

---

## 4. Current state of the repo (as of commit `1c47c3b`)

**Already in place and to be kept**

- `OMKNEE_FIVE` in `src/lib/omkneeFive.ts` is the single source of truth for the five pillars. Keep this pattern. `AGENTS.md` requires it.
- `PillarPage` template driven by `src/content/pillarContent.ts`.
- Around 50 routes, Journal, legal pages, SEO and schema components, cookie consent, analytics helpers, redirects.
- `src/content/pendingClaims.ts`, `ContentReview`, `CompliancePlaybook` and `TeamResources` internal pages.
- `src/lib/partners.ts` holds all partner deep links.

**Problems to fix**

| # | Finding | Fix |
| --- | --- | --- |
| P1 | Product page and seven `/ingredients/*` pages, plus FAQ and HowItWorks, publish the full formula with doses | Strip doses everywhere except the collapsed full-ingredients tab on the product page (Phase 3) |
| P2 | Published doses differ from the new spec (for example collagen 10 g vs 7.9 g, vitamin D 50 µg vs 75 µg, glucosamine 1,500 mg vs 1,400 mg) | Replace with Appendix B in the collapsed tab only |
| P3 | Two variants (Marine £49.99, Vegetarian £44.99) in `ProductVariantContext.tsx` | Remove the variant system. One product, £62.50 |
| P4 | No checkout. The basket icon links to `/shop` | Shopify integration (Phase 5) |
| P5 | No backend or database | Klaviyo for sign-ups (Phase 4). Member numbers need a small serverless function (Appendix E) |
| P6 | Imaging links in `partners.ts` point to `mykneescore.com/booking` and `/expert-review` | Change to `https://www.mykneescan.com/booking` and `https://www.mykneescan.com/expert-review`. Add a `mykneescan` partner key |
| P7 | "Book a clinic visit" says Wellington Knee Unit | Replace with the three clinics (D12) |
| P8 | `/wellness` redirects to `/nourish` | Remove redirect. Build the Wellness hub |
| P9 | `/learn` redirects to `/your-knee` | Replace with the OmKnee Five overview page |
| P10 | Journal titles such as "Best supplement for knee cartilage" and "Supplements for knee osteoarthritis: evidence" | Compliance review in Phase 7. Do not link them from product pages |
| P11 | Curated products are generic entries with price ranges and external links, not stocked items | Replace with Shopify products as they are listed (Phase 5) |

---

## 5. Target information architecture

### 5.1 Navigation

**Desktop header:** Shop · Scans & Tests · Consultations · Learn (dropdown: the OmKnee Five) · Wellness · Club

Right side: search, account, basket, and a gold **Book** button.

**Book button** opens a small menu:
- Book a knee scan (MyKneeScan)
- Book a blood test (Randox Health)
- Book a consultation (SportsHealing)

**Mobile:** hamburger menu with the same items. A fixed bottom bar with three buttons: Shop, Book, Club.

### 5.2 Routes

| Route | Page | Main action | Fulfilled by | Change |
| --- | --- | --- | --- | --- |
| `/` | Home | Join the club | OmKneeHealth | Rebuild |
| `/club` | The OmKnee Club | Join free | Klaviyo | New |
| `/club-terms` | Club terms | Read | OmKneeHealth | New |
| `/wellness` | Wellness hub | Read, shop the Edit | OmKneeHealth | New. Remove redirect |
| `/learn` | OmKnee Five overview | Start with Understand | OmKneeHealth | New. Remove redirect |
| `/understand` | 01 Understand | Knee Passport | SportsHealing | Update copy |
| `/nourish` | 02 Nourish | Read. Supplement link at the end | OmKneeHealth | Rewrite: bone-first |
| `/load` | 03 Load | Movement products link | OmKneeHealth | Update copy |
| `/diagnose` | 04 Diagnose. Nav label "Scans & Tests" | Knee Score, book scan, book blood test | MyKneeScore, MyKneeScan, Randox Health | Rewrite |
| `/treat` | 05 Treat. Nav label "Consultations" | Book a consultation | SportsHealing | Rewrite |
| `/shop` | Shop | Browse categories | Shopify | Update |
| `/shop/omkneehealth-supplement` | Product page | Add to basket | Shopify | New. Replaces `/product` |
| `/product` | Old product page | 301 to `/shop/omkneehealth-supplement` | | Redirect |
| `/knee-score` | Knee Score | Take the score | MyKneeScore | Keep. Add club prompt |
| `/ingredients`, `/ingredients/*` | Ingredient education | Read | OmKneeHealth | Keep. Strip all doses |
| `/journal`, `/about`, `/contact`, legal | Support pages | | | Keep |

Keep every existing redirect. Add 301s for any route removed. Never redirect retired pages to the homepage.

### 5.3 `OMKNEE_FIVE` straplines (update `src/lib/omkneeFive.ts`)

| id | number | name | strapline | shortDescription |
| --- | --- | --- | --- | --- |
| understand | 01 | Understand | Know your knee. | Every part of your knee is alive. Learn how each tissue adapts to load, food and rest. |
| nourish | 02 | Nourish | Nourish the body that moves you. | Bone-first nutrition: protein, calcium, vitamin D, vitamin C and collagen, food first. |
| load | 03 | Load | Move it to keep it. | Build strength and capacity at the right pace, and prepare for the activities you love. |
| diagnose | 04 | Diagnose | Understand what is happening. | Start with the Knee Score, then add scans or blood tests when they are useful. |
| treat | 05 | Treat | Find the right care at the right time. | See a knee specialist online or at our clinics on Harley Street, in Chiswick or at the Platinum Medical Centre. |

Add a separate exported constant `WELLNESS_HUB` (route `/wellness`, strapline "Look after the whole person.") so Wellness can be shown as the ring around the five, not as a sixth step.

The pillar stepper shows: 01 Understand, 02 Nourish, 03 Load, 04 Diagnose, 05 Treat, then "Back to Wellness".

---

## 6. Build phases

One pull request per phase. Run `npm run build` and `npm run lint` before each PR. Test at 375, 768 and 1280 px wide.

### Phase 0. Quick fixes (small, safe, do first)

1. `partners.ts`: add a `mykneescan` partner (name MyKneeScan, url `https://www.mykneescan.com/`, role "Direct-access knee imaging"). Move the two imaging links to `https://www.mykneescan.com/booking` and `https://www.mykneescan.com/expert-review` under that key. Add MyKneeScan's 60-second knee test: `https://www.mykneescan.com/assessment`.
2. `partners.ts`: replace the "Book a clinic visit" Wellington Knee Unit link with three clinic entries (D12). Use `[SportsHealing booking URL]` with a `?clinic=harley-street|chiswick|pmc` query parameter.
3. Remove the Vegetarian variant. Delete the variant selector UI. Keep one product.
4. Strip every dose (mg, µg, mcg, IU, g amounts and %NRV) from: `/ingredients` and all `/ingredients/*` pages, `FAQ.tsx`, `HowItWorks.tsx`, `IngredientsGallery.tsx`, `DualProductIngredients.tsx`, blog posts and `ProductFAQ.tsx`. Keep the general education about each ingredient. Do not mention our product's amounts outside the product page tab.

**Done when:** `grep -rnE "[0-9][0-9,.]* ?(mg|mcg|µg|μg|IU)\b" src/pages src/components` returns hits only inside the product page's full-ingredients component.

### Phase 1. Navigation and structure

1. Update `OMKNEE_FIVE` straplines (section 5.3). Add `WELLNESS_HUB`.
2. Rebuild `Header.tsx` to section 5.1, including the Book menu and mobile bottom bar.
3. Routes: add `/club`, `/club-terms`, `/wellness`, `/learn`, `/shop/omkneehealth-supplement`. Remove the `/wellness` and `/learn` redirects. Redirect `/product` to the new product route.
4. Update `Footer.tsx`: add Club, Scans & Tests, Consultations. Keep the ecosystem footer: LOOK AFTER OmKneeHealth · CHECK MyKneeScore · UNDERSTAND Knee Passport · SCAN MyKneeScan · SPECIALIST CARE SportsHealing · CLINICAL EXPERTISE ChinmayGupte.com. Final line: "Understand. Look after. Keep moving."
5. Pillar stepper: Wellness shown as a ring, "Back to Wellness" after 05.

### Phase 2. Content pages

Build each page from Appendix A, in this order: Home (A1), Wellness hub (A3), Nourish (A4), Understand (A5), Load (A6), Diagnose (A7), Treat (A8), Learn (A9).

- Pillar pages keep using `PillarPage` and `pillarContent.ts`. Extend the section type if needed (tables, diagram placeholders, a "Make it stick" box, a "Principle" block).
- Where Appendix A says "keep existing copy", leave the current text in `pillarContent.ts` unchanged.
- Add a `DiagramPlaceholder` component (Appendix C) and place each diagram where Appendix A marks `[DIAGRAM Dn]`.

### Phase 3. Shop and product page

1. `/shop` landing per A10. Category order: OmKneeHealth Supplement · Braces & Supports · After Surgery · Cooling & Recovery · Movement & Rehabilitation · Foot & Lower Limb.
2. `/shop/omkneehealth-supplement` per A11, with the three levels of disclosure.
3. The full formula sits in one collapsed accordion, "Full ingredients and nutrition information", closed by default. Content from Appendix B.
4. Member price shown next to full price on every product card, labelled "Member price".
5. Retire `DualProductHero`, `DualProductIngredients`, `ProductSelector` and `ProductVariantContext` once nothing imports them.

### Phase 4. The OmKnee Club (Klaviyo)

Build `/club` and the join flow per A2 and Appendix E.

1. Join form component, reusable in: Home hero, Club page, Knee Score result screen, checkout prompt, footer.
2. Klaviyo client-side subscription (Appendix E1). No Knee Score answers or results are ever sent to Klaviyo.
3. Confirmation screen.
4. `/club-terms` page from A2 offer terms (long form to be supplied by legal; render short form until then).
5. Welcome flow content is in A12 for the Klaviyo team to build. It is not built in this repo.

### Phase 5. Commerce (Shopify and Square)

Per Appendix E2 and E3.

1. Shopify Storefront API cart, with Shopify-hosted checkout.
2. Basket icon shows item count and opens a cart drawer.
3. Products load from Shopify. Fall back to static data if the API is unavailable.
4. Square payment links for blood tests, if confirmed (E3).

### Phase 6. Diagrams

Place `DiagramPlaceholder` for D1 to D15 (Appendix C). Each takes an optional `image` prop so final artwork can be dropped in later. Use the brief as alt text until final alt text is written.

### Phase 7. Compliance and QA pass

Run every check in Appendix D, section D4. Report results in the PR.

---

## Appendix A. Page copy (final wording)

Conventions: `[CTA]` is a button. `[LINK]` is an inline link. `[DIAGRAM Dn]` is a diagram placeholder (Appendix C). Eyebrow = small uppercase label above a heading.

### A1. Home (`/`)

**1. Hero** (deep green, full height, calm movement photography, no clinical imagery)

- Eyebrow: THE OMKNEE CLUB
- H1: Your knees, looked after for life.
- Sub: Join a free club for knee and musculoskeletal health. Founded and led by consultant knee surgeons, with expert-selected products, scans and clinics in one place.
- [CTA primary] Join the club, free (scrolls to join form, or opens `/club`)
- [CTA secondary] Check your knee (to `/knee-score`)
- Offer strip under buttons: Founding members get £100 towards a knee scan and 15% off the shop.

**2. The team behind the club**

- H2: Specialists who know knees.
- Body: OmKneeHealth was founded by the team behind SportsHealing's knee clinics on Harley Street, in Chiswick and at the Platinum Medical Centre. Every guide, product and service here is shaped by people who assess and treat knees every day.
- Team cards: `[Chinmay Gupte: title, credentials, photo]`, `[Cynthia Gupte: title, credentials, photo]`, `[clinical team]`
- [LINK] Meet the team (to `/about`)

**3. Four doors** (four large tiles, one tap each)

- H2: Everything your knees need. One place.

| Tile | Line | Goes to |
| --- | --- | --- |
| Shop | Supplements, braces, recovery and after-surgery essentials | `/shop` |
| Scans & Tests | Same-day knee MRI and blood tests | `/diagnose` |
| Consultations | See a specialist online or in clinic | `/treat` |
| Learn | The OmKnee Five: a complete approach to knee health | `/learn` |

**4. Knee Score**

- H2: How are your knees today?
- Body: Take the free Knee Score in a few minutes. Join the club to save it and track change over time.
- [CTA] Take the Knee Score
- Small print: The Knee Score is a self assessment tool. It does not provide a medical diagnosis.

**5. The OmKnee Five**

- H2: A complete approach to lifelong knee health.
- Five numbered cards, from `OMKNEE_FIVE`, each linking to its page. Show them as a connected journey, not generic feature cards, with a subtle line joining them and Wellness as the ring around them.
- Line under the cards: Wellness sits around all five: sleep, recovery and the habits that make it stick.
- [CTA] Start with Understand · [LINK] Explore Wellness

**6. OmKneeHealth Supplement** (feature band, sand background)

- H2: Our approach to knee nutrition.
- Body: Food comes first. Where you choose to supplement, we believe you should know exactly what you are taking and why. The OmKneeHealth Supplement brings together collagen, joint-matrix ingredients, botanicals and bone nutrients in one daily serving.
- Claim line: Contains vitamin C, which contributes to normal collagen formation for the normal function of bones and cartilage.
- [CTA] Explore the supplement
- Price: £62.50 · Member price: £53.13

**7. Our clinics**

- H2: When you want to see someone.
- Four cards, each with a map thumbnail, `[address]` and a Book button:
  - SportsHealing Harley Street
  - SportsHealing at HCA Chiswick
  - HCA Platinum Medical Centre, at The Wellington Hospital
  - Online consultation, from anywhere in the UK
- [CTA] Book a consultation (to `/treat`)

**8. Club benefits**

- H2: Membership is free. The benefits are real.
- £100 towards a knee scan
- 15% off the OmKneeHealth shop
- Save and track your Knee Score
- Your personal OmKnee Five plan
- Priority booking for scans and consultations
- Members-only articles, challenges and Q&A sessions with the team
- Founding Member badge for early joiners
- [CTA] Join the club, free

**9. Journal:** three latest articles (existing `JournalTeaser`).

**10. Footer:** section 6, Phase 1, step 4.

Rule: on the Home page, education (sections 3 to 5) always sits above the supplement band and any product content.

---

### A2. The OmKnee Club (`/club`)

**Page**

- H1: Welcome to the OmKnee Club.
- Sub: Free membership for everyone who wants to keep moving. Your knee health, tracked and looked after over the years, by a team that specialises in knees.
- H2: What you get

| Benefit | Detail |
| --- | --- |
| £100 scan credit | Towards a knee scan booked through MyKneeScan |
| 15% off the shop | On supplements, braces, recovery and after-surgery products |
| Your Knee Score, saved | Track how your knees change over time, with MyKneeScore |
| Your OmKnee Five plan | Practical steps matched to your goals |
| Priority booking | Earlier access to scan and consultation slots |
| Members' Journal | Articles, seasonal challenges and Q&A sessions with the team |
| Founding Member status | A badge for our first members, kept for life |

- H2: How it works
  1. Join with your email. It takes 30 seconds.
  2. Take the Knee Score and save it with MyKneeScore.
  3. Get your welcome codes and your first plan by email.
- Live counter, shown only once above 500 members: Join [number] founding members.
- [CTA] Join the club, free

**Join form**

- Field: Email address (required)
- Field: First name (optional)
- Checkbox, unticked, required to submit: Create my free OmKnee Club membership and email me my welcome codes and club updates.
- Checkbox, unticked, optional: Also send me OmKneeHealth news and offers by email.
- Button: Join the club
- Small text: Free to join. Unsubscribe any time. [LINK] Privacy Policy · [LINK] Club terms

**Confirmation screen**

- H1: You're in. Welcome to the OmKnee Club.
- Body: Your welcome email is on its way with your £100 scan credit code and your 15% shop code.
- [CTA] Take your Knee Score
- Share line: Invite a friend and you both get £10 shop credit. [Copy invite link]
- Founding Member badge if joined before `[founding member cut-off date]`.
- Member number: show "Member #[number]" only once the member-number service exists (Appendix E1). Until then, omit it.

**Where the join prompt appears**

- Home hero and Club benefits band
- After every Knee Score result: Save your score and track it over time. Join free.
- Cart drawer: Members save 15% today. Join free.
- Footer
- Mobile bottom bar (Club)

**Referrals**

- Each member gets a personal invite link.
- Both people get £10 shop credit when the friend joins and makes a first purchase.
- Three successful referrals unlock a Founding Member perk: `[perk to confirm]`.

**Offer terms (short form, shown on `/club-terms` until legal supplies the long form)**

- One £100 scan credit per member. Valid for 12 months from joining. Used only on a MyKneeScan knee scan.
- A scan goes ahead only when MyKneeScan's clinical team agrees it is appropriate.
- 15% shop code: one use per member. Excludes gift cards and services. Cannot be combined with other codes.
- £10 referral credit: issued to both members after the friend's first purchase.
- Credits have no cash value. OmKneeHealth may change or end the offer for new members with notice.

---

### A3. Wellness hub (`/wellness`)

Sticky in-page subnav: Body clock · Sleep · Recovery · Make it stick · The Wellness Edit

**Hero**

- Eyebrow: WELLNESS
- H1: Look after the whole person.
- Intro: Your knee does not live in isolation. Sleep, stress, daily rhythm and lifestyle shape how every tissue in the joint repairs and adapts. Wellness is the foundation the OmKnee Five stand on.
- [DIAGRAM D1] The Knee Health Pyramid

**Body clock** (`id="body-clock"`)

- Eyebrow: YOUR BODY CLOCK
- H2: Your knee keeps time too.
- Body: Your body runs on a roughly 24-hour clock. Light in the morning tells it to wake. Darkness in the evening triggers melatonin and prepares you for sleep. Tissues such as tendon, cartilage and bone have their own clocks, linked to this master rhythm. When the clock is disrupted by night shifts, jet lag or late screens, recovery suffers.
- [DIAGRAM D3] The 24-hour knee clock
- Eyebrow: DAY TO LOAD, NIGHT TO REPAIR
- H2: Daylight to move. Darkness to rebuild.
- Body: Daytime is when you load your knees: walking, climbing, training. Night is when the body clears, repairs and lays down new tissue. Both halves matter.
- [DIAGRAM D4] Day and night cycle

**Sleep and your knee** (`id="sleep"`, sage background intro)

- Eyebrow: SLEEP AND YOUR KNEE
- H2: Your knees rebuild while you sleep.
- Body: Training and nutrition set up repair. Sleep is when much of it happens. Poor sleep does not just leave you tired. It is linked to weaker muscle building, poorer bone renewal and a higher risk of injury. Most adults need 7 to 9 hours.

- H2: Two systems run your sleep.
  - Your body clock. Light and darkness set a 24-hour rhythm. Darkness triggers melatonin, which prepares you for sleep.
  - Sleep pressure. From the moment you wake, sleep-promoting signals build up, like sand in an hourglass. Sleep resets it. Long daytime naps empty the hourglass early, making night sleep harder.
- [DIAGRAM D10] The sleep hourglass

- H2: What happens to your tissues overnight.
- [DIAGRAM D11] Sleep and the four tissues

| Tissue | What sleep does | What short sleep is linked to |
| --- | --- | --- |
| Muscle | Growth hormone release peaks in deep sleep, supporting repair | In one study, a single night without sleep cut muscle protein building by about 18% |
| Bone | Bone renewal follows the body clock | Sleep restriction lowered bone formation markers in lab studies. Very short sleep is linked to lower bone density in older women |
| Collagen (tendon and ligament) | Lab research shows collagen production follows a daily rhythm | Disrupted rhythm may affect how connective tissue is maintained |
| Whole body | Pain sensitivity is lower after good sleep | Young athletes sleeping under 8 hours had about 1.7 times the injury risk in one study |

- Small note under the table: Much of this research is early, small or observational. We present it as a reason to protect sleep, not as a guarantee.

- H2: What keeps you awake.
  - Light, especially screens. Delays melatonin.
  - Caffeine. Blocks adenosine, a key sleep-pressure signal.
  - Stress. Cortisol and adrenaline keep you alert.

- H2: The OmKnee sleep habits.
- [DIAGRAM D12] Sleep yes and no grid
- Do more of:
  1. Wake at the same time every day, weekends included.
  2. Get daylight in the morning.
  3. Walk or move every day.
  4. Follow a short wind-down routine.
  5. Keep the bedroom cool, dark and quiet, with a supportive mattress and pillow.
  6. If you nap, keep it under 30 minutes and before mid-afternoon.
- Do less of:
  1. Screens in the hour before bed.
  2. Caffeine after early afternoon.
  3. Heavy meals and alcohol late in the evening.
  4. Intense training close to bedtime.
  5. Lying awake watching the clock. If you cannot sleep after about 20 minutes, get up and do something calm until sleepy.

- H2: When your knee keeps you awake.
  - A pillow between the knees for side sleepers, or under the knees for back sleepers, may feel more comfortable.
  - Night pain, especially with swelling or that is getting worse, is worth getting assessed. [LINK] Scans & Tests

- H2: When to get help with sleep.
- Body: Ongoing insomnia is common and treatable. The recommended first-line treatment is cognitive behavioural therapy for insomnia (CBT-I). Speak to your GP if poor sleep lasts more than a few weeks.

**Recovery** (`id="recovery"`)

- Eyebrow: STRESS AND RECOVERY
- H2: A calm body recovers better.
- Body: Stress hormones such as cortisol and adrenaline keep you alert. In short bursts that is useful. Kept high, they disturb sleep and work against tissue repair.
  - Plan easier days between hard ones
  - Use breathing, walking or light stretching to wind down
  - Treat recovery as part of the plan, not a break from it
- Eyebrow: LIFESTYLE FACTORS
- H2: What wears on your knees.
  - Too little sleep
  - Ongoing stress
  - Long periods of sitting
  - Smoking (linked to poorer bone and tissue healing)
  - Heavy alcohol use
  - Poor nutrition
  - Carrying more body weight than is healthy for you

**Make it stick** (`id="make-it-stick"`, sand background intro)

- Eyebrow: MAKE IT STICK
- H2: Small changes. Lasting knees.
- Body: Most of us know what helps. The challenge is doing it week after week. Healthy knees come from habits, not heroic efforts.

- H2: Aim small. Repeat often.
- Body: Big goals such as running a marathon or losing weight can feel distant. Break them into small steps. A 1% improvement, repeated, adds up to real change.
- [DIAGRAM D13] Marginal gains staircase

- H2: The OmKnee habit loop.
  1. Anchor it. Attach the new habit to something you already do. Calf raises while the kettle boils.
  2. Schedule it. Put exercise in your calendar like any other commitment.
  3. Track it. Steps, sessions, bedtime. What gets measured gets noticed.
  4. Share it. Train with a friend or join a class. Commitment is easier together.
  5. Celebrate it. Mark each milestone. Recognition keeps motivation going.
- [DIAGRAM D14] The habit loop

- H2: Apply it to the OmKnee Five.

| Area | Start with | Build to |
| --- | --- | --- |
| Sleep | Fixed wake-up time | Full wind-down routine, screens off an hour before bed |
| Nutrition | One bone-friendly food a day | Protein at every meal, colourful veg daily |
| Exercise | 10-minute brisk walk | 150 minutes a week plus 2 strength sessions |
| Strength | One exercise twice a week | Full lower-body routine twice a week |
| Recovery | One planned easy day | A balanced hard and easy weekly pattern |

- H2: Never miss twice.
- Body: Missing one session or one early night does not undo progress. Get back on track the next day.
- H2: Track your progress.
- Body: MyKneeScore lets you monitor how your knee feels over time. Watching change is one of the strongest motivators. Members get a new challenge each season.
- [CTA] Take the Knee Score

**The Wellness Edit** (`id="wellness-edit"`, always last on the page)

- H2: The Wellness Edit.
- Body: A small selection of products chosen by our team to sit alongside good sleep, movement and recovery. Every product comes with clear information about what it does and does not do.
- Product rail, 6 to 8 items from Shopify (tag `wellness-edit`): OmKneeHealth Supplement (feature card), cooling and recovery, compression and support sleeves, movement and rehab equipment (bands, balance pad, foam roller), knee pillow if stocked.
- Card: image, name, one-line purpose, price, member price, Add to basket.
- Member line: Members save 15%. Join free.
- [CTA] Shop the full range

**Closing**

- Principle block: Look after the body that carries your knees. Consistency beats intensity.
- Make it stick box: Pick one anchor: a fixed wake-up time, seven days a week. It sets your clock for everything else.
- [CTA] Start the OmKnee Five (to `/understand`)

Rules: no product cards or supplement links inside the Sleep, Recovery or Make it stick sections. Products appear only in The Wellness Edit.

---

### A4. 02 Nourish (`/nourish`)

Replace the current `nourish` entry in `pillarContent.ts`. The whole-person content moves to the Wellness hub (A3).

- H1: Nourish the body that moves you.
- Intro: Your knee sits on two of the longest bones in your body. Bone is living tissue, broken down and rebuilt throughout life. What you eat gives it the raw materials. Our approach is simple: food first, bone first.

**Bone is always renewing**

- Eyebrow: BONE IS ALWAYS RENEWING
- H2: Your skeleton is never finished.
- Body: Specialised cells remove old bone and lay down new bone every day. Bone mass builds through childhood and the teens, peaks in early adulthood, then slowly declines. Good nutrition and loading help you build more early and keep more later.
- [DIAGRAM D5] Bone through life

**The bone building blocks**

- Eyebrow: THE BONE BUILDING BLOCKS
- H2: What your bones are made from.
- [DIAGRAM D6] The bone plate

| Nutrient | Role in bone | Everyday sources |
| --- | --- | --- |
| Protein | Forms the collagen framework of bone | Fish, eggs, dairy, pulses, meat, tofu |
| Calcium | The main mineral that gives bone strength | Dairy, fortified plant drinks, tinned fish with bones, tofu, green leafy veg |
| Vitamin D | Helps the body absorb and use calcium | Sunlight on skin in summer, oily fish, eggs, fortified foods |
| Vitamin C | Needed for normal collagen formation in bone and cartilage | Citrus, berries, peppers, kiwi, broccoli |
| Vitamin K | Involved in bone protein function | Green leafy veg, fermented foods |
| Magnesium | Part of bone mineral | Nuts, seeds, whole grains, pulses |

**Vitamin D in the UK**

- Eyebrow: VITAMIN D IN THE UK
- H2: A note for autumn and winter.
- Body: From October to March, UK sunlight is too weak to make enough vitamin D. UK government advice is that everyone should consider a daily 10 microgram supplement in these months.
- [LINK] NHS vitamin D guidance: https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/

**Collagen**

- Eyebrow: COLLAGEN
- H2: Collagen: the fibre that binds.
- Body: Collagen is the main protein in bone, cartilage, tendon and ligament. Your body makes it from amino acids in dietary protein, and needs vitamin C to do so. Collagen supplements are widely discussed. The evidence is still developing, and we explain it honestly.
- [LINK] Understand collagen (to `/ingredients/collagen`)

**Protein and muscle**

- Eyebrow: PROTEIN AND MUSCLE
- H2: Strong muscles protect the knee.
- Body: Protein supports muscle as well as bone. Spreading it across meals, and pairing it with strength training, is more useful than one large serving.

**What works against bone**

- Very low calorie or restrictive diets
- Heavy alcohol use
- Smoking
- Long-term inactivity
- Poor sleep ([LINK] to `/wellness#sleep`)

**Eating for sleep**

- Keep evening meals moderate in size
- Limit alcohol, which disrupts sleep quality
- Keep caffeine to earlier in the day

**Where do supplements fit?**

- H2: Food first.
- Body: A food supplement is intended to supplement the normal diet. It should not be regarded as a substitute for a varied diet or as a treatment for a knee condition. Our aim is to provide clear information about ingredients, formulation and use so that you can make an informed choice.
- H3: What supplements cannot do
- Body: A supplement should not be presented as a shortcut around movement, strength, appropriate healthcare or a balanced diet. If you have a persistent knee problem, injury or significant change in function, buying a supplement is not a substitute for appropriate assessment.

**Closing**

- Principle: Food first. Bone first. Make informed choices.
- Make it stick: Add one bone-friendly food to a meal you already eat. Yoghurt with breakfast. Greens with dinner.
- [LINK, secondary, last item on page] Explore the OmKneeHealth Supplement
- [CTA] Next: Load

Rule: no product cards on this page. One text link to the supplement only, at the very end.

---

### A5. 01 Understand (`/understand`)

Keep the existing `understand` structure in `pillarContent.ts`. Update as follows.

- H1: Know your knee.
- Intro: Every part of your knee is alive. Each tissue responds to how you load it, feed it and rest it. Knowing how they adapt makes the rest of the OmKnee Five make sense.
- [DIAGRAM D7] Four tissues, three inputs

Tissue cards (replace the current structure copy for these four; keep existing Menisci and Synovial fluid copy):

- **Bone:** Adapts to load. Regular impact and strength work signal bone to stay dense. Needs protein, calcium and vitamin D. Renewal is linked to sleep and daily rhythm.
- **Cartilage:** Covers the joint surfaces. Has no blood supply, so it relies on movement to circulate joint fluid. Gentle regular loading keeps it healthy.
- **Ligaments and tendons:** Made mostly of collagen. They adapt slowly, over weeks and months. Gradual loading and good recovery matter more than intensity.
- **Muscle:** The knee's active protection. Responds fastest of all tissues to training. Needs protein and sleep to grow and repair.

New section after the tissues:

- Eyebrow: THE ADAPTATION RULE
- H2: Load, feed, rest, repeat.
- Body: Tissue gets stronger when three things happen together:
  1. Load sends the signal to adapt. ([LINK] `/load`)
  2. Nutrition supplies the building blocks. ([LINK] `/nourish`)
  3. Sleep and recovery give the time to rebuild. ([LINK] `/wellness#sleep`)
- Body: Remove any one and adaptation slows.
- Render the three steps as a simple three-circle cycle built in code.

Keep the existing "More than one direction" and "Want to go deeper?" (Knee Passport) sections.

- Principle: The better you understand your knee, the easier it is to look after it.
- [CTA] Next: Nourish

---

### A6. 03 Load (`/load`)

Replace the current `load` entry in `pillarContent.ts` with the sections below, in this order.

- H1: Move it to keep it.
- Intro: Your knees are built to be used. The right load at the right pace makes bone denser, muscle stronger and cartilage healthier. Too little load is a risk too.

**Load and capacity** (keep existing copy) then:

- [DIAGRAM D8] Load vs capacity

**How much activity?**

- Eyebrow: HOW MUCH ACTIVITY?
- H2: Your weekly movement guide.
- Body: Based on World Health Organization guidance, with a knee focus added.
- [DIAGRAM D2] Weekly movement by age

| Age | Aerobic activity | Strength | Knee focus |
| --- | --- | --- | --- |
| 5 to 17 | 60 minutes a day on average, moderate to vigorous | Muscle and bone strengthening 3 days a week | Jumping, running and varied play build bone for life |
| 18 to 64 | 150 to 300 minutes moderate, or 75 to 150 minutes vigorous, a week | Major muscle groups, 2 or more days a week | Leg strength: squats, lunges, step-ups, calf raises |
| 65 and over | As for adults | As for adults | Add balance and strength work 3 or more days a week to reduce fall risk |

- Callout: Every minute counts. Short bouts add up.

**The four types of knee load**

- Walking and everyday movement. The base. Aim to walk briskly, as if you might miss a train.
- Strength. The most direct way to protect the knee. Thighs, hips and calves.
- Impact. Hopping, skipping, jogging. A strong signal for bone, introduced gradually.
- Balance. Single-leg work trains the control that protects ligaments.

**Sit less, move more**

- H2: As little as possible. As much as possible.
- Do less: Long periods sitting. Screen time without breaks.
- Do more: Stairs instead of lifts. Walk or cycle short journeys. Park further away. Stand and move every 30 to 60 minutes.

**Keep existing sections:** "It is the change that gets you", "Load is not the enemy", "Think in weeks", "Coming back after a break".

**Timing your training**

- Body: Strength and reaction time tend to peak in the late afternoon for many people. If hard evening training disturbs your sleep, finish intense sessions an hour or more before bed.

**Prepare for what you love doing** (replaces the existing "Prepare for the activity" section)

- H2: Plan for what you love doing.
- Body: A ski trip, a first 10k, a walking holiday. Preparation starts weeks before, not minutes before.
- Four cards:
  - Strength: For the knee, this includes more than the quadriceps. The hips, hamstrings, calves and wider lower limb all contribute to movement.
  - Movement control: Control, coordination and technique influence how we land, change direction, squat and step.
  - Balance: Sensing and responding to body position. Balance training can form part of preparation for many activities.
  - Warm up with purpose: Raise body temperature, move through relevant ranges and gradually introduce movements similar to the session ahead.
- H3: A knee-friendly week
- [DIAGRAM D9] The OmKnee week planner
  - 2 strength sessions
  - 1 to 2 balance or mobility sessions
  - Regular walking or cycling most days
  - Easy days after hard days
  - 7 to 9 hours sleep, same wake time
- H3: Counting down to the big day (vertical timeline built in code)
  - 8 to 12 weeks: Build leg strength and base fitness
  - 4 to 8 weeks: Add activity-specific movement: turning, landing, hills
  - 1 to 2 weeks: Reduce volume, keep intensity, protect sleep
  - Travel days: Keep moving, stay hydrated, adjust to the new time zone with morning light
- H3: Prepare for your activity
  - Running: Build distance and intensity progressively.
  - Skiing: Consider strength, endurance, balance and repeated turning demands before the trip.
  - Football: Running alone does not fully prepare the body for acceleration, deceleration and changes of direction.
  - Tennis and padel: Prepare for repeated lateral movement, acceleration and rotation.
  - Gym: Technique, appropriate resistance and progression matter more than chasing load for its own sake.
- H3: Can every injury be prevented?
- Body: No. Sport and physical activity always involve some risk. The objective is to prepare well and reduce modifiable risks where possible, not to promise that injury will never happen.

**Listen to change** (keep existing copy), then the gateway band to Diagnose and Treat.

**Closing**

- Principle: Build capacity rather than fearing load.
- Make it stick: Book it like a meeting. Two fixed strength sessions in your calendar each week.
- [LINK] Movement and rehab equipment (to `/shop#movement-rehabilitation`)
- [CTA] Next: Diagnose

---

### A7. 04 Diagnose. Nav label "Scans & Tests" (`/diagnose`)

- H1: Understand what is happening.
- Sub: When your knee changes, the right information helps you decide what to do next. Start with how your knee feels, then add scans or tests when they are useful.

**Step 1. Check**

- H2: Start with the Knee Score.
- Body: A few minutes, free, and the best starting point. Your answers show how your knee feels and functions today.
- [CTA] Take the Knee Score

**Step 2. Assess** (keep existing "Assess" copy and CTA)

**Step 3. Scan**

- H2: Same-day knee MRI.
- Body: Through MyKneeScan, book a knee MRI at our Harley Street partner clinic, often on the same day. Every scan comes with an expert report, with optional specialist review.
  - MRI from £550 (link to mykneescan.com for current prices)
  - Expert review and express report options
  - Members: £100 off with your club credit
- [CTA] Book a scan at MyKneeScan (`https://www.mykneescan.com/booking`)
- [LINK] Take MyKneeScan's 60-second knee test (`https://www.mykneescan.com/assessment`)
- Keep the existing copy explaining X ray, MRI and ultrasound, and that not every knee problem needs imaging.

**Step 4. Test**

- H2: Blood tests for bone and musculoskeletal health.
- Body: Some aspects of bone and muscle health show up in your blood, such as vitamin D levels. Our blood tests are provided by Randox Health, processed by an accredited laboratory, and every result is reviewed by a clinician.

| Panel | Includes | Price |
| --- | --- | --- |
| Vitamin D check | 25-OH vitamin D | [£] |
| Bone health panel | Vitamin D, calcium, phosphate, alkaline phosphatase, [others] | [£] |
| Active body panel | [tests to confirm] | [£] |

- How it works: 1. Order online. 2. Visit a clinic for a quick blood draw at [clinic location, to confirm]. 3. Results with clinician comments.
- [CTA] Order a blood test (`[Randox or Square payment link]`)
- Small print: Blood tests are provided by Randox Health. [Regulator wording to be supplied by Randox.] A blood test cannot diagnose a knee condition on its own.

**Step 5. Put it together** (keep existing copy)

- [CTA] Book a specialist to review your results (to `/treat`)

**When to seek help** (keep existing copy) plus: If your knee is locked, you cannot put weight on it, or you have a fever with a hot swollen knee, seek urgent medical care.

Rules: no supplement or product content anywhere on this page. The Knee Score never routes automatically to scans or tests; they are shown as options. Neutral palette, no red.

---

### A8. 05 Treat. Nav label "Consultations" (`/treat`)

- H1: Find the right care at the right time.
- Sub: See a knee specialist online or in clinic. Treatment does not necessarily mean surgery. It starts with understanding you and your knee.

**Ways to be seen**

| Option | Where | Best for | Button |
| --- | --- | --- | --- |
| Online consultation | Video call, anywhere in the UK | Advice, reviewing scan results, deciding next steps | Book online |
| SportsHealing Harley Street | [address], London | Full assessment, examination, treatment planning | Book Harley Street |
| SportsHealing at HCA Chiswick | [address], London | Full assessment, examination, treatment planning | Book Chiswick |
| HCA Platinum Medical Centre | The Wellington Hospital, [address], London | Full assessment, examination, treatment planning | Book Platinum Medical Centre |

- All Book buttons go to `[SportsHealing booking URL]?clinic=<online|harley-street|chiswick|pmc>`.
- Member line: Club members get priority booking.

**Your specialists**

- H2: The team you will see.
- Team cards: photo, name, role, specialisms, `[credentials]`, link to profile on sportshealing.com or chinmaygupte.com.

**What care can include:** keep existing Manage, Rehabilitate, Support, Intervene, Surgery and Recover sections.

- Add to Support: After surgery, our shop stocks practical recovery products such as wound dressings and cooling aids. Always follow your surgical team's advice. [LINK] After Surgery products (`/shop#after-surgery`)
- Recover ends with [CTA] Back to Wellness.

Rules: no supplement products. Nothing suggests supplements are a treatment. Clinician profiles never mention or endorse the OmKneeHealth Supplement.

---

### A9. The OmKnee Five overview (`/learn`)

- H1: The OmKnee Five.
- Sub: A complete approach to lifelong knee health.
- Body: Five connected steps, held together by Wellness. You will not always need every step. Most of the time the focus is understanding, nourishing and loading your knees well. When something changes, Diagnose and Treat connect you with scans, tests and specialists.
- [DIAGRAM D15] The OmKnee Five ring
- Five cards from `OMKNEE_FIVE`, then a Wellness card.
- [CTA] Start with Understand

---

### A10. Shop landing (`/shop`)

- H1: The Knee Shop.
- Sub: Selected by our team. Clear information. Better choices.
- Member banner: Club members save 15%. Join free.
- Category tiles in this order, each an anchored section: OmKneeHealth Supplement · Braces & Supports (`#braces-supports`) · After Surgery (`#after-surgery`) · Cooling & Recovery (`#cooling-recovery`) · Movement & Rehabilitation (`#movement-rehabilitation`) · Foot & Lower Limb (`#foot-lower-limb`).
- Keep the existing category intro copy.
- Each category shows its education link before its product grid.
- After Surgery products carry the line: Follow the advice of your surgical team.
- Braces, dressings and cooling products: claims stay within the manufacturer's stated intended purpose.

---

### A11. Product page (`/shop/omkneehealth-supplement`)

**Three levels of disclosure**

| Level | Where | Shows |
| --- | --- | --- |
| 1 | Home, Wellness Edit, Shop cards | Name, one line, the four ingredient groups without doses, price, member price |
| 2 | Product page, main view | Groups, authorised claims, approach, how to take it, price, Add to basket |
| 3 | Product page, accordion "Full ingredients and nutrition information", closed by default | Full list with amounts, %NRV, allergens, warnings, storage, business address (Appendix B) |

**Level 2 copy**

- H1: OmKneeHealth Supplement
- Sub: A daily powder bringing together collagen, joint-matrix ingredients, botanicals and bone nutrients. Vanilla cherry flavour.
- Price: £62.50 per 300 g pack · Member price: £53.13 with your club code · [servings per pack, to confirm]
- [CTA] Add to basket

- H2: What's inside
  - **Collagen complex:** marine collagen peptides types I, II and III
  - **Joint matrix:** glucosamine, chondroitin, hyaluronic acid, MSM
  - **Botanicals:** turmeric with black pepper extract, boswellia, sea buckthorn
  - **Bone nutrients:** vitamins C, D3, K2 and E, magnesium, zinc, copper, bamboo silica

- H2: What the nutrients do
  - Vitamin C contributes to normal collagen formation for the normal function of bones and cartilage.
  - Vitamin D contributes to the maintenance of normal bones and normal muscle function.
  - Vitamin K contributes to the maintenance of normal bones.
  - Zinc contributes to the maintenance of normal bones.
  - Copper contributes to the maintenance of normal connective tissues.
  - Vitamin E contributes to the protection of cells from oxidative stress.
  - Developer note: each line must be verified against the GB Nutrition and Health Claims Register before go-live. Keep them in one data file (`src/content/productClaims.ts`) with a `verified: boolean` flag. Render only verified claims in production.

- H2: Our approach
- Body: Food comes first. This is a food supplement, intended to supplement a varied and balanced diet, not replace it. It is not a treatment for any knee condition. If your knee is painful, swollen or not working as it should, get it assessed. [LINK] Scans & Tests

- H2: How to take it
- Body: Mix one level scoop (13.8 g) with [250 ml] of water once a day. Do not exceed the recommended daily dose.

**Remove from the current product page:** testimonials making efficacy statements, the variant selector, any clinician endorsement of the product, any dose outside the Level 3 accordion.

---

### A12. Klaviyo welcome flow (for the email team; not built in this repo)

| # | Send | Subject | Content | Button |
| --- | --- | --- | --- | --- |
| 1 | On joining | Welcome to the OmKnee Club | £100 scan code, 15% shop code, how the club works | Take your Knee Score |
| 2 | Day 2 | Your OmKnee Five plan | One practical step from each pillar | See your plan |
| 3 | Day 5 | Meet the team behind your club | Chinmay, Cynthia and the clinical team; the three clinics | Meet the team |
| 4 | Day 9 | Your knees rebuild while you sleep | Sleep and tissue repair, the six OmKnee sleep habits | Read Sleep and your knee |
| 5 | Day 14 | Your first challenge | 30 days of knee strength, credit reminder and expiry, invite a friend | Start the challenge |

**Email 1 body**

> Welcome to the OmKnee Club. You're one of our founding members.
>
> Here's what's waiting for you:
> - £100 towards a knee scan: {{ scan_code }}
> - 15% off the OmKneeHealth shop: {{ shop_code }}
>
> Start with the Knee Score. It takes a few minutes, and saving it lets you track how your knees change over time.
>
> [Take your Knee Score]
>
> Keep moving,
> The OmKneeHealth team

Rules: no link from sleep or health content to the supplement. No health data in any email.

---

## Appendix B. OmKneeHealth Supplement specification

Source: manufacturer specification "Marine Collagen Vanilla/Cherry flavour". Confidential. This data appears on the site only inside the Level 3 accordion.

- Format: powder, vanilla cherry flavour. Natural flavour. Sweetener: steviol glycosides
- Pack: 300 g `[confirm: spec sheet says 750 ml jar, 20 servings]`
- Serving: 13.8 g, once a day
- Servings per pack: `[to confirm: 300 g ÷ 13.8 g = 21.7, so the label must state a whole number that matches net weight]`
- Shelf life: 12 months. Store in a dry place below 25°C, in the original packaging, out of reach of children
- Price: £62.50. Member price £53.13

| Per daily serving (13.8 g) | Amount | % NRV |
| --- | --- | --- |
| Marine collagen peptides (types I and III) | 7,900 mg | |
| Glucosamine sulphate | 1,400 mg | |
| Turmeric root extract 4:1 | 1,000 mg | |
| MSM (methylsulfonylmethane) | 900 mg | |
| Chondroitin sulphate | 800 mg | |
| Boswellia serrata extract (30% AKBA) | 400 mg | |
| Bamboo extract (of which silica 200 mg) | 286 mg | |
| Hydrolysed marine collagen peptides type II | 100 mg | |
| Hyaluronic acid (as sodium hyaluronate) | 100 mg | |
| Sea buckthorn extract 10:1 | 100 mg | |
| Black pepper extract (BioPerine) | 10 mg | |
| Vitamin C (as L-ascorbic acid) | 100 mg | 125% |
| Vitamin E (as DL-alpha tocopheryl acetate) | 50 mg | 417% |
| Vitamin D3 (as cholecalciferol) | 75 µg | 1,500% |
| Vitamin K2 (as menaquinone MK-7) | 35 µg | 47% |
| Magnesium (marine) | `[elemental mg]` | `[%]` |
| Zinc (as zinc gluconate) | 15 mg | 150% |
| Copper (as copper gluconate) | 2 mg | 200% |

- Full ingredient list in descending order by weight: `[from manufacturer label]`
- Allergens: contains **fish**. `[Crustaceans: confirm glucosamine source]`
- Warnings: Food supplements should not replace a varied diet and healthy lifestyle. Do not exceed the recommended daily dose. Not suitable for children, or for pregnant or breastfeeding women. If you take anticoagulants such as warfarin, or any medication, or have a medical condition, speak to your doctor before use. Keep out of reach of children.
- Business name and UK address: `[placeholder]`

**Formula issues for the business (not for code):**

- Vitamin D at 75 µg is legal but high. NHS guidance is no more than 100 µg a day from all sources.
- Magnesium must be stated as elemental magnesium. A bone claim needs at least 15% NRV (56.25 mg).
- Confirm the turmeric with piperine safety position with the manufacturer.
- Fix "Shell life" to "Shelf life" on the label.

---

## Appendix C. Diagram register

Component: `DiagramPlaceholder({ id, title, brief, image? })`. Renders a 16:9 card with a dashed gold border, "Diagram {id}", the title and the brief in small text. When `image` is set, render the image with the brief as alt text. Style for final art: deep green and gold, calm editorial line art, no MRI or surgical imagery, no red.

| ID | Title | Page | Brief |
| --- | --- | --- | --- |
| D1 | The Knee Health Pyramid | Wellness, Home | Three wave-shaped tiers. Base: Protect (sleep, stress, daily rhythm). Middle: Build (nutrition, strength, loading). Top: Perform (prepare, progress). Icon row beneath: lack of sleep, stress, sitting, smoking, alcohol, poor diet, excess weight |
| D2 | Weekly movement by age | Load | Three age bands with simple figures, using the WHO figures in A6. Knee-focus line per band. Footer panel: Do less / Do more. Caption credits WHO 2020 guidelines |
| D3 | The 24-hour knee clock | Wellness | Clock face. 07:30 melatonin ends, 10:00 peak alertness, 15:30 fast reactions, 17:00 strength peak, 21:00 melatonin starts. Early night: deep sleep and growth hormone peak. Overnight: tissue repair. Caption: typical pattern, varies by person |
| D4 | Day and night cycle | Wellness | Two panels. Day: sun, figure walking, label Load. Night: moon, figure sleeping, label Repair. Knee highlighted in both |
| D5 | Bone through life | Nourish | Curve of bone mass by age, rising to a peak around 30 then slowly declining. Two lines: with and without good nutrition and loading |
| D6 | The bone plate | Nourish | Plate split into protein, calcium foods, vegetables and fruit, whole grains. Small sun icon for vitamin D |
| D7 | Four tissues, three inputs | Understand | Knee cross-section showing bone, cartilage, ligament and muscle. Three arrows in: Load, Nourish, Sleep |
| D8 | Load vs capacity | Load | Two lines over time: load demand and capacity. Safe zone where capacity stays above load. A spike where load jumps too fast |
| D9 | The OmKnee week planner | Load | Seven-day strip with icons for strength, walking, balance, rest, and a moon for sleep each night |
| D10 | The sleep hourglass | Wellness | Hourglass filling through the day (sleep pressure), turning at night. Side note: long naps drain it early |
| D11 | Sleep and the four tissues | Wellness | Sleeping figure with four callouts: muscle, bone, collagen, injury risk |
| D12 | Sleep yes and no grid | Wellness | Six Yes icons and five No icons matching the habit lists in A3. Muted tone for No, not red |
| D13 | Marginal gains staircase | Wellness | Shallow staircase of small steps rising to a goal flag |
| D14 | The habit loop | Wellness | Circular loop: Anchor, Schedule, Track, Share, Celebrate |
| D15 | The OmKnee Five ring | Learn, Home | Five numbered segments in a ring (Understand, Nourish, Load, Diagnose, Treat) with Wellness at the centre. Arrow from Treat back to Understand |

D1, D3, D4, D10, D12, D13 and D14 are adapted from "Health Revolution" (copyright assigned to the team). Redraw in house style; do not reproduce the originals.

---

## Appendix D. Compliance rules

These override any other instruction. The business must also get sign-off from a food regulatory consultant and a healthcare marketing reviewer before launch.

### D1. Structure

1. Keep a clear separation between EDUCATION, COMMERCE and CLINICAL PATHWAY.
2. Education comes before commerce on the Home page. No product content above the OmKnee Five.
3. Diagnose (`/diagnose`): no supplement or product content at all.
4. Treat (`/treat`): nothing suggests supplements are a treatment. After-surgery products may be linked only from the Support section.
5. Sleep, Recovery and Make it stick sections: no product cards and no supplement links.
6. Nourish: one text link to the supplement, at the end of the page only.
7. Clinician names, photos and profiles never appear next to the supplement and never endorse it.
8. Diagnose and Treat are not visually alarming. No red anywhere on the site, including Knee Score bands.
9. "When to seek help" information is always public, never behind the club join.

### D2. Food supplement claims

1. A food supplement is presented as a supplement to the normal diet, never a substitute for a varied and balanced diet.
2. Never state or imply that a supplement diagnoses, treats, prevents or cures a condition; repairs or regrows cartilage; reverses osteoarthritis; heals injury; or replaces rehabilitation or clinical care.
3. Only authorised claims from the GB Nutrition and Health Claims Register, at the right dose and conditions of use. Do not generate claims from ingredient names.
4. There are no authorised claims for collagen, glucosamine, chondroitin, hyaluronic acid, MSM, turmeric, boswellia, silica or sea buckthorn. Name them; make no joint, cartilage, inflammation, pain or recovery claims for them.
5. Words such as "supports", "helps" and "maintains" are not automatically compliant. Treat all product wording as controlled content.
6. Full mandatory food information (ingredients, quantities, allergens, warnings, business address) is available on the product page before checkout. This is the only place doses appear.

### D3. Club, offers, services and data

| Area | Rule |
| --- | --- |
| Superlatives | No "world's top", "best", "leading" or "number one" without hard evidence. Use named credentials |
| Injury language | "Reduce injury risk", never "prevent injury" |
| Fear | No fear-based language about movement, load or ageing |
| Scan credit | Scans go ahead only when MyKneeScan's clinical team agrees they are appropriate. Copy must not push people towards scans |
| Knee Score | Never routes automatically to scans, blood tests, injections, surgery, supplements or paid packages |
| Blood tests | Provided by Randox Health with clinician review. No link from a result to a supplement. Regulator wording supplied by Randox |
| Health data | Knee Score answers and results stay with MyKneeScore. Never send health data to Klaviyo, Shopify, Square or analytics |
| Marketing consent | Unticked boxes. Unsubscribe link in every email. Privacy Policy updated to name Klaviyo, Shopify and Square |
| Cookies | Klaviyo onsite tracking and Shopify scripts load only after cookie consent (existing `CookieConsent`) |
| Clinics | CQC registration must cover Harley St, Chiswick, Platinum Medical Centre and online consultations |
| Devices | Braces, dressings and cooling products: claims stay within the manufacturer's intended purpose |
| Offer terms | `/club-terms` published before launch |
| Redirects | Keep existing redirects. 301 any removed URL to its closest match. Never mass-redirect to the homepage |

### D4. QA checks for the Phase 7 pull request

1. Search the codebase and report every hit next to supplement or product content: `prevent`, `treat`, `cure`, `repair`, `regrow`, `rebuild cartilage`, `reverse`, `heal`, `inflammation`, `pain relief`, `world's`, `best`, `leading`, `clinically proven`.
2. Dose search (Phase 0 check) returns hits only in the Level 3 accordion.
3. No `#ef4444`, `red-` Tailwind classes or similar red tones in the UI.
4. No em dashes (U+2014) in rendered copy.
5. Every `[placeholder]` listed in the PR.
6. All anchors work: `/wellness#body-clock`, `#sleep`, `#recovery`, `#make-it-stick`, `#wellness-edit`, and the shop category anchors.
7. Mobile at 375 px: no horizontal scroll, tables stack into cards, bottom bar does not cover content.
8. WCAG AA contrast, including gold text on off-white. Visible focus states. Semantic heading order.
9. Every route has a page title and meta description (existing `SEO` component).
10. Klaviyo payloads contain no Knee Score or health fields.

---

## Appendix E. Integrations

All keys go in environment variables. Only public, client-safe keys may be prefixed `VITE_`. Never commit secrets.

### E1. Klaviyo (club sign-up and email)

- Load Klaviyo onsite JS only after cookie consent: `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${VITE_KLAVIYO_PUBLIC_KEY}`.
- Subscribe with the Client API from the browser: `POST https://a.klaviyo.com/client/subscriptions/?company_id=${VITE_KLAVIYO_PUBLIC_KEY}` with a current `revision` header and a JSON:API `subscription` body.
  - Required box ticked: subscribe the email to list `VITE_KLAVIYO_CLUB_LIST_ID` ("OmKnee Club").
  - Optional box ticked: also subscribe to `VITE_KLAVIYO_NEWS_LIST_ID` ("OmKneeHealth News").
  - Profile properties: `first_name`, `club_joined_at` (ISO date), `founding_member` (boolean), `referred_by` (from a `?ref=` URL parameter, stored in sessionStorage), `join_source` (hero, club-page, knee-score, cart, footer).
  - Never send Knee Score answers, bands or any health information.
- Welcome codes are issued by Klaviyo, not the site:
  - 15% shop code: Klaviyo's Shopify integration generates unique one-use Shopify discount codes in email 1.
  - £100 scan code: MyKneeScan creates a batch of unique codes; the team uploads them to Klaviyo as static coupon codes.
- Member numbers: Klaviyo cannot issue sequential numbers. Phase 4b needs a small serverless function (for example a Cloudflare Worker or a Lovable Cloud edge function) holding a counter. Until it exists, show the Founding Member badge without a number.
- Referrals: use a Shopify referral app `[app to choose]` that issues the £10 credits and syncs with Klaviyo. The site only captures `?ref=` and passes it to Klaviyo.
- Errors: show "Something went wrong. Please try again, or email [support email]." Never lose the typed email on error.

### E2. Shopify (online shop)

- Use Shopify as a headless plug-in: create a Headless (or Storefront) sales channel and use the Storefront API with a public token: `VITE_SHOPIFY_STORE_DOMAIN`, `VITE_SHOPIFY_STOREFRONT_TOKEN`.
- Cart: `cartCreate`, `cartLinesAdd`, `cartLinesUpdate`. Store the cart ID in localStorage (wrapped in try/catch). Checkout redirects to `cart.checkoutUrl` (Shopify-hosted checkout).
- Product handles: `omkneehealth-supplement`, plus curated products as they are listed. Collections map to shop categories; tag `wellness-edit` for the Wellness hub rail.
- Member price: Shopify shows one price without a logged-in member, so label it "Member price £53.13 with your club code". The discount applies at checkout via the code.
- Fallback: if the Storefront API fails, show products from static data with "Add to basket" disabled and a "Shop temporarily unavailable" note.
- Do not build our own payment form.

### E3. Square

- Assumed role, to confirm: Square takes payment for blood tests and clinic services, using Square payment links or Square Appointments. Shopify handles physical products.
- Implementation: blood test "Order" buttons and any clinic deposit buttons link to Square payment or booking links stored in one config file (`src/lib/bookingLinks.ts`): `VITE_SQUARE_LINK_VITD`, `VITE_SQUARE_LINK_BONE`, `VITE_SQUARE_LINK_ACTIVE`, or `[link]` placeholders.
- No Square SDK in the site unless the business confirms in-site payments are needed.

### E4. Analytics

- Reuse `src/lib/analytics.ts`. Add events: `club_join_started`, `club_join_completed` (with `join_source`), `book_menu_opened`, `book_scan_click`, `book_blood_test_click`, `book_consultation_click` (with clinic), `add_to_cart`, `checkout_started`.
- No health data in analytics events.

---

## Appendix F. Open questions (do not block the build; use placeholders)

| # | Question | Owner |
| --- | --- | --- |
| Q1 | Supplement pack: 300 g with 21 servings, or another net weight or serving size? | Amirah, manufacturer |
| Q2 | Member price: £53.13 exactly, or rounded to £53? | Chinmay |
| Q3 | Randox blood draw locations, panel names, tests and prices; regulator wording | Amirah, Randox |
| Q4 | Square vs Shopify: confirm Square handles blood tests and clinic payments | Amirah |
| Q5 | Team names, titles, credentials and photos | Cynthia |
| Q6 | Clinic addresses and the SportsHealing booking URL with clinic parameters | Amirah |
| Q7 | Founding member cut-off date and the three-referral perk | Chinmay |
| Q8 | Klaviyo public key and list IDs; Shopify store domain and Storefront token | Indi, Jose |
| Q9 | Referral app choice | Indi |
| Q10 | Long-form club terms and updated Privacy Policy | Legal |
| Q11 | Journal articles with supplement-led titles: keep, retitle or retire? | Cynthia |
| Q12 | Final diagram artwork for D1 to D15 | Design |

---

_End of handover._

