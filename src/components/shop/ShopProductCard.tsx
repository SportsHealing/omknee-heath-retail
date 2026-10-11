/**
 * Product card: image, name, one-line purpose, price, member price, Add to
 * basket (handover A3, A10). Without a Shopify product it renders as a
 * placeholder in the same shape.
 */
import PlaceholderText from "@/components/PlaceholderText";
import { Button } from "@/components/ui/button";
import AddToBasketButton from "@/components/cart/AddToBasketButton";
import { formatMoney, memberPrice, type ShopProduct } from "@/lib/shopify";

const ShopProductCard = ({ product, note }: { product?: ShopProduct; note?: string }) => {
  if (!product) {
    return (
      <article className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-background overflow-hidden">
        <div className="flex aspect-square items-center justify-center bg-secondary/50 font-sans text-xs text-muted-foreground">
          [product image]
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-lg text-foreground"><PlaceholderText text="[Product name, from Shopify]" /></h3>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            <PlaceholderText text="[One-line purpose, within the manufacturer's intended purpose]" />
          </p>
          {note ? <p className="mt-3 font-sans text-xs text-foreground">{note}</p> : null}
          <p className="mt-4 font-sans text-sm text-foreground">
            <PlaceholderText text="£[price]" />
            <span className="ml-3 text-muted-foreground">
              Member price <PlaceholderText text="£[price]" />
            </span>
          </p>
          <div className="mt-auto pt-4">
            <Button disabled className="w-full min-h-[44px]">Add to basket</Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-background overflow-hidden">
      {product.image ? (
        <img
          src={product.image.url}
          alt={product.image.altText ?? product.title}
          loading="lazy"
          className="aspect-square w-full object-cover bg-secondary/50"
        />
      ) : (
        <div className="aspect-square bg-secondary/50" aria-hidden="true" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg text-foreground">{product.title}</h3>
        {product.purpose ? <p className="mt-1 font-sans text-sm text-muted-foreground">{product.purpose}</p> : null}
        {note ? <p className="mt-3 font-sans text-xs text-foreground">{note}</p> : null}
        <p className="mt-4 font-sans text-sm text-foreground">
          {formatMoney(product.price)}
          <span className="ml-3 text-muted-foreground">Member price {formatMoney(memberPrice(product.price))}</span>
        </p>
        <div className="mt-auto pt-4">
          <AddToBasketButton product={product} className="w-full" />
        </div>
      </div>
    </article>
  );
};

export default ShopProductCard;
