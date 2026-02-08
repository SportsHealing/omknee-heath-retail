import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LearnHero from "@/components/learn/LearnHero";
import KneeAnatomy from "@/components/learn/KneeAnatomy";
import CommonConditions from "@/components/learn/CommonConditions";
import SelfCareGuidance from "@/components/learn/SelfCareGuidance";
import BackToTop from "@/components/ui/BackToTop";

/**
 * LEARN PAGE: Educational content about knee anatomy and conditions
 * SEO-optimized for informational knee health queries
 */

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Anatomy & Conditions Guide | Learn About Your Knee | OmKneeHealth"
        description="Understand your knee joint anatomy, common knee conditions like osteoarthritis, and evidence-based self-care guidance. Free educational resources from UK knee specialists."
        canonicalPath="/learn"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Learn About Your Knee", url: "https://omkneehealth.com/learn" },
        ]}
      />
      <Header />
      <main>
        <LearnHero />
        <KneeAnatomy />
        <CommonConditions />
        <SelfCareGuidance />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Learn;
