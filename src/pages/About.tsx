import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import AboutHero from "@/components/about/AboutHero";
import FoundersStory from "@/components/about/FoundersStory";
import KneeExpertise from "@/components/about/KneeExpertise";
import ClinicalMission from "@/components/about/ClinicalMission";
import BackToTop from "@/components/ui/BackToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About OmKneeHealth | Clinician-Founded Knee Health Resource"
        description="Learn about OmKneeHealth's clinical mission, founders' story, and knee-specific expertise. We're clinicians building honest, evidence-based knee health resources."
        canonicalPath="/about"
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
