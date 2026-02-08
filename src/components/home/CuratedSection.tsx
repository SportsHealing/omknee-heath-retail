/**
 * Curated Recommendations Section
 * Positions OmKneeHealth as trusted authority recommending beyond their own products
 */

import { Activity, Apple, Wrench, MapPin } from "lucide-react";

const curatedItems = [
  {
    icon: Activity,
    title: "Movement",
    note: "Matters more than any supplement—even in British weather"
  },
  {
    icon: Apple,
    title: "Nutrition",
    note: "Food first, always—balanced British diet"
  },
  {
    icon: Wrench,
    title: "Practical Aids",
    note: "Simple solutions that genuinely help"
  },
  {
    icon: MapPin,
    title: "NHS Guidance",
    note: "Work alongside your GP and physio"
  }
];

const CuratedSection = () => {
  return (
    <section className="py-40 lg:py-48 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-24">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Beyond Supplements
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              The Bigger Picture
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
              A supplement is just one part of knee health. We believe in supporting the whole approach—including guidance that complements NHS care.
            </p>
          </div>

          {/* Curated items */}
          <div className="grid md:grid-cols-4 gap-12">
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
