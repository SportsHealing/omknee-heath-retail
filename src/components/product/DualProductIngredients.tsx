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
    mechanism: "Hydrolysed collagen consists of small peptides that are readily absorbed. These peptides provide the amino acids glycine, proline, and hydroxyproline—key building blocks for the body's own collagen synthesis in cartilage, tendons, and connective tissue.",
    evidence: "Multiple clinical studies have examined collagen peptide supplementation for joint health. Research suggests hydrolysed forms have superior bioavailability compared to whole collagen.",
    whyIncluded: "We use a high-dose (8g) hydrolysed marine collagen for optimal absorption. This provides the structural amino acids that support the body's natural cartilage and connective tissue maintenance."
  },
  {
    name: "Vitamin C",
    amount: "80mg",
    category: "Essential Vitamin",
    mechanism: "Vitamin C is essential for collagen synthesis—it acts as a cofactor for the enzymes that hydroxylate proline and lysine, steps required for stable collagen formation. Without adequate vitamin C, the body cannot properly produce collagen.",
    evidence: "EFSA-approved claim for contribution to normal collagen formation for the normal function of cartilage. This is one of the most well-established nutrient-function relationships.",
    whyIncluded: "Included at 100% NRV to ensure the collagen peptides can be effectively utilised by the body. The combination of collagen + vitamin C is synergistic and evidence-based."
  },
  {
    name: "Hyaluronic Acid",
    amount: "100mg",
    category: "Glycosaminoglycan",
    mechanism: "Hyaluronic acid is a key component of synovial fluid—the lubricating fluid within joints. It has exceptional water-binding capacity, contributing to the viscosity and cushioning properties of joint fluid.",
    evidence: "Research has examined oral hyaluronic acid supplementation for joint comfort. Studies suggest it may support synovial fluid composition, though mechanisms are still being investigated.",
    whyIncluded: "Complements the structural support of collagen by addressing joint lubrication. Included at a meaningful dose based on clinical research protocols."
  },
  {
    name: "MSM (Methylsulfonylmethane)",
    amount: "1,000mg",
    category: "Organic Sulphur",
    mechanism: "MSM provides bioavailable sulphur, which is required for the synthesis of collagen and other connective tissue proteins. Sulphur-containing amino acids are essential structural components of cartilage.",
    evidence: "Clinical studies have examined MSM for joint health support, often in combination with glucosamine. Sulphur is a necessary component for proteoglycan synthesis.",
    whyIncluded: "Supports the structural matrix of cartilage by providing sulphur for proteoglycan and collagen synthesis. Works synergistically with the collagen peptides."
  },
  {
    name: "Manganese",
    amount: "2mg",
    category: "Essential Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in the formation of connective tissue, including cartilage. It contributes to the normal formation of connective tissue.",
    evidence: "EFSA-approved claim for contribution to normal connective tissue formation. Essential for proper glycosaminoglycan synthesis.",
    whyIncluded: "Supports the body's natural processes for maintaining connective tissue—the structural framework that includes cartilage."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    mechanism: "Copper is essential for the cross-linking of collagen and elastin through lysyl oxidase activity, contributing to the structural integrity of connective tissues.",
    evidence: "EFSA-approved claim for contribution to maintenance of normal connective tissues. Critical for collagen maturation.",
    whyIncluded: "Ensures proper collagen cross-linking, supporting the strength and stability of the collagen matrix in joints."
  }
];

const veganIngredients: Ingredient[] = [
  {
    name: "Vitamin C",
    amount: "160mg",
    category: "Essential Vitamin",
    mechanism: "Vitamin C is essential for collagen synthesis in the body—acting as a cofactor for enzymes that enable stable collagen formation. It also provides antioxidant protection for cells.",
    evidence: "EFSA-approved claims for contribution to normal collagen formation for cartilage function and protection of cells from oxidative stress.",
    whyIncluded: "Higher dose (200% NRV) to maximally support the body's own collagen production. Critical for a vegan formula where external collagen isn't provided."
  },
  {
    name: "MSM (Methylsulfonylmethane)",
    amount: "1,500mg",
    category: "Organic Sulphur",
    mechanism: "MSM provides bioavailable sulphur for the synthesis of collagen, proteoglycans, and other connective tissue components. This is particularly important in a collagen-free formula.",
    evidence: "Clinical studies have examined MSM for joint health support. Provides the sulphur-containing building blocks needed for the body's own structural protein synthesis.",
    whyIncluded: "The primary structural support in this vegan formula. Higher dose than our collagen powder to compensate for the absence of external collagen peptides."
  },
  {
    name: "Turmeric Extract",
    amount: "400mg (95% curcuminoids)",
    category: "Botanical Extract",
    mechanism: "Curcumin, the active compound in turmeric, has well-documented antioxidant properties. It helps protect cells from oxidative stress caused by free radicals.",
    evidence: "Extensive research on curcumin's antioxidant activity. Included at a higher dose in this formula for enhanced antioxidant support.",
    whyIncluded: "Provides plant-based antioxidant protection. Standardised to 95% curcuminoids for consistent potency."
  },
  {
    name: "Piperine",
    amount: "10mg",
    category: "Bioavailability Enhancer",
    mechanism: "Piperine from black pepper inhibits enzymes that would otherwise rapidly metabolise curcumin, significantly increasing its absorption and bioavailability.",
    evidence: "Research shows piperine can increase curcumin bioavailability by up to 2000%. One of the most well-established nutrient absorption interactions.",
    whyIncluded: "Ensures the turmeric extract is effectively absorbed. Evidence-based formulation—not just adding ingredients, but ensuring they work."
  },
  {
    name: "Vitamin D3 (Vegan)",
    amount: "25μg (1000 IU)",
    category: "Vitamin",
    mechanism: "Vitamin D supports calcium absorption and is essential for maintaining normal muscle function and bone health. Our D3 is derived from lichen—a plant source.",
    evidence: "EFSA-approved claims for muscle function and bone health. Lichen-derived D3 is bioequivalent to animal-derived forms.",
    whyIncluded: "Vegan-friendly D3 from lichen. Supports the musculoskeletal system as a whole, addressing the common deficiency seen in UK adults."
  },
  {
    name: "Manganese",
    amount: "4mg",
    category: "Essential Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in connective tissue formation. Higher dose in this formula to support endogenous collagen synthesis.",
    evidence: "EFSA-approved claim for contribution to normal connective tissue formation and maintenance of normal bones.",
    whyIncluded: "Increased dose to support the body's own cartilage and connective tissue maintenance processes."
  },
  {
    name: "Copper",
    amount: "1mg",
    category: "Essential Mineral",
    mechanism: "Copper enables proper cross-linking of collagen and elastin through lysyl oxidase, essential for connective tissue structural integrity.",
    evidence: "EFSA-approved claim for maintenance of normal connective tissues.",
    whyIncluded: "Supports the structural quality of the body's own collagen production—critical when external collagen isn't provided."
  },
  {
    name: "Zinc",
    amount: "10mg",
    category: "Essential Mineral",
    mechanism: "Zinc is required for protein synthesis and cell division, supporting the body's ability to maintain and repair tissues including cartilage.",
    evidence: "EFSA-approved claims for normal protein synthesis and maintenance of normal bones.",
    whyIncluded: "Additional mineral support for tissue maintenance, particularly relevant for plant-based diets where zinc absorption may be reduced."
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
