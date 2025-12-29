import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductBenefits from "@/components/product/ProductBenefits";
import ProductIngredients from "@/components/product/ProductIngredients";
import ProductHowToUse from "@/components/product/ProductHowToUse";
import ProductSuitability from "@/components/product/ProductSuitability";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductReassurance from "@/components/product/ProductReassurance";

/**
 * SHOPIFY PRODUCT PAGE STRUCTURE
 * 
 * This page is designed to be translated into a Shopify product template.
 * 
 * SECTION ORDER:
 * 1. Product Hero (Shopify Theme Section - product form)
 * 2. Product Benefits (Custom HTML Section)
 * 3. Product Ingredients (Custom HTML Section)  
 * 4. How to Use (Custom HTML Section)
 * 5. Who It's For / Suitability (Custom HTML Section)
 * 6. FAQs (Custom HTML Section or Shopify FAQ App)
 * 7. Reassurance & Final CTA (Custom HTML Section)
 * 
 * SHOPIFY PRODUCT DESCRIPTION:
 * The content from ProductHero's description should go in the 
 * Shopify product description field for SEO purposes.
 */

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero />
        <ProductBenefits />
        <ProductIngredients />
        <ProductHowToUse />
        <ProductSuitability />
        <ProductFAQ />
        <ProductReassurance />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
