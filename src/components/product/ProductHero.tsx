/**
 * Product Hero - Joint + Movement Support Powder
 * Clinical positioning with clear value proposition
 */

import { Button } from "@/components/ui/button";
import { Shield, FlaskConical, Building2 } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-40 h-56 mx-auto bg-primary/5 rounded-lg mb-4 flex items-center justify-center border border-primary/10">
                  <span className="text-muted-foreground text-sm">Product Image</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground">30 Daily Pouches • 30 Day Supply</p>
              </div>
            </div>
            
            {/* Quality badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-trust-badge rounded-lg p-3 text-center">
                <Shield className="w-4 h-4 text-primary mx-auto mb-1.5" />
                <p className="font-sans text-xs text-primary font-medium">Clinician-Led</p>
              </div>
              <div className="bg-trust-badge rounded-lg p-3 text-center">
                <FlaskConical className="w-4 h-4 text-primary mx-auto mb-1.5" />
                <p className="font-sans text-xs text-primary font-medium">Third-Party Tested</p>
              </div>
              <div className="bg-trust-badge rounded-lg p-3 text-center">
                <Building2 className="w-4 h-4 text-primary mx-auto mb-1.5" />
                <p className="font-sans text-xs text-primary font-medium">UK Manufactured</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-primary/10 text-primary mb-4">
                Our Signature Formula
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
                Joint + Movement Support
              </h1>
              <div className="w-12 h-px bg-primary/30 mb-6" />
              <p className="font-sans text-muted-foreground leading-relaxed">
                A clinician-designed powder formula combining hydrolysed collagen peptides, 
                glucosamine, chondroitin, hyaluronic acid, curcumin, boswellia, and essential 
                vitamins and minerals. Each daily pouch delivers research-informed doses with 
                transparent rationale—not marketing trends.
              </p>
            </div>

            {/* What this formula provides */}
            <div className="bg-secondary rounded-lg p-6">
              <p className="font-sans text-sm font-medium text-foreground mb-4">
                This formula provides nutritional support for:
              </p>
              <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Normal collagen formation for cartilage, bones, and skin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Normal muscle function and bone health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Normal formation of connective tissue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Protection of cells from oxidative stress</span>
                </li>
              </ul>
            </div>

            {/* Price & CTA */}
            <div className="space-y-4 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-serif text-foreground">£49.99</span>
                <span className="text-sm text-muted-foreground">/ 30 day supply</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="px-8 text-sm font-sans font-medium">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-sm font-sans font-medium border-primary/20">
                  Subscribe & Save 15%
                </Button>
              </div>
              
              <p className="font-sans text-xs text-muted-foreground">
                Free UK delivery on orders over £30 • Flexible subscription, cancel anytime
              </p>
            </div>

            {/* Regulatory note */}
            <p className="font-sans text-xs text-muted-foreground border-t border-border pt-4">
              This product is a food supplement. Not intended to diagnose, treat, cure, or 
              prevent any disease. Consult your healthcare provider before use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
