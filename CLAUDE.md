@AGENTS.md

# Security rules

This is a static site with no backend. Anything in `src/`, `public/` or `index.html` ships to every visitor, and the repo is public.

- Never put passwords, API keys, tokens or private URLs in code, `.env` files with a `VITE_` prefix, or comments. `VITE_` variables are public.
- Never build a login or password gate in browser code. It cannot protect anything. Internal tools stay behind `INTERNAL_TOOLS_ENABLED` in `src/App.tsx`, or move to a real authenticated service.
- Never show a "sent" or "subscribed" message unless the data reached a real service. No fake submissions.
- Never `console.log` form values or anything a user typed.
- Collect health or personal data only through a UK/EU-hosted processor with a signed DPA, explicit consent wording, and a matching update to `src/pages/PrivacyPolicy.tsx`. Update `SECURITY-STATUS.md` in the same change.
- Load no analytics, pixels or tag managers until the cookie banner is active and the script is gated on consent. Route events through `src/lib/analytics.ts` and check consent there.
- Do not use `dangerouslySetInnerHTML` or `innerHTML` with content that is not a hard-coded constant. JSON-LD goes in via `textContent`, as the existing `*Schema.tsx` components do.
- Any new third-party domain (script, font, image, API) must be added to the CSP in `index.html` on purpose. Do not loosen `script-src`.
- Add dependencies only after checking the package exists on npm, is maintained, and is widely used. Run `npm audit --omit=dev` after any dependency change.
- External links opened in a new tab use `rel="noopener noreferrer"`.
