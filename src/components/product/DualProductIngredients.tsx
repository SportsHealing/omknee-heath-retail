/**
 * Dual Product Ingredients - Evidence-Based Breakdown
 * Shows ingredients for both Collagen and Vegan powder options
 */

import type { ProductVariant } from "./ProductSelector";

interface Ingredient {
  name: string;
  amount: string;
  category: string;
  rationale: string;
}

const collagenIngredients: Ingredient[] = [
  {
    name: "Hydrolysed Collagen Peptides",
    amount: "8,000mg",
    category: "Structural Protein",
    rationale: "Marine-sourced, hydrolysed for absorption. Provides glycine, proline, and hydroxyproline."
  },
  {
    name: "Vitamin C",
    amount: "80mg",
    category: "Essential Vitamin",
    rationale: "Cofactor for collagen synthesis. EFSA-authorised for cartilage function."
  },
  {
    name: "Hyaluronic Acid",
    amount: "100mg",
    category: "Glycosaminoglycan",
    rationale: "A component of synovial fluid. Research-consistent dose."
  },
  {
    name: "MSM (Methylsulfonylmethane)",
    amount: "1,000mg",
    category: "Organic Sulphur",
    rationale: "Provides bioavailable sulphur for structural protein synthesis."
  },
  {
    name: "Manganese",
    amount: "2mg",
    category: "Essential Mineral",
    rationale: "Cofactor for connective tissue formation. EFSA-authorised."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    rationale: "Supports connective tissue maintenance through collagen cross-linking."
  }
];

const veganIngredients: Ingredient[] = [
  {
    name: "Vitamin C",
    amount: "160mg",
    category: "Essential Vitamin",
    rationale: "Higher dose (200% NRV) to support collagen formation. EFSA-authorised."
  },
  {
    name: "MSM (Methylsulfonylmethane)",
    amount: "1,500mg",
    category: "Organic Sulphur",
    rationale: "Increased dose for sulphur-based structural protein synthesis."
  },
  {
    name: "Turmeric Extract",
    amount: "400mg (95% curcuminoids)",
    category: "Botanical Extract",
    rationale: "Standardised curcumin with documented antioxidant properties."
  },
  {
    name: "Piperine",
    amount: "10mg",
    category: "Bioavailability Enhancer",
    rationale: "Increases curcumin absorption by approximately 2000%."
  },
  {
    name: "Vitamin D3 (Vegan)",
    amount: "25μg (1000 IU)",
    category: "Vitamin",
    rationale: "Lichen-derived D3. Supports muscle function and bone maintenance."
  },
  {
    name: "Manganese",
    amount: "4mg",
    category: "Essential Mineral",
    rationale: "Increased dose for connective tissue formation. EFSA-authorised."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    rationale: "Supports connective tissue through collagen cross-linking."
  },
  {
    name: "Zinc",
    amount: "10mg",
    category: "Essential Mineral",
    rationale: "Supports protein synthesis. Important for plant-based diets."
  }
];

interface DualProductIngredientsProps {
  variant: ProductVariant;
}

const DualProductIngredients = ({ variant }: DualProductIngredientsProps) => {
  const ingredients = variant === "collagen" ? collagenIngredients : veganIngredients;
  const title = variant === "collagen" 
    ? "Collagen Powder Ingredients" 
    : "Vegan Powder Ingredients";

  return (
    <section id="ingredients" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              {title}
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto" />
          </div>

          {/* Ingredients list */}
          <div className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-lg p-5 md:p-6 border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="font-sans text-xs tracking-wide uppercase text-primary/70 block mb-1">
                      {ingredient.category}
                    </span>
                    <h3 className="font-serif text-lg text-foreground">
                      {ingredient.name}
                    </h3>
                  </div>
                  <span className="font-sans text-sm font-medium text-primary bg-trust-badge px-3 py-1 rounded-full">
                    {ingredient.amount}
                  </span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {ingredient.rationale}
                </p>
              </div>
            ))}
          </div>

          {/* Transparency note */}
          <div className="mt-12 text-center">
            <p className="font-sans text-sm text-muted-foreground">
              No proprietary blends. Every amount disclosed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualProductIngredients;
