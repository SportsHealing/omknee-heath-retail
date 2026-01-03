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
    note: "Movement matters more than supplements."
  },
  {
    icon: Apple,
    category: "Nutrition",
    title: "Dietary Approaches",
    note: "Food before supplements, always."
  },
  {
    icon: Wrench,
    category: "Support",
    title: "Practical Aids",
    note: "Sometimes simple solutions help most."
  }
];

const CuratedSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
              Beyond Supplements
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              The Bigger Picture
            </h2>
            <p className="font-sans text-muted-foreground max-w-md mx-auto">
              Supplements support. Movement, nutrition, and care matter more.
            </p>
          </div>

          {/* Curated items - simplified */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {curatedItems.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-background flex items-center justify-center mb-5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-primary/70 italic">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Science link */}
          <div className="text-center">
            <a 
              href="/science#holistic-approach" 
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
