/**
 * Boswellia for Knee Joints - SEO Landing Page
 * Target keywords: boswellia for knee joints, boswellia serrata cartilage, frankincense joint health
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
    question: "Does boswellia help with knee joints?",
    answer: "Boswellia serrata, also known as Indian frankincense, contains active compounds called boswellic acids that have been studied for their biological activity. Multiple clinical trials have examined boswellia in the context of joint health. However, boswellia does not have EFSA-authorised health claims for joints or cartilage. We include it for its well-documented biological activity, while being transparent that specific therapeutic claims cannot be made."
  },
  {
    question: "What is AKBA in boswellia?",
    answer: "AKBA (acetyl-11-keto-β-boswellic acid) is considered the most biologically active of the boswellic acids found in Boswellia serrata resin. It is often used as a marker for standardisation in boswellia extracts. Higher-quality extracts are often standardised for AKBA content specifically, though total boswellic acid content (typically 65%+) is also a common quality marker."
  },
  {
    question: "How much boswellia should I take for joint health?",
    answer: "Clinical studies have used boswellia doses ranging from 100mg to 1000mg daily, typically as standardised extracts containing 30-65% boswellic acids. Our formula provides 200mg boswellia extract standardised to ≥65% boswellic acids—a moderate dose designed for daily, consistent use alongside other joint-supporting ingredients."
  },
  {
    question: "Can I take boswellia with other supplements?",
    answer: "Boswellia is commonly combined with other botanicals like curcumin in joint support formulas. There are no well-documented interactions between boswellia and other common joint supplements. However, if you take medications—particularly anti-inflammatory drugs or blood thinners—consult your healthcare provider before adding any new supplement."
  },
  {
    question: "How long does boswellia take to work?",
    answer: "Like most nutritional supplements, boswellia supports gradual processes rather than providing immediate effects. Clinical studies typically assess outcomes after 4-12 weeks of consistent use. Individual responses vary significantly. We recommend consistent daily use and assessing your experience after 8-12 weeks."
  }
];

const Boswellia = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Boswellia Serrata for Knee Joints UK | Frankincense Extract | OmKneeHealth"
        description="Evidence-based guide to boswellia serrata (frankincense) for knee joints. Understand boswellic acids, AKBA, and what the research shows. UK clinician perspective."
        canonicalPath="/ingredients/boswellia"
        keywords="boswellia for knee joints, boswellia serrata cartilage, frankincense joint health UK, boswellic acids, AKBA supplement"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science", url: "https://omkneehealth.com/science" },
          { name: "Boswellia for Knee Joints", url: "https://omkneehealth.com/ingredients/boswellia" },
        ]}
      />
      <WebPageSchema
        name="Boswellia Serrata for Knee Joints - Evidence & Science"
        description="Comprehensive guide to boswellia (frankincense) for knee joint support. Scientific rationale, boswellic acids, and evidence-based perspective."
        url="https://omkneehealth.com/ingredients/boswellia"
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
              Boswellia for Knee Joints
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding Indian frankincense (Boswellia serrata) and its active boswellic acids—traditional use meets modern research.
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
                <h2 className="text-2xl font-serif text-foreground">What Is Boswellia?</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Boswellia serrata is a tree native to India, North Africa, and the Middle East. The resin extracted from its bark—commonly known as Indian frankincense—has been used in traditional Ayurvedic medicine for centuries.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  The active compounds in boswellia are <strong className="text-foreground">boswellic acids</strong>—a group of pentacyclic triterpenic acids. The most studied of these is AKBA (acetyl-11-keto-β-boswellic acid), which is considered the most biologically active component.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Modern boswellia extracts are typically standardised to contain a specific percentage of boswellic acids (usually 30-65%) to ensure consistent potency across batches.
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
                <h2 className="text-2xl font-serif text-foreground">Why Boswellia Matters for Joint Health</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Boswellic acids have been the subject of numerous laboratory and clinical studies. Research has examined their biological activity at the cellular and molecular level, identifying several mechanisms of interest.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  In laboratory studies, boswellic acids have demonstrated activity against certain enzymes involved in the inflammatory cascade. However, it's important to distinguish between laboratory findings and clinical outcomes—what happens in a test tube doesn't always translate directly to human health benefits.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Multiple clinical trials have examined boswellia in the context of joint health, with varying results. Some studies report improvements in joint comfort and function scores, while others show more modest effects.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border mt-6">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">Important Note on Claims</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Boswellia does not have EFSA-authorised health claims for joints, cartilage, or any other health benefit. While research continues, we can only describe its traditional use and scientific interest without making specific therapeutic claims.
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
                  The rationale for including boswellia in joint support formulas is based on:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Traditional use:</strong> Centuries of use in Ayurvedic medicine for joint-related applications, though traditional use alone doesn't prove efficacy.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Laboratory research:</strong> Studies showing biological activity of boswellic acids against certain enzymes and pathways.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Clinical trials:</strong> Multiple human studies examining boswellia in joint health contexts, with mixed but generally positive findings.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Safety profile:</strong> Generally well-tolerated with a long history of use and relatively few reported adverse effects.
                  </li>
                </ul>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Our formula provides 200mg boswellia extract standardised to ≥65% boswellic acids. This ensures consistent potency and represents a moderate dose suitable for daily, long-term use.
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
                  <h3 className="font-serif text-lg text-foreground mb-2">Curcumin</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Boswellia and curcumin are commonly paired in joint formulas. Both are botanicals with antioxidant properties, providing complementary support. Some studies have examined the combination specifically.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Collagen & Glucosamine</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    While boswellia provides botanical support, collagen and glucosamine supply structural building blocks found in cartilage. The combination addresses joint health from different angles.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Vitamin C</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Vitamin C contributes to normal collagen formation for cartilage function (EFSA claim) and protection from oxidative stress. Combined with boswellia's antioxidant activity, they support the body's antioxidant defences.
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
                  Boswellia for Knee Joints: Common Questions
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
                Explore Our Boswellia Formula
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                Our knee joint supplement contains 200mg boswellia extract standardised to ≥65% boswellic acids.
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

export default Boswellia;
