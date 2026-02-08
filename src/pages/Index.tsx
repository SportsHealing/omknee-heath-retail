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
import HomeFAQ from "@/components/home/HomeFAQ";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebPageSchema from "@/components/WebPageSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Knee Joint Supplement UK | Clinician-Formulated | OmKneeHealth"
        description="UK's clinician-founded knee joint supplement. Evidence-informed formula with collagen, vitamin C & D for cartilage health. Free knee assessment. Third-party tested, UK manufactured."
        canonicalPath="/"
      />
      <OrganizationSchema />
      <WebPageSchema
        name="OmKneeHealth - Knee Joint Supplements UK"
        description="Clinician-founded UK knee health specialists. Evidence-informed knee joint supplements and free assessment tools designed by healthcare professionals for long-term joint health."
        url="https://omkneehealth.com"
        type="WebPage"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
        ]}
      />
      <Header />
      <main>
        {/* Section 1: Authority Hero - Establishes medical credibility within 5 seconds */}
        <HeroSection />
        
        {/* Section 2: Philosophy - Positions as authority, not brand */}
        <PhilosophySection />
        
        {/* Section 3: Signature Product - ONE formula, clearly labeled */}
        <SignatureProductSection />
        
        {/* Section 4: Assessment Tool - Free value-add, non-commercial */}
        <AssessmentSection />
        
        {/* Section 5: Education - Why knee health matters */}
        <EducationSection />
        
        {/* Section 6: Curated Resources - Beyond our own products */}
        <CuratedSection />
        
        {/* Section 7: Our Story - Founders & philosophy */}
        <OurStorySection />
        
        {/* Section 8: FAQ - Optimized for featured snippets */}
        <HomeFAQ />
        
        {/* Section 9: Gentle CTA - Assessment-focused, not purchase */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
