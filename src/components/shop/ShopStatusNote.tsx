import PlaceholderText from "@/components/PlaceholderText";

/** Explains a disabled basket: Shopify not connected, or temporarily unavailable (E2 fallback). */
const ShopStatusNote = ({ state, className = "" }: { state: string; className?: string }) =>
  state === "unconfigured" ? (
    <p className={`font-sans text-xs text-muted-foreground ${className}`}>
      <PlaceholderText text="[Shopify not connected yet: set VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_TOKEN]" />
    </p>
  ) : state === "unavailable" ? (
    <p role="status" className={`font-sans text-xs text-foreground ${className}`}>Shop temporarily unavailable.</p>
  ) : null;

export default ShopStatusNote;
