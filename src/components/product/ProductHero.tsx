/**
 * Product page hero, disclosure level 2 (handover A11): name, one line, price,
 * member price and Add to basket. No clinician names, endorsements or amounts.
 */
import { Button } from "@/components/ui/button";
import PlaceholderText from "@/components/PlaceholderText";
import productImage from "@/assets/product-pouches.png";
import { FORMULA_DETAILS, SUPPLEMENT } from "@/content/supplement";

const ProductHero = () => (
  <section className="pb-16 md:pb-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center overflow-hidden">
          <img
            src={productImage}
            alt={`${SUPPLEMENT.name}, ${SUPPLEMENT.pack}`}
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-contain p-8"
          />
        </div>

        <div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">{SUPPLEMENT.name}</h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
            A daily powder bringing together collagen, joint-matrix ingredients, botanicals and bone nutrients. Vanilla
            cherry flavour.
          </p>

          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <p className="font-sans text-foreground">
              <span className="font-serif text-3xl">£{SUPPLEMENT.price}</span>
              <span className="ml-2 text-sm text-muted-foreground">per {SUPPLEMENT.pack.replace(" pack", "")} pack</span>
            </p>
            <p className="mt-2 font-sans text-sm text-foreground">
              Member price: £{SUPPLEMENT.memberPrice} with your club code
            </p>
            <p className="mt-1 font-sans text-sm text-muted-foreground">
              <PlaceholderText text={FORMULA_DETAILS.servingsPerPack} />
            </p>
            <Button size="lg" disabled className="mt-6 w-full sm:w-auto px-10 min-h-[44px]" aria-describedby="basket-pending">
              Add to basket
            </Button>
            <p id="basket-pending" className="mt-3 font-sans text-xs text-muted-foreground">
              <PlaceholderText text="[Basket and checkout: Shopify, Phase 5]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductHero;
