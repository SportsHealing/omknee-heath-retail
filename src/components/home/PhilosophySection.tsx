/**
 * Philosophy Section - Clinical Authority Positioning
 * Establishes OmKneeHealth as an authority, not a brand
 */

import { Stethoscope, FlaskConical, Activity } from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    title: "Clinical Thinking",
    description: "We approach knee health the way clinicians do — with careful assessment, honest communication, and respect for complexity. No shortcuts, no exaggerated promises."
  },
  {
    icon: FlaskConical,
    title: "Evidence First",
    description: "Every ingredient we include has a reason rooted in research. We're transparent about what the science shows — and what remains uncertain."
  },
  {
    icon: Activity,
    title: "The Whole Picture",
    description: "A supplement is one piece of a larger puzzle. Movement, nutrition, rest, and professional guidance all play essential roles in joint health."
  }
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-40 lg:py-48 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            A Different Approach
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-8 rounded-full bg-secondary flex items-center justify-center">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-4">
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
