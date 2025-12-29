import { Move, Apple, Brain, Pill } from "lucide-react";

const pillars = [
  {
    icon: Move,
    title: "Appropriate Movement",
    description: "Regular, gentle movement helps maintain joint flexibility, strengthens supporting muscles, and promotes circulation of synovial fluid. This might include walking, swimming, cycling, or specific exercises recommended by a physiotherapist."
  },
  {
    icon: Apple,
    title: "Supportive Nutrition",
    description: "A balanced diet rich in anti-inflammatory foods, adequate protein for tissue repair, and sufficient vitamins and minerals provides the foundation for joint health. Supplements can complement this foundation."
  },
  {
    icon: Brain,
    title: "Healthy Body Weight",
    description: "Every extra pound of body weight places additional stress on weight-bearing joints like the knees. Maintaining a healthy weight reduces this mechanical load and may support long-term joint comfort."
  },
  {
    icon: Pill,
    title: "Targeted Supplementation",
    description: "When chosen thoughtfully, supplements can provide specific nutrients that may be difficult to obtain in sufficient quantities from diet alone — particularly for those with increased needs or dietary restrictions."
  }
];

const HolisticApproach = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              A Holistic Approach to Joint Health
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We believe supplements work best as part of a comprehensive approach. 
              Here are the four pillars we consider essential for supporting 
              long-term joint health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-om-cream/40 rounded-xl p-6 border border-om-sage/10"
              >
                <div className="w-12 h-12 rounded-full bg-om-forest/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-om-forest" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-om-cream to-om-sage/20 rounded-xl p-6 md:p-8 border border-om-sage/20">
            <h3 className="font-serif text-lg text-foreground mb-3 text-center">
              Working with Healthcare Professionals
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              If you're experiencing joint problems, we encourage you to work with 
              healthcare professionals such as your GP, a physiotherapist, or a 
              musculoskeletal specialist. They can provide personalised assessment 
              and guidance. Our supplements are designed to complement — not 
              replace — professional care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach;
