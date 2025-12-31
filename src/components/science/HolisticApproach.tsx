/**
 * Holistic Approach - The four pillars of joint health
 * Positions supplements as one part of a broader strategy
 */

import { Activity, Apple, Scale, Pill } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Appropriate Movement",
    description: "Regular, appropriate movement helps maintain joint flexibility, strengthens supporting muscles, and promotes circulation of synovial fluid. This might include walking, swimming, cycling, or exercises recommended by a physiotherapist.",
    note: "Movement is medicine — but the right type and intensity matter."
  },
  {
    icon: Apple,
    title: "Supportive Nutrition",
    description: "A balanced diet rich in anti-inflammatory foods, adequate protein for tissue maintenance, and sufficient vitamins and minerals provides the foundation for joint health. Supplements can complement this foundation when needed.",
    note: "Food first. Supplements where appropriate."
  },
  {
    icon: Scale,
    title: "Load Management",
    description: "Every additional kilogram of body weight places extra stress on weight-bearing joints like the knees. Maintaining a healthy weight reduces this mechanical load and may support long-term joint comfort and function.",
    note: "Mechanical load is a significant factor in knee health."
  },
  {
    icon: Pill,
    title: "Targeted Supplementation",
    description: "When chosen thoughtfully, supplements can provide specific nutrients that may be difficult to obtain in sufficient quantities from diet alone — particularly for those with increased needs or dietary restrictions.",
    note: "A supporting role, not the lead."
  }
];

const HolisticApproach = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              The Bigger Picture
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              A Holistic Approach to Knee Health
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
              Supplements work best as part of a comprehensive approach. Here are the 
              four pillars we consider essential for supporting long-term joint health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-trust-badge flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-3">
                  {pillar.description}
                </p>
                <p className="text-xs text-primary font-medium italic font-sans">
                  {pillar.note}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-border">
            <h3 className="font-serif text-lg text-foreground mb-3 text-center">
              Working with Healthcare Professionals
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed font-sans">
              If you're experiencing joint problems, we encourage you to work with 
              healthcare professionals — your GP, a physiotherapist, or a musculoskeletal 
              specialist. They can provide personalised assessment and guidance. 
              Our supplements are designed to complement, not replace, professional care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach;
