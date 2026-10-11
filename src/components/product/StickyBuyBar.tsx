/**
 * Sticky Buy Bar - Appears when scrolling past hero section
 * Provides constant easy access to purchase
 */

import { useState, useEffect } from "react";
import AddToBasketButton from "@/components/cart/AddToBasketButton";
import { useSupplement } from "@/hooks/useSupplement";
import { SUPPLEMENT } from "@/content/supplement";

const StickyBuyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { product, price, memberPrice } = useSupplement();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (past hero section)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-[calc(3.5rem+env(safe-area-inset-bottom))] lg:bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="hidden sm:block">
            <p className="font-serif text-sm text-foreground">
              {SUPPLEMENT.name}
            </p>
            <p className="text-xs text-muted-foreground">{SUPPLEMENT.pack}</p>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="font-sans text-foreground">
              <span className="font-serif text-lg">{price}</span>
              <span className="ml-2 text-xs text-muted-foreground whitespace-nowrap">Member price {memberPrice}</span>
            </span>
            <AddToBasketButton product={product} size="sm" className="flex-1 sm:flex-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
