/**
 * Product Hero - Joint + Movement Support Powder
 * Clinical positioning with clear value proposition
 * Image-first layout with sticky buy CTA
 */

import { Button } from "@/components/ui/button";
import { ShieldCheck, Leaf, FlaskConical } from "lucide-react";
import productImage from "@/assets/product-pouches.png";

const trustBadges = [
  { icon: ShieldCheck, label: "UK Manufactured" },
  { icon: FlaskConical, label: "Third-Party Tested" },
  { icon: Leaf, label: "Research-Informed" }
];

const ProductHero = () => {
  return (
    <section className="pb-20 md:pb-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Image First - Full Width on Mobile */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={productImage} 
              alt="OmKneeHealth Joint + Movement Support - 300g pouch, one month supply" 
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>

        {/* Product Info - Centered Below Image */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
            Joint + Movement Support
          </h1>
          
          <p className="font-sans text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
            A clinician-formulated powder combining hydrolysed collagen, glucosamine, chondroitin, 
            and essential vitamins — each at research-informed doses.
          </p>

          {/* Product Details */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="bg-secondary px-3 py-1 rounded-full">300g Pouch</span>
            <span className="bg-secondary px-3 py-1 rounded-full">One Month Supply</span>
            <span className="bg-secondary px-3 py-1 rounded-full">Daily Powder</span>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="font-sans">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Price & Primary CTA */}
          <div className="bg-secondary/50 rounded-lg p-6 md:p-8 border border-border mb-6">
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="text-3xl font-serif text-foreground">£49.99</span>
              <span className="text-sm text-muted-foreground font-sans">/ one month supply</span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
              <Button size="lg" className="px-10 text-sm font-sans font-medium">
                Add to Basket
              </Button>
              <Button variant="outline" size="lg" className="px-10 text-sm font-sans font-medium border-foreground/20">
                Subscribe & Save
              </Button>
            </div>
            
            <p className="font-sans text-xs text-muted-foreground">
              Free UK delivery on orders over £30
            </p>
          </div>

          {/* Regulatory Disclaimer */}
          <p className="font-sans text-xs text-muted-foreground max-w-md mx-auto">
            Food supplement. Not intended to diagnose, treat, cure, or prevent any disease. 
            Not a substitute for a varied, balanced diet and healthy lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
