import { useEffect } from "react";
import { track } from "@/lib/analytics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import KneeIntroSection from "@/components/home/KneeIntroSection";
import OmKneeFive from "@/components/home/OmKneeFive";
import KneeScorePanel from "@/components/home/KneeScorePanel";
import ShopDestination from "@/components/home/ShopDestination";
import EducationSection from "@/components/home/EducationSection";
import ThroughLifeBand from "@/components/home/ThroughLifeBand";
import SignatureProductSection from "@/components/home/SignatureProductSection";
import KneeEcosystem from "@/components/KneeEcosystem";
import JournalTeaser from "@/components/home/JournalTeaser";
import NewsletterSection from "@/components/home/NewsletterSection";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebPageSchema from "@/components/WebPageSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Index = () => {
  useEffect(() => {
    track("homepage_view");
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="The OmKnee Five | A Clear Path Through Knee Health"
        description="Understand, Nourish, Load, Diagnose and Treat: five connected areas of evidence-informed UK knee health, with a Knee Score and carefully curated support."
        canonicalPath="/"
        keywords="knee health, knee pain, knee joint, knee exercises, knee strengthening exercises, how to improve knee health, collagen for knees, knee supplements UK, knee brace, knee score"
      />
      <OrganizationSchema />
      <WebPageSchema
        name="OmKneeHealth - The OmKnee Five"
        description="A connected knee-health journey through Understand, Nourish, Load, Diagnose and Treat."
        url="https://omkneehealth.com"
        type="WebPage"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://omkneehealth.com" }]} />
      <Header />
      <main>
        {/* 1 Hero */}
        <HeroSection />

        {/* 2 Knee Score */}
        <KneeScorePanel />

        {/* 3 Why look after your knees */}
        <EducationSection />

        {/* 4 The OmKnee Five */}
        <OmKneeFive />

        {/* 5 Understand your knee */}
        <KneeIntroSection />

        {/* 6 Healthy knees through life */}
        <ThroughLifeBand />

        {/* 7 The Knee Shop */}
        <ShopDestination />

        {/* 8 Signature formulation */}
        <SignatureProductSection />

        {/* 9 Go deeper: the wider knee ecosystem */}
        <KneeEcosystem />

        {/* 10 Journal */}
        <JournalTeaser />

        {/* 11 Newsletter */}
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
