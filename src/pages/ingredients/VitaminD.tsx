/**
 * Vitamin D for Knee Joints - SEO Landing Page
 * Target keywords: vitamin D for knee joints, vitamin D bone health, vitamin D UK deficiency
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, Layers, Activity, Link as LinkIcon, Sun } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does vitamin D help with knee joints?",
    answer: "Vitamin D contributes to the maintenance of normal bones and normal muscle function—both EFSA-authorised health claims. Strong bones provide the structural support for knee joints, and healthy muscles help stabilise and protect them. Vitamin D also supports normal absorption of calcium, which is essential for bone mineralisation. While vitamin D doesn't act directly on cartilage, bone and muscle health are fundamental to overall joint function."
  },
  {
    question: "Why is vitamin D important in the UK?",
    answer: "The UK's northern latitude means limited UVB exposure for much of the year—the body can only produce vitamin D from sunlight between approximately April and September. Public Health England recommends that everyone in the UK consider a vitamin D supplement during autumn and winter. National Diet and Nutrition Surveys consistently show that a significant proportion of UK adults have suboptimal vitamin D levels."
  },
  {
    question: "How much vitamin D should I take?",
    answer: "Public Health England recommends 10 micrograms (400 IU) daily for general bone and muscle health. Our formula provides 50 micrograms (2000 IU)—within the safe upper limit of 100 micrograms (4000 IU) and designed to help address common insufficiency. Higher doses may be appropriate for those with documented deficiency, under medical guidance."
  },
  {
    question: "Should I take vitamin D3 or D2?",
    answer: "Vitamin D3 (cholecalciferol) is generally considered more effective at raising blood vitamin D levels than D2 (ergocalciferol). D3 is the form naturally produced in human skin and is more efficiently utilised by the body. Our formula uses vitamin D3 specifically for this reason."
  },
  {
    question: "Can I take too much vitamin D?",
    answer: "Yes, vitamin D toxicity is possible with very high doses over extended periods, leading to hypercalcemia (excess calcium in blood). The safe upper limit established by EFSA is 100 micrograms (4000 IU) daily for adults. Our formula provides 50 micrograms (2000 IU)—half the upper limit—which is considered safe for long-term daily use without monitoring, while being sufficient to address common insufficiency."
  }
];

const VitaminD = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Vitamin D for Knee Joints UK | Bone & Muscle Health | OmKneeHealth"
        description="Evidence-based guide to vitamin D for knee joint support. Understand vitamin D's role in bone and muscle health, UK deficiency concerns, and optimal dosing. EFSA-authorised claims."
        canonicalPath="/ingredients/vitamin-d"
        keywords="vitamin D for knee joints, vitamin D bone health UK, vitamin D muscle function, vitamin D deficiency UK, vitamin D3 supplement"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Science", url: "https://omkneehealth.com/science" },
          { name: "Vitamin D for Knee Joints", url: "https://omkneehealth.com/ingredients/vitamin-d" },
        ]}
      />
      <WebPageSchema
        name="Vitamin D for Knee Joints - Evidence & Science"
        description="Comprehensive guide to vitamin D for knee joint support through bone and muscle health. EFSA-authorised claims and UK-specific guidance."
        url="https://omkneehealth.com/ingredients/vitamin-d"
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
              Vitamin D for Knee Joint Health
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding vitamin D's essential role in bone and muscle health—particularly important in the UK where deficiency is common.
            </p>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-serif text-foreground">What Is Vitamin D?</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Vitamin D is a fat-soluble vitamin that the body can produce when skin is exposed to UVB radiation from sunlight. It functions more like a hormone than a typical vitamin, with receptors found throughout the body including in bone, muscle, and immune cells.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  There are two main forms: <strong className="text-foreground">vitamin D2 (ergocalciferol)</strong>, found in some plants and fungi, and <strong className="text-foreground">vitamin D3 (cholecalciferol)</strong>, produced in human skin and found in animal sources. D3 is generally more effective at raising blood vitamin D levels.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  In the body, vitamin D is converted to its active form (calcitriol) in the kidneys, which then regulates calcium and phosphorus absorption and utilisation—fundamental processes for bone health.
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
                <h2 className="text-2xl font-serif text-foreground">Why Vitamin D Matters for Knee Health</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  While vitamin D doesn't act directly on cartilage, it supports the structures that surround and protect the knee joint:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Bone health:</strong> Vitamin D contributes to the maintenance of normal bones (EFSA-authorised claim). The knee relies on strong bone (femur, tibia, patella) for structural integrity.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Muscle function:</strong> Vitamin D contributes to normal muscle function (EFSA-authorised claim). Strong quadriceps and hamstrings help stabilise and protect the knee joint.
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Calcium absorption:</strong> Vitamin D contributes to normal absorption and utilisation of calcium (EFSA-authorised claim). Calcium is the primary mineral in bone.
                  </li>
                </ul>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border mt-6">
                  <p className="font-sans text-sm text-foreground font-medium mb-2">UK Deficiency Concerns</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    The UK's latitude (north of 50°N) means effective UVB exposure only occurs April–September. During winter months, vitamin D synthesis from sunlight is minimal. National surveys show that approximately 1 in 5 UK adults have low vitamin D status. Public Health England recommends considering vitamin D supplementation, particularly during autumn and winter.
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
                <h2 className="text-2xl font-serif text-foreground">Scientific Rationale & EFSA-Authorised Claims</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  Vitamin D has multiple EFSA-authorised health claims, making it one of the most evidence-supported ingredients in our formula:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Vitamin D contributes to the maintenance of normal bones</strong>
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Vitamin D contributes to normal muscle function</strong>
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Vitamin D contributes to normal absorption/utilisation of calcium and phosphorus</strong>
                  </li>
                  <li className="font-sans text-muted-foreground">
                    <strong className="text-foreground">Vitamin D contributes to normal blood calcium levels</strong>
                  </li>
                </ul>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Our formula provides 50μg (2000 IU) vitamin D3 per daily serving. This dose is within the safe upper limit (100μg/4000 IU) while being sufficient to help address common UK insufficiency. We use D3 (cholecalciferol)—the form most efficiently utilised by the body.
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
                  <h3 className="font-serif text-lg text-foreground mb-2">Vitamin K2</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    While vitamin D promotes calcium absorption, vitamin K2 helps direct that calcium to bones rather than soft tissues. They work synergistically for bone health. Both contribute to the maintenance of normal bones (EFSA claims).
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Magnesium</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Magnesium is involved in vitamin D metabolism—it helps convert vitamin D to its active form. Magnesium also contributes to normal muscle function (EFSA claim), complementing vitamin D's effects on muscle.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="font-serif text-lg text-foreground mb-2">Collagen & Vitamin C</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    While vitamin D supports bone and muscle, collagen and vitamin C support the cartilage and connective tissue components of joints. Together, they address joint health from multiple angles.
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
                  Vitamin D for Knee Joints: Common Questions
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
                Explore Our Vitamin D Formula
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                Our knee joint supplement contains 50μg (2000 IU) vitamin D3 paired with vitamin K2 for optimal bone support.
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

export default VitaminD;
