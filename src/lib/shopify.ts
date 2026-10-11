/**
 * Shopify Storefront API (handover E2): products and a cart with
 * Shopify-hosted checkout. We never build our own payment form.
 *
 * Uses the public Storefront token only. Requests send no cookies, and no
 * Shopify script is loaded on this site.
 */

const DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

/** Storefront API version. Shopify supports each version for about a year; update before it retires. */
export const STOREFRONT_API_VERSION = "2025-07";

export const isShopifyConfigured = () => Boolean(DOMAIN && TOKEN);

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ShopProduct {
  id: string;
  handle: string;
  title: string;
  /** First sentence of the Shopify description: the one-line purpose. */
  purpose: string;
  image?: { url: string; altText: string | null };
  price: Money;
  variantId?: string;
  availableForSale: boolean;
}

export interface CartLine {
  id: string;
  quantity: number;
  variantId: string;
  productTitle: string;
  variantTitle: string;
  handle: string;
  image?: { url: string; altText: string | null };
  price: Money;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotal: Money;
  lines: CartLine[];
}

const PRODUCT_FIELDS = `
  fragment ProductFields on Product {
    id handle title description
    featuredImage { url altText }
    variants(first: 1) { nodes { id availableForSale price { amount currencyCode } } }
  }`;

const CART_FIELDS = `
  fragment CartFields on Cart {
    id checkoutUrl totalQuantity
    cost { subtotalAmount { amount currencyCode } }
    lines(first: 50) {
      nodes {
        id quantity
        merchandise {
          ... on ProductVariant {
            id title price { amount currencyCode }
            product { title handle featuredImage { url altText } }
          }
        }
      }
    }
  }`;

const storefront = async <T>(query: string, variables: Record<string, unknown> = {}): Promise<T> => {
  if (!isShopifyConfigured()) throw new Error("Shopify is not configured");
  const response = await fetch(`https://${DOMAIN}/api/${STOREFRONT_API_VERSION}/graphql.json`, {
    method: "POST",
    credentials: "omit",
    headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": TOKEN ?? "" },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) throw new Error(`Shopify request failed: ${response.status}`);
  const json = await response.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
};

/* ---------- mapping ---------- */

interface RawProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: { url: string; altText: string | null } | null;
  variants: { nodes: { id: string; availableForSale: boolean; price: Money }[] };
}

const firstSentence = (text: string) => {
  const match = text.trim().match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
};

const toProduct = (raw: RawProduct): ShopProduct => {
  const variant = raw.variants.nodes[0];
  return {
    id: raw.id,
    handle: raw.handle,
    title: raw.title,
    purpose: firstSentence(raw.description),
    image: raw.featuredImage ?? undefined,
    price: variant?.price ?? { amount: "0", currencyCode: "GBP" },
    variantId: variant?.id,
    availableForSale: Boolean(variant?.availableForSale),
  };
};

interface RawCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: Money };
  lines: {
    nodes: {
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        title: string;
        price: Money;
        product: { title: string; handle: string; featuredImage: { url: string; altText: string | null } | null };
      };
    }[];
  };
}

const toCart = (raw: RawCart): Cart => ({
  id: raw.id,
  checkoutUrl: raw.checkoutUrl,
  totalQuantity: raw.totalQuantity,
  subtotal: raw.cost.subtotalAmount,
  lines: raw.lines.nodes.map((line) => ({
    id: line.id,
    quantity: line.quantity,
    variantId: line.merchandise.id,
    productTitle: line.merchandise.product.title,
    variantTitle: line.merchandise.title,
    handle: line.merchandise.product.handle,
    image: line.merchandise.product.featuredImage ?? undefined,
    price: line.merchandise.price,
  })),
});

/* ---------- products ---------- */

export const fetchProductByHandle = async (handle: string) => {
  const data = await storefront<{ product: RawProduct | null }>(
    `${PRODUCT_FIELDS} query Product($handle: String!) { product(handle: $handle) { ...ProductFields } }`,
    { handle },
  );
  return data.product ? toProduct(data.product) : null;
};

/** Products in a collection. Collection handles match the shop category ids. */
export const fetchCollectionProducts = async (handle: string, first = 12) => {
  const data = await storefront<{ collection: { products: { nodes: RawProduct[] } } | null }>(
    `${PRODUCT_FIELDS} query Collection($handle: String!, $first: Int!) {
      collection(handle: $handle) { products(first: $first) { nodes { ...ProductFields } } }
    }`,
    { handle, first },
  );
  return (data.collection?.products.nodes ?? []).map(toProduct);
};

/** Products with a tag, e.g. "wellness-edit" for the Wellness hub rail. */
export const fetchTaggedProducts = async (tag: string, first = 8) => {
  const data = await storefront<{ products: { nodes: RawProduct[] } }>(
    `${PRODUCT_FIELDS} query Tagged($query: String!, $first: Int!) {
      products(first: $first, query: $query) { nodes { ...ProductFields } }
    }`,
    { query: `tag:${tag}`, first },
  );
  return data.products.nodes.map(toProduct);
};

/* ---------- cart ---------- */

type CartPayload = { cart: RawCart | null; userErrors: { message: string }[] };

const unwrap = (payload: CartPayload) => {
  if (payload.userErrors.length) throw new Error(payload.userErrors[0].message);
  if (!payload.cart) throw new Error("No cart returned");
  return toCart(payload.cart);
};

export const fetchCart = async (cartId: string) => {
  const data = await storefront<{ cart: RawCart | null }>(
    `${CART_FIELDS} query Cart($id: ID!) { cart(id: $id) { ...CartFields } }`,
    { id: cartId },
  );
  return data.cart ? toCart(data.cart) : null;
};

export const cartCreate = async (variantId: string, quantity: number) =>
  unwrap(
    (
      await storefront<{ cartCreate: CartPayload }>(
        `${CART_FIELDS} mutation Create($lines: [CartLineInput!]!) {
          cartCreate(input: { lines: $lines }) { cart { ...CartFields } userErrors { message } }
        }`,
        { lines: [{ merchandiseId: variantId, quantity }] },
      )
    ).cartCreate,
  );

export const cartLinesAdd = async (cartId: string, variantId: string, quantity: number) =>
  unwrap(
    (
      await storefront<{ cartLinesAdd: CartPayload }>(
        `${CART_FIELDS} mutation Add($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ...CartFields } userErrors { message } }
        }`,
        { cartId, lines: [{ merchandiseId: variantId, quantity }] },
      )
    ).cartLinesAdd,
  );

/** Quantity 0 removes the line. */
export const cartLinesUpdate = async (cartId: string, lineId: string, quantity: number) =>
  unwrap(
    (
      await storefront<{ cartLinesUpdate: CartPayload }>(
        `${CART_FIELDS} mutation Update($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
          cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ...CartFields } userErrors { message } }
        }`,
        { cartId, lines: [{ id: lineId, quantity }] },
      )
    ).cartLinesUpdate,
  );

/* ---------- money ---------- */

export const formatMoney = (money: Money) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: money.currencyCode }).format(Number(money.amount));

/** Member price: 15% off, applied at checkout with the member's club code (E2). */
export const memberPrice = (money: Money): Money => ({
  amount: (Math.round(Number(money.amount) * 85) / 100).toFixed(2),
  currencyCode: money.currencyCode,
});
