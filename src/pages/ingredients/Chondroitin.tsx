/**
 * Chondroitin for Knee Joints - SEO Landing Page
 * Target keywords: chondroitin for knee joints, chondroitin sulphate, chondroitin cartilage
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, Layers, Activity, Link as LinkIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does chondroitin help knee cartilage?",
    answer: "Chondroitin sulphate is a natural component of cartilage, contributing to its ability to retain water and provide cushioning. Many clinical trials have examined chondroitin supplementation, with mixed results. However, chondroitin does not have EFSA-authorised health claims. We include it based on its role as a cartilage component, while being transparent about the variable evidence."
  },
  {
    question: "What is the difference between chondroitin and glucosamine?",
    answer: "Both are found naturally in cartilage but have different roles. Glucosamine is an amino sugar that serves as a building block for proteoglycans. Chondroitin sulphate is a glycosaminoglycan (GAG) that forms part of those proteoglycans and attracts water into the cartilage matrix. They're often taken together because they naturally occur together in cartilage tissue."
  },
  {
    question: "How much chondroitin should I take?",
    answer: "Clinical studies have typically used 800-1200mg chondroitin sulphate daily. Our formula provides 800mg per daily serving—within the commonly studied range. Some research suggests chondroitin can be taken as a single daily dose, while others split it into multiple doses. Consistency over time appears more important than timing."
  },
  {
    question: "Where does chondroitin come from?",
    answer: "Chondroitin sulphate is typically derived from animal cartilage—most commonly bovine (cow) trachea, porcine (pig) cartilage, or marine sources such as shark cartilage. The source can affect purity and potency. We use bovine-sourced chondroitin sulphate, which is commonly used in research and has established quality standards."
  },
  {
    question: "Is chondroitin safe to take long-term?",
    answer: "Chondroitin has been used in clinical studies lasting up to 2-3 years without significant safety concerns. It's generally well-tolerated with few reported side effects (occasional mild digestive upset). However, as with any supplement, consult your healthcare provider before long-term use, especially if you have existing health conditions or take medications."
  }
];

const Chondroitin = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chondroitin for Knee Joint Support | OmKneeHealth"
        description="Chondroitin is a structural component of cartilage. Learn how it is used in knee joint supplements to support long-term joint health."
        canonicalPath="/ingredients/chondroitin"
        keywords="chondroitin for knee joints, chondroitin sulphate, chondroitin cartilage, glucosamine chondroitin"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science", url: "https://omkneehealth.com/science" },
          { name: "Chondroitin for Knee Joints", url: "https://omkneehealth.com/ingredients/chondroitin" },
        ]}
      />
      <WebPageSchema
        name="Chondroitin Sulphate for Knee Joints - Evidence & Science"
        description="Comprehensive guide to chondroitin for knee cartilage support. Scientific rationale, mechanisms, and evidence-based perspective."
        url="https://omkneehealth.com/ingredients/chondroitin"
        type="WebPage"
      />
      <FAQSchema faqs={faqs} />
      <Header />
      
      <main className="pt-28 lg:pt-48">
        {/* Back navigation */}
        <div className="container mx-auto px-6 mb-8">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link to="/science">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Science
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Ingredient Science
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Chondroitin for Knee Joints
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding chondroitin sulphate as a cartilage component—the classic partner to glucosamine and what research reveals about their combination.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">What Is Chondroitin?</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Chondroitin sulphate is a glycosaminoglycan (GAG)—a long chain of repeating sugar units—found naturally in cartilage and other connective tissues. It's a key structural component of the cartilage matrix, contributing to its resilience and cushioning properties.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  In cartilage, chondroitin sulphate forms part of larger molecules called <strong className="text-foreground">proteoglycans</strong>. These proteoglycans have a protein core with numerous glycosaminoglycan chains attached, creating a bottle-brush-like structure that attracts and holds water.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Supplemental chondroitin sulphate is typically extracted from animal cartilage—bovine trachea is a common source. It's often combined with glucosamine, reflecting how these compounds naturally occur together in cartilage tissue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">Why Chondroitin Matters for Knee Cartilage</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Cartilage's ability to cushion and protect joints depends heavily on its water content. The proteoglycans containing chondroitin sulphate are highly hydrophilic—they attract and bind water molecules, creating a gel-like matrix that resists compression.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  When you walk, run, or jump, this water-filled matrix distributes forces across the joint surface. The chondroitin-containing proteoglycans act like tiny water balloons, providing shock absorption and allowing smooth, low-friction movement.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  The rationale for supplementation is that providing chondroitin may support the body's ability to maintain this cartilage matrix. Chondroitin has been extensively studied, though results have been mixed across different trials and populations.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border mt-6">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">Important Note on Claims</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Chondroitin sulphate does not have EFSA-authorised health claims. Despite decades of research and widespread use, European regulators have not approved specific health claims for chondroitin. We include it at a research-informed dose while being transparent about the regulatory status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Rationale */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">Scientific Rationale & The Glucosamine-Chondroitin Combination</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Chondroitin and glucosamine are often studied together because:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Natural pairing:</strong> They occur together in cartilage tissue, with glucosamine serving as a building block for the glycosaminoglycan chains that include chondroitin.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Complementary roles:</strong> Glucosamine supports proteoglycan synthesis; chondroitin is a component of those proteoglycans and contributes to water retention.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Research tradition:</strong> Many clinical trials have examined the combination, though results vary significantly between studies.
                  </li>
                </ul>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Our formula provides 800mg chondroitin sulphate alongside 1,500mg glucosamine sulphate—the most commonly studied combination in joint health research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Synergy */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">Synergy with Other Ingredients</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Glucosamine Sulphate</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    The classic pairing. Glucosamine provides building blocks for the proteoglycan structure; chondroitin is incorporated into that structure. Together, they represent how these compounds exist naturally in cartilage.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Hyaluronic Acid</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Another glycosaminoglycan found in joint fluid and cartilage. Hyaluronic acid contributes to the viscosity of synovial fluid, complementing chondroitin's role in the cartilage matrix itself.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Collagen Peptides</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    While chondroitin-containing proteoglycans provide cushioning, collagen provides the structural fibrous framework. Both are essential components of healthy cartilage tissue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <header className="text-center mb-12">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Frequently Asked Questions
                </p>
                <h2 className="text-2xl font-serif text-foreground">
                  Chondroitin for Knee Joints: Common Questions
                </h2>
              </header>
              
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-background rounded-lg border border-border px-6 data-[state=open]:shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-sans text-sm font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif text-foreground mb-6">
                Explore Our Chondroitin Formula
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                Our knee joint supplement contains 800mg chondroitin sulphate paired with glucosamine and collagen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/product">View Supplement</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/science">Back to Science</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chondroitin;
