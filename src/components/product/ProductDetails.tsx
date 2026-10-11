/**
 * Product page body, disclosure level 2 (handover A11, final wording):
 * What's inside, What the nutrients do, Our approach, How to take it.
 * Ingredient groups are named without amounts; amounts live only in
 * FullIngredients (level 3).
 */
import { Link } from "react-router-dom";
import PlaceholderText from "@/components/PlaceholderText";
import ProductClaims from "./ProductClaims";
import { NAV } from "@/lib/navigation";

const GROUPS = [
  { name: "Collagen complex", items: "marine collagen peptides types I, II and III" },
  { name: "Joint matrix", items: "glucosamine, chondroitin, hyaluronic acid, MSM" },
  { name: "Botanicals", items: "turmeric with black pepper extract, boswellia, sea buckthorn" },
  { name: "Bone nutrients", items: "vitamins C, D3, K2 and E, magnesium, zinc, copper, bamboo silica" },
];

const h2Class = "font-serif text-2xl md:text-3xl text-foreground mb-6";

const ProductDetails = () => (
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto divide-y divide-border">
      <section className="py-12">
        <h2 className={h2Class}>What's inside</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {GROUPS.map((group) => (
            <li key={group.name} className="rounded-xl border border-border bg-secondary/30 p-5">
              <p className="font-serif text-lg text-foreground mb-1">{group.name}</p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{group.items}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12">
        <h2 className={h2Class}>What the nutrients do</h2>
        <ProductClaims />
      </section>

      <section className="py-12">
        <h2 className={h2Class}>Our approach</h2>
        <p className="font-sans text-muted-foreground leading-relaxed">
          Food comes first. This is a food supplement, intended to supplement a varied and balanced diet, not replace
          it. It is not a treatment for any knee condition. If your knee is painful, swollen or not working as it
          should, get it assessed.{" "}
          <Link to={NAV.scansTests.to} className="text-primary underline underline-offset-4 hover:text-foreground">
            {NAV.scansTests.label}
          </Link>
        </p>
      </section>

      <section className="py-12">
        <h2 className={h2Class}>How to take it</h2>
        <p className="font-sans text-muted-foreground leading-relaxed">
          <PlaceholderText text="Mix one level scoop (13.8 g) with [250 ml] of water once a day. Do not exceed the recommended daily dose." />
        </p>
      </section>
    </div>
  </div>
);

export default ProductDetails;
