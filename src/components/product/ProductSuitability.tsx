/**
 * Product Suitability - Who This Is For / Not For
 * Clear, honest positioning
 */

import { Check, X } from "lucide-react";

const suitableFor = [
  "Adults seeking nutritional support for knee cartilage health",
  "Active individuals maintaining knee joint function",
  "Those with suboptimal vitamin D levels (common in UK)",
  "People committed to a holistic approach alongside movement and nutrition",
  "Adults open to consistent, long-term supplementation (8-12+ weeks)"
];

const notSuitableFor = [
  "Those expecting a cure or treatment for knee pain or osteoarthritis",
  "People with fish, shellfish, or collagen allergies (check variant)",
  "Those seeking a replacement for medical diagnosis or care",
  "Those taking warfarin or blood-thinning medication (contains vitamin K2)",
  "Pregnant or breastfeeding women without healthcare guidance",
  "Children under 18 years of age"
];

const ProductSuitability = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header with SEO keyword */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Honest Positioning
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Is This Knee Cartilage Supplement Right for You?
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
              We believe in transparency. This supplement provides nutritional support—it is not a treatment for any medical condition.
            </p>
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
