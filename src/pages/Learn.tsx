import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import LearnHero from "@/components/learn/LearnHero";
import KneeAnatomy from "@/components/learn/KneeAnatomy";
import CommonConditions from "@/components/learn/CommonConditions";
import SelfCareGuidance from "@/components/learn/SelfCareGuidance";

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Learn About Your Knee | OmKneeHealth"
        description="Understand knee anatomy, common conditions, and evidence-based self-care guidance. Educational resources to support your knee health journey."
        canonicalPath="/learn"
      />
      <Header />
      <main>
        <LearnHero />
        <KneeAnatomy />
        <CommonConditions />
        <SelfCareGuidance />
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
