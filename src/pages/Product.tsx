import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductPhilosophy from "@/components/product/ProductPhilosophy";
import ProductIngredients from "@/components/product/ProductIngredients";
import ProductSafety from "@/components/product/ProductSafety";
import ProductHowToUse from "@/components/product/ProductHowToUse";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";

/**
 * PRODUCT PAGE: Joint + Movement Support
 * 
 * Structure (Evidence-Based Authority Model):
 * 1. Hero - Product introduction with clinical positioning
 * 2. Philosophy - Supplements as part of broader strategy
 * 3. Ingredients - Ingredient-by-ingredient with mechanism + evidence
 * 4. Safety - Manufacturing, testing, contraindications
 * 5. How to Use - Clinical usage guidance
 * 6. FAQ - Honest answers, no marketing claims
 * 7. CTA - Gentle close with appropriate disclaimers
 */

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Section 1: Product Hero - Clinical positioning */}
        <ProductHero />
        
        {/* Section 2: Philosophy - Part of broader strategy */}
        <ProductPhilosophy />
        
        {/* Section 3: Ingredients - Evidence-based breakdown */}
        <ProductIngredients />
        
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
