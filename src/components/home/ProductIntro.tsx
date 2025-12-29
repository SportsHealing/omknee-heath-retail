/**
 * SHOPIFY SECTION: Featured Product
 * Location: Homepage - Signature product introduction
 * Type: Shopify Theme Section (featured-product or product-with-text)
 */

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Supports joint comfort & flexibility",
  "Formulated with clinician input",
  "Quality-tested ingredients",
  "Easy daily routine",
];

const ProductIntro = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-card to-secondary overflow-hidden shadow-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-sans text-sm text-foreground/40 uppercase tracking-wide">
                    Product Image
                  </p>
                  <p className="font-serif text-2xl text-foreground/30 mt-2">
                    Signature Formula
                  </p>
                </div>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full">
              <span className="font-sans text-xs tracking-wide uppercase">Clinician-Led</span>
            </div>
          </div>

          {/* Product content */}
          <div>
            <p className="font-sans text-sm tracking-[0.15em] uppercase text-accent mb-4">
              Our Signature Support
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              OmKnee Joint Support Formula
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              A thoughtfully crafted blend designed to support your knees and joints 
              through daily life. Developed with healthcare professionals who understand 
              what joint wellness really means.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage-light flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                  </span>
                  <span className="font-sans text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                View Ingredients
              </Button>
            </div>

            {/* Trust note */}
            <p className="font-sans text-xs text-muted-foreground mt-6">
              Free shipping on orders over $50 • 30-day satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
