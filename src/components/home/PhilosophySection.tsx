/**
 * Philosophy Section - Clinical Authority Positioning
 * Establishes OmKneeHealth as an authority, not a brand
 */

import { Stethoscope, FlaskConical, Activity } from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    title: "Clinical Thinking First",
    description: "Our approach starts where clinical practice starts — with careful assessment, individualised consideration, and respect for complexity. No shortcuts, no one-size-fits-all."
  },
  {
    icon: FlaskConical,
    title: "Evidence, Not Promises",
    description: "We share what the research shows and acknowledge what remains uncertain. Honest communication matters more than compelling marketing."
  },
  {
    icon: Activity,
    title: "The Whole Picture",
    description: "Knee health involves movement, load management, recovery, and nutrition. Supplements play a supporting role — never the lead."
  }
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Knee Health, Considered Differently
          </h2>
          <div className="clinical-divider mb-6" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            OmKneeHealth was founded by clinicians who saw a gap — not for another 
            supplement, but for a more thoughtful, restrained, and evidence-informed 
            approach to supporting long-term knee health.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-trust-badge flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
