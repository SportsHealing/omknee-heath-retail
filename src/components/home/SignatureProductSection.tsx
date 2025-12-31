/**
 * Signature Product Section
 * Introduces ONE product without sales language
 * Clearly marked as "Our Formula"
 */

import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BookOpen } from "lucide-react";
import productPouches from "@/assets/product-pouches.png";

const productFeatures = [
  "Clinician-formulated with research-informed ingredient selection",
  "Third-party tested for purity and potency",
  "Manufactured in GMP-certified UK facility",
  "Transparent dosing — no proprietary blends, every amount declared"
];

const SignatureProductSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
              Our Formula
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
              Joint + Movement Support
            </h2>
            <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-6" />
            <p className="font-sans text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              When we couldn't find a joint supplement that met our clinical standards, 
              we developed our own. One formula. No gimmicks. Just thoughtful, 
              evidence-informed formulation.
            </p>
          </div>

          {/* Product card */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product image */}
            <div className="aspect-square bg-primary-foreground/5 rounded-lg flex items-center justify-center order-2 lg:order-1 p-8">
              <img 
                src={productPouches} 
                alt="OmKneeHealth Joint + Movement Support pouches"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product details */}
            <div className="order-1 lg:order-2">
              <h3 className="font-serif text-2xl mb-2">
                What Makes It Different
              </h3>
              <p className="font-sans text-sm text-primary-foreground/60 mb-6 italic">
                Designed with care. Offered with restraint.
              </p>
              
              <ul className="space-y-4 mb-8">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </span>
                    <span className="font-sans text-sm text-primary-foreground/90 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="px-8 py-6 text-sm font-sans font-medium tracking-wide"
                  asChild
                >
                  <a href="/product">
                    View Full Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="px-8 py-6 text-sm font-sans font-medium tracking-wide text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="/science#evidence-science">
                    <BookOpen className="w-4 h-4 mr-2" />
                    See the Evidence
                  </a>
                </Button>
              </div>

              {/* Honest note */}
              <p className="mt-6 font-sans text-xs text-primary-foreground/50">
                Remember: supplements support — they don't replace — movement, 
                nutrition, and appropriate care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
