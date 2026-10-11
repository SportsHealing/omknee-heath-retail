import { Loader2, ShoppingBag } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import type { ShopProduct } from "@/lib/shopify";
import { useCart } from "./useCart";

interface AddToBasketButtonProps extends Omit<ButtonProps, "onClick"> {
  /** Live Shopify product. Without one (not configured, loading or failed) the button is disabled. */
  product?: ShopProduct | null;
  label?: string;
}

/** Adds one of a product to the Shopify cart and opens the drawer. */
const AddToBasketButton = ({ product, label = "Add to basket", className, ...props }: AddToBasketButtonProps) => {
  const { add, busy } = useCart();
  const canBuy = Boolean(product?.variantId && product.availableForSale);
  return (
    <Button
      {...props}
      className={`gap-2 min-h-[44px] ${className ?? ""}`}
      disabled={!canBuy || busy}
      onClick={() => product?.variantId && add(product.variantId, product.handle)}
    >
      {busy ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <ShoppingBag className="h-4 w-4" aria-hidden="true" />
      )}
      {product && !product.availableForSale ? "Out of stock" : label}
    </Button>
  );
};

export default AddToBasketButton;
