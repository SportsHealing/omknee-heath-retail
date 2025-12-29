/**
 * SHOPIFY SECTION: Multicolumn / Icon Grid
 * Location: Homepage - Below hero
 * Type: Shopify Theme Section (multicolumn with icons)
 */

import { Shield, Leaf, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Clinician-Developed",
    description: "Formulated by healthcare professionals with decades of joint health experience.",
  },
  {
    icon: Leaf,
    title: "Evidence-Informed",
    description: "Every ingredient selected based on peer-reviewed research and clinical understanding.",
  },
  {
    icon: Heart,
    title: "Gentle & Supportive",
    description: "Designed to complement your body's natural processes, not override them.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party tested for purity. Made in facilities that meet rigorous standards.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Why OmKneeHealth?
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            A different approach to knee and joint support—grounded in care, guided by science.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl transition-all duration-300 hover:bg-secondary/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-light text-primary mb-5 group-hover:scale-105 transition-transform">
                <value.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
