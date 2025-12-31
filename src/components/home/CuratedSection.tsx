/**
 * Curated Recommendations Section
 * Positions OmKneeHealth as trusted authority recommending beyond their own products
 */

import { Activity, Apple, Wrench, ArrowRight } from "lucide-react";

const curatedItems = [
  {
    icon: Activity,
    category: "Movement",
    title: "Appropriate Exercise",
    description: "Resources for gentle, joint-appropriate movement — because regular activity is foundational to knee health.",
    note: "Movement matters more than supplements."
  },
  {
    icon: Apple,
    category: "Nutrition",
    title: "Dietary Approaches",
    description: "Evidence-informed guidance on eating patterns that may support joint health and overall wellbeing.",
    note: "Food before supplements, always."
  },
  {
    icon: Wrench,
    category: "Support",
    title: "Practical Aids",
    description: "Information on braces, supports, and aids that may help with load management and daily function.",
    note: "Sometimes simple solutions help most."
  }
];

const CuratedSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              The Bigger Picture
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Beyond Supplements
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Knee health is complex and individual. Supplements play a supporting role — 
              but movement, nutrition, and appropriate care matter more. Here are resources 
              we believe in, regardless of whether you buy from us.
            </p>
          </div>

          {/* Curated items */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {curatedItems.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary/70 mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="font-sans text-xs text-primary font-medium italic">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Science link */}
          <div className="text-center">
            <a 
              href="/science#holistic-approach" 
              className="inline-flex items-center gap-2 font-sans text-sm text-primary font-medium hover:underline"
            >
              Learn more about our holistic approach
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Philosophy note */}
          <div className="mt-12 bg-background rounded-lg p-6 border border-border text-center">
            <p className="font-sans text-sm text-muted-foreground italic">
              "We'd rather you move well and eat thoughtfully without our supplement, 
              than take our supplement while neglecting the fundamentals."
            </p>
            <p className="font-sans text-xs text-muted-foreground mt-2">
              — Chinmay & Cynthia Gupte, Founders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
