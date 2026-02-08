import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import AboutHero from "@/components/about/AboutHero";
import FoundersStory from "@/components/about/FoundersStory";
import KneeExpertise from "@/components/about/KneeExpertise";
import ClinicalMission from "@/components/about/ClinicalMission";
import BackToTop from "@/components/ui/BackToTop";

/**
 * ABOUT PAGE: Company story and clinical credentials
 * SEO-optimized for brand authority and trust signals
 */

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About OmKneeHealth | Holistic Knee Care"
        description="OmKneeHealth is dedicated to personalised, evidence-led knee joint support combining clinical insight with holistic principles."
        canonicalPath="/about"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "About Us", url: "https://omkneehealth.com/about" },
        ]}
      />
      <WebPageSchema
        name="About OmKneeHealth"
        description="Learn about OmKneeHealth's clinical mission, founders' story, and knee-specific expertise."
        url="https://omkneehealth.com/about"
        type="AboutPage"
      />
      <Header />
      <main>
        <AboutHero />
        <FoundersStory />
        <KneeExpertise />
        <ClinicalMission />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default About;
