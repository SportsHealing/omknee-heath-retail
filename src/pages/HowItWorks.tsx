/**
 * How It Works Page
 * Explains the multi-ingredient approach to knee joint support
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Shield, Clock, Target, Leaf, FlaskConical } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Cartilage Structure",
    description: "Collagen peptides, glucosamine, and chondroitin provide the building blocks found naturally in cartilage tissue.",
    ingredients: ["Collagen (10g)", "Glucosamine (1,500mg)", "Chondroitin (800mg)"],
  },
  {
    icon: Shield,
    title: "Bone & Muscle Support",
    description: "Vitamin D and K2 contribute to the maintenance of normal bones, while vitamin D supports muscle function.",
    ingredients: ["Vitamin D3 (2,000 IU)", "Vitamin K2 (75mcg)", "Calcium"],
  },
  {
    icon: Leaf,
    title: "Botanical Extracts",
    description: "Curcumin and boswellia are traditional botanicals with antioxidant properties and long histories of use.",
    ingredients: ["Curcumin (500mg)", "Boswellia (200mg)", "Piperine (5mg)"],
  },
  {
    icon: Target,
    title: "Essential Cofactors",
    description: "Vitamin C contributes to normal collagen formation. Trace minerals support connective tissue maintenance.",
    ingredients: ["Vitamin C (80mg)", "Zinc (10mg)", "Copper (0.5mg)"],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How Our Knee Joint Supplement Works | OmKneeHealth"
        description="Learn how OmKneeHealth supports cartilage, movement and knee resilience through a multi-ingredient, evidence-led approach."
        canonicalPath="/how-it-works"
        keywords="how knee supplements work, joint supplement mechanism, cartilage support, multi-ingredient formula"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "How It Works", url: "https://omkneehealth.com/how-it-works" },
        ]}
      />
      <WebPageSchema
        name="How Our Knee Joint Supplement Works - OmKneeHealth"
        description="Understanding the multi-ingredient approach to supporting knee joint health through nutrition."
        url="https://omkneehealth.com/how-it-works"
        type="WebPage"
      />
      <Header />

      <main className="pt-28 lg:pt-48 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Our Approach
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              How Our Supplement Works
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Rather than relying on a single ingredient, our formula combines multiple nutrients that support different aspects of joint health—from cartilage structure to bone maintenance.
            </p>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 rounded-lg p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {pillar.title}
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="container mx-auto px-6 mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground mb-8 text-center">
              What to Expect
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Consistent Daily Use</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Mix one scoop (10g) with water or a smoothie daily. Consistency is more important than timing—find what works for your routine.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Gradual, Cumulative Support</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Nutritional supplements support gradual processes. Most clinical studies assess outcomes after 8-12+ weeks. Individual responses vary.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Part of a Broader Approach</h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    Supplements work best alongside appropriate exercise, healthy weight management, and any professional guidance you may receive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="container mx-auto px-6 mt-20">
          <div className="max-w-3xl mx-auto bg-muted/50 rounded-lg p-8 border border-border">
            <h2 className="font-serif text-xl text-foreground mb-4">
              Important to Understand
            </h2>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Food supplements are not a substitute for a varied, balanced diet and healthy lifestyle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Our supplement provides nutritional support, not therapeutic treatment for any condition.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>If you have knee pain or concerns, consult a healthcare professional for appropriate assessment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Individual results vary. We make no guarantees about specific outcomes.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                View our supplement
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ingredients"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary/80 transition-colors border border-border"
              >
                Explore ingredients
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;