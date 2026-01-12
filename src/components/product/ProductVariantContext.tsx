/**
 * Product Variant Context
 * Shared state for variant selection across product page components
 */

import { createContext, useContext, useState, ReactNode } from "react";

export type ProductVariant = "marine" | "vegetarian";

interface VariantInfo {
  id: ProductVariant;
  name: string;
  tagline: string;
  description: string;
  keyIngredient: string;
  price: string;
  badge: string;
}

export const variants: Record<ProductVariant, VariantInfo> = {
  marine: {
    id: "marine",
    name: "Marine Formula",
    tagline: "With Marine Collagen",
    description: "Hydrolysed marine collagen peptides, glucosamine, chondroitin, and essential vitamins — each at research-informed doses.",
    keyIngredient: "Marine collagen from sustainably sourced fish",
    price: "49.99",
    badge: "Most Popular"
  },
  vegetarian: {
    id: "vegetarian",
    name: "Vegetarian Formula",
    tagline: "Plant-Based Support",
    description: "A collagen-free formula with glucosamine (vegetarian source), plant-based compounds, and essential vitamins for joint support.",
    keyIngredient: "Plant-derived glucosamine & botanical extracts",
    price: "44.99",
    badge: "Vegetarian"
  }
};

interface ProductVariantContextType {
  selectedVariant: ProductVariant;
  setSelectedVariant: (variant: ProductVariant) => void;
  variantInfo: VariantInfo;
}

const ProductVariantContext = createContext<ProductVariantContextType | undefined>(undefined);

export const ProductVariantProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>("marine");
  
  return (
    <ProductVariantContext.Provider 
      value={{ 
        selectedVariant, 
        setSelectedVariant, 
        variantInfo: variants[selectedVariant] 
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};

export const useProductVariant = () => {
  const context = useContext(ProductVariantContext);
  if (!context) {
    throw new Error("useProductVariant must be used within ProductVariantProvider");
  }
  return context;
};
