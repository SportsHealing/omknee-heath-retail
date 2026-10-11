/**
 * Klaviyo club sign-up (handover E1), using the browser-safe Client API.
 *
 * Health data rule (Appendix D3): never send Knee Score answers, bands or any
 * health information. Only the fields in ClubSignup below are sent.
 */
import { onMarketingConsent } from "./consent";

const PUBLIC_KEY = import.meta.env.VITE_KLAVIYO_PUBLIC_KEY;
const CLUB_LIST_ID = import.meta.env.VITE_KLAVIYO_CLUB_LIST_ID;
const NEWS_LIST_ID = import.meta.env.VITE_KLAVIYO_NEWS_LIST_ID;

/** Klaviyo API revision. Revisions are supported for two years; update before this one retires. */
export const KLAVIYO_REVISION = "2025-07-15";

export type JoinSource = "hero" | "club-page" | "knee-score" | "cart" | "footer";

export interface ClubSignup {
  email: string;
  firstName?: string;
  /** The optional "OmKneeHealth news and offers" box. */
  news: boolean;
  source: JoinSource;
  foundingMember: boolean;
  referredBy?: string;
}

export const isKlaviyoConfigured = () => Boolean(PUBLIC_KEY && CLUB_LIST_ID);

const subscribe = async (listId: string, signup: ClubSignup, joinedAt: string) => {
  const properties: Record<string, string | boolean> = {
    club_joined_at: joinedAt,
    founding_member: signup.foundingMember,
    join_source: signup.source,
  };
  if (signup.referredBy) properties.referred_by = signup.referredBy;

  const response = await fetch(
    `https://a.klaviyo.com/client/subscriptions/?company_id=${encodeURIComponent(PUBLIC_KEY ?? "")}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/vnd.api+json", revision: KLAVIYO_REVISION },
      body: JSON.stringify({
        data: {
          type: "subscription",
          attributes: {
            custom_source: `OmKnee Club: ${signup.source}`,
            profile: {
              data: {
                type: "profile",
                attributes: {
                  email: signup.email,
                  ...(signup.firstName ? { first_name: signup.firstName } : {}),
                  properties,
                  subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } },
                },
              },
            },
          },
          relationships: { list: { data: { type: "list", id: listId } } },
        },
      }),
    },
  );
  if (!response.ok) throw new Error(`Klaviyo subscription failed: ${response.status}`);
};

/** Subscribes to the OmKnee Club list, and to the news list when that box is ticked. */
export const joinClub = async (signup: ClubSignup) => {
  if (!isKlaviyoConfigured() || !CLUB_LIST_ID) throw new Error("Klaviyo is not configured");
  const joinedAt = new Date().toISOString();
  await subscribe(CLUB_LIST_ID, signup, joinedAt);
  if (signup.news && NEWS_LIST_ID) await subscribe(NEWS_LIST_ID, signup, joinedAt);
};

/** Loads Klaviyo onsite JS once, and only after marketing cookie consent (Appendix D3). */
export const loadKlaviyoOnsiteAfterConsent = () => {
  if (!PUBLIC_KEY) return () => undefined;
  return onMarketingConsent(() => {
    if (document.getElementById("klaviyo-onsite")) return;
    const script = document.createElement("script");
    script.id = "klaviyo-onsite";
    script.async = true;
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${encodeURIComponent(PUBLIC_KEY)}`;
    document.head.appendChild(script);
  });
};
