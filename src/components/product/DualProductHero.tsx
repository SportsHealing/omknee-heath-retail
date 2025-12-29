/**
 * Dual Product Hero - Clinical Authority Approach
 * Shows both Collagen and Vegan powder options
 */

import { Button } from "@/components/ui/button";
import { Shield, FlaskConical, Building2, Leaf, Sparkles } from "lucide-react";
import type { ProductVariant } from "./ProductSelector";

interface DualProductHeroProps {
  variant: ProductVariant;
}

const productData = {
  collagen: {
    name: "Collagen Powder",
    tagline: "Joint Comfort Complex",
    description: "A targeted powder formulation featuring hydrolysed collagen peptides combined with vitamin C, hyaluronic acid, and essential minerals. Designed for daily use as part of a comprehensive approach to long-term knee health.",
    icon: Sparkles,
    supply: "30 Servings • 300g",
    price: "£44.99",
    benefits: [
      "Supports connective tissue integrity and cartilage structure",
      "Contributes to normal collagen formation for cartilage function",
      "Provides hyaluronic acid for joint lubrication support",
    ],
  },
  vegan: {
    name: "Vegan Powder",
    tagline: "Plant-Based Joint Support",
    description: "A collagen-free powder formulation combining plant-derived nutrients including vitamin C, MSM, turmeric, and essential minerals. Suitable for those following a vegan lifestyle who seek nutritional support for long-term knee health.",
    icon: Leaf,
    supply: "30 Servings • 250g",
    price: "£39.99",
    benefits: [
      "Supports joint function without animal-derived ingredients",
      "Contributes to normal cartilage and bone maintenance",
      "Provides antioxidant support from plant-based sources",
    ],
  },
};

const DualProductHero = ({ variant }: DualProductHeroProps) => {
  const product = productData[variant];
  const IconComponent = product.icon;

  return (
    <section className="pt-8 pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-48 h-64 mx-auto bg-primary/5 rounded-lg mb-4 flex flex-col items-center justify-center border border-primary/10 gap-4">
                  <IconComponent className="w-12 h-12 text-primary/40" />
                  <span className="text-muted-foreground text-sm px-4 text-center">
                    {product.name}
                  </span>
                </div>
                <p className="font-sans text-sm text-muted-foreground">{product.supply}</p>
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-primary/10 text-primary mb-4">
                <IconComponent className="w-3 h-3" />
                {product.tagline}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
                {product.name}
              </h1>
              <div className="w-12 h-px bg-primary/30 mb-6" />
              <p className="font-sans text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* What this formula provides */}
            <div className="bg-secondary rounded-lg p-6">
              <p className="font-sans text-sm font-medium text-foreground mb-4">
                This formula provides nutritional support for:
              </p>
              <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & CTA */}
            <div className="space-y-4 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-serif text-foreground">{product.price}</span>
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

export default DualProductHero;
