import { createContext, useContext } from "react";
import type { Cart } from "@/lib/shopify";

export interface CartContextValue {
  cart: Cart | null;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  busy: boolean;
  error: string | null;
  add: (variantId: string, handle: string, quantity?: number) => Promise<void>;
  update: (lineId: string, quantity: number) => Promise<void>;
  checkout: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

/** Cart state and actions. Use inside CartProvider. */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
