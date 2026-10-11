/**
 * The Wellness Edit (handover A3): always the last section of the Wellness hub.
 * The rail loads from Shopify (tag "wellness-edit") in Phase 5; until then it
 * shows the supplement and placeholder cards for each product type.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlaceholderText from "@/components/PlaceholderText";
import SupplementCard from "@/components/product/SupplementCard";
import { WELLNESS_EDIT } from "@/content/wellnessContent";

const placeholders = [
  { title: "Cooling and recovery", to: "/shop#cooling-recovery" },
  { title: "Compression and support sleeves", to: "/shop#braces-supports" },
  { title: "Movement and rehab equipment", to: "/shop#movement-rehabilitation" },
  { title: "[Knee pillow, if stocked]", to: "/shop" },
];

const WellnessEdit = () => (
  <section id="wellness-edit" className="scroll-mt-32 py-20 bg-secondary/40">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{WELLNESS_EDIT.title}</h2>
        <p className="font-sans text-muted-foreground leading-relaxed">{WELLNESS_EDIT.body}</p>
      </div>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <SupplementCard className="sm:row-span-2" />
        {placeholders.map((item) => (
          <article key={item.title} className="flex flex-col rounded-2xl border border-dashed border-border bg-background p-6">
            <h3 className="font-serif text-lg text-foreground"><PlaceholderText text={item.title} /></h3>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              <PlaceholderText text="[Product from Shopify: image, name, one-line purpose, price, member price, Add to basket]" />
            </p>
            <Link
              to={item.to}
              className="mt-auto pt-4 inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
            >
              View in the shop
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/club" className="font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px] inline-flex items-center">
          {WELLNESS_EDIT.memberLine}
        </Link>
        <Button asChild size="lg">
          <Link to="/shop">Shop the full range</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default WellnessEdit;
