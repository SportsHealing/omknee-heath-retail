import { useQuery } from "@tanstack/react-query";
import {
  fetchCollectionProducts,
  fetchProductByHandle,
  fetchTaggedProducts,
  isShopifyConfigured,
} from "@/lib/shopify";

const options = { staleTime: 5 * 60 * 1000, retry: 1, enabled: isShopifyConfigured() } as const;

/**
 * Product data from Shopify. When Shopify is not configured or the request
 * fails, callers fall back to static data with Add to basket disabled (E2).
 */
export const useProduct = (handle: string) =>
  useQuery({ queryKey: ["shopify", "product", handle], queryFn: () => fetchProductByHandle(handle), ...options });

export const useCollectionProducts = (handle: string, enabled = true) =>
  useQuery({
    queryKey: ["shopify", "collection", handle],
    queryFn: () => fetchCollectionProducts(handle),
    ...options,
    enabled: options.enabled && enabled,
  });

export const useTaggedProducts = (tag: string) =>
  useQuery({ queryKey: ["shopify", "tag", tag], queryFn: () => fetchTaggedProducts(tag), ...options });

/** "unavailable" when Shopify is configured but the request failed. */
export const shopState = (query: { isError: boolean; isLoading: boolean; data?: unknown }) =>
  !isShopifyConfigured() ? "unconfigured" : query.isError ? "unavailable" : query.isLoading ? "loading" : "ready";
