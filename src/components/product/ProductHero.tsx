/**
 * Product Hero - Joint + Movement Support Powder
 * Clinical positioning with clear value proposition
 * Image-first layout. One product: the OmKneeHealth Supplement
 */

import { Button } from "@/components/ui/button";
import { ShieldCheck, Leaf, FlaskConical } from "lucide-react";
import productImage from "@/assets/product-pouches.png";
import ingredientsBg from "@/assets/ingredients-turmeric-bg.jpg";
import { SUPPLEMENT } from "@/content/supplement";

const trustBadges = [
  { icon: ShieldCheck, label: "UK GMP Manufactured" },
  { icon: FlaskConical, label: "Third-Party Batch Tested" },
  { icon: Leaf, label: "Evidence-Informed Doses" }
];

const ProductHero = () => {
  return (
    <section className="pb-20 md:pb-32 bg-background relative overflow-hidden">
      {/* Soft ingredient background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img 
          src={ingredientsBg} 
          alt="" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Image First - Full Width on Mobile */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={productImage} 
              alt={`${SUPPLEMENT.name}, ${SUPPLEMENT.pack}`}
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, 600px"
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>

        {/* Product Info - Centered Below Image */}
        <div className="max-w-2xl mx-auto text-center">
          {/* UK trust signal */}
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
            UK Clinician-Formulated • Third-Party Tested
          </p>

          {/* H1 optimized for "knee cartilage supplement" and "collagen supplement for knees" */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-3">
            Knee Cartilage & Collagen Support
          </h1>
          
          
          {/* Value proposition with target keywords */}
          <p className="font-sans text-muted-foreground leading-relaxed mb-3 max-w-lg mx-auto">
            A comprehensive collagen supplement for knees, combining hydrolysed peptides with vitamin C for normal cartilage function, plus vitamin D & K2 for bone maintenance.
          </p>

          <p className="font-sans text-sm text-muted-foreground/80 mb-8 max-w-md mx-auto">
            Developed by UK clinicians for those seeking nutritional joint support at every stage of life.
          </p>

          {/* Product Details */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="bg-secondary px-3 py-1 rounded-full">{SUPPLEMENT.pack}</span>
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
              <span className="text-3xl font-serif text-foreground">£{SUPPLEMENT.price}</span>
              <span className="text-sm text-muted-foreground font-sans">/ {SUPPLEMENT.pack}</span>
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
