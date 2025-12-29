import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductSelector, { type ProductVariant } from "@/components/product/ProductSelector";
import DualProductHero from "@/components/product/DualProductHero";
import ProductPhilosophy from "@/components/product/ProductPhilosophy";
import DualProductIngredients from "@/components/product/DualProductIngredients";
import ProductSafety from "@/components/product/ProductSafety";
import ProductHowToUse from "@/components/product/ProductHowToUse";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";

/**
 * PRODUCT PAGE: Joint Health Powders
 * 
 * Structure (Evidence-Based Authority Model):
 * 1. Product Selector - Toggle between Collagen and Vegan options
 * 2. Hero - Product introduction with clinical positioning
 * 3. Philosophy - Supplements as part of broader strategy
 * 4. Ingredients - Ingredient-by-ingredient with mechanism + evidence
 * 5. Safety - Manufacturing, testing, contraindications
 * 6. How to Use - Clinical usage guidance
 * 7. FAQ - Honest answers, no marketing claims
 * 8. CTA - Gentle close with appropriate disclaimers
 */

const Product = () => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>("collagen");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Product Selector */}
        <section className="pt-24 md:pt-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
                Our Formulas
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Joint Health Powders
              </h1>
              <p className="font-sans text-muted-foreground max-w-xl mx-auto">
                Two clinician-designed formulas for different dietary needs. 
                Same commitment to evidence-based ingredients and transparent formulation.
              </p>
            </div>
            <ProductSelector 
              selected={selectedVariant} 
              onChange={setSelectedVariant} 
            />
          </div>
        </section>
        
        {/* Section 1: Product Hero - Clinical positioning */}
        <DualProductHero variant={selectedVariant} />
        
        {/* Section 2: Philosophy - Part of broader strategy */}
        <ProductPhilosophy />
        
        {/* Section 3: Ingredients - Evidence-based breakdown */}
        <DualProductIngredients variant={selectedVariant} />
        
        {/* Section 4: Safety & Quality */}
        <ProductSafety />
        
        {/* Section 5: How to Use */}
        <ProductHowToUse />
        
        {/* Section 6: FAQ - Honest answers */}
        <ProductFAQ />
        
        {/* Section 7: Final CTA */}
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
