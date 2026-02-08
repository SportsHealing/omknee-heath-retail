/**
 * Curcumin for Knee Joints - SEO Landing Page
 * Target keywords: curcumin for knee joints, turmeric cartilage support, curcumin joint health
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
    question: "Does curcumin help with knee joints?",
    answer: "Curcumin, the primary active compound in turmeric, has been extensively studied for its antioxidant properties. It helps protect cells from oxidative stress. However, curcumin does not have EFSA-authorised health claims for joints or cartilage. While numerous studies have examined curcumin in the context of joint health, we cannot make specific claims about therapeutic benefits. Its inclusion is based on its well-documented antioxidant activity."
  },
  {
    question: "Is turmeric or curcumin better for joints?",
    answer: "Turmeric root typically contains only 2-5% curcuminoids by weight, meaning you would need to consume large amounts of turmeric to achieve doses used in research. Curcumin extracts standardised to 95% curcuminoids provide a concentrated, consistent dose. However, both turmeric and curcumin have poor natural bioavailability—this is why pairing with piperine (black pepper extract) is important for absorption."
  },
  {
    question: "How much curcumin should I take for joint health?",
    answer: "Clinical studies have used curcumin doses ranging from 200mg to 2000mg daily, typically as standardised extracts. Our formula provides 500mg of curcumin extract standardised to ≥95% curcuminoids, paired with 5mg piperine to enhance absorption by approximately 2000%. This represents a moderate, research-informed dose designed for daily, long-term use."
  },
  {
    question: "Why does curcumin need black pepper?",
    answer: "Curcumin has notoriously poor bioavailability—it is rapidly metabolised and eliminated before it can be absorbed effectively. Piperine, the active compound in black pepper, inhibits certain enzyme processes (particularly glucuronidation in the liver and intestine) that would otherwise break down curcumin. Research published in Planta Medica demonstrated that piperine increases curcumin bioavailability by approximately 2000%."
  },
  {
    question: "Can I take curcumin with blood thinners?",
    answer: "Curcumin may have antiplatelet effects and could theoretically interact with blood-thinning medications including warfarin, aspirin, and other anticoagulants. If you take any blood-thinning medication, you should consult your healthcare provider before using supplements containing curcumin. This is a precautionary measure based on curcumin's biological activity."
  }
];

const Curcumin = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Curcumin for Knee Joints UK | Turmeric Extract | OmKneeHealth"
        description="Evidence-based guide to curcumin (turmeric extract) for knee joints. Understand antioxidant mechanisms, bioavailability challenges, and why we pair curcumin with piperine. UK clinician perspective."
        canonicalPath="/ingredients/curcumin"
        keywords="curcumin for knee joints, turmeric cartilage support, curcumin joint health UK, turmeric extract knees, curcumin bioavailability"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science", url: "https://omkneehealth.com/science" },
          { name: "Curcumin for Knee Joints", url: "https://omkneehealth.com/ingredients/curcumin" },
        ]}
      />
      <WebPageSchema
        name="Curcumin (Turmeric Extract) for Knee Joints - Evidence & Science"
        description="Comprehensive guide to curcumin for knee joint support. Scientific rationale, bioavailability, and evidence-based perspective on turmeric extract."
        url="https://omkneehealth.com/ingredients/curcumin"
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
              Curcumin for Knee Joints
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding the role of curcumin (turmeric extract) in joint health—the science of bioavailability and what antioxidant support means for your knees.
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
                <h2 className="text-2xl font-serif text-foreground">What Is Curcumin?</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Curcumin is the primary bioactive compound found in turmeric (Curcuma longa), the yellow-orange spice used extensively in South Asian cuisine. It belongs to a family of compounds called curcuminoids, which give turmeric its distinctive colour.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  While turmeric root contains only 2-5% curcuminoids by weight, standardised extracts can concentrate this to 95% or higher. This concentration is important because the biological activity of turmeric is largely attributed to curcumin.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Curcumin has been extensively studied for its <strong className="text-foreground">antioxidant properties</strong>—its ability to neutralise free radicals and support the body's antioxidant enzyme systems. It is one of the most researched natural compounds in scientific literature.
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
                <h2 className="text-2xl font-serif text-foreground">Why Curcumin Matters for Joint Health</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Oxidative stress—an imbalance between free radicals and the body's antioxidant defences—is a normal part of metabolism that increases with age and physical activity. Antioxidants help neutralise excess free radicals.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Curcumin's antioxidant activity has been demonstrated in numerous laboratory and clinical studies. It can directly scavenge various types of reactive oxygen species and may also enhance the activity of the body's own antioxidant enzymes such as superoxide dismutase (SOD) and catalase.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border mt-6">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">Important Note on Claims</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Curcumin and turmeric do not have EFSA-authorised health claims for joints, cartilage, or inflammation. While extensively researched, we can only describe its antioxidant activity without making specific therapeutic claims.
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
                <h2 className="text-2xl font-serif text-foreground">The Bioavailability Challenge</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Curcumin's greatest limitation is its naturally poor bioavailability. When consumed orally, curcumin is:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Poorly absorbed:</strong> Limited uptake across the intestinal wall due to its lipophilic (fat-soluble) nature.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Rapidly metabolised:</strong> Undergoes extensive glucuronidation and sulfation in the liver and intestinal wall.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Quickly eliminated:</strong> Blood levels peak and decline rapidly, with most being excreted within hours.
                  </li>
                </ul>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  This is why we pair curcumin with piperine (black pepper extract). Research published in Planta Medica demonstrated that 20mg piperine increased curcumin bioavailability by approximately 2000% in human subjects. The mechanism involves piperine's inhibition of glucuronidation enzymes.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Our formula provides 500mg curcumin extract (≥95% curcuminoids) with 5mg piperine—a ratio designed to maximise absorption and ensure the curcumin actually reaches the bloodstream.
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
                  <h3 className="font-serif text-lg text-foreground mb-2">Piperine (Black Pepper Extract)</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Essential for curcumin absorption. Without piperine, most of the curcumin would be metabolised before reaching the bloodstream. This is perhaps the most well-documented nutrient absorption enhancement in scientific literature.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Boswellia Serrata</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Another botanical with antioxidant properties. Curcumin and boswellia are often used together in formulas, providing complementary botanical support. Both have been extensively studied, though neither has EFSA-authorised joint health claims.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Vitamin C & Zinc</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Both contribute to protection of cells from oxidative stress (EFSA-authorised claims). Combined with curcumin's antioxidant activity, they provide a multi-faceted approach to supporting the body's antioxidant defences.
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
                  Curcumin for Knee Joints: Common Questions
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
                Explore Our Curcumin Formula
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                Our knee joint supplement contains 500mg curcumin extract with piperine for enhanced absorption.
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

export default Curcumin;
