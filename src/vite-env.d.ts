/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Klaviyo public API key (site ID). Public and browser-safe. */
  readonly VITE_KLAVIYO_PUBLIC_KEY?: string;
  readonly VITE_KLAVIYO_CLUB_LIST_ID?: string;
  readonly VITE_KLAVIYO_NEWS_LIST_ID?: string;
}
