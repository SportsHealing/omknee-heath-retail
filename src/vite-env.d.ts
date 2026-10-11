/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Klaviyo public API key (site ID). Public and browser-safe. */
  readonly VITE_KLAVIYO_PUBLIC_KEY?: string;
  readonly VITE_KLAVIYO_CLUB_LIST_ID?: string;
  readonly VITE_KLAVIYO_NEWS_LIST_ID?: string;
  /** Shopify store domain, e.g. omkneehealth.myshopify.com. */
  readonly VITE_SHOPIFY_STORE_DOMAIN?: string;
  /** Shopify Storefront API public access token. Public and browser-safe. */
  readonly VITE_SHOPIFY_STOREFRONT_TOKEN?: string;
  /** Square payment links for blood tests (handover E3). */
  readonly VITE_SQUARE_LINK_VITD?: string;
  readonly VITE_SQUARE_LINK_BONE?: string;
  readonly VITE_SQUARE_LINK_ACTIVE?: string;
}
