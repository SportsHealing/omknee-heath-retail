/**
 * SHOPIFY SECTION: Rich Text / Custom HTML
 * Location: Homepage - Evidence & science positioning
 * Type: Custom HTML Section or Shopify Page content
 */

import { BookOpen, FlaskConical, Users } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    label: "Research-Backed",
    detail: "Ingredients selected from peer-reviewed studies on joint support",
  },
  {
    icon: Users,
    label: "Clinician-Guided",
    detail: "Formulations reviewed by healthcare professionals",
  },
  {
    icon: BookOpen,
    label: "Transparent",
    detail: "Clear information about what's in our products and why",
  },
];

const ScienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.15em] uppercase text-primary-foreground/60 mb-4">
              Our Foundation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Grounded in Evidence,{" "}
              <span className="italic opacity-80">Guided by Care</span>
            </h2>
            <p className="font-sans text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We don't make promises we can't support. Every formula is built on 
              scientific literature, clinical expertise, and a genuine commitment 
              to your wellbeing.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 mb-5">
                  <pillar.icon className="w-5 h-5 text-primary-foreground/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-2">{pillar.label}</h3>
                <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer note */}
          <p className="text-center font-sans text-xs text-primary-foreground/40 mt-12 max-w-xl mx-auto">
            Our products are dietary supplements intended to support general wellness. 
            They are not intended to diagnose, treat, cure, or prevent any disease. 
            Always consult your healthcare provider before starting any supplement regimen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
