import { FlaskConical, Pill } from "lucide-react";

const activeIngredients = [
  {
    name: "Hydrolysed Collagen Peptides (Type I & III)",
    amount: "10,000mg",
    category: "Structural Protein",
    rationale: "Pre-digested peptides at the upper research dose. Types I and III are the primary collagens in connective tissue."
  },
  {
    name: "Glucosamine Sulphate 2KCl",
    amount: "1,500mg",
    category: "Amino Sugar",
    rationale: "The most-studied form, at the dose used in published research. A naturally occurring compound found in cartilage."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "800mg",
    category: "Glycosaminoglycan",
    rationale: "Complements glucosamine as they naturally occur together in cartilage. Research-consistent dose."
  },
  {
    name: "Hyaluronic Acid (Low Molecular Weight)",
    amount: "120mg",
    category: "Glycosaminoglycan",
    rationale: "A component of synovial fluid. Low molecular weight form selected for absorption."
  },
  {
    name: "Curcumin Extract (≥95% Curcuminoids)",
    amount: "500mg",
    category: "Botanical Extract",
    rationale: "Standardised extract with documented antioxidant properties. Paired with piperine to enhance absorption."
  },
  {
    name: "Black Pepper Extract (Piperine)",
    amount: "5mg",
    category: "Bioavailability Enhancer",
    rationale: "Increases curcumin absorption by approximately 2000%. An established nutrient interaction."
  },
  {
    name: "Boswellia Serrata Extract (≥65% Boswellic Acids)",
    amount: "200mg",
    category: "Botanical Extract",
    rationale: "Indian frankincense standardised to ≥65% boswellic acids. Complements curcumin."
  }
];

const vitaminsAndMinerals = [
  {
    name: "Vitamin C (as Ascorbic Acid)",
    amount: "100mg (125% NRV)",
    category: "Vitamin",
    rationale: "Essential cofactor for collagen synthesis. EFSA-authorised for cartilage, bones, and skin."
  },
  {
    name: "Vitamin D3 (Cholecalciferol)",
    amount: "50μg / 2000 IU (1000% NRV)",
    category: "Vitamin",
    rationale: "Supports muscle function and bone maintenance. D3 form for optimal utilisation."
  },
  {
    name: "Vitamin K2 (MK-7, All-Trans)",
    amount: "100μg (133% NRV)",
    category: "Vitamin",
    rationale: "Activates proteins in calcium metabolism. All-trans MK-7 for bioavailability."
  },
  {
    name: "Magnesium (Citrate/Glycinate)",
    amount: "200mg (53% NRV)",
    category: "Essential Mineral",
    rationale: "Involved in 300+ enzymatic reactions. Citrate and glycinate forms for absorption."
  },
  {
    name: "Zinc (as Citrate)",
    amount: "10mg (100% NRV)",
    category: "Essential Mineral",
    rationale: "Contributes to protein synthesis and bone maintenance. Citrate form."
  },
  {
    name: "Copper (as Bisglycinate)",
    amount: "0.5mg (50% NRV)",
    category: "Trace Mineral",
    rationale: "Involved in collagen and elastin cross-linking. Bisglycinate for gentle absorption."
  },
  {
    name: "Manganese (as Citrate)",
    amount: "1mg (50% NRV)",
    category: "Trace Mineral",
    rationale: "Cofactor for connective tissue formation enzymes. Citrate form."
  },
  {
    name: "Boron (as Chelate)",
    amount: "2mg",
    category: "Trace Mineral",
    rationale: "Influences calcium, magnesium, and vitamin D metabolism. Chelated form."
  }
];

const EvidenceIngredients = () => {
  return (
    <section id="evidence-science" className="py-32 md:py-40 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              The Formula
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto" />
          </div>

          {/* Active Ingredients */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Active Ingredients
              </h3>
            </div>
            
            <div className="space-y-4">
              {activeIngredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="bg-secondary/50 rounded-lg border border-border p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="font-serif text-base text-foreground">
                      {ingredient.name}
                    </span>
                    <span className="font-sans text-xs font-medium text-primary bg-trust-badge px-2 py-0.5 rounded-full w-fit">
                      {ingredient.amount}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {ingredient.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vitamins & Minerals */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center">
                <Pill className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Vitamins & Minerals
              </h3>
            </div>
            
            <div className="space-y-4">
              {vitaminsAndMinerals.map((ingredient, index) => (
                <div 
                  key={index}
                  className="bg-secondary/50 rounded-lg border border-border p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="font-serif text-base text-foreground">
                      {ingredient.name}
                    </span>
                    <span className="font-sans text-xs font-medium text-primary bg-trust-badge px-2 py-0.5 rounded-full w-fit">
                      {ingredient.amount}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {ingredient.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceIngredients;
