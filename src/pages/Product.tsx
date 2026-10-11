import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductSuitability from "@/components/product/ProductSuitability";
import ProductPhilosophy from "@/components/product/ProductPhilosophy";
import IngredientsGallery from "@/components/product/IngredientsGallery";
import FullIngredients from "@/components/product/FullIngredients";
import ProductSafety from "@/components/product/ProductSafety";
import ProductHowToUse from "@/components/product/ProductHowToUse";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCTA from "@/components/product/ProductCTA";
import LearnBeforeYouBuy from "@/components/product/LearnBeforeYouBuy";
import StickyBuyBar from "@/components/product/StickyBuyBar";
import SEO from "@/components/SEO";
import ProductSchema from "@/components/ProductSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SUPPLEMENT } from "@/content/supplement";

/**
 * PRODUCT PAGE: Joint + Movement Support Powder
 * SEO-optimized for UK knee supplement searches
 * 
 * Structure (Evidence-Based Authority Model):
 * 1. Hero - Product introduction
 * 2. Suitability - Who this is for / not for (honest positioning)
 * 3. Philosophy - Supplements as part of broader strategy
 * 4. Full ingredients and nutrition information (collapsed; the only place amounts appear)
 * 5. Safety - Manufacturing, testing, contraindications
 * 6. How to Use - Clinical usage guidance
 * 7. FAQ - Honest answers, no marketing claims
 * 8. CTA - Gentle close with appropriate disclaimers
 */

const Product = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Joint Supplement for Cartilage Support | OmKneeHealth"
        description="A clinically informed knee joint supplement formulated to support cartilage, comfort and movement. Designed for long-term knee health."
        canonicalPath="/product"
        ogType="product"
        keywords="knee cartilage supplement, collagen supplement for knees, joint supplement, knee collagen, best supplement for knee joints"
      />
      <ProductSchema
        name={SUPPLEMENT.name}
        description="A daily powder bringing together collagen, joint-matrix ingredients, botanicals and bone nutrients. Vanilla cherry flavour."
        image="https://omkneehealth.com/og-image.png"
        price={SUPPLEMENT.price}
        currency="GBP"
        sku="OMKNEE-JMS-30"
        brand="OmKneeHealth"
        availability="InStock"
        url="https://omkneehealth.com/product"
        weight="300g"
        category="Health Supplements > Joint Supplements > Knee Cartilage Supplements"
        countryOfOrigin="GB"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Knee Cartilage Supplement", url: "https://omkneehealth.com/product" },
        ]}
      />
      <WebPageSchema
        name="Knee Cartilage & Collagen Supplement - OmKneeHealth"
        description="Evidence-informed knee cartilage supplement with hydrolysed collagen, vitamin C for normal cartilage function, and comprehensive joint support nutrients. Clinician-formulated."
        url="https://omkneehealth.com/product"
        type="ItemPage"
      />
      <Header />
      <main>
        {/* Back Button */}
        <div className="pt-28 lg:pt-48 pb-2 container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        
        {/* Section 1: Product Hero */}
        <ProductHero />
        
        {/* Section 2: Who This Is For / Not For */}
        <ProductSuitability />
        
        {/* Section 3: Philosophy - Part of broader strategy */}
        <ProductPhilosophy />
        
        {/* Section 4: Ingredients Gallery - Visual showcase */}
        <IngredientsGallery />
        
        {/* Section 5: Full ingredients and nutrition information */}
        <FullIngredients />
        
        {/* Section 5: Safety & Quality */}
        <ProductSafety />
        
        {/* Section 6: How to Use */}
        <ProductHowToUse />
        
        {/* Section 8: FAQ - Honest answers */}
        <ProductFAQ />
        
        {/* Section 9: Learn before you buy */}
        <LearnBeforeYouBuy />

        {/* Section 10: Final CTA */}
        <ProductCTA />
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  );
};

export default Product;
