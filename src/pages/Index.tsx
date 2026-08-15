import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import KneeIntroSection from "@/components/home/KneeIntroSection";
import KneeComponentsSection from "@/components/home/KneeComponentsSection";
import KneeHealthPillars from "@/components/home/KneeHealthPillars";
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
        title="Knee Health & Wellness | Everything About Your Knee | OmKneeHealth"
        description="Understand your knee joint, the collagen-rich structures inside it, and how to maintain knee health through wellness, nutrition, biomechanics, load and injury prevention."
        canonicalPath="/"
        keywords="knee health, knee anatomy, knee joint supplement UK, collagen for knees, synovial fluid, knee biomechanics, knee injury prevention"
      />
      <OrganizationSchema />
      <WebPageSchema
        name="OmKneeHealth - Knee Health & Wellness"
        description="A clinician-founded knee health and wellness resource: understand the knee joint, its collagen-rich components, and how to maintain knee health day to day."
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
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Brief introduction to the knee as a joint */}
        <KneeIntroSection />

        {/* Section 3: The components of the knee - collagen & synovial fluid */}
        <KneeComponentsSection />

        {/* Section 4: Maintaining knee health - five pillars */}
        <KneeHealthPillars />

        {/* Section 5: Philosophy */}
        <PhilosophySection />

        {/* Section 6: Signature Product */}
        <SignatureProductSection />

        {/* Section 7: Assessment Tool */}
        <AssessmentSection />

        {/* Section 8: Education */}
        <EducationSection />

        {/* Section 9: Curated Resources */}
        <CuratedSection />

        {/* Section 10: Our Story */}
        <OurStorySection />

        {/* Section 11: FAQ */}
        <HomeFAQ />

        {/* Section 12: Gentle CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
