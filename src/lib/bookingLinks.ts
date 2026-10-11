/**
 * Payment and booking links for services (handover E3). Assumed role, to
 * confirm (Q4): Square takes payment for blood tests via payment links;
 * Shopify handles physical products. A value in [brackets] is a placeholder
 * and renders as a disabled button.
 */
export const BLOOD_TEST_LINKS = {
  vitaminD: import.meta.env.VITE_SQUARE_LINK_VITD || "[Square link: vitamin D check]",
  bone: import.meta.env.VITE_SQUARE_LINK_BONE || "[Square link: bone health panel]",
  active: import.meta.env.VITE_SQUARE_LINK_ACTIVE || "[Square link: active body panel]",
} as const;
