/** Cart drawer (handover E2, A2): lines, quantities, subtotal, Shopify checkout and the club prompt. */
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PlaceholderText from "@/components/PlaceholderText";
import JoinForm from "@/components/club/JoinForm";
import { JOIN_PROMPTS } from "@/content/club";
import { formatMoney, isShopifyConfigured } from "@/lib/shopify";
import { useCart } from "./useCart";

const CartDrawer = () => {
  const { cart, isOpen, setOpen, busy, error, update, checkout } = useCart();
  const lines = cart?.lines ?? [];

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Your basket</SheetTitle>
          <SheetDescription>
            {lines.length
              ? `${cart?.totalQuantity} item${cart?.totalQuantity === 1 ? "" : "s"}`
              : "Your basket is empty."}
          </SheetDescription>
        </SheetHeader>

        {isShopifyConfigured() ? null : (
          <p className="mt-4 font-sans text-sm text-muted-foreground">
            <PlaceholderText text="[Shopify not connected yet: set VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_TOKEN]" />
          </p>
        )}
        {error ? (
          <p role="alert" className="mt-4 font-sans text-sm text-foreground">
            {error}
          </p>
        ) : null}

        <ul className="mt-6 divide-y divide-border">
          {lines.map((line) => (
            <li key={line.id} className="flex gap-4 py-4">
              {line.image ? (
                <img
                  src={line.image.url}
                  alt={line.image.altText ?? line.productTitle}
                  className="h-20 w-20 rounded-lg object-cover bg-secondary"
                />
              ) : (
                <div className="h-20 w-20 rounded-lg bg-secondary" aria-hidden="true" />
              )}
              <div className="flex flex-1 flex-col">
                <p className="font-serif text-foreground leading-snug">{line.productTitle}</p>
                {line.variantTitle !== "Default Title" ? (
                  <p className="font-sans text-xs text-muted-foreground">{line.variantTitle}</p>
                ) : null}
                <p className="font-sans text-sm text-foreground mt-1">{formatMoney(line.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    disabled={busy}
                    onClick={() => update(line.id, line.quantity - 1)}
                    aria-label={`One fewer ${line.productTitle}`}
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <span className="w-6 text-center font-sans text-sm tabular-nums" aria-live="polite">
                    {line.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    disabled={busy}
                    onClick={() => update(line.id, line.quantity + 1)}
                    aria-label={`One more ${line.productTitle}`}
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto h-9 w-9"
                    disabled={busy}
                    onClick={() => update(line.id, 0)}
                    aria-label={`Remove ${line.productTitle}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {lines.length && cart ? (
          <div className="mt-4 border-t border-border pt-4">
            <p className="flex justify-between font-sans text-foreground">
              <span>Subtotal</span>
              <span>{formatMoney(cart.subtotal)}</span>
            </p>
            <p className="mt-1 font-sans text-xs text-muted-foreground">
              Members: enter your 15% club code at checkout. Delivery is calculated at checkout.
            </p>
            <Button size="lg" className="mt-4 w-full min-h-[44px]" disabled={busy} onClick={checkout}>
              Checkout
            </Button>
          </div>
        ) : (
          <Button variant="outline" asChild className="mt-6 min-h-[44px]">
            <Link to="/shop" onClick={() => setOpen(false)}>
              Browse the shop
            </Link>
          </Button>
        )}

        <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5">
          <p className="font-serif text-lg text-foreground mb-4">{JOIN_PROMPTS.cart}</p>
          <JoinForm source="cart" compact confirmationHeading="h3" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
