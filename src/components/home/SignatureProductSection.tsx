/**
 * Signature Product Section
 * Introduces ONE product without sales language
 * Clearly marked as "Our Formula"
 */

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import productPouches from "@/assets/product-pouches.png";

const productFeatures = [
  "Research-informed ingredient selection",
  "Third-party tested for purity",
  "UK manufactured, GMP-certified",
  "Transparent dosing — no proprietary blends"
];

const SignatureProductSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary-foreground/50 mb-6">
              Our Formula
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Joint + Movement Support
            </h2>
          </div>

          {/* Product card */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product image */}
            <div className="aspect-square bg-primary-foreground/5 rounded-lg flex items-center justify-center order-2 lg:order-1 p-10">
              <img 
                src={productPouches} 
                alt="OmKneeHealth Joint + Movement Support"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product details */}
            <div className="order-1 lg:order-2">
              <ul className="space-y-5 mb-10">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </span>
                    <span className="font-sans text-sm text-primary-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
                  asChild
                >
                  <a href="/product">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="ghost"
                  size="lg"
                  className="px-10 py-6 text-sm font-sans font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                  asChild
                >
                  <a href="/science#evidence-science">
                    See Evidence
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
