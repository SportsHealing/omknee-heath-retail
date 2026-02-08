import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScienceHero from "@/components/science/ScienceHero";
import WhyKneeHealthMatters from "@/components/science/WhyKneeHealthMatters";
import JointBiology from "@/components/science/JointBiology";
import EvidenceIngredients from "@/components/science/EvidenceIngredients";
import SupplementReality from "@/components/science/SupplementReality";
import HolisticApproach from "@/components/science/HolisticApproach";
import ScienceFAQ from "@/components/science/ScienceFAQ";
import ScienceCTA from "@/components/science/ScienceCTA";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToTop from "@/components/ui/BackToTop";

/**
 * SCIENCE PAGE: Evidence & Science Hub
 * SEO-optimized for knee supplement research and ingredient evidence queries
 */

const Science = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Supplement Science & Evidence | Ingredient Research | OmKneeHealth"
        description="Evidence-informed explanations of knee joint biology, cartilage health, and supplement ingredient research. Understand collagen, glucosamine, and vitamin evidence for joint support."
        canonicalPath="/science"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science & Evidence", url: "https://omkneehealth.com/science" },
        ]}
      />
      <Header />
      <main>
        <ScienceHero />
        <WhyKneeHealthMatters />
        <JointBiology />
        <EvidenceIngredients />
        <SupplementReality />
        <HolisticApproach />
        <ScienceFAQ />
        <ScienceCTA />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Science;
