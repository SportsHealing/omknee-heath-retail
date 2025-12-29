import { Check, X } from "lucide-react";

const suitableFor = [
  "Adults looking to support their joint health",
  "Those with active lifestyles who want to maintain mobility",
  "People interested in evidence-based nutritional support",
  "Anyone seeking a clinician-guided approach to supplements",
  "Those who prefer premium, quality-tested formulations"
];

const notSuitableFor = [
  "Anyone with a shellfish allergy (contains glucosamine from shellfish)",
  "Pregnant or breastfeeding women (consult healthcare provider first)",
  "Children under 18 years of age",
  "Those on blood-thinning medication (consult your doctor)"
];

const ProductSuitability = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Is This Right For You?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in helping you make informed choices. Here's an honest look 
              at who this supplement is designed for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Suitable For */}
            <div className="bg-om-cream/40 rounded-xl p-6 md:p-8 border border-om-sage/20">
              <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-om-forest/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-om-forest" />
                </div>
                May Be Suitable For
              </h3>
              <ul className="space-y-4">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-om-forest shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suitable For */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                Please Check First
              </h3>
              <ul className="space-y-4">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-om-sage/10 rounded-xl p-6 border border-om-sage/20">
            <p className="text-center text-muted-foreground">
              <span className="font-medium text-foreground">Not sure?</span> We always recommend 
              speaking with your healthcare provider if you have any concerns or existing health conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-suitability
          TYPE: Custom HTML Section
          
          Helps customers self-select and builds trust 
          through transparent communication.
        */}
      </div>
    </section>
  );
};

export default ProductSuitability;
