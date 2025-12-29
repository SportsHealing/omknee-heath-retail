/**
 * Product Ingredients - Evidence-Based Breakdown
 * Ingredient-by-ingredient rationale with mechanism of action
 */

const ingredients = [
  {
    name: "Vitamin D3",
    amount: "25μg (1000 IU)",
    category: "Vitamin",
    mechanism: "Vitamin D is essential for calcium absorption and phosphorus metabolism. It binds to receptors in muscle cells and bone tissue, supporting their normal function. In the context of joint health, vitamin D supports the musculoskeletal system as an integrated whole—healthy muscles provide better support for joints.",
    evidence: "EFSA-approved claims: contributes to normal muscle function and maintenance of normal bones. UK national surveys consistently show high rates of vitamin D insufficiency, particularly during autumn and winter months when sun exposure is limited.",
    whyIncluded: "Many adults with joint concerns have suboptimal vitamin D status. At 1000 IU (100% NRV), this dose addresses common deficiency without exceeding safe upper limits. We include D3 (cholecalciferol), the form most efficiently utilised by the body."
  },
  {
    name: "Glucosamine Sulphate 2KCl",
    amount: "1500mg",
    category: "Amino Sugar",
    mechanism: "Glucosamine is a naturally occurring compound found in healthy cartilage—specifically in the fluid around joints. It serves as a building block for glycosaminoglycans and proteoglycans, which form the structural matrix of cartilage. The sulphate form provides sulphur, an essential element for cartilage matrix synthesis.",
    evidence: "One of the most extensively studied joint health compounds. The GAIT trial, GUIDE study, and multiple European trials have examined glucosamine at this dose. Results are mixed across populations—some trials show positive outcomes for joint comfort, others show no significant difference from placebo. We present this honestly.",
    whyIncluded: "We use glucosamine sulphate 2KCl at 1500mg daily—the exact dose used in most clinical research. Marine-derived to provide both the amino sugar and sulphate components. This is the form with the most research behind it, for better or worse."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "400mg",
    category: "Glycosaminoglycan",
    mechanism: "Chondroitin is a major structural component of cartilage, contributing to its ability to retain water and provide cushioning. It attracts water into the proteoglycan matrix, maintaining the gel-like consistency that allows cartilage to resist compression. It works in tandem with glucosamine in the cartilage structure.",
    evidence: "Often studied alongside glucosamine. The combination reflects how these compounds naturally occur together in cartilage tissue. Research outcomes are similarly mixed to glucosamine—some positive trials, some neutral. EFSA has not approved specific health claims for chondroitin.",
    whyIncluded: "Included at 400mg to complement glucosamine. The glucosamine-chondroitin combination is the most researched pairing in joint health supplementation. We include both because they're structural partners in actual cartilage."
  },
  {
    name: "Turmeric Root Extract",
    amount: "200mg (standardised to 95% curcuminoids)",
    category: "Botanical Extract",
    mechanism: "Curcumin, the primary active compound in turmeric, is a potent antioxidant. It neutralises free radicals directly and stimulates the body's own antioxidant enzymes. Antioxidants help protect cells from oxidative stress—the cellular damage caused by an imbalance of free radicals and antioxidant defences.",
    evidence: "Extensive research demonstrates curcumin's antioxidant activity. However, curcumin has notoriously poor bioavailability—most is metabolised before reaching the bloodstream. This is why we pair it with piperine (see below).",
    whyIncluded: "Selected for well-documented antioxidant properties, not unsubstantiated claims. We use a standardised extract (95% curcuminoids) to ensure consistent potency. The 200mg dose provides meaningful curcuminoid content when enhanced by piperine."
  },
  {
    name: "Piperine (from Black Pepper Extract)",
    amount: "10mg",
    category: "Bioavailability Enhancer",
    mechanism: "Piperine inhibits glucuronidation—an enzyme process in the intestine and liver that rapidly metabolises and eliminates curcumin. By blocking this pathway, piperine allows more curcumin to enter the bloodstream intact and remain active for longer.",
    evidence: "Research published in Planta Medica demonstrated that piperine increases curcumin bioavailability by approximately 2000%. This is one of the most well-established nutrient absorption interactions in the scientific literature.",
    whyIncluded: "Without piperine, our turmeric extract would be largely wasted. This is evidence-based formulation: not just adding ingredients, but ensuring they actually work. The 10mg dose is consistent with research protocols."
  },
  {
    name: "Magnesium",
    amount: "200mg (53% NRV)",
    category: "Essential Mineral",
    mechanism: "Magnesium is involved in over 300 enzymatic reactions in the body, including protein synthesis and muscle function. It plays a crucial role in muscle relaxation and contraction, nerve transmission, and helps maintain normal muscle function—essential for the muscles that support and move knee joints.",
    evidence: "EFSA-approved claims: magnesium contributes to normal muscle function, maintenance of normal bones, normal protein synthesis, and reduction of tiredness and fatigue. Many adults have suboptimal magnesium intake due to modern dietary patterns.",
    whyIncluded: "Supports healthy muscle function around the knee joint. Muscles that contract and relax properly provide better joint stability and movement. Included at a meaningful dose that contributes significantly to daily requirements without risking excessive intake."
  },
  {
    name: "Copper",
    amount: "1mg (100% NRV)",
    category: "Essential Trace Mineral",
    mechanism: "Copper is essential for lysyl oxidase, the enzyme responsible for cross-linking collagen and elastin fibres. This cross-linking provides tensile strength and structural integrity to connective tissues. Without adequate copper, collagen cannot mature properly.",
    evidence: "EFSA-approved claim: copper contributes to maintenance of normal connective tissues. Cross-linking is essential for the mechanical properties of cartilage and other joint structures.",
    whyIncluded: "Collagen is the primary structural protein in joint tissues. Copper ensures that the collagen your body produces is properly formed and functional. Included at 100% of the Nutrient Reference Value."
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

          {/* Transparency note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <span>Full nutritional panel on every bottle</span>
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
