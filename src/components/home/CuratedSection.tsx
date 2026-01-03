/**
 * Curated Recommendations Section
 * Positions OmKneeHealth as trusted authority recommending beyond their own products
 */

import { Activity, Apple, Wrench } from "lucide-react";

const curatedItems = [
  {
    icon: Activity,
    title: "Movement",
    note: "Matters more than any supplement"
  },
  {
    icon: Apple,
    title: "Nutrition",
    note: "Food first, always"
  },
  {
    icon: Wrench,
    title: "Practical Aids",
    note: "Simple solutions help"
  }
];

const CuratedSection = () => {
  return (
    <section className="py-40 lg:py-48 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-24">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The Bigger Picture
            </h2>
          </div>

          {/* Curated items */}
          <div className="grid md:grid-cols-3 gap-16">
            {curatedItems.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-background flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
