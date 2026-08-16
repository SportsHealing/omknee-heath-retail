/**
 * Curated Knee Essentials Page
 * SEO-optimized for knee product recommendations
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import CuratedHero from "@/components/shop/CuratedHero";
import CuratedNav from "@/components/shop/CuratedNav";
import MovementSupport from "@/components/shop/MovementSupport";
import RecoveryTools from "@/components/shop/RecoveryTools";
import StrengthEquipment from "@/components/shop/StrengthEquipment";
import ComfortSolutions from "@/components/shop/ComfortSolutions";
import FootwearGuidance from "@/components/shop/FootwearGuidance";
import BooksResources from "@/components/shop/BooksResources";
import CuratedCTA from "@/components/shop/CuratedCTA";
import BackToTop from "@/components/ui/BackToTop";

const Curated = () => {
  return (
    <>
      <SEO 
        title="Knee Braces, Recovery Tools & Equipment | Curated by Specialists | OmKneeHealth"
        description="UK knee specialists' curated guide to knee braces, recovery tools, strengthening equipment, and comfort products. Each recommendation includes clinical rationale."
        canonicalPath="/shop"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Curated Knee Essentials", url: "https://omkneehealth.com/shop" },
        ]}
      />
      <WebPageSchema
        name="Curated Knee Essentials - OmKneeHealth"
        description="UK knee specialists' curated guide to knee braces, recovery tools, strengthening equipment, and comfort products."
        url="https://omkneehealth.com/shop"
        type="CollectionPage"
      />
      <Header />
      <main>
        <CuratedHero />
        <CuratedNav />
        <MovementSupport />
        <RecoveryTools />
        <StrengthEquipment />
        <ComfortSolutions />
        <FootwearGuidance />
        <BooksResources />
        <CuratedCTA />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Curated;
