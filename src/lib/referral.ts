/**
 * Referral capture (handover E1). The site only records ?ref= and passes it to
 * Klaviyo as `referred_by`; the referral app issues the £10 credits.
 */
const REFERRAL_KEY = "omknee_referred_by";

/** Store ?ref= from the current URL for this browser session. */
export const captureReferral = (search = window.location.search) => {
  const ref = new URLSearchParams(search).get("ref");
  if (!ref) return;
  try {
    sessionStorage.setItem(REFERRAL_KEY, ref.slice(0, 100));
  } catch {
    // Storage blocked: the referral is simply not recorded.
  }
};

export const getReferral = () => {
  try {
    return sessionStorage.getItem(REFERRAL_KEY) ?? undefined;
  } catch {
    return undefined;
  }
};
