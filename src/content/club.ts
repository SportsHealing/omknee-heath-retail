/** OmKnee Club copy and settings (handover A2). [Placeholders] render visibly. */

/** ISO date. Members who join before this get the Founding Member badge. Placeholder until confirmed (Q7). */
export const FOUNDING_MEMBER_CUTOFF: string | null = null;

/** Until a cut-off is set, every member joining now is a founding member. */
export const isFoundingMember = (now = new Date()) =>
  FOUNDING_MEMBER_CUTOFF === null || now < new Date(FOUNDING_MEMBER_CUTOFF);

export const JOIN_FORM = {
  emailLabel: "Email address",
  firstNameLabel: "First name (optional)",
  clubConsent: "Create my free OmKnee Club membership and email me my welcome codes and club updates.",
  newsConsent: "Also send me OmKneeHealth news and offers by email.",
  button: "Join the club",
  smallPrint: "Free to join. Unsubscribe any time.",
  error: "Something went wrong. Please try again, or email [support email].",
} as const;

export const CONFIRMATION = {
  heading: "You're in. Welcome to the OmKnee Club.",
  body: "Your welcome email is on its way with your £100 scan credit code and your 15% shop code.",
  cta: "Take your Knee Score",
  share: "Invite a friend and you both get £10 shop credit.",
  copyInvite: "[Copy invite link]",
  badge: "Founding Member",
} as const;

/** Join prompts shown where A2 places them. */
export const JOIN_PROMPTS = {
  kneeScore: "Save your score and track it over time. Join free.",
  cart: "Members save 15% today. Join free.",
} as const;
