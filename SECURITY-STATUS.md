# Security Status: OmKneeHealth

Running record of the site's security posture. Update this file whenever a finding changes state.

- Last reviewed: 2026-10-08
- Reviewer: Claude Code security audit
- Overall risk: **Medium** (was High before the fixes below)

## Stack (as found)

- React 18 + Vite 5 + TypeScript + Tailwind + shadcn/ui. Built with Lovable.
- Static single-page app. No backend, no database, no login, no payments, no file uploads, no AI endpoints.
- Hosting: GitHub Pages via `.github/workflows/deploy.yml`. Lovable hosting may also be live (needs confirmation).
- Repo `SportsHealing/omknee-heath-retail` is **public**.
- Third parties loaded by the browser: Google Fonts only.
- Personal data handled by the site today: none stored or sent. Contact form opens the visitor's email app. Newsletter form stores nothing.

## Findings

| ID | Severity | Area | Location | Issue | Status |
|----|----------|------|----------|-------|--------|
| F-01 | High | Auth / Secrets | `src/pages/TeamResources.tsx:30` | Team password hardcoded in browser code. Gate was a `sessionStorage` flag. Internal PDFs were generated in the browser, so anyone could read them from the public JS bundle. Confirmed: old production bundle contained the password and playbook text. | Partly fixed. Pages removed from public build. Password still in public git history and repo. |
| F-02 | Medium | Data protection | `src/pages/Contact.tsx:41-57` | Contact form faked success. Messages (often health questions) were silently discarded. Name and subject logged to the browser console. | Fixed |
| F-03 | Medium | Data protection | `src/components/home/NewsletterSection.tsx:33` | Newsletter form says "we will be in touch" but stores nothing. Users think they subscribed. | Open (needs decision) |
| F-04 | Medium | Dependencies | `package-lock.json` | 21 known vulns. Runtime ones: react-router open redirect, DOMPurify XSS (via jspdf), lodash prototype pollution, fflate. | Fixed for runtime patch releases. Remaining items are build tools or need major upgrades. |
| F-05 | Medium | Repo exposure | GitHub repo visibility | Public repo exposes internal compliance docs, pending claims, Lovable audit plans and the old password. | Open (needs decision) |
| F-06 | Low | Headers | `index.html` | No Content Security Policy or referrer policy. | Fixed via meta tags. HSTS and frame-ancestors need host config. |
| F-07 | Low | CI/CD | `.github/workflows/deploy.yml` | Build job had Pages write and OIDC token rights. Used `npm install` (not lockfile-exact). | Fixed. Actions still pinned by tag, not commit SHA. |
| F-08 | Low | Info disclosure | `public/robots.txt`, `Footer.tsx:270` | Internal page paths advertised publicly. | Fixed |
| F-09 | Low | UK GDPR transparency | `src/pages/PrivacyPolicy.tsx:85-96, 166` | Policy describes assessment data, transactions and cookies the site does not collect. Cookie banner disabled (`CookieConsent.tsx:35`). | Open (needs confirmation) |
| F-10 | Low | Consent | `src/lib/analytics.ts:25` | `track()` pushes events with no consent check. Harmless today (no tag manager loaded). Becomes a PECR breach if GTM/GA is added. | Open |

## Changes deployed (branch `claude/lucid-pascal-7826ix`)

- Internal tools (`/team-resources`, `/compliance-playbook`, `/content-review`) are excluded from production builds. They load in `npm run dev` or a private build with `VITE_ENABLE_INTERNAL_TOOLS=true`. Verified: built bundle no longer contains the password or internal document text, and those routes return the 404 page.
- Footer link and robots.txt entries for internal pages removed.
- Contact form now opens a pre-filled email to hello@omkneehealth.com. Success text is honest. Console logging removed.
- `npm audit fix` applied (patch/minor only). react-router-dom 6.30.6, DOMPurify 3.4.16, lodash 4.18.1.
- CSP and referrer policy added as meta tags. Tested in Chromium on 11 public pages: no CSP violations.
- Deploy workflow: least-privilege permissions per job, `npm ci`.

## Open actions (owner: site owner)

1. Treat the old team password (see `TeamResources.tsx`) as public. Change it anywhere it is reused (email, Lovable, hosting, Shopify, etc.).
2. Decide on repo visibility (F-05). Private repo removes the leak, but GitHub Pages on a private repo needs a paid GitHub plan.
3. Decide newsletter handling (F-03): connect a real provider with double opt-in, or remove the form.
4. Set "Enforce HTTPS" in GitHub Pages settings (gives HSTS-like redirect). If you need full headers (HSTS, frame-ancestors), put the site behind Cloudflare or move to a host that supports a `_headers` file.
5. Align the privacy policy with what the site actually does (F-09).
6. Before adding analytics: re-enable the cookie banner and gate `track()` and any tag loading on consent.
7. Plan majors: react-router v7, Vite 6+, Tailwind upgrade. Pin GitHub Actions to commit SHAs.

## Not checked

- Live site `kneelens.com` and `omkneehealth.com`: blocked by this environment's network policy. Headers, TLS and which code is actually deployed are unverified. Code references only `omkneehealth.com`.
- Lovable project settings, DNS, domain registrar and GitHub org settings (2FA, branch protection).
- External sites linked from this one (mykneescore.com, mykneescan.com, sportshealing.com).

## Change log

- 2026-10-08: First audit. F-01, F-02, F-04, F-06, F-07, F-08 fixed or partly fixed.
