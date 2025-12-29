import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import WhyKneeHealth from "@/components/home/WhyKneeHealth";
import ScienceSection from "@/components/home/ScienceSection";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";
import ProductIntro from "@/components/home/ProductIntro";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Section 1: Above-the-fold Hero */}
        <HeroSection />
        
        {/* Section 2: Core Value Proposition */}
        <ValueProposition />
        
        {/* Section 3: Why Knee Health Matters */}
        <WhyKneeHealth />
        
        {/* Section 4: Evidence & Science Positioning */}
        <ScienceSection />
        
        {/* Section 5: Knee Score Assessment Tool */}
        <KneeScoreEmbed />
        
        {/* Section 6: Signature Product Introduction */}
        <ProductIntro />
        
        {/* Section 7: Trust & Credibility */}
        <TrustSection />
        
        {/* Section 8: Gentle Call-to-Action */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
