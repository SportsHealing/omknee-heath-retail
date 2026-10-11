import { useEffect } from "react";
import { track } from "@/lib/analytics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  HomeHero,
  HomeTeam,
  HomeFourDoors,
  HomeKneeScore,
  HomeOmKneeFive,
  HomeSupplementBand,
  HomeClinics,
  HomeClubBenefits,
} from "@/components/home/HomeSections";
import JournalTeaser from "@/components/home/JournalTeaser";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebPageSchema from "@/components/WebPageSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

/**
 * Home (handover A1). Section order is fixed: education (Four doors, Knee
 * Score, OmKnee Five) always sits above the supplement band (Appendix D1.2).
 */
const Index = () => {
  useEffect(() => {
    track("homepage_view");
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="OmKneeHealth | The OmKnee Club"
        description="Join a free club for knee and musculoskeletal health. Founded and led by consultant knee surgeons, with expert-selected products, scans and clinics in one place."
        canonicalPath="/"
      />
      <OrganizationSchema />
      <WebPageSchema
        name="OmKneeHealth - The OmKnee Club"
        description="A free members' club for knee and musculoskeletal health."
        url="https://omkneehealth.com"
        type="WebPage"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://omkneehealth.com" }]} />
      <Header />
      <main>
        {/* 1 */} <HomeHero />
        {/* 2 */} <HomeTeam />
        {/* 3 */} <HomeFourDoors />
        {/* 4 */} <HomeKneeScore />
        {/* 5 */} <HomeOmKneeFive />
        {/* 6 */} <HomeSupplementBand />
        {/* 7 */} <HomeClinics />
        {/* 8 */} <HomeClubBenefits />
        {/* 9 */} <JournalTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
