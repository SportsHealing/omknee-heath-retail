/**
 * Signature Product Section
 * Introduces ONE product without sales language
 * Clearly marked as "Our Formula"
 */

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import productPouches from "@/assets/product-pouches.png";

const productFeatures = [
  "Understand what is in it",
  "Understand why it is there",
  "Understand how much is provided",
  "Understand what the evidence actually says",
];

const SignatureProductSection = () => {
  return (
    <section className="py-40 lg:py-48 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-6">
              Signature formulation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              Our approach to knee nutrition.
            </h2>
            <div className="space-y-4 text-primary-foreground/80 font-sans leading-relaxed max-w-xl mx-auto">
              <p>Supplements sit within a much bigger picture.</p>
              <p>
                Our starting point is a balanced diet, regular movement, appropriate strength and
                attention to overall health.
              </p>
              <p>
                Where supplements are considered, we believe the same principles should apply as
                elsewhere at OmKneeHealth: understand what is in them, why it is there, how much is
                provided and what the evidence actually says.
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
                width={448}
                height={448}
                sizes="(max-width: 1024px) 100vw, 448px"
                className="w-full max-w-md mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center mt-6 space-y-2">
                <p className="font-serif text-lg text-primary-foreground">
                  OmKneeHealth Signature Formula
                </p>
                <p className="font-sans text-sm text-primary-foreground/70">
                  A considered formulation created specifically for the OmKneeHealth range.
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
                  asChild
                >
                  <a href="/product">
                    Explore the Formulation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-6 text-sm font-sans font-medium tracking-wide border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="/shop#knee-nutrition">Shop Now</a>
                </Button>
              </div>

              <p className="font-sans text-xs text-primary-foreground/70 mt-8 leading-relaxed">
                Food supplements are intended to supplement the normal diet. They should not be
                used as a substitute for a varied and balanced diet or a healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProductSection;
