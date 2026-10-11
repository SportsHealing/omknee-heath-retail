import { useProduct, shopState } from "./useShopProducts";
import { formatMoney, memberPrice } from "@/lib/shopify";
import { SUPPLEMENT, SUPPLEMENT_HANDLE } from "@/content/supplement";

/** The supplement from Shopify, with static prices as the fallback (E2). */
export const useSupplement = () => {
  const query = useProduct(SUPPLEMENT_HANDLE);
  const product = query.data ?? null;
  return {
    product,
    state: shopState(query),
    price: product ? formatMoney(product.price) : `£${SUPPLEMENT.price}`,
    memberPrice: product ? formatMoney(memberPrice(product.price)) : `£${SUPPLEMENT.memberPrice}`,
  };
};
