/**
 * OmKneeHealth Supplement card, disclosure level 1 (handover A11): name, one
 * line, the four ingredient groups without amounts, price and member price.
 * Never place clinician names or photos next to this card (Appendix D1.7).
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AddToBasketButton from "@/components/cart/AddToBasketButton";
import ShopStatusNote from "@/components/shop/ShopStatusNote";
import { useSupplement } from "@/hooks/useSupplement";
import productImage from "@/assets/product-pouches.png";
import { SUPPLEMENT, SUPPLEMENT_GROUPS, SUPPLEMENT_PATH, SUPPLEMENT_SUMMARY } from "@/content/supplement";

const SupplementCard = ({ className = "" }: { className?: string }) => {
  const { product, state, price, memberPrice } = useSupplement();
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border bg-background overflow-hidden ${className}`}
    >
      <Link to={SUPPLEMENT_PATH} className="block bg-secondary">
        <img
          src={productImage}
          alt={`${SUPPLEMENT.name}, ${SUPPLEMENT.pack}`}
          loading="lazy"
          width={600}
          height={600}
          className="aspect-square w-full object-contain p-6"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-foreground">
          <Link to={SUPPLEMENT_PATH} className="hover:text-primary">
            {SUPPLEMENT.name}
          </Link>
        </h3>
        <p className="mt-2 font-sans text-sm text-muted-foreground leading-relaxed">{SUPPLEMENT_SUMMARY}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Ingredient groups">
          {SUPPLEMENT_GROUPS.map((group) => (
            <li key={group} className="rounded-full bg-secondary px-3 py-1 font-sans text-xs text-foreground">
              {group}
            </li>
          ))}
        </ul>
        <p className="mt-5 font-sans text-sm text-foreground">
          <span className="font-serif text-2xl">{price}</span>
          <span className="ml-3 text-muted-foreground">Member price {memberPrice}</span>
        </p>
        <div className="mt-auto pt-5 space-y-3">
          <AddToBasketButton product={product} className="w-full" />
          <Button asChild variant="outline" className="w-full min-h-[44px]">
            <Link to={SUPPLEMENT_PATH}>Explore the supplement</Link>
          </Button>
          <ShopStatusNote state={state} />
        </div>
      </div>
    </article>
  );
};

export default SupplementCard;
