/**
 * Curated Recommendations Section
 * Separates OmKneeHealth products from curated partner recommendations
 * Positions as trusted authority who recommends beyond their own products
 */

import { ExternalLink } from "lucide-react";

const curatedItems = [
  {
    category: "Movement",
    title: "Low-Impact Exercise Guides",
    description: "Clinician-approved resources for gentle, joint-friendly movement routines",
    link: "#"
  },
  {
    category: "Nutrition",
    title: "Anti-Inflammatory Eating",
    description: "Evidence-based dietary approaches that may support joint comfort",
    link: "#"
  },
  {
    category: "Equipment",
    title: "Supportive Aids",
    description: "Quality braces, supports, and mobility aids we've vetted and trust",
    link: "#"
  }
];

const CuratedSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-primary/10 text-primary mb-6">
              Curated Resources
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Beyond Supplements
            </h2>
            <div className="clinical-divider mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Joint health is holistic. We carefully curate resources and recommendations 
              from trusted sources—not because we profit from them, but because they may 
              genuinely help.
            </p>
          </div>

          {/* Curated items */}
          <div className="grid md:grid-cols-3 gap-6">
            {curatedItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group bg-background rounded-lg p-6 shadow-soft hover:shadow-card transition-all"
              >
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary mb-3">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 font-sans text-xs text-primary font-medium">
                  Explore
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center mt-12 font-sans text-xs text-muted-foreground">
            We have no financial relationships with these resources. Recommendations are based 
            solely on clinical assessment and quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
