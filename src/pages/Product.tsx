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
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * PRODUCT PAGE: Joint + Movement Support Powder
 * SEO-optimized for UK knee supplement searches
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
          title="Knee Cartilage Supplement UK | Collagen for Knee Joints | OmKneeHealth"
          description="UK's best collagen supplement for knee joints. Clinician-formulated with 10g hydrolysed collagen, vitamin C for cartilage function, vitamin D & K2 for bones. Evidence-informed doses. Third-party tested, UK GMP manufactured."
          canonicalPath="/product"
          ogType="product"
          keywords="knee cartilage supplement, collagen supplement for knees, joint supplement for knee pain, knee collagen UK, best supplement for knee joints, knee joint support supplement"
        />
        <ProductSchema
          name="OmKneeHealth Knee Cartilage & Collagen Support Supplement"
          description="UK's clinician-formulated knee cartilage supplement. Contains hydrolysed collagen peptides (10g), vitamin C contributing to normal cartilage function (EFSA claim), vitamin D & K2 for bone maintenance, glucosamine (1500mg), chondroitin (800mg), and curcumin with piperine for enhanced absorption. Third-party batch tested, UK GMP manufactured. 300g pouch provides 30-day supply. Suitable for adults seeking nutritional support for knee joint health."
          image="https://omkneehealth.com/og-image.png"
          price="49.99"
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
          name="Knee Cartilage & Collagen Supplement UK - OmKneeHealth"
          description="Evidence-informed knee cartilage supplement with hydrolysed collagen, vitamin C for normal cartilage function, and comprehensive joint support nutrients. UK clinician-formulated."
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
