/**
 * Shop Destination - homepage gateway into the curated knee-health shop.
 */

import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Snowflake, HeartHandshake, Dumbbell, Footprints } from "lucide-react";

const categories = [
  { icon: Leaf, label: "Nutrition" },
  { icon: Shield, label: "Braces & Supports" },
  { icon: Snowflake, label: "Cooling & Recovery" },
  { icon: HeartHandshake, label: "After Surgery" },
  { icon: Dumbbell, label: "Movement & Rehab" },
  { icon: Footprints, label: "Foot & Lower Limb" },
];

const ShopDestination = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">The Shop</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Curated, not catalogued
        </h2>
        <p className="font-sans text-muted-foreground leading-relaxed">
          A short, considered list in every category — with a clear reason for each choice.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-xl border border-border bg-background p-6 flex flex-col items-center text-center gap-3"
          >
            <cat.icon className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-sans text-sm text-foreground">{cat.label}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          Browse the shop
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ShopDestination;
