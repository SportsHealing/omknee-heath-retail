/**
 * Product Suitability - Who This Is For / Not For
 * Clear, honest positioning
 */

import { Check, X } from "lucide-react";

const suitableFor = [
  {
    title: "Adults seeking nutritional joint support",
    description: "Those looking to supplement their diet with nutrients that support cartilage, connective tissue, and bone health."
  },
  {
    title: "Active individuals maintaining joint health",
    description: "People who exercise regularly and want to support their joints as part of overall musculoskeletal care."
  },
  {
    title: "Those with suboptimal vitamin D levels",
    description: "Adults who may not get adequate vitamin D from sun exposure and diet—common in the UK, particularly during winter."
  },
  {
    title: "People committed to a comprehensive approach",
    description: "Those who understand supplements work best alongside movement, nutrition, and appropriate rest."
  },
  {
    title: "Adults open to long-term, consistent use",
    description: "Research typically assesses these ingredients over 8-12 weeks. This is not a quick-fix solution."
  }
];

const notSuitableFor = [
  {
    title: "Those expecting a cure for joint conditions",
    description: "This is a food supplement, not a medicine. It cannot treat, cure, or prevent any disease."
  },
  {
    title: "People with shellfish allergies",
    description: "Our glucosamine is derived from marine shellfish. We cannot offer a shellfish-free capsule version."
  },
  {
    title: "Those seeking a replacement for medical care",
    description: "If you have significant joint pain or a diagnosed condition, please consult a healthcare professional."
  },
  {
    title: "Anyone on blood-thinning medication without medical advice",
    description: "Glucosamine may affect blood clotting. Consult your doctor before use."
  },
  {
    title: "Pregnant or breastfeeding women without medical guidance",
    description: "Insufficient data exists for these populations. Please consult your healthcare provider."
  },
  {
    title: "Children under 18 years",
    description: "This product is formulated for adults only."
  }
];

const ProductSuitability = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Honest Positioning
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Is This Supplement Right for You?
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We believe in transparency. Before you consider this product, 
              here's an honest assessment of who may benefit—and who should look elsewhere.
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
              <ul className="space-y-4">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="font-sans text-sm text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
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
              <ul className="space-y-4">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="font-sans text-sm text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Decision guidance */}
          <div className="mt-10 bg-background rounded-lg p-6 border border-border text-center">
            <p className="font-sans text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Still unsure?</span>{" "}
              We encourage you to discuss with your healthcare provider. They can assess 
              your individual situation and advise whether nutritional supplementation 
              is appropriate for your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSuitability;
