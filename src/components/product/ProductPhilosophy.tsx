/**
 * Product Philosophy - Part of Broader Strategy
 * Positions supplement as ONE element of knee health
 */

import { Activity, Apple, Moon, Pill } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Movement",
    description: "Regular, appropriate exercise strengthens the muscles supporting your joints and maintains range of motion.",
    note: "This is foundational."
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "A balanced diet provides the foundation for musculoskeletal wellbeing. Adequate protein, vitamins, and minerals from food come first.",
    note: "Food before supplements."
  },
  {
    icon: Moon,
    title: "Recovery",
    description: "Adequate sleep and rest allow tissues to recover and adapt. Quality rest is essential for overall wellbeing.",
    note: "Often overlooked."
  },
  {
    icon: Pill,
    title: "Targeted Support",
    description: "Evidence-informed supplementation can provide additional nutritional support — but it works best alongside the other pillars.",
    note: "A supporting role."
  }
];

const ProductPhilosophy = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Our Approach
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Supplements Are Part of the Picture — Not the Whole Picture
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We believe in being honest: no supplement alone will transform your joint health. 
              Our formula is designed to complement — not replace — the fundamentals of good 
              musculoskeletal care.
            </p>
          </div>

          {/* Four pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className={`bg-background rounded-lg p-6 border ${
                  index === 3 ? 'border-primary/30 ring-1 ring-primary/10' : 'border-border'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                  index === 3 ? 'bg-primary/10' : 'bg-trust-badge'
                }`}>
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-2">
                  {pillar.description}
                </p>
                <p className="font-sans text-xs text-primary font-medium italic">
                  {pillar.note}
                </p>
              </div>
            ))}
          </div>

          {/* Honest positioning */}
          <div className="bg-background rounded-lg p-6 md:p-8 border border-border text-center">
            <p className="font-serif text-lg text-foreground mb-4 italic">
              "We'd rather you exercise regularly and eat well without taking our supplement, 
              than take our supplement while neglecting the fundamentals."
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              — Chinmay & Cynthia Gupte, Founders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;
