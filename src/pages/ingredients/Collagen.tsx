/**
 * Collagen for Knee Joints - SEO Landing Page
 * Target keywords: collagen for knee joints, collagen cartilage support, collagen joint health
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
    question: "Does collagen help with knee cartilage?",
    answer: "Collagen is the primary structural protein in cartilage, making up approximately 60% of its dry weight. When you consume hydrolysed collagen peptides, they are broken down into amino acids (primarily glycine, proline, and hydroxyproline) that the body can use in its natural collagen synthesis processes. However, collagen supplements do not have EFSA-authorised health claims for cartilage—though vitamin C, often paired with collagen, contributes to normal collagen formation for the normal function of cartilage."
  },
  {
    question: "What type of collagen is best for knee joints?",
    answer: "Type II collagen is the predominant collagen in articular cartilage (the smooth tissue covering joint surfaces), while Types I and III are found in tendons, ligaments, and bone. Hydrolysed collagen peptides typically contain Types I and III, which break down into amino acids used throughout the body's connective tissues. Some products contain undenatured Type II collagen (UC-II) which works via a different mechanism. Both approaches have been studied, with varying results."
  },
  {
    question: "How much collagen should I take for knee health?",
    answer: "Clinical studies have examined hydrolysed collagen at doses ranging from 5g to 15g daily. The 10g daily dose is commonly used in research and represents a reasonable middle ground. Consistency over time (typically 8-12+ weeks) appears more important than exact dosage. Our formula provides 10g hydrolysed collagen peptides per daily serving, reflecting the upper range of commonly studied doses."
  },
  {
    question: "How long does collagen take to work for joints?",
    answer: "Collagen supplements support gradual, cumulative processes rather than providing immediate effects. Most studies assess outcomes after 8-24 weeks of consistent daily use. Individual responses vary significantly based on factors including age, baseline nutrition, activity levels, and overall health. It's important to have realistic expectations—collagen provides nutritional support, not therapeutic treatment."
  },
  {
    question: "Can I get enough collagen from food for my knees?",
    answer: "Dietary collagen comes from animal sources: bone broth, chicken skin, fish skin, and connective tissues. However, the collagen in food is not hydrolysed, meaning it requires more digestion before absorption. Hydrolysed collagen peptides in supplements are pre-digested into smaller fragments for better absorption. Whether dietary or supplemental collagen is 'enough' depends on individual factors and goals."
  }
];

const Collagen = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Collagen Supplement for Knees | OmKneeHealth"
        description="Learn how collagen peptides contribute to cartilage structure and knee joint resilience as part of a balanced joint health approach."
        canonicalPath="/ingredients/collagen"
        keywords="collagen for knee joints, collagen cartilage support, hydrolysed collagen peptides, collagen joint health"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science", url: "https://omkneehealth.com/science" },
          { name: "Collagen for Knee Joints", url: "https://omkneehealth.com/ingredients/collagen" },
        ]}
      />
      <WebPageSchema
        name="Collagen for Knee Joints - Evidence & Science"
        description="Comprehensive guide to collagen peptides for knee joint and cartilage support. Scientific rationale, mechanisms, and evidence-based perspective."
        url="https://omkneehealth.com/ingredients/collagen"
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
              Collagen for Knee Joints
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding the role of collagen peptides in supporting cartilage structure and joint health—what the evidence shows and what it doesn't.
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
                <h2 className="text-2xl font-serif text-foreground">What Is Collagen?</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Collagen is the most abundant protein in the human body, forming the structural framework of skin, bones, tendons, ligaments, and cartilage. It provides tensile strength and resilience to connective tissues.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  In knee joints specifically, <strong className="text-foreground">Type II collagen</strong> is the primary component of articular cartilage—the smooth, protective tissue covering the ends of bones where they meet. This cartilage allows for low-friction movement and absorbs mechanical stress during walking, running, and jumping.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Hydrolysed collagen peptides</strong> are collagen proteins that have been enzymatically broken down into smaller fragments. This pre-digestion makes them more readily absorbed in the digestive tract compared to intact collagen from food sources.
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
                <h2 className="text-2xl font-serif text-foreground">Why Collagen Matters for Knee Cartilage</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Cartilage is a remarkable tissue with limited capacity for self-repair. Unlike bone, cartilage has no direct blood supply—nutrients must diffuse through the surrounding synovial fluid. This makes maintaining cartilage health through nutrition particularly relevant.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Collagen provides the structural scaffold within cartilage, working alongside proteoglycans (including chondroitin sulphate) to create a tissue that can withstand compressive forces while remaining flexible. The collagen fibres resist tensile stress while proteoglycans attract and hold water, providing cushioning.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  When hydrolysed collagen peptides are consumed, they break down into amino acids—primarily glycine, proline, and hydroxyproline. These amino acids are the building blocks the body uses in its natural collagen synthesis processes throughout connective tissues.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border mt-6">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">Important Note on Claims</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Collagen peptides do not have EFSA-authorised health claims. However, <strong>vitamin C contributes to normal collagen formation for the normal function of cartilage</strong>—which is why we pair collagen with vitamin C in our formula.
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
                <h2 className="text-2xl font-serif text-foreground">Scientific Rationale & Mechanisms</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  The rationale for collagen supplementation is based on several observations:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Absorption:</strong> Hydrolysed collagen peptides are absorbed intact through the intestinal wall. Studies using labelled peptides have detected them in blood and tissues, including cartilage.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Amino acid profile:</strong> Collagen peptides provide a concentrated source of glycine, proline, and hydroxyproline—amino acids that are less abundant in typical Western diets but essential for collagen synthesis.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Chondrocyte stimulation:</strong> In laboratory studies, collagen peptides have been shown to stimulate chondrocytes (cartilage cells) to increase production of extracellular matrix components.
                  </li>
                </ul>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Clinical studies have examined collagen supplementation with mixed results. Some trials report improvements in joint comfort and function scores, while others show no significant difference from placebo. The variability may relate to differences in collagen sources, doses, study populations, and outcome measures.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We include 10g hydrolysed collagen peptides in our formula—at the upper range of doses used in clinical research—combined with vitamin C to support the body's natural collagen formation processes.
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
                  <h3 className="font-serif text-lg text-foreground mb-2">Vitamin C</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Essential cofactor for collagen synthesis. Vitamin C contributes to normal collagen formation for the normal function of cartilage (EFSA-authorised claim). Without adequate vitamin C, the body cannot properly hydroxylate proline and lysine—steps required for stable collagen structure.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Glucosamine & Chondroitin</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    While collagen provides the fibrous scaffold of cartilage, glucosamine and chondroitin are components of proteoglycans—the molecules that fill the spaces between collagen fibres and attract water for cushioning. Together, they represent the major structural components of cartilage.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Copper & Manganese</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    These trace minerals are cofactors for enzymes involved in collagen cross-linking. Copper contributes to maintenance of normal connective tissues (EFSA claim). Manganese contributes to normal formation of connective tissue (EFSA claim).
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
                  Collagen for Knee Joints: Common Questions
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
                Explore Our Collagen Formula
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                Our knee joint supplement contains 10g hydrolysed collagen peptides paired with vitamin C for normal cartilage function.
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

export default Collagen;
