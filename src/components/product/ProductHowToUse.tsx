/**
 * How to Use Section - Clinical Guidance for Powder Format
 */

import { Clock, Utensils, CalendarDays, AlertCircle, Droplets } from "lucide-react";

const ProductHowToUse = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-4">
              Usage Guidelines
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              How to Take This Supplement
            </h2>
            <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-6" />
            <p className="font-sans text-primary-foreground/80 leading-relaxed">
              Simple, straightforward guidance based on how these ingredients are typically used.
            </p>
          </div>

          {/* Usage cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-2">Daily Dosage</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Take one pouch daily. Each pouch contains the full daily dose of all 
                    active ingredients as specified on the label.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-2">How to Mix</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Empty the contents of one pouch into 200-250ml of water, juice, or 
                    your preferred beverage. Stir or shake well until fully dissolved.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-2">With Food</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Best taken with or after a meal. Food may improve absorption of 
                    certain ingredients and reduce the likelihood of digestive discomfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-2">Timeframe</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Joint support supplements are typically used consistently over 
                    time. Most research studies assess outcomes after 8-12 weeks 
                    of regular use.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-primary-foreground/80" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-lg mb-2">Important</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Do not exceed the stated dose. This supplement does not replace 
                    a varied, balanced diet and healthy lifestyle. Store pouches in a 
                    cool, dry place away from direct sunlight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center font-sans text-xs text-primary-foreground/60 max-w-2xl mx-auto">
            Food supplements should not be used as a substitute for a varied diet. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            If you are experiencing joint pain or have concerns about your joint health, 
            please consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHowToUse;
