/**
 * Safety & Quality Section
 * Manufacturing, testing, transparency
 */

import { Shield, FlaskConical, Building2, FileCheck, Eye, Leaf } from "lucide-react";

const qualityPoints = [
  {
    icon: Building2,
    title: "UK Manufactured",
    description: "Produced in a GMP-certified facility in the United Kingdom, meeting strict quality and safety standards."
  },
  {
    icon: FlaskConical,
    title: "Third-Party Tested",
    description: "Every batch is independently tested for purity, potency, and contaminants by accredited laboratories."
  },
  {
    icon: FileCheck,
    title: "Certificate of Analysis",
    description: "Full testing documentation available upon request. We stand behind every batch we produce."
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "No proprietary blends. Every ingredient and its exact amount is clearly stated on the label."
  },
  {
    icon: Shield,
    title: "Allergen Awareness",
    description: "Contains collagen (marine or bovine), may contain shellfish-derived glucosamine. All allergens clearly declared on each variant's label."
  },
  {
    icon: Leaf,
    title: "Responsible Sourcing",
    description: "Ingredients sourced from reputable suppliers with documented quality control procedures."
  }
];

const ProductSafety = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Quality & Safety
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              What Goes Into Every Pouch
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Quality isn't a marketing claim—it's a manufacturing commitment. 
              Here's how we ensure every pouch meets our standards.
            </p>
          </div>

          {/* Quality grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {qualityPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-lg p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Safety considerations */}
          <div className="bg-secondary rounded-lg p-6 md:p-8 border border-border">
            <h3 className="font-serif text-xl text-foreground mb-6 text-center">
              Important Safety Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-sm font-medium text-foreground mb-3">
                  Consult your healthcare provider if you:
                </p>
                <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Are pregnant, nursing, or planning pregnancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Take warfarin or other vitamin K antagonists (contains Vitamin K2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Take blood-thinning or diabetes medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Take any prescription medications (piperine may affect drug metabolism)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Are scheduled for surgery</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-foreground mb-3">
                  Not suitable for:
                </p>
                <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                    <span>Those with fish or shellfish allergy (check variant label)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                    <span>Those with bovine/beef allergy (check variant label)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                    <span>Children under 18 years</span>
                  </li>
                </ul>
                <p className="font-sans text-sm text-muted-foreground mt-4">
                  Store in a cool, dry place. Keep out of reach of children. 
                  Do not exceed the recommended daily intake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSafety;
