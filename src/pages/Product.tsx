import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductSuitability from "@/components/product/ProductSuitability";
import ProductPhilosophy from "@/components/product/ProductPhilosophy";
import ProductIngredients from "@/components/product/ProductIngredients";
import ProductSafety from "@/components/product/ProductSafety";
import ProductHowToUse from "@/components/product/ProductHowToUse";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";

/**
 * PRODUCT PAGE: Joint + Movement Support Capsules
 * 
 * Structure (Evidence-Based Authority Model):
 * 1. Hero - Product introduction with clinical positioning
 * 2. Suitability - Who this is for / not for (honest positioning)
 * 3. Philosophy - Supplements as part of broader strategy
 * 4. Ingredients - Ingredient-by-ingredient with mechanism + evidence
 * 5. Safety - Manufacturing, testing, contraindications
 * 6. How to Use - Clinical usage guidance
 * 7. FAQ - Honest answers, no marketing claims
 * 8. CTA - Gentle close with appropriate disclaimers
 */

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Section 1: Product Hero - Clinical positioning */}
        <ProductHero />
        
        {/* Section 2: Who This Is For / Not For */}
        <ProductSuitability />
        
        {/* Section 3: Philosophy - Part of broader strategy */}
        <ProductPhilosophy />
        
        {/* Section 4: Ingredients - Evidence-based breakdown */}
        <ProductIngredients />
        
        {/* Section 5: Safety & Quality */}
        <ProductSafety />
        
        {/* Section 6: How to Use */}
        <ProductHowToUse />
        
        {/* Section 7: FAQ - Honest answers */}
        <ProductFAQ />
        
        {/* Section 8: Final CTA */}
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
