import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductSuitability from "@/components/product/ProductSuitability";
import ProductPhilosophy from "@/components/product/ProductPhilosophy";
import IngredientsGallery from "@/components/product/IngredientsGallery";
import ProductIngredients from "@/components/product/ProductIngredients";
import ProductSafety from "@/components/product/ProductSafety";
import ProductHowToUse from "@/components/product/ProductHowToUse";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";
import ProductTestimonials from "@/components/product/ProductTestimonials";
import StickyBuyBar from "@/components/product/StickyBuyBar";
import { ProductVariantProvider } from "@/components/product/ProductVariantContext";
import SEO from "@/components/SEO";
import ProductSchema from "@/components/ProductSchema";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * PRODUCT PAGE: Joint + Movement Support Powder
 * 
 * Structure (Evidence-Based Authority Model):
 * 1. Hero - Product introduction with variant selector
 * 2. Suitability - Who this is for / not for (honest positioning)
 * 3. Philosophy - Supplements as part of broader strategy
 * 4. Ingredients - Ingredient-by-ingredient with mechanism + evidence
 * 5. Safety - Manufacturing, testing, contraindications
 * 6. How to Use - Clinical usage guidance
 * 7. FAQ - Honest answers, no marketing claims
 * 8. CTA - Gentle close with appropriate disclaimers
 */

const Product = () => {
  const navigate = useNavigate();
  
  return (
    <ProductVariantProvider>
      <div className="min-h-screen bg-background">
        <SEO
          title="Joint + Movement Support"
          description="Clinician-formulated joint supplement with hydrolysed collagen, glucosamine, chondroitin, and essential vitamins. Third-party tested, UK manufactured."
          canonicalPath="/product"
          ogType="product"
        />
        <ProductSchema
          name="Joint + Movement Support"
          description="A carefully formulated powder combining hydrolysed collagen peptides, glucosamine, chondroitin, hyaluronic acid, curcumin, boswellia, and essential vitamins and minerals — each at research-informed doses."
          image="https://omkneehealth.com/og-image.png"
          price="49.99"
          currency="GBP"
          sku="OMKNEE-JMS-30"
          brand="OmKneeHealth"
          availability="InStock"
          url="https://omkneehealth.com/product"
        />
        <Header />
        <main>
          {/* Back Button */}
          <div className="pt-24 pb-2 container mx-auto px-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
          
          {/* Section 1: Product Hero - Image first with variant selector */}
          <ProductHero />
          
          {/* Section 2: Who This Is For / Not For */}
          <ProductSuitability />
          
          {/* Section 3: Philosophy - Part of broader strategy */}
          <ProductPhilosophy />
          
          {/* Section 4: Ingredients Gallery - Visual showcase */}
          <IngredientsGallery />
          
          {/* Section 5: Ingredients - Evidence-based breakdown */}
          <ProductIngredients />
          
          {/* Section 5: Safety & Quality */}
          <ProductSafety />
          
          {/* Section 6: How to Use */}
          <ProductHowToUse />
          
          {/* Section 7: Customer Testimonials */}
          <ProductTestimonials />
          
          {/* Section 8: FAQ - Honest answers */}
          <ProductFAQ />
          
          {/* Section 9: Final CTA */}
          <ProductCTA />
        </main>
        <Footer />
        <StickyBuyBar />
      </div>
    </ProductVariantProvider>
  );
};

export default Product;
