/**
 * Authorised nutrition and health claims for the OmKneeHealth Supplement
 * (handover A11). Each line must be checked against the GB Nutrition and
 * Health Claims Register, at this formula's dose and conditions of use, before
 * go-live. Set `verified: true` only once that check is done.
 *
 * Production builds render verified claims only. Development builds show every
 * claim, marked "unverified", so copy can be reviewed in context.
 * Never add claims for collagen, glucosamine, chondroitin, hyaluronic acid,
 * MSM, turmeric, boswellia, silica or sea buckthorn (Appendix D2.4).
 */

export interface ProductClaim {
  id: string;
  text: string;
  verified: boolean;
}

export const PRODUCT_CLAIMS: ProductClaim[] = [
  {
    id: "vitamin-c-collagen",
    text: "Vitamin C contributes to normal collagen formation for the normal function of bones and cartilage.",
    verified: false,
  },
  {
    id: "vitamin-d-bones-muscle",
    text: "Vitamin D contributes to the maintenance of normal bones and normal muscle function.",
    verified: false,
  },
  { id: "vitamin-k-bones", text: "Vitamin K contributes to the maintenance of normal bones.", verified: false },
  { id: "zinc-bones", text: "Zinc contributes to the maintenance of normal bones.", verified: false },
  { id: "copper-connective", text: "Copper contributes to the maintenance of normal connective tissues.", verified: false },
  { id: "vitamin-e-oxidative", text: "Vitamin E contributes to the protection of cells from oxidative stress.", verified: false },
];

/** Claims allowed to render in this build. */
export const visibleClaims = (claims: ProductClaim[] = PRODUCT_CLAIMS) =>
  import.meta.env.DEV ? claims : claims.filter((claim) => claim.verified);

/** The Home supplement band claim line (A1): "Contains vitamin C, which ..." */
export const HOME_CLAIM_ID = "vitamin-c-collagen";
