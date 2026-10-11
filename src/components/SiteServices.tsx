import { useEffect } from "react";
import { captureReferral } from "@/lib/referral";
import { loadKlaviyoOnsiteAfterConsent } from "@/lib/klaviyo";

/** App-wide side effects: referral capture (?ref=) and consent-gated Klaviyo onsite JS. */
const SiteServices = () => {
  useEffect(() => {
    captureReferral();
    return loadKlaviyoOnsiteAfterConsent();
  }, []);
  return null;
};

export default SiteServices;
