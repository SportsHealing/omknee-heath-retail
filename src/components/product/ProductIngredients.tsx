/**
 * Product Ingredients - Evidence-Based Breakdown
 * Ingredient-by-ingredient rationale with mechanism of action
 */

import { ExternalLink } from "lucide-react";

const ingredients = [
  {
    name: "Vitamin D3",
    amount: "25μg (1000 IU)",
    category: "Vitamin",
    mechanism: "Vitamin D supports calcium absorption and is essential for maintaining normal muscle function and bone health. It plays a role in the regulation of calcium and phosphorus metabolism.",
    evidence: "EFSA-approved claims for contribution to normal muscle function and maintenance of normal bones. Deficiency is common in the UK, particularly during winter months.",
    whyIncluded: "Many adults with joint concerns have suboptimal vitamin D levels. Adequate vitamin D supports the musculoskeletal system as a whole, not just the joints in isolation."
  },
  {
    name: "Glucosamine Sulphate",
    amount: "1500mg",
    category: "Amino Sugar",
    mechanism: "Glucosamine is a naturally occurring compound found in cartilage—the tissue that cushions joints. It serves as a building block for glycosaminoglycans, which are key structural components of cartilage matrix.",
    evidence: "One of the most extensively studied compounds in joint health research. Studies have examined its potential role in supporting cartilage structure, though results have been mixed across different populations.",
    whyIncluded: "We use the sulphate form at 1500mg daily—the dose most commonly used in research. Derived from marine sources, providing the sulphate component that may support cartilage maintenance."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "400mg",
    category: "Glycosaminoglycan",
    mechanism: "Chondroitin is a major component of cartilage that helps it retain water, contributing to its cushioning properties. It works structurally alongside glucosamine in cartilage tissue.",
    evidence: "Often studied in combination with glucosamine. The GAIT trial and other research have examined this combination, with varying results depending on study population and outcome measures.",
    whyIncluded: "Included at a meaningful dose to complement glucosamine. The combination reflects how these compounds naturally occur together in cartilage tissue."
  },
  {
    name: "Turmeric Extract",
    amount: "200mg (95% curcuminoids)",
    category: "Botanical Extract",
    mechanism: "Curcumin, the active compound in turmeric, has documented antioxidant properties. Antioxidants help protect cells from oxidative stress caused by free radicals.",
    evidence: "Extensive research exists on curcumin's antioxidant activity. However, curcumin has poor bioavailability on its own, which is why we include piperine.",
    whyIncluded: "Selected for its well-documented antioxidant properties. We use a standardised extract to ensure consistent curcuminoid content."
  },
  {
    name: "Piperine",
    amount: "10mg",
    category: "Bioavailability Enhancer",
    mechanism: "Piperine, derived from black pepper, inhibits certain enzymes in the digestive tract that would otherwise rapidly metabolise curcumin. This allows more curcumin to enter the bloodstream.",
    evidence: "Research has shown that piperine can increase curcumin bioavailability by up to 2000%. This is one of the most well-established nutrient absorption interactions.",
    whyIncluded: "Without piperine, most curcumin would be metabolised before absorption. This addition represents evidence-based formulation—not adding ingredients, but ensuring they work effectively."
  },
  {
    name: "Manganese",
    amount: "2mg",
    category: "Essential Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in the formation of connective tissue. It contributes to the normal formation of connective tissue and the maintenance of normal bones.",
    evidence: "EFSA-approved claims for contribution to normal connective tissue formation and maintenance of normal bones.",
    whyIncluded: "Supports the body's natural processes for maintaining connective tissue—the structural framework that includes cartilage, tendons, and ligaments."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    mechanism: "Copper is essential for the cross-linking of collagen and elastin, contributing to the maintenance of normal connective tissues.",
    evidence: "EFSA-approved claim for contribution to maintenance of normal connective tissues.",
    whyIncluded: "Collagen is a crucial protein in joint structures. Copper supports the normal maintenance of the connective tissues that form the structural basis of joints."
  }
];

const ProductIngredients = () => {
  return (
    <section id="ingredients" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Evidence-Based Formulation
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Ingredient-by-Ingredient Rationale
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every ingredient is included for a specific reason, at a dose informed by 
              scientific literature. Here's exactly what's in our formula and why.
            </p>
          </div>

          {/* Ingredients list */}
          <div className="space-y-8">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-lg p-6 md:p-8 border border-border"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pb-4 border-b border-border">
                  <div>
                    <span className="font-sans text-xs tracking-wide uppercase text-primary/70 block mb-1">
                      {ingredient.category}
                    </span>
                    <h3 className="font-serif text-xl text-foreground">
                      {ingredient.name}
                    </h3>
                  </div>
                  <span className="font-sans text-sm font-medium text-primary bg-trust-badge px-3 py-1 rounded-full">
                    {ingredient.amount}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                      How it works
                    </p>
                    <p className="font-sans text-sm text-foreground leading-relaxed">
                      {ingredient.mechanism}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                      What the evidence shows
                    </p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {ingredient.evidence}
                    </p>
                  </div>

                  <div className="bg-background rounded-md p-4 border-l-2 border-primary/30">
                    <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                      Why we include it
                    </p>
                    <p className="font-sans text-sm text-foreground leading-relaxed">
                      {ingredient.whyIncluded}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <span>Full nutritional panel available on product packaging</span>
            </div>
            <p className="mt-4 font-sans text-xs text-muted-foreground max-w-2xl mx-auto">
              We don't use proprietary blends. Every ingredient amount is disclosed. 
              If you have questions about our formulation, our team includes qualified 
              professionals who can discuss the scientific rationale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIngredients;
