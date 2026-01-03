/**
 * SHOPIFY SECTION: Multicolumn / Icon Grid
 * Location: Homepage - Below hero
 * Type: Shopify Theme Section (multicolumn with icons)
 */

import { Shield, Leaf, Heart, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Clinician-Developed" },
  { icon: Leaf, title: "Evidence-Informed" },
  { icon: Heart, title: "Gentle Approach" },
  { icon: Award, title: "Third-Party Tested" },
];

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Why OmKneeHealth?
          </h2>
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
              <h3 className="font-serif text-lg text-foreground">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
