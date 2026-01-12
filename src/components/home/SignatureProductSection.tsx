/**
 * Signature Product Section
 * Introduces ONE product without sales language
 * Clearly marked as "Our Formula"
 */

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import productPouches from "@/assets/product-pouches.png";

const productFeatures = [
  "Research-informed ingredients",
  "Third-party tested",
  "UK manufactured, GMP-certified",
  "Transparent dosing"
];

const SignatureProductSection = () => {
  return (
    <section className="py-40 lg:py-48 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              Targeted nutritional support for knee joints
            </h2>
            <div className="space-y-4 text-primary-foreground/80 font-sans leading-relaxed max-w-xl mx-auto">
              <p>
                Our joint supplement is designed to support cartilage health, connective tissue integrity, and joint comfort as part of a broader knee-care approach.
              </p>
              <p>
                It combines carefully selected ingredients that are widely studied in joint health research, formulated for consistent, everyday use.
              </p>
            </div>
          </div>

          {/* Product card */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product image */}
            <a 
              href="/product"
              className="block bg-primary-foreground/5 rounded-lg p-6 order-2 lg:order-1 hover:bg-primary-foreground/10 transition-colors cursor-pointer group"
            >
              <img 
                src={productPouches} 
                alt="OmKneeHealth Supplement for Joint Health"
                className="w-full max-w-md mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center mt-6 space-y-2">
                <p className="font-serif text-lg text-primary-foreground">
                  OmKneeHealth Supplement for Joint Health
                </p>
                <p className="font-sans text-sm text-primary-foreground/70">
                  300mg pouch · One month's supply
                </p>
                <p className="font-sans text-xs text-primary-foreground/60 uppercase tracking-wider">
                  Clinician Formulated
                </p>
              </div>
            </a>

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

              <Button 
                variant="secondary"
                size="lg"
                className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
                asChild
              >
                <a href="/product">
                  View the joint supplement
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
