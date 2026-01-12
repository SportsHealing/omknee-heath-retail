/**
 * Sticky Buy Bar - Appears when scrolling past hero section
 * Provides constant easy access to purchase with variant info
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useProductVariant } from "./ProductVariantContext";

const StickyBuyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { variantInfo } = useProductVariant();

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
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="hidden sm:block">
            <p className="font-serif text-sm text-foreground">
              Joint + Movement Support
              <span className="text-xs text-primary ml-2">({variantInfo.name})</span>
            </p>
            <p className="text-xs text-muted-foreground">300g · One Month Supply</p>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="font-serif text-lg text-foreground">£{variantInfo.price}</span>
            <div className="flex gap-2 flex-1 sm:flex-none">
              <Button size="sm" className="flex-1 sm:flex-none gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden xs:inline">Add to Basket</span>
                <span className="xs:hidden">Buy</span>
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex border-foreground/20">
                Subscribe & Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
