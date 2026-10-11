/**
 * Shopify cart state (handover E2). The cart ID is kept in localStorage so the
 * basket survives page loads; storage access is wrapped because it can be
 * blocked. Checkout happens on Shopify's hosted checkout (cart.checkoutUrl).
 */
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { CartContext } from "./useCart";
import { cartCreate, cartLinesAdd, cartLinesUpdate, fetchCart, isShopifyConfigured, type Cart } from "@/lib/shopify";
import { trackAddToCart, trackCheckoutStarted } from "@/lib/analytics";

const CART_KEY = "omknee_shopify_cart_id";

const readCartId = () => {
  try {
    return localStorage.getItem(CART_KEY);
  } catch {
    return null;
  }
};

const writeCartId = (id: string | null) => {
  try {
    if (id) localStorage.setItem(CART_KEY, id);
    else localStorage.removeItem(CART_KEY);
  } catch {
    // Storage blocked: the basket lasts for this page view only.
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = readCartId();
    if (!id || !isShopifyConfigured()) return;
    fetchCart(id)
      .then((existing) => {
        // A completed or expired cart comes back empty: start fresh next time.
        if (existing) setCart(existing);
        else writeCartId(null);
      })
      .catch(() => undefined);
  }, []);

  const run = useCallback(async (action: () => Promise<Cart>) => {
    setBusy(true);
    setError(null);
    try {
      const next = await action();
      setCart(next);
      writeCartId(next.id);
    } catch {
      setError("Shop temporarily unavailable. Please try again shortly.");
    } finally {
      setBusy(false);
    }
  }, []);

  const add = useCallback(
    async (variantId: string, handle: string, quantity = 1) => {
      setOpen(true);
      await run(() => (cart ? cartLinesAdd(cart.id, variantId, quantity) : cartCreate(variantId, quantity)));
      trackAddToCart(handle, quantity);
    },
    [cart, run],
  );

  const update = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      await run(() => cartLinesUpdate(cart.id, lineId, quantity));
    },
    [cart, run],
  );

  const checkout = useCallback(() => {
    if (!cart?.checkoutUrl) return;
    trackCheckoutStarted(cart.totalQuantity);
    window.location.href = cart.checkoutUrl;
  }, [cart]);

  const value = useMemo(
    () => ({ cart, isOpen, setOpen, busy, error, add, update, checkout }),
    [cart, isOpen, busy, error, add, update, checkout],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
