/**
 * Product Philosophy - Part of Broader Strategy
 * Positions supplement as ONE element of knee health
 */

import { Activity, Apple, Moon, Pill } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Movement",
    description: "Strengthens supporting muscles.",
    note: "Foundational"
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Adequate protein, vitamins, minerals.",
    note: "Food first"
  },
  {
    icon: Moon,
    title: "Recovery",
    description: "Rest allows adaptation.",
    note: "Essential"
  },
  {
    icon: Pill,
    title: "Support",
    description: "Targeted nutritional contribution.",
    note: "Complementary"
  }
];

const ProductPhilosophy = () => {
  return (
    <section className="py-32 md:py-40 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Part of the Picture
            </h2>
            <p className="font-sans text-muted-foreground max-w-lg mx-auto">
              Supplements complement. They do not replace.
            </p>
          </div>

          {/* Four pillars */}
          <div className="grid md:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-5">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mb-3">
                  {pillar.description}
                </p>
                <p className="font-sans text-xs text-primary/70">
                  {pillar.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;
