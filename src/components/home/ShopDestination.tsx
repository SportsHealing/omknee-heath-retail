/**
 * Shop Destination - homepage gateway into the curated knee-health shop.
 */

import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Snowflake, HeartHandshake, Dumbbell, Footprints } from "lucide-react";
import { track } from "@/lib/analytics";

const categories = [
  { icon: Leaf, label: "Knee Nutrition", copy: "Nutrition and selected supplements.", to: "/shop#knee-nutrition" },
  { icon: Shield, label: "Braces & Supports", copy: "Practical support for different activities and circumstances.", to: "/shop#braces-supports" },
  { icon: Snowflake, label: "Cooling & Recovery", copy: "Selected products for recovery and comfort.", to: "/shop#cooling-recovery" },
  { icon: HeartHandshake, label: "After Surgery", copy: "Practical products for everyday life following knee surgery.", to: "/shop#after-surgery" },
  { icon: Dumbbell, label: "Movement & Rehabilitation", copy: "Equipment for strength, movement and rehabilitation.", to: "/shop#movement-rehabilitation" },
  { icon: Footprints, label: "Foot & Lower Limb", copy: "Selected products for the wider movement chain.", to: "/shop#foot-lower-limb" },
];

const ShopDestination = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">The Knee Shop</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Thoughtful support for your knees.
        </h2>
        <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
          <p>Products should complement good knee health, not replace it.</p>
          <p>
            We select products with a focus on purpose, quality, practicality and clear information,
            helping you decide what may be relevant to you.
          </p>
        </div>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {categories.map((cat) => (
          <li key={cat.label}>
            <Link
              to={cat.to}
              onClick={() => track("shop_entry", { collection: cat.label })}
              className="h-full rounded-xl border border-border bg-background p-6 flex flex-col gap-3 transition-colors hover:border-primary/40"
            >
              <cat.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="font-sans text-sm text-foreground">{cat.label}</span>
              <span className="font-sans text-sm text-muted-foreground leading-relaxed">{cat.copy}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link
          to="/shop"
          onClick={() => track("shop_entry", { collection: "all" })}
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          Explore the Knee Shop
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ShopDestination;
