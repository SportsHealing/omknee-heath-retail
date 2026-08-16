import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import KneeIntroSection from "@/components/home/KneeIntroSection";
import CornerstonesSection from "@/components/home/CornerstonesSection";
import KneeScorePanel from "@/components/home/KneeScorePanel";
import ShopDestination from "@/components/home/ShopDestination";
import EducationSection from "@/components/home/EducationSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import OurStorySection from "@/components/home/OurStorySection";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebPageSchema from "@/components/WebPageSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Knee Health & Wellness: Understand, Score, Look After"
        description="Understand your knees, measure them with a Knee Score, and look after them with curated nutrition, supports and recovery products. Evidence-informed UK knee health."
        canonicalPath="/"
        keywords="knee health, knee pain, knee joint, knee exercises, knee strengthening exercises, how to improve knee health, collagen for knees, knee supplements UK, knee brace, knee score"
      />
      <OrganizationSchema />
      <WebPageSchema
        name="OmKneeHealth - Knee Health & Wellness"
        description="Consumer knee health and wellness: understand your knees, track a Knee Score, and shop curated nutrition, supports and recovery products."
        url="https://omkneehealth.com"
        type="WebPage"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://omkneehealth.com" }]} />
      <Header />
      <main>
        {/* Understand */}
        <HeroSection />
        <KneeIntroSection />
        <CornerstonesSection />

        {/* Measure */}
        <KneeScorePanel />

        {/* Look after */}
        <ShopDestination />
        <EducationSection />

        {/* Who we are */}
        <PhilosophySection />
        <OurStorySection />
        <HomeFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
