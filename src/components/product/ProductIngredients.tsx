/**
 * Product Ingredients - Evidence-Based Breakdown
 * Ingredient-by-ingredient rationale with mechanism of action
 */

import { AlertTriangle } from 'lucide-react';

const activeIngredients = [
  {
    name: "Hydrolysed Collagen Peptides (Type I & III)",
    amount: "10,000mg",
    category: "Structural Protein",
    mechanism: "Collagen peptides are pre-digested fragments of collagen protein, small enough to be absorbed intact. Types I and III are the primary collagens found in skin, tendons, ligaments, and bone. Once absorbed, these peptides may signal fibroblasts to increase collagen synthesis—a process called 'collagen turnover stimulation.'",
    evidence: "Multiple clinical trials have examined hydrolysed collagen at doses of 5-10g daily. Studies published in journals including the Journal of Agricultural and Food Chemistry show improved collagen density markers. The 10g dose reflects the upper range used in clinical research.",
    whyIncluded: "Provides the building blocks for the body's own collagen production. At 10g daily, this is a clinically meaningful dose. We use hydrolysed peptides for superior absorption compared to whole collagen protein."
  },
  {
    name: "Glucosamine Sulphate 2KCl",
    amount: "1,500mg",
    category: "Amino Sugar",
    mechanism: "Glucosamine is a naturally occurring compound found in healthy cartilage—specifically in the fluid around joints. It serves as a building block for glycosaminoglycans and proteoglycans, which form the structural matrix of cartilage. The sulphate form provides sulphur, an essential element for cartilage matrix synthesis.",
    evidence: "One of the most extensively studied joint health compounds. The GAIT trial, GUIDE study, and multiple European trials have examined glucosamine at this dose. Results are mixed across populations—some trials show positive outcomes for joint comfort, others show no significant difference from placebo. We present this honestly.",
    whyIncluded: "We use glucosamine sulphate 2KCl at 1,500mg daily—the exact dose used in most clinical research. This is the form with the most research behind it."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "800mg",
    category: "Glycosaminoglycan",
    mechanism: "Chondroitin is a major structural component of cartilage, contributing to its ability to retain water and provide cushioning. It attracts water into the proteoglycan matrix, maintaining the gel-like consistency that allows cartilage to resist compression. It works in tandem with glucosamine in the cartilage structure.",
    evidence: "Often studied alongside glucosamine. The combination reflects how these compounds naturally occur together in cartilage tissue. Research outcomes are similarly mixed to glucosamine—some positive trials, some neutral. EFSA has not approved specific health claims for chondroitin.",
    whyIncluded: "Included at 800mg to complement glucosamine—a higher dose than many competitors. The glucosamine-chondroitin combination is the most researched pairing in joint health supplementation."
  },
  {
    name: "Hyaluronic Acid (Low Molecular Weight)",
    amount: "120mg",
    category: "Glycosaminoglycan",
    mechanism: "Hyaluronic acid is a key component of synovial fluid—the lubricating fluid within joints. Low molecular weight forms are more readily absorbed orally. Once absorbed, hyaluronic acid contributes to the viscosity of joint fluid and the hydration of cartilage tissue.",
    evidence: "Oral hyaluronic acid supplementation has been studied for joint health with promising results in several clinical trials. The low molecular weight form shows better bioavailability than high molecular weight versions. Doses of 80-200mg daily have been used in research.",
    whyIncluded: "We specify low molecular weight hyaluronic acid because absorption matters. At 120mg, this sits within the effective dose range from clinical studies, supporting joint lubrication from within."
  },
  {
    name: "Curcumin Extract (≥95% Curcuminoids)",
    amount: "500mg",
    category: "Botanical Extract",
    mechanism: "Curcumin, the primary active compound in turmeric, is a potent antioxidant. It neutralises free radicals directly and stimulates the body's own antioxidant enzymes. Antioxidants help protect cells from oxidative stress—the cellular damage caused by an imbalance of free radicals and antioxidant defences.",
    evidence: "Extensive research demonstrates curcumin's antioxidant activity. However, curcumin has notoriously poor bioavailability—most is metabolised before reaching the bloodstream. This is why we pair it with piperine.",
    whyIncluded: "At 500mg of standardised extract (≥95% curcuminoids), this is a substantial dose. Combined with piperine for enhanced absorption, this delivers meaningful curcuminoid levels to the body."
  },
  {
    name: "Black Pepper Extract (Piperine)",
    amount: "5mg",
    category: "Bioavailability Enhancer",
    mechanism: "Piperine inhibits glucuronidation—an enzyme process in the intestine and liver that rapidly metabolises and eliminates curcumin. By blocking this pathway, piperine allows more curcumin to enter the bloodstream intact and remain active for longer.",
    evidence: "Research published in Planta Medica demonstrated that piperine increases curcumin bioavailability by approximately 2000%. This is one of the most well-established nutrient absorption interactions in the scientific literature.",
    whyIncluded: "Without piperine, our curcumin extract would be largely wasted. This is evidence-based formulation: not just adding ingredients, but ensuring they actually work."
  },
  {
    name: "Boswellia Serrata Extract (≥65% Boswellic Acids)",
    amount: "200mg",
    category: "Botanical Extract",
    mechanism: "Boswellia serrata, also known as Indian frankincense, contains boswellic acids—compounds that have been extensively studied for their effects on inflammatory pathways. AKBA (acetyl-11-keto-β-boswellic acid) is the most active component, which is why we standardise for boswellic acid content.",
    evidence: "Multiple clinical trials have examined boswellia for joint health. Studies published in Phytomedicine and other peer-reviewed journals show promising results for joint comfort and mobility. The ≥65% standardisation ensures consistent potency.",
    whyIncluded: "Boswellia complements curcumin, working through different pathways. At 200mg of standardised extract, this provides meaningful levels of active boswellic acids."
  }
];

const vitaminsAndMinerals = [
  {
    name: "Vitamin C (as Ascorbic Acid)",
    amount: "100mg (125% NRV)",
    category: "Vitamin",
    mechanism: "Vitamin C is essential for collagen synthesis—it serves as a cofactor for the enzymes that stabilise and cross-link collagen molecules. Without adequate vitamin C, the body cannot produce functional collagen. It also contributes to the protection of cells from oxidative stress.",
    evidence: "EFSA-approved claims: contributes to normal collagen formation for the normal function of cartilage, bones, and skin. Also contributes to protection of cells from oxidative stress.",
    whyIncluded: "Essential when supplementing with collagen peptides—vitamin C ensures your body can actually use them to build new collagen. At 125% NRV, this provides optimal support for collagen synthesis."
  },
  {
    name: "Vitamin D3 (Cholecalciferol)",
    amount: "50μg / 2000 IU (1000% NRV)",
    category: "Vitamin",
    mechanism: "Vitamin D is essential for calcium absorption and phosphorus metabolism. It binds to receptors in muscle cells and bone tissue, supporting their normal function. In the context of joint health, vitamin D supports the musculoskeletal system as an integrated whole—healthy muscles provide better support for joints.",
    evidence: "EFSA-approved claims: contributes to normal muscle function and maintenance of normal bones. UK national surveys consistently show high rates of vitamin D insufficiency, particularly during autumn and winter months.",
    whyIncluded: "At 2000 IU, this is a therapeutic dose that addresses common deficiency effectively. We include D3 (cholecalciferol), the form most efficiently utilised by the body. This dose is within safe upper limits for daily supplementation."
  },
  {
    name: "Vitamin K2 (MK-7, All-Trans)",
    amount: "100μg (133% NRV)",
    category: "Vitamin",
    mechanism: "Vitamin K2 activates proteins that direct calcium to bones and away from soft tissues. It works synergistically with vitamin D—while D3 increases calcium absorption, K2 ensures that calcium is deposited in the right places. MK-7 is the most bioavailable form with the longest half-life.",
    evidence: "EFSA-approved claims: contributes to maintenance of normal bones. Research shows K2 (particularly MK-7) has superior bioavailability compared to K1, remaining active in the body for longer.",
    whyIncluded: "Essential partner to vitamin D3. We use the all-trans form of MK-7—the naturally occurring, fully active isomer—rather than cheaper synthetic versions that may contain inactive cis-isomers."
  },
  {
    name: "Magnesium (Citrate/Glycinate)",
    amount: "200mg (53% NRV)",
    category: "Essential Mineral",
    mechanism: "Magnesium is involved in over 300 enzymatic reactions in the body, including protein synthesis and muscle function. It plays a crucial role in muscle relaxation and contraction, nerve transmission, and helps maintain normal muscle function—essential for the muscles that support and move knee joints.",
    evidence: "EFSA-approved claims: contributes to normal muscle function, maintenance of normal bones, normal protein synthesis, and reduction of tiredness and fatigue. Many adults have suboptimal magnesium intake due to modern dietary patterns.",
    whyIncluded: "We use citrate and glycinate forms for superior absorption compared to oxide. Supports healthy muscle function around joints. At 53% NRV, this contributes meaningfully while leaving room for dietary intake."
  },
  {
    name: "Zinc (as Citrate)",
    amount: "10mg (100% NRV)",
    category: "Essential Mineral",
    mechanism: "Zinc is essential for protein synthesis, cell division, and wound healing. It plays a structural role in many enzymes and is necessary for the production and repair of connective tissues. Zinc also contributes to the protection of cells from oxidative stress.",
    evidence: "EFSA-approved claims: contributes to normal protein synthesis, maintenance of normal bones, and protection of cells from oxidative stress. Zinc citrate offers good bioavailability compared to oxide forms.",
    whyIncluded: "Supports the body's repair and maintenance processes. Essential for healthy connective tissue turnover. Included at 100% NRV in citrate form for optimal absorption."
  },
  {
    name: "Copper (as Bisglycinate)",
    amount: "0.5mg (50% NRV)",
    category: "Trace Mineral",
    mechanism: "Copper is essential for lysyl oxidase, the enzyme responsible for cross-linking collagen and elastin fibres. This cross-linking provides tensile strength and structural integrity to connective tissues. Without adequate copper, collagen cannot mature properly.",
    evidence: "EFSA-approved claim: copper contributes to maintenance of normal connective tissues. Cross-linking is essential for the mechanical properties of cartilage and other joint structures.",
    whyIncluded: "Collagen is the primary structural protein in joint tissues. Copper ensures that the collagen your body produces is properly formed and functional. Bisglycinate form for gentle absorption."
  },
  {
    name: "Manganese (as Citrate)",
    amount: "1mg (50% NRV)",
    category: "Trace Mineral",
    mechanism: "Manganese is a cofactor for enzymes involved in the synthesis of glycosaminoglycans and proteoglycans—the molecules that form the structural matrix of cartilage and other connective tissues. It's essential for the normal formation of connective tissue.",
    evidence: "EFSA-approved claim: manganese contributes to the normal formation of connective tissue. Also approved for contribution to maintenance of normal bones and protection of cells from oxidative stress.",
    whyIncluded: "Supports the body's natural processes for building and maintaining the connective tissue framework that includes cartilage, tendons, and ligaments. Citrate form for bioavailability."
  },
  {
    name: "Boron (as Chelate)",
    amount: "2mg",
    category: "Trace Mineral",
    mechanism: "Boron influences the metabolism of calcium, magnesium, and vitamin D. It appears to play a role in bone health and may support the body's use of these nutrients. Boron also affects the activity of certain enzymes involved in bone and joint tissue maintenance.",
    evidence: "While boron does not have EFSA-approved health claims, research suggests it plays a supporting role in bone and joint metabolism. Studies have examined boron's effects on calcium and magnesium retention.",
    whyIncluded: "Included as a supporting trace mineral that may enhance the utilisation of other bone-supporting nutrients in the formula. The chelated form ensures good absorption."
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
              What's Inside—And Why
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every ingredient is included for a specific, defensible reason. 
              Here's the complete breakdown—mechanism, evidence, and our rationale.
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
