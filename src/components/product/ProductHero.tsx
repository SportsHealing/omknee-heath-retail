/**
 * Product Hero - Joint + Movement Support Powder
 * Clinical positioning with clear value proposition
 * Image-first layout with variant selector
 */

import { Button } from "@/components/ui/button";
import { ShieldCheck, Leaf, FlaskConical, Fish, Sprout, Check } from "lucide-react";
import productImage from "@/assets/product-pouches.png";
import ingredientsBg from "@/assets/ingredients-turmeric-bg.jpg";
import { useProductVariant, variants, ProductVariant } from "./ProductVariantContext";

const trustBadges = [
  { icon: ShieldCheck, label: "UK GMP Manufactured" },
  { icon: FlaskConical, label: "Third-Party Batch Tested" },
  { icon: Leaf, label: "Evidence-Informed Doses" }
];

const variantOptions: { id: ProductVariant; icon: typeof Fish; label: string }[] = [
  { id: "marine", icon: Fish, label: "Marine" },
  { id: "vegetarian", icon: Sprout, label: "Vegetarian" }
];

const ProductHero = () => {
  const { selectedVariant, setSelectedVariant, variantInfo } = useProductVariant();

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
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              {variantInfo.badge}
            </span>
          </div>
          <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={productImage} 
              alt={`OmKneeHealth Joint + Movement Support ${variantInfo.name} - 300g pouch, one month supply`}
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
          
          <p className="font-serif text-lg text-primary mb-4">
            {variantInfo.tagline}
          </p>
          
          {/* Value proposition with target keywords */}
          <p className="font-sans text-muted-foreground leading-relaxed mb-3 max-w-lg mx-auto">
            A comprehensive collagen supplement for knees, combining hydrolysed peptides with vitamin C for normal cartilage function, plus vitamin D & K2 for bone maintenance.
          </p>

          <p className="font-sans text-sm text-muted-foreground/80 mb-8 max-w-md mx-auto">
            Developed by UK clinicians for those seeking nutritional joint support at every stage of life.
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-sm font-medium text-foreground mb-3">Choose your formula</p>
            <div className="flex justify-center gap-3">
              {variantOptions.map((option) => {
                const isSelected = selectedVariant === option.id;
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedVariant(option.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg border-2 transition-all ${
                      isSelected 
                        ? "border-primary bg-primary/5 text-foreground" 
                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : ""}`} />
                    <span className="font-medium">{option.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-primary ml-1" />}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {variantInfo.keyIngredient}
            </p>
          </div>

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
              <span className="text-3xl font-serif text-foreground">£{variantInfo.price}</span>
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
