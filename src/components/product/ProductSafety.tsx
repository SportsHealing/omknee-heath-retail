/**
 * Safety & Quality Section
 * Manufacturing, testing, transparency
 */

import { FlaskConical, Building2, FileCheck, Eye } from "lucide-react";

const qualityPoints = [
  {
    icon: Building2,
    title: "UK Manufactured",
    description: "GMP-certified facility"
  },
  {
    icon: FlaskConical,
    title: "Third-Party Tested",
    description: "Every batch verified"
  },
  {
    icon: FileCheck,
    title: "Certificate Available",
    description: "Documentation on request"
  },
  {
    icon: Eye,
    title: "No Proprietary Blends",
    description: "Full transparency"
  }
];

const ProductSafety = () => {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Quality Standards
            </h2>
          </div>

          {/* Quality grid */}
          <div className="grid md:grid-cols-4 gap-10 mb-20">
            {qualityPoints.map((point, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground">
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
