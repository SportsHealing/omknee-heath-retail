/**
 * Ingredients Overview Page - Hub for all ingredient pages
 * SEO-optimized for ingredient discovery and internal linking
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Leaf, Pill, Sun, Gem } from "lucide-react";

const ingredients = [
  {
    name: "Collagen Peptides",
    description: "The primary structural protein in cartilage, supporting joint resilience and tissue structure.",
    href: "/ingredients/collagen",
    icon: FlaskConical,
    highlight: "10g per serving",
  },
  {
    name: "Curcumin (Turmeric)",
    description: "Concentrated turmeric extract with antioxidant properties, paired with piperine for absorption.",
    href: "/ingredients/curcumin",
    icon: Leaf,
    highlight: "95% curcuminoids",
  },
  {
    name: "Boswellia Serrata",
    description: "Traditional botanical extract containing boswellic acids, widely used for joint comfort.",
    href: "/ingredients/boswellia",
    icon: Leaf,
    highlight: "65% boswellic acids",
  },
  {
    name: "Glucosamine Sulphate",
    description: "A natural compound found in cartilage, serving as a building block for the cartilage matrix.",
    href: "/ingredients/glucosamine",
    icon: Pill,
    highlight: "1,500mg per serving",
  },
  {
    name: "Chondroitin Sulphate",
    description: "A structural component of cartilage that helps retain water and provide cushioning.",
    href: "/ingredients/chondroitin",
    icon: Pill,
    highlight: "800mg per serving",
  },
  {
    name: "Vitamin D3",
    description: "Supports bone health and muscle function—essential for the musculoskeletal system.",
    href: "/ingredients/vitamin-d",
    icon: Sun,
    highlight: "EFSA-authorised claims",
  },
  {
    name: "Trace Minerals",
    description: "Zinc, copper, and boron—essential cofactors for connective tissue maintenance.",
    href: "/ingredients/trace-minerals",
    icon: Gem,
    highlight: "Balanced ratios",
  },
];

const Ingredients = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Supplement Ingredients | OmKneeHealth"
        description="Explore the evidence-based ingredients behind OmKneeHealth, including collagen, turmeric and key micronutrients for knee joint support."
        canonicalPath="/ingredients"
        keywords="knee supplement ingredients, collagen for joints, turmeric joint health, glucosamine chondroitin, joint supplement formula"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Ingredients", url: "https://omkneehealth.com/ingredients" },
        ]}
      />
      <WebPageSchema
        name="Knee Supplement Ingredients - OmKneeHealth"
        description="Comprehensive overview of the evidence-based ingredients in OmKneeHealth's knee joint supplement formula."
        url="https://omkneehealth.com/ingredients"
        type="CollectionPage"
      />
      <Header />

      <main className="pt-28 lg:pt-48 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Evidence-Based Formula
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Our Ingredients
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every ingredient in our knee joint supplement is selected based on scientific rationale and formulated at meaningful doses. Explore each ingredient to understand its role in joint health.
            </p>
          </div>
        </section>

        {/* Ingredients Grid */}
        <section className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {ingredients.map((ingredient) => (
                <Link
                  key={ingredient.href}
                  to={ingredient.href}
                  className="group bg-secondary/30 hover:bg-secondary/50 rounded-lg p-6 border border-border transition-all hover:shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ingredient.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                          {ingredient.name}
                        </h2>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                        {ingredient.description}
                      </p>
                      <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {ingredient.highlight}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Formula Philosophy */}
        <section className="container mx-auto px-6 mt-20">
          <div className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
            <h2 className="font-serif text-2xl text-foreground mb-4 text-center">
              Our Formulation Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p>
                We don't use proprietary blends that hide ingredient amounts. Every dose is clearly stated so you know exactly what you're getting.
              </p>
              <p>
                Where EFSA-authorised health claims exist, we include them. Where they don't, we're transparent about the current state of evidence.
              </p>
              <p>
                Our formula combines multiple ingredients that work through different mechanisms—supporting cartilage, bone, and connective tissue through a comprehensive approach.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/product"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                View our supplement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ingredients;