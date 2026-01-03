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

/**
 * SHOPIFY PAGE: Evidence & Science Hub
 * 
 * TYPE: Shopify Page (Pages > Add page)
 * 
 * This educational content hub builds trust and positions
 * OmKneeHealth as a clinician-led, evidence-based brand.
 * 
 * SEO Focus: knee health, joint supplements, glucosamine evidence,
 * cartilage support, evidence-based supplements
 */

const Science = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Science"
        description="Understand the science behind knee health. Evidence-informed explanations of joint biology, ingredient research, and our honest approach to supplementation."
        canonicalPath="/science"
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
      <Footer />
    </div>
  );
};

export default Science;
