import { BookOpen, FlaskConical, CheckCircle2, Pill, Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const activeIngredients = [
  {
    name: "Hydrolysed Collagen Peptides (Type I & III)",
    amount: "10,000mg",
    category: "Structural Protein",
    summary: "Pre-digested collagen fragments small enough to be absorbed intact.",
    evidence: "Multiple studies have examined hydrolysed collagen at doses of 5-10g daily. The 10g dose reflects the upper range used in clinical research. Types I and III are the primary collagens found in skin, tendons, ligaments, and bone. Note: Collagen peptides do not have EFSA-authorised health claims.",
    whyIncluded: "Provides amino acids that contribute to the body's collagen synthesis processes. We use hydrolysed peptides for bioavailability."
  },
  {
    name: "Glucosamine Sulphate 2KCl",
    amount: "1,500mg",
    category: "Amino Sugar",
    summary: "A naturally occurring compound found in cartilage.",
    evidence: "One of the most extensively studied compounds in this category. Results across populations are mixed—some trials show positive outcomes, others show no significant difference from placebo. Note: Glucosamine does not have EFSA-authorised health claims. We present this research honestly.",
    whyIncluded: "Included at 1,500mg daily—the dose used in most published research. This is the form with the most research behind it."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "800mg",
    category: "Glycosaminoglycan",
    summary: "A structural component of cartilage that helps retain water.",
    evidence: "Often studied alongside glucosamine. The combination reflects how these compounds naturally occur together in cartilage tissue. Research outcomes are mixed. Note: Chondroitin does not have EFSA-authorised health claims.",
    whyIncluded: "Included at 800mg to complement glucosamine. The glucosamine-chondroitin combination is the most researched pairing in this category."
  },
  {
    name: "Hyaluronic Acid (Low Molecular Weight)",
    amount: "120mg",
    category: "Glycosaminoglycan",
    summary: "A component of synovial fluid within joints.",
    evidence: "Oral hyaluronic acid supplementation has been examined in several studies. The low molecular weight form shows better bioavailability than high molecular weight versions. Note: Hyaluronic acid does not have EFSA-authorised health claims.",
    whyIncluded: "We specify low molecular weight hyaluronic acid for absorption. At 120mg, this sits within the dose range from published studies."
  },
  {
    name: "Curcumin Extract (≥95% Curcuminoids)",
    amount: "500mg",
    category: "Botanical Extract",
    summary: "The primary active compound in turmeric with antioxidant properties.",
    evidence: "Extensive research demonstrates curcumin's antioxidant activity. However, curcumin has notoriously poor bioavailability—this is why we pair it with piperine. Note: Curcumin/turmeric does not have EFSA-authorised health claims for joints.",
    whyIncluded: "At 500mg of standardised extract (≥95% curcuminoids), combined with piperine for enhanced absorption. Selected for its well-documented antioxidant properties."
  },
  {
    name: "Black Pepper Extract (Piperine)",
    amount: "5mg",
    category: "Bioavailability Enhancer",
    summary: "A compound from black pepper that enhances nutrient absorption.",
    evidence: "Research published in Planta Medica demonstrated that piperine increases curcumin bioavailability by approximately 2000%. This is one of the most well-established nutrient absorption interactions in the scientific literature.",
    whyIncluded: "Without piperine, our curcumin extract would be largely wasted. This is evidence-based formulation: ensuring ingredients are actually absorbed."
  },
  {
    name: "Boswellia Serrata Extract (≥65% Boswellic Acids)",
    amount: "200mg",
    category: "Botanical Extract",
    summary: "Indian frankincense containing boswellic acids.",
    evidence: "Multiple studies have examined boswellia. The ≥65% standardisation ensures consistent potency. AKBA is the most active component. Note: Boswellia does not have EFSA-authorised health claims.",
    whyIncluded: "Boswellia complements curcumin in our formula. At 200mg of standardised extract, this provides consistent levels of active boswellic acids."
  }
];

const vitaminsAndMinerals = [
  {
    name: "Vitamin C (as Ascorbic Acid)",
    amount: "100mg (125% NRV)",
    category: "Vitamin",
    summary: "Essential cofactor for collagen synthesis.",
    evidence: "EFSA-authorised claims: Vitamin C contributes to normal collagen formation for the normal function of cartilage, bones, and skin. Also contributes to protection of cells from oxidative stress.",
    whyIncluded: "Supports the body's normal collagen formation processes. At 125% NRV, this provides effective support when supplementing with collagen peptides."
  },
  {
    name: "Vitamin D3 (Cholecalciferol)",
    amount: "50μg / 2000 IU (1000% NRV)",
    category: "Vitamin",
    summary: "Supports calcium absorption, muscle function, and bone maintenance.",
    evidence: "EFSA-authorised claims: Vitamin D contributes to normal muscle function and maintenance of normal bones. UK surveys consistently show high rates of vitamin D insufficiency, particularly during winter months.",
    whyIncluded: "Supports normal muscle function and bone maintenance. At 2000 IU, this dose is within safe upper limits. We include D3, the form most efficiently utilised by the body."
  },
  {
    name: "Vitamin K2 (MK-7, All-Trans)",
    amount: "100μg (133% NRV)",
    category: "Vitamin",
    summary: "Activates proteins involved in calcium metabolism.",
    evidence: "EFSA-authorised claims: Vitamin K contributes to maintenance of normal bones. Research shows K2 (particularly MK-7) has good bioavailability.",
    whyIncluded: "Supports normal bone maintenance. We use the all-trans form of MK-7—the naturally occurring, fully active isomer."
  },
  {
    name: "Magnesium (Citrate/Glycinate)",
    amount: "200mg (53% NRV)",
    category: "Essential Mineral",
    summary: "Involved in over 300 enzymatic reactions including protein synthesis.",
    evidence: "EFSA-authorised claims: Magnesium contributes to normal muscle function, maintenance of normal bones, normal protein synthesis, and reduction of tiredness and fatigue.",
    whyIncluded: "Supports normal muscle function. We use citrate and glycinate forms for bioavailability. At 53% NRV, this contributes meaningfully while leaving room for dietary intake."
  },
  {
    name: "Zinc (as Citrate)",
    amount: "10mg (100% NRV)",
    category: "Essential Mineral",
    summary: "Contributes to protein synthesis and bone maintenance.",
    evidence: "EFSA-authorised claims: Zinc contributes to normal protein synthesis, maintenance of normal bones, and protection of cells from oxidative stress.",
    whyIncluded: "Supports the body's normal protein synthesis processes. Included at 100% NRV in citrate form for bioavailability."
  },
  {
    name: "Copper (as Bisglycinate)",
    amount: "0.5mg (50% NRV)",
    category: "Trace Mineral",
    summary: "Involved in the cross-linking of collagen and elastin fibres.",
    evidence: "EFSA-authorised claim: Copper contributes to maintenance of normal connective tissues.",
    whyIncluded: "Supports normal connective tissue maintenance. Bisglycinate form for gentle absorption."
  },
  {
    name: "Manganese (as Citrate)",
    amount: "1mg (50% NRV)",
    category: "Trace Mineral",
    summary: "Cofactor for enzymes involved in connective tissue formation.",
    evidence: "EFSA-authorised claims: Manganese contributes to the normal formation of connective tissue and maintenance of normal bones.",
    whyIncluded: "Supports the body's normal connective tissue formation processes. Citrate form for bioavailability."
  },
  {
    name: "Boron (as Chelate)",
    amount: "2mg",
    category: "Trace Mineral",
    summary: "Influences the metabolism of calcium, magnesium, and vitamin D.",
    evidence: "Boron does not have EFSA-authorised health claims. Research has examined its role in mineral metabolism.",
    whyIncluded: "Included as a supporting trace mineral. The chelated form is designed for absorption."
  }
];

const EvidenceIngredients = () => {
  return (
    <section id="evidence-science" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              The Formula
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Evidence-Informed Ingredients
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We've chosen ingredients that have been studied in the context of joint 
              health. Here's an honest look at what the research says — and doesn't say.
            </p>
          </div>

          {/* Active Ingredients */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Active Ingredients
              </h3>
            </div>
            
            <Accordion type="single" collapsible className="space-y-3">
              {activeIngredients.map((ingredient, index) => (
                <AccordionItem 
                  key={index} 
                  value={`active-${index}`}
                  className="bg-secondary/50 rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
                      <span className="font-serif text-base text-foreground">
                        {ingredient.name}
                      </span>
                      <span className="font-sans text-xs font-medium text-primary bg-trust-badge px-2 py-0.5 rounded-full w-fit">
                        {ingredient.amount}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="font-sans text-sm text-primary/80 mb-4">
                      {ingredient.summary}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                        <div>
                          <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                            What the research shows
                          </p>
                          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                            {ingredient.evidence}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                            Why we include it
                          </p>
                          <p className="font-sans text-sm text-foreground leading-relaxed">
                            {ingredient.whyIncluded}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Vitamins & Minerals */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center">
                <Pill className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                Vitamins & Minerals
              </h3>
            </div>
            
            <Accordion type="single" collapsible className="space-y-3">
              {vitaminsAndMinerals.map((ingredient, index) => (
                <AccordionItem 
                  key={index} 
                  value={`vitamin-${index}`}
                  className="bg-secondary/50 rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
                      <span className="font-serif text-base text-foreground">
                        {ingredient.name}
                      </span>
                      <span className="font-sans text-xs font-medium text-primary bg-trust-badge px-2 py-0.5 rounded-full w-fit">
                        {ingredient.amount}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="font-sans text-sm text-primary/80 mb-4">
                      {ingredient.summary}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                        <div>
                          <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                            What the research shows
                          </p>
                          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                            {ingredient.evidence}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-1">
                            Why we include it
                          </p>
                          <p className="font-sans text-sm text-foreground leading-relaxed">
                            {ingredient.whyIncluded}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Research note */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border">
            <div className="flex items-start gap-3">
              <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground mb-2">
                  A note on research
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Nutritional research is complex. Studies vary in quality, size, and methodology. 
                  We've tried to summarise the overall picture fairly, acknowledging both supportive 
                  findings and limitations. We encourage curious readers to explore the research themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceIngredients;
