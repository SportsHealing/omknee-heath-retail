/**
 * Curated Knee Essentials Page
 * 
 * Expert-curated product recommendations with clinical rationale
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import CuratedHero from "@/components/curated/CuratedHero";
import CuratedNav from "@/components/curated/CuratedNav";
import MovementSupport from "@/components/curated/MovementSupport";
import RecoveryTools from "@/components/curated/RecoveryTools";
import StrengthEquipment from "@/components/curated/StrengthEquipment";
import ComfortSolutions from "@/components/curated/ComfortSolutions";
import FootwearGuidance from "@/components/curated/FootwearGuidance";
import BooksResources from "@/components/curated/BooksResources";
import CuratedCTA from "@/components/curated/CuratedCTA";

const Curated = () => {
  return (
    <>
      <SEO 
        title="Curated Knee Essentials | OmKneeHealth"
        description="Expert-curated products for knee health. Braces, recovery tools, strengthening equipment, and comfort solutions—each with clinical rationale from knee specialists."
        canonicalPath="/curated"
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
      <Footer />
    </>
  );
};

export default Curated;
