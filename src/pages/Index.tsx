import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import EducationSection from "@/components/home/EducationSection";
import AssessmentSection from "@/components/home/AssessmentSection";
import SignatureProductSection from "@/components/home/SignatureProductSection";
import CuratedSection from "@/components/home/CuratedSection";
import OurStorySection from "@/components/home/OurStorySection";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="OmKneeHealth"
        description="Clinician-founded knee health support. Evidence-informed supplements and free assessment tools designed by healthcare professionals for long-term joint health."
        canonicalPath="/"
      />
      <Header />
      <main>
        {/* Section 1: Authority Hero - Establishes medical credibility within 5 seconds */}
        <HeroSection />
        
        {/* Section 2: Philosophy - Positions as authority, not brand */}
        <PhilosophySection />
        
        {/* Section 3: Education - Why knee health matters */}
        <EducationSection />
        
        {/* Section 4: Assessment Tool - Free value-add, non-commercial */}
        <AssessmentSection />
        
        {/* Section 5: Signature Product - ONE formula, clearly labeled "Our Formula" */}
        <SignatureProductSection />
        
        {/* Section 6: Curated Resources - Beyond our own products */}
        <CuratedSection />
        
        {/* Section 7: Our Story - Founders & philosophy */}
        <OurStorySection />
        
        {/* Section 8: Gentle CTA - Assessment-focused, not purchase */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
