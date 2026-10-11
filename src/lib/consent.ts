/**
 * Reads cookie consent saved by CookieConsent. Third-party marketing scripts
 * (Klaviyo onsite, Shopify) may load only after marketing consent (Appendix D3).
 */
const PREFERENCES_KEY = "omkneehealth_cookie_preferences";
export const CONSENT_EVENT = "omknee:consent-change";

export const hasMarketingConsent = () => {
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    return raw ? Boolean(JSON.parse(raw).marketing) : false;
  } catch {
    return false;
  }
};

/** Runs `callback` now if marketing consent exists, otherwise as soon as it is given. */
export const onMarketingConsent = (callback: () => void) => {
  if (hasMarketingConsent()) {
    callback();
    return () => undefined;
  }
  const listener = () => {
    if (hasMarketingConsent()) callback();
  };
  window.addEventListener(CONSENT_EVENT, listener);
  return () => window.removeEventListener(CONSENT_EVENT, listener);
};
