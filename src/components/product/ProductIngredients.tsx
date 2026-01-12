/**
 * Product Ingredients - Evidence-Based Breakdown
 * Ingredient-by-ingredient rationale with mechanism of action
 */

import { AlertTriangle } from 'lucide-react';
import ingredientsCollagenBg from "@/assets/ingredients-collagen-bg.jpg";

const activeIngredients = [
  {
    name: "Hydrolysed Collagen Peptides (Type I & III)",
    amount: "10,000mg",
    category: "Structural Protein",
    mechanism: "Collagen peptides are pre-digested fragments of collagen protein, small enough to be absorbed intact. Types I and III are the primary collagens found in skin, tendons, ligaments, and bone. Once absorbed, these peptides provide amino acids that support the body's natural collagen synthesis.",
    evidence: "Multiple studies have examined hydrolysed collagen at doses of 5-10g daily. The 10g dose reflects the upper range used in clinical research. Note: Collagen peptides do not have EFSA-authorised health claims.",
    whyIncluded: "Provides amino acids that contribute to the body's collagen synthesis processes. At 10g daily, this reflects doses used in published research. We use hydrolysed peptides for bioavailability."
  },
  {
    name: "Glucosamine Sulphate 2KCl",
    amount: "1,500mg",
    category: "Amino Sugar",
    mechanism: "Glucosamine is a naturally occurring compound found in cartilage. It serves as a building block for glycosaminoglycans and proteoglycans, which form the structural matrix of cartilage. The sulphate form provides sulphur, used in cartilage matrix synthesis.",
    evidence: "One of the most extensively studied compounds in this category. Results across populations are mixed—some trials show positive outcomes, others show no significant difference from placebo. Note: Glucosamine does not have EFSA-authorised health claims. We present this research honestly.",
    whyIncluded: "Included at 1,500mg daily—the dose used in most published research. This is the form with the most research behind it."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "800mg",
    category: "Glycosaminoglycan",
    mechanism: "Chondroitin is a structural component of cartilage, contributing to its ability to retain water. It attracts water into the proteoglycan matrix, contributing to the cushioning properties of cartilage. It works alongside glucosamine in the cartilage structure.",
    evidence: "Often studied alongside glucosamine. The combination reflects how these compounds naturally occur together in cartilage tissue. Research outcomes are mixed. Note: Chondroitin does not have EFSA-authorised health claims.",
    whyIncluded: "Included at 800mg to complement glucosamine. The glucosamine-chondroitin combination is the most researched pairing in this category."
  },
  {
    name: "Hyaluronic Acid (Low Molecular Weight)",
    amount: "120mg",
    category: "Glycosaminoglycan",
    mechanism: "Hyaluronic acid is a component of synovial fluid within joints. Low molecular weight forms are designed for better oral absorption. Hyaluronic acid contributes to the viscosity of joint fluid.",
    evidence: "Oral hyaluronic acid supplementation has been examined in several studies. The low molecular weight form shows better bioavailability than high molecular weight versions. Note: Hyaluronic acid does not have EFSA-authorised health claims.",
    whyIncluded: "We specify low molecular weight hyaluronic acid for absorption. At 120mg, this sits within the dose range from published studies."
  },
  {
    name: "Curcumin Extract (≥95% Curcuminoids)",
    amount: "500mg",
    category: "Botanical Extract",
    mechanism: "Curcumin, the primary active compound in turmeric, has antioxidant properties. It helps neutralise free radicals and may support the body's antioxidant enzyme systems.",
    evidence: "Extensive research demonstrates curcumin's antioxidant activity. However, curcumin has notoriously poor bioavailability—this is why we pair it with piperine. Note: Curcumin/turmeric does not have EFSA-authorised health claims for joints.",
    whyIncluded: "At 500mg of standardised extract (≥95% curcuminoids), combined with piperine for enhanced absorption. Selected for its well-documented antioxidant properties."
  },
  {
    name: "Black Pepper Extract (Piperine)",
    amount: "5mg",
    category: "Bioavailability Enhancer",
    mechanism: "Piperine inhibits certain enzyme processes that would otherwise rapidly metabolise curcumin. This allows more curcumin to enter the bloodstream intact.",
    evidence: "Research published in Planta Medica demonstrated that piperine increases curcumin bioavailability by approximately 2000%. This is one of the most well-established nutrient absorption interactions in the scientific literature.",
    whyIncluded: "Without piperine, our curcumin extract would be largely wasted. This is evidence-based formulation: ensuring ingredients are actually absorbed."
  },
  {
    name: "Boswellia Serrata Extract (≥65% Boswellic Acids)",
    amount: "200mg",
    category: "Botanical Extract",
    mechanism: "Boswellia serrata, also known as Indian frankincense, contains boswellic acids—compounds that have been studied for their biological activity. AKBA is the most active component, which is why we standardise for boswellic acid content.",
    evidence: "Multiple studies have examined boswellia. The ≥65% standardisation ensures consistent potency. Note: Boswellia does not have EFSA-authorised health claims.",
    whyIncluded: "Boswellia complements curcumin in our formula. At 200mg of standardised extract, this provides consistent levels of active boswellic acids."
  }
];

const vitaminsAndMinerals = [
  {
    name: "Vitamin C (as Ascorbic Acid)",
    amount: "100mg (125% NRV)",
    category: "Vitamin",
    mechanism: "Vitamin C is a cofactor for the enzymes that stabilise and cross-link collagen molecules. It also contributes to the protection of cells from oxidative stress.",
    evidence: "EFSA-authorised claims: Vitamin C contributes to normal collagen formation for the normal function of cartilage, bones, and skin. Also contributes to protection of cells from oxidative stress.",
    whyIncluded: "Supports the body's normal collagen formation processes. At 125% NRV, this provides effective support when supplementing with collagen peptides."
  },
  {
    name: "Vitamin D3 (Cholecalciferol)",
    amount: "50μg / 2000 IU (1000% NRV)",
    category: "Vitamin",
    mechanism: "Vitamin D contributes to the normal absorption and utilisation of calcium and phosphorus. It supports normal muscle function and the maintenance of normal bones.",
    evidence: "EFSA-authorised claims: Vitamin D contributes to normal muscle function and maintenance of normal bones. UK surveys consistently show high rates of vitamin D insufficiency, particularly during winter months.",
    whyIncluded: "Supports normal muscle function and bone maintenance. At 2000 IU, this dose is within safe upper limits and helps address common insufficiency. We include D3 (cholecalciferol), the form most efficiently utilised by the body."
  },
  {
    name: "Vitamin K2 (MK-7, All-Trans)",
    amount: "100μg (133% NRV)",
    category: "Vitamin",
    mechanism: "Vitamin K contributes to normal blood clotting and the maintenance of normal bones. K2 activates proteins involved in calcium metabolism.",
    evidence: "EFSA-authorised claims: Vitamin K contributes to maintenance of normal bones. Research shows K2 (particularly MK-7) has good bioavailability.",
    whyIncluded: "Supports normal bone maintenance. We use the all-trans form of MK-7—the naturally occurring, fully active isomer."
  },
  {
    name: "Magnesium (Citrate/Glycinate)",
    amount: "200mg (53% NRV)",
    category: "Essential Mineral",
    mechanism: "Magnesium is involved in over 300 enzymatic reactions including protein synthesis. It contributes to normal muscle function and maintenance of normal bones.",
    evidence: "EFSA-authorised claims: Magnesium contributes to normal muscle function, maintenance of normal bones, normal protein synthesis, and reduction of tiredness and fatigue.",
    whyIncluded: "Supports normal muscle function. We use citrate and glycinate forms for bioavailability. At 53% NRV, this contributes meaningfully while leaving room for dietary intake."
  },
  {
    name: "Zinc (as Citrate)",
    amount: "10mg (100% NRV)",
    category: "Essential Mineral",
    mechanism: "Zinc contributes to normal protein synthesis and the protection of cells from oxidative stress. It also contributes to maintenance of normal bones.",
    evidence: "EFSA-authorised claims: Zinc contributes to normal protein synthesis, maintenance of normal bones, and protection of cells from oxidative stress.",
    whyIncluded: "Supports the body's normal protein synthesis processes. Included at 100% NRV in citrate form for bioavailability."
  },
  {
    name: "Copper (as Bisglycinate)",
    amount: "0.5mg (50% NRV)",
    category: "Trace Mineral",
    mechanism: "Copper contributes to maintenance of normal connective tissues. It is involved in the cross-linking of collagen and elastin fibres.",
    evidence: "EFSA-authorised claim: Copper contributes to maintenance of normal connective tissues.",
    whyIncluded: "Supports normal connective tissue maintenance. Bisglycinate form for gentle absorption."
  },
  {
    name: "Manganese (as Citrate)",
    amount: "1mg (50% NRV)",
    category: "Trace Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in the formation of connective tissue. It contributes to the normal formation of connective tissue and maintenance of normal bones.",
    evidence: "EFSA-authorised claims: Manganese contributes to the normal formation of connective tissue and maintenance of normal bones.",
    whyIncluded: "Supports the body's normal connective tissue formation processes. Citrate form for bioavailability."
  },
  {
    name: "Boron (as Chelate)",
    amount: "2mg",
    category: "Trace Mineral",
    mechanism: "Boron is a trace mineral that influences the metabolism of calcium, magnesium, and vitamin D in the body.",
    evidence: "Boron does not have EFSA-authorised health claims. Research has examined its role in mineral metabolism.",
    whyIncluded: "Included as a supporting trace mineral. The chelated form is designed for absorption."
  }
];

const ProductIngredients = () => {
  return (
    <section id="ingredients" className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Soft ingredient background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <img 
          src={ingredientsCollagenBg} 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Ingredients
            </h2>
            <p className="font-sans text-muted-foreground max-w-lg mx-auto">
              Each included for a specific, defensible reason.
            </p>
          </div>

          {/* Active Ingredients */}
          <div className="mb-16">
            <h3 className="font-serif text-xl text-foreground mb-8 text-center">
              Active Ingredients <span className="text-muted-foreground font-sans text-sm">(per daily portion)</span>
            </h3>
            <div className="space-y-8">
              {activeIngredients.map((ingredient, index) => (
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
                      <h4 className="font-serif text-xl text-foreground">
                        {ingredient.name}
                      </h4>
                    </div>
                    <span className="font-sans text-sm font-medium text-primary bg-trust-badge px-3 py-1 rounded-full">
                      {ingredient.amount}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                        Mechanism of Action
                      </p>
                      <p className="font-sans text-sm text-foreground leading-relaxed">
                        {ingredient.mechanism}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                        What the Evidence Shows
                      </p>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {ingredient.evidence}
                      </p>
                    </div>

                    <div className="bg-background rounded-md p-4 border-l-2 border-primary/30">
                      <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                        Why We Include It
                      </p>
                      <p className="font-sans text-sm text-foreground leading-relaxed">
                        {ingredient.whyIncluded}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vitamins & Minerals */}
          <div className="mb-16">
            <h3 className="font-serif text-xl text-foreground mb-8 text-center">
              Vitamins & Minerals
            </h3>
            <div className="space-y-8">
              {vitaminsAndMinerals.map((ingredient, index) => (
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
                      <h4 className="font-serif text-xl text-foreground">
                        {ingredient.name}
                      </h4>
                    </div>
                    <span className="font-sans text-sm font-medium text-primary bg-trust-badge px-3 py-1 rounded-full">
                      {ingredient.amount}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                        Mechanism of Action
                      </p>
                      <p className="font-sans text-sm text-foreground leading-relaxed">
                        {ingredient.mechanism}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2">
                        What the Evidence Shows
                      </p>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {ingredient.evidence}
                      </p>
                    </div>

                    <div className="bg-background rounded-md p-4 border-l-2 border-primary/30">
                      <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                        Why We Include It
                      </p>
                      <p className="font-sans text-sm text-foreground leading-relaxed">
                        {ingredient.whyIncluded}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Allergen & Source Information */}
          <div className="bg-secondary/30 rounded-lg p-6 md:p-8 border border-border mb-8">
            <h3 className="font-serif text-lg text-foreground mb-4">
              Allergens & Sourcing
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Collagen source:</strong> Contains collagen from marine (fish) or bovine origin depending on variant—check product label for specific source.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Glucosamine source:</strong> Derived from shellfish or vegan fermentation depending on variant—clearly labelled on packaging.</span>
              </li>
            </ul>
          </div>

          {/* Important Warnings */}
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-6 md:p-8 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
              <h3 className="font-serif text-lg text-foreground">
                Important Information
              </h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-500 mt-1">•</span>
                <span>Food supplements should not be used as a substitute for a varied diet and healthy lifestyle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-500 mt-1">•</span>
                <span>Do not exceed the stated dose. Keep out of reach of children.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-500 mt-1">•</span>
                <span>If you are pregnant, breastfeeding, have a medical condition or are taking medication, consult a healthcare professional before use.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-500 mt-1">•</span>
                <span><strong>Contains black pepper extract (piperine)</strong> which may affect the metabolism of certain medicines.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-500 mt-1">•</span>
                <span><strong>Contains Vitamin K2:</strong> If you are taking warfarin or other vitamin K antagonists, seek medical advice before use.</span>
              </li>
            </ul>
          </div>

          {/* Transparency note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <span>Full nutritional panel on every container</span>
            </div>
            <p className="mt-4 font-sans text-xs text-muted-foreground max-w-2xl mx-auto">
              No proprietary blends. Every ingredient amount is disclosed. 
              Our clinical team is available to discuss the scientific rationale 
              behind our formulation decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIngredients;
