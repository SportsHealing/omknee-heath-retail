/**
 * Product Hero - Joint + Movement Support Powder
 * Clinical positioning with clear value proposition
 */

import { Button } from "@/components/ui/button";

import productImage from "@/assets/product-pouches.png";

const ProductHero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Product Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={productImage} 
                alt="OmKneeHealth Joint + Movement Support - 30 daily pouches" 
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-center mt-6 font-sans text-sm text-muted-foreground">
              30 Daily Pouches
            </p>
          </div>

          {/* Product Info */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
                Joint + Movement Support
              </h1>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Hydrolysed collagen, glucosamine, chondroitin, and essential vitamins at research-informed doses.
              </p>
            </div>

            {/* Price & CTA */}
            <div className="space-y-6 pt-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-serif text-foreground">£49.99</span>
                <span className="text-sm text-muted-foreground font-sans">/ 30 days</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="px-8 text-sm font-sans font-medium">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-sm font-sans font-medium border-primary/20">
                  Subscribe & Save 15%
                </Button>
              </div>
            </div>

            {/* Regulatory note */}
            <p className="font-sans text-xs text-muted-foreground border-t border-border pt-6">
              Food supplement. Not a substitute for a varied diet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
