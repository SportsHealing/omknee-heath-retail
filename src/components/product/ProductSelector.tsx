/**
 * Product Selector - Dual Product Toggle
 * Allows switching between Collagen and Vegan powder options
 */

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Leaf, Sparkles } from "lucide-react";

export type ProductVariant = "collagen" | "vegan";

interface ProductSelectorProps {
  selected: ProductVariant;
  onChange: (variant: ProductVariant) => void;
}

const ProductSelector = ({ selected, onChange }: ProductSelectorProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-secondary rounded-lg p-1 border border-border">
        <button
          onClick={() => onChange("collagen")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-md font-sans text-sm font-medium transition-all duration-200",
            selected === "collagen"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Sparkles className="w-4 h-4" />
          Collagen Powder
        </button>
        <button
          onClick={() => onChange("vegan")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-md font-sans text-sm font-medium transition-all duration-200",
            selected === "vegan"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Leaf className="w-4 h-4" />
          Vegan Powder
        </button>
      </div>
    </div>
  );
};

export default ProductSelector;
