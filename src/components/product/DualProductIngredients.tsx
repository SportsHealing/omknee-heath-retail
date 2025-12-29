/**
 * Dual Product Ingredients - Evidence-Based Breakdown
 * Shows ingredients for both Collagen and Vegan powder options
 */

import type { ProductVariant } from "./ProductSelector";

interface Ingredient {
  name: string;
  amount: string;
  category: string;
  mechanism: string;
  evidence: string;
  whyIncluded: string;
}

const collagenIngredients: Ingredient[] = [
  {
    name: "Hydrolysed Collagen Peptides",
    amount: "8,000mg",
    category: "Structural Protein",
    mechanism: "Hydrolysed collagen consists of small peptides designed for absorption. These peptides provide the amino acids glycine, proline, and hydroxyproline—building blocks used in the body's collagen synthesis processes.",
    evidence: "Multiple studies have examined collagen peptide supplementation. Research suggests hydrolysed forms have better bioavailability compared to whole collagen. Note: Collagen peptides do not have EFSA-authorised health claims.",
    whyIncluded: "We use high-dose (8g) hydrolysed marine collagen for bioavailability. This provides amino acids that contribute to the body's natural processes."
  },
  {
    name: "Vitamin C",
    amount: "80mg",
    category: "Essential Vitamin",
    mechanism: "Vitamin C is a cofactor for the enzymes involved in collagen synthesis, contributing to the normal formation of collagen.",
    evidence: "EFSA-authorised claim: Vitamin C contributes to normal collagen formation for the normal function of cartilage. This is one of the most well-established nutrient-function relationships.",
    whyIncluded: "Included at 100% NRV to support normal collagen formation. The combination with collagen peptides reflects evidence-based formulation principles."
  },
  {
    name: "Hyaluronic Acid",
    amount: "100mg",
    category: "Glycosaminoglycan",
    mechanism: "Hyaluronic acid is a component of synovial fluid within joints. It has water-binding capacity, contributing to the viscosity properties of joint fluid.",
    evidence: "Research has examined oral hyaluronic acid supplementation. Note: Hyaluronic acid does not have EFSA-authorised health claims.",
    whyIncluded: "Included at a dose consistent with published research protocols."
  },
  {
    name: "MSM (Methylsulfonylmethane)",
    amount: "1,000mg",
    category: "Organic Sulphur",
    mechanism: "MSM provides bioavailable sulphur, which is used in the synthesis of collagen and other structural proteins. Sulphur-containing amino acids are components of cartilage.",
    evidence: "Studies have examined MSM, often in combination with glucosamine. Note: MSM does not have EFSA-authorised health claims.",
    whyIncluded: "Provides sulphur for the body's structural protein synthesis processes."
  },
  {
    name: "Manganese",
    amount: "2mg",
    category: "Essential Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in the formation of connective tissue.",
    evidence: "EFSA-authorised claim: Manganese contributes to the normal formation of connective tissue.",
    whyIncluded: "Supports the body's normal connective tissue formation processes."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    mechanism: "Copper contributes to the maintenance of normal connective tissues through its role in collagen cross-linking.",
    evidence: "EFSA-authorised claim: Copper contributes to maintenance of normal connective tissues.",
    whyIncluded: "Supports normal connective tissue maintenance."
  }
];

const veganIngredients: Ingredient[] = [
  {
    name: "Vitamin C",
    amount: "160mg",
    category: "Essential Vitamin",
    mechanism: "Vitamin C is a cofactor for enzymes that enable collagen formation in the body. It also contributes to the protection of cells from oxidative stress.",
    evidence: "EFSA-authorised claims: Vitamin C contributes to normal collagen formation for the normal function of cartilage and protection of cells from oxidative stress.",
    whyIncluded: "Higher dose (200% NRV) to support the body's normal collagen formation. Important in a vegan formula where external collagen isn't provided."
  },
  {
    name: "MSM (Methylsulfonylmethane)",
    amount: "1,500mg",
    category: "Organic Sulphur",
    mechanism: "MSM provides bioavailable sulphur for the synthesis of collagen, proteoglycans, and other structural proteins in the body.",
    evidence: "Studies have examined MSM supplementation. Provides sulphur-containing building blocks. Note: MSM does not have EFSA-authorised health claims.",
    whyIncluded: "Higher dose than our collagen powder to provide sulphur for the body's structural protein synthesis."
  },
  {
    name: "Turmeric Extract",
    amount: "400mg (95% curcuminoids)",
    category: "Botanical Extract",
    mechanism: "Curcumin, the active compound in turmeric, has antioxidant properties that may help protect cells from oxidative stress.",
    evidence: "Extensive research on curcumin's antioxidant activity. Included at a higher dose in this formula. Note: Curcumin/turmeric does not have EFSA-authorised health claims.",
    whyIncluded: "Provides plant-based antioxidant properties. Standardised to 95% curcuminoids for consistent potency."
  },
  {
    name: "Piperine",
    amount: "10mg",
    category: "Bioavailability Enhancer",
    mechanism: "Piperine from black pepper inhibits enzymes that would otherwise rapidly metabolise curcumin, significantly increasing its absorption.",
    evidence: "Research shows piperine can increase curcumin bioavailability by up to 2000%. One of the most well-established nutrient absorption interactions.",
    whyIncluded: "Ensures the turmeric extract is effectively absorbed. Evidence-based formulation principle."
  },
  {
    name: "Vitamin D3 (Vegan)",
    amount: "25μg (1000 IU)",
    category: "Vitamin",
    mechanism: "Vitamin D contributes to normal muscle function and the maintenance of normal bones. Our D3 is derived from lichen—a plant source.",
    evidence: "EFSA-authorised claims: Vitamin D contributes to normal muscle function and maintenance of normal bones. Lichen-derived D3 is bioequivalent to animal-derived forms.",
    whyIncluded: "Vegan-friendly D3 from lichen. Supports normal muscle function and bone maintenance, addressing the common insufficiency seen in UK adults."
  },
  {
    name: "Manganese",
    amount: "4mg",
    category: "Essential Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in connective tissue formation. Higher dose in this formula.",
    evidence: "EFSA-authorised claims: Manganese contributes to normal connective tissue formation and maintenance of normal bones.",
    whyIncluded: "Increased dose to support the body's normal connective tissue formation processes."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    mechanism: "Copper contributes to maintenance of normal connective tissues through its role in collagen cross-linking.",
    evidence: "EFSA-authorised claim: Copper contributes to maintenance of normal connective tissues.",
    whyIncluded: "Supports normal connective tissue maintenance."
  },
  {
    name: "Zinc",
    amount: "10mg",
    category: "Essential Mineral",
    mechanism: "Zinc contributes to normal protein synthesis and the maintenance of normal bones.",
    evidence: "EFSA-authorised claims: Zinc contributes to normal protein synthesis and maintenance of normal bones.",
    whyIncluded: "Supports normal protein synthesis. Particularly relevant for plant-based diets where zinc absorption may be reduced."
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
    <section id="ingredients" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Evidence-Based Formulation
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              {title}
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

export default DualProductIngredients;
