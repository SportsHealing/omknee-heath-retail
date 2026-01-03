/**
 * Product Suitability - Who This Is For / Not For
 * Clear, honest positioning
 */

import { Check, X } from "lucide-react";

const suitableFor = [
  "Adults seeking nutritional joint support",
  "Active individuals maintaining joint health",
  "Those with suboptimal vitamin D levels",
  "People committed to a comprehensive approach",
  "Adults open to long-term, consistent use"
];

const notSuitableFor = [
  "Those expecting a cure for joint conditions",
  "People with fish, shellfish, or collagen allergies",
  "Those seeking a replacement for medical care",
  "Those taking warfarin without medical advice",
  "Anyone on blood-thinning medication without medical advice",
  "Pregnant or breastfeeding women without guidance",
  "Children under 18 years"
];

const ProductSuitability = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Is This Right for You?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Who this is for */}
            <div className="bg-background rounded-lg p-6 md:p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  This may be suitable for
                </h3>
              </div>
              <ul className="space-y-3">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-sans text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who this is NOT for */}
            <div className="bg-background rounded-lg p-6 md:p-8 border border-destructive/20">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  This is not suitable for
                </h3>
              </div>
              <ul className="space-y-3">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="font-sans text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSuitability;
