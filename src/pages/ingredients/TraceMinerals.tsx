/**
 * Trace Minerals (Zinc, Copper, Boron) for Knee Joints - SEO Landing Page
 * Target keywords: zinc copper boron for joints, trace minerals joint health, connective tissue minerals
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
    question: "Does zinc help with joint health?",
    answer: "Zinc contributes to normal protein synthesis (EFSA-authorised claim)—including proteins in connective tissues. It also contributes to the maintenance of normal bones and protection of cells from oxidative stress. While zinc isn't specific to cartilage, these functions support the body's ability to maintain and repair connective tissues throughout the body, including in joints."
  },
  {
    question: "Why is copper important for connective tissue?",
    answer: "Copper contributes to maintenance of normal connective tissues (EFSA-authorised claim). It's a cofactor for lysyl oxidase, an enzyme involved in cross-linking collagen and elastin fibres—giving connective tissues their strength and elasticity. Without adequate copper, collagen fibres cannot form proper cross-links."
  },
  {
    question: "What does boron do for joints?",
    answer: "Boron is a trace mineral that influences the metabolism of calcium, magnesium, and vitamin D in the body. While boron does not have EFSA-authorised health claims, research has examined its role in mineral metabolism. We include it as a supporting trace mineral based on this research interest."
  },
  {
    question: "How much zinc, copper, and boron do I need?",
    answer: "Our formula provides zinc at 100% NRV (10mg), copper at 50% NRV (0.5mg), and boron at 2mg. These moderate doses contribute to daily intake without exceeding safe levels. The zinc-to-copper ratio is important—high zinc intake can interfere with copper absorption, so we maintain appropriate balance."
  },
  {
    question: "Can I get these minerals from food?",
    answer: "Yes, these minerals are available from dietary sources. Zinc is found in meat, shellfish, legumes, and nuts. Copper is found in organ meats, shellfish, nuts, and seeds. Boron is found in fruits, vegetables, and nuts. However, dietary intake varies, and some people may not consistently meet their needs through diet alone."
  }
];

const TraceMinerals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Joint Health Minerals | OmKneeHealth"
        description="Essential minerals including zinc, copper and boron play key roles in connective tissue and joint health. Learn how they support knees."
        canonicalPath="/ingredients/trace-minerals"
        keywords="zinc for joints, copper connective tissue, boron joint health, trace minerals, zinc copper supplement"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science", url: "https://omkneehealth.com/science" },
          { name: "Trace Minerals for Joints", url: "https://omkneehealth.com/ingredients/trace-minerals" },
        ]}
      />
      <WebPageSchema
        name="Zinc, Copper & Boron for Joint Health - Evidence & Science"
        description="Comprehensive guide to trace minerals for joint support. EFSA-authorised claims for zinc, copper, and the research behind boron."
        url="https://omkneehealth.com/ingredients/trace-minerals"
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
              Zinc, Copper & Boron for Joint Health
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding the essential trace minerals that support connective tissue, protein synthesis, and bone maintenance—often overlooked but fundamentally important.
            </p>
          </div>
        </section>

        {/* Zinc */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">Zinc: Protein Synthesis & Bone Maintenance</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Zinc is an essential trace mineral involved in over 300 enzymatic reactions in the body. It's a cofactor for enzymes involved in protein synthesis, DNA repair, and cell division—fundamental processes for tissue maintenance and repair.
                </p>
                <div className="bg-background rounded-lg p-6 border border-border mt-6 mb-4">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">EFSA-Authorised Claims for Zinc:</p>
                  <ul className="space-y-1 font-sans text-sm text-muted-foreground">
                    <li>• Contributes to normal protein synthesis</li>
                    <li>• Contributes to maintenance of normal bones</li>
                    <li>• Contributes to protection of cells from oxidative stress</li>
                    <li>• Contributes to normal DNA synthesis</li>
                  </ul>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Our formula provides 10mg zinc (100% NRV) as zinc citrate—a form selected for its good bioavailability. This moderate dose contributes meaningfully to daily intake without risk of excess.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copper */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">Copper: Connective Tissue Formation</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Copper is essential for the function of lysyl oxidase—an enzyme that catalyses the cross-linking of collagen and elastin fibres. These cross-links give connective tissues their structural integrity and tensile strength.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Without adequate copper, collagen fibres cannot form the proper chemical bonds that hold them together. This affects not just cartilage, but tendons, ligaments, blood vessels, and skin throughout the body.
                </p>
                <div className="bg-background rounded-lg p-6 border border-border mt-6 mb-4">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">EFSA-Authorised Claims for Copper:</p>
                  <ul className="space-y-1 font-sans text-sm text-muted-foreground">
                    <li>• Contributes to maintenance of normal connective tissues</li>
                    <li>• Contributes to protection of cells from oxidative stress</li>
                    <li>• Contributes to normal energy-yielding metabolism</li>
                  </ul>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Our formula provides 0.5mg copper (50% NRV) as copper bisglycinate—a gentle, well-absorbed form. The dose is intentionally moderate to maintain appropriate zinc-copper balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Boron */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">Boron: Mineral Metabolism Support</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Boron is an ultra-trace mineral that influences the metabolism of other minerals—particularly calcium, magnesium, and phosphorus. It also appears to affect vitamin D metabolism and may influence steroid hormone activity.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Research has examined boron in various contexts, including bone health and joint function. While the mechanisms aren't fully understood, boron deprivation studies in humans have shown effects on calcium and magnesium balance.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border mt-6">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">Important Note on Claims</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Boron does not have EFSA-authorised health claims. While research is ongoing, we cannot make specific claims about boron's benefits. We include it as a supporting trace mineral based on its role in mineral metabolism, while being transparent about the regulatory status.
                  </p>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed mt-4">
                  Our formula provides 2mg boron as a chelated form for absorption. This is within the range used in research studies examining boron's effects on mineral metabolism.
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
                  <h3 className="font-serif text-lg text-foreground mb-2">Collagen & Vitamin C</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    While collagen provides the structural protein and vitamin C enables its synthesis, copper ensures proper cross-linking of collagen fibres. Zinc supports general protein synthesis. Together, they support the body's connective tissue maintenance processes.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Vitamin D & Magnesium</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Boron influences calcium, magnesium, and vitamin D metabolism. Combined with vitamin D (which promotes calcium absorption) and magnesium (which is involved in vitamin D activation), these minerals work together to support bone mineralisation.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Manganese</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Manganese, like copper, contributes to normal formation of connective tissue (EFSA claim). These trace minerals work alongside each other in the enzymatic processes that maintain connective tissue structure.
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
                  Trace Minerals for Joints: Common Questions
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
                Explore Our Complete Formula
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                Our knee joint supplement includes zinc, copper, boron, and manganese alongside collagen, vitamins, and botanicals for comprehensive joint support.
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

export default TraceMinerals;
