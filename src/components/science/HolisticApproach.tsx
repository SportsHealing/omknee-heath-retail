/**
 * Holistic Approach - The four pillars of joint health
 * Positions supplements as one part of a broader strategy
 */

import { Activity, Apple, Scale, Pill } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Movement",
    description: "Maintains flexibility, strengthens supporting muscles, circulates synovial fluid."
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Anti-inflammatory foods, adequate protein, essential vitamins and minerals."
  },
  {
    icon: Scale,
    title: "Load Management",
    description: "Healthy weight reduces mechanical stress on weight-bearing joints."
  },
  {
    icon: Pill,
    title: "Supplementation",
    description: "Targeted nutrients that may be difficult to obtain from diet alone."
  }
];

const HolisticApproach = () => {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              The Broader Picture
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto">
              No single intervention can maintain joint health on its own. The most effective approach 
              combines multiple strategies that work together over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-trust-badge flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach;
