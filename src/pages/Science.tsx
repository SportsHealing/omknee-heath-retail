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
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Science"
        description="Understand the science behind knee health. Evidence-informed explanations of joint biology, ingredient research, and our honest approach to supplementation."
        canonicalPath="/science"
      />
      <Header />
      <main>
        {/* Back Button */}
        <div className="pt-24 pb-4 container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        
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
