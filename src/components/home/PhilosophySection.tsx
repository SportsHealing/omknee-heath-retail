/**
 * Philosophy Section - Clinical Authority Positioning
 * Establishes OmKneeHealth as an authority, not a brand
 */

import { Heart, BookOpen, Users } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description: "Every recommendation begins with understanding your unique needs. We believe in listening before prescribing, and supporting before selling."
  },
  {
    icon: BookOpen,
    title: "Evidence Over Claims",
    description: "Our guidance is rooted in peer-reviewed research and clinical experience. We share what the science actually shows—nothing more, nothing less."
  },
  {
    icon: Users,
    title: "Holistic Approach",
    description: "True joint health encompasses movement, nutrition, and lifestyle. Supplements are just one piece of a comprehensive care strategy."
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
            A Different Approach to Joint Health
          </h2>
          <div className="clinical-divider mb-6" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            We founded OmKneeHealth because the joint supplement industry needed 
            a voice of reason. Too many promises, not enough honesty. We're here 
            to change that.
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
