import { Button } from "@/components/ui/button";
import { Shield, Truck, Award } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-om-sage/20 to-om-cream rounded-2xl flex items-center justify-center border border-om-sage/20">
              <div className="text-center p-8">
                <div className="w-32 h-48 mx-auto bg-om-forest/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-om-forest/50 text-sm">Product Image</span>
                </div>
                <p className="text-muted-foreground text-sm">60 Capsules • 30 Day Supply</p>
              </div>
            </div>
            {/* Trust badges */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="bg-background shadow-elegant rounded-full px-4 py-2 flex items-center gap-2 border border-border">
                <Shield className="w-4 h-4 text-om-forest" />
                <span className="text-xs font-medium">Clinician-Led</span>
              </div>
              <div className="bg-background shadow-elegant rounded-full px-4 py-2 flex items-center gap-2 border border-border">
                <Award className="w-4 h-4 text-om-forest" />
                <span className="text-xs font-medium">Evidence-Based</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-2">
                Joint Support Supplement
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
                OmKneeHealth Joint Complex
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A thoughtfully formulated blend of glucosamine, chondroitin, turmeric and piperine 
                — designed to support your joint health journey with evidence-informed ingredients.
              </p>
            </div>

            {/* Who it's for */}
            <div className="bg-om-cream/50 rounded-xl p-5 border border-om-sage/20">
              <p className="font-medium text-foreground mb-2">Designed for those who:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-om-forest mt-1">•</span>
                  Want to support their knee and joint comfort
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-om-forest mt-1">•</span>
                  Are looking for evidence-based nutritional support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-om-forest mt-1">•</span>
                  Value quality, clinician-guided formulations
                </li>
              </ul>
            </div>

            {/* Price & CTA - Placeholder for Shopify product form */}
            <div className="space-y-4 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-serif text-foreground">£39.99</span>
                <span className="text-muted-foreground">/ 30 day supply</span>
              </div>
              
              <Button size="lg" className="w-full md:w-auto px-12 text-base">
                Add to Cart
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Subscribe & save 15% — flexible, cancel anytime
              </p>
            </div>

            {/* Shipping info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <Truck className="w-4 h-4" />
              <span>Free UK delivery on orders over £30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-hero
          TYPE: Shopify Theme Section (product template)
          
          This section replaces the default product form.
          Price, variants, and Add to Cart button should use Shopify's 
          native product form functionality.
          
          Button microcopy:
          - Primary CTA: "Add to Cart"
          - Secondary: "Subscribe & Save 15%"
        */}
      </div>
    </section>
  );
};

export default ProductHero;
