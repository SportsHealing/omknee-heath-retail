/**
 * Shop categories (handover A10), in the required order. Intro, subtitle and
 * disclaimer copy is the existing approved category copy. Products load from
 * Shopify in Phase 5; until then each grid shows placeholder cards.
 */
import type { ContentLink } from "./contentBlocks";
import { SUPPLEMENT, SUPPLEMENT_SUMMARY } from "./supplement";

export type ShopCategoryId =
  | "omkneehealth-supplement"
  | "braces-supports"
  | "after-surgery"
  | "cooling-recovery"
  | "movement-rehabilitation"
  | "foot-lower-limb";

export interface ShopCategory {
  id: ShopCategoryId;
  title: string;
  /** Short line for the category tile. */
  tileCopy: string;
  tileCta: string;
  subtitle: string;
  intro: string[];
  /** Education link shown before the product grid (A10). */
  education: ContentLink;
  disclaimer?: string;
  /** Line shown on every product card in this category. */
  productNote?: string;
  /** Number of placeholder product cards until Shopify products are listed. */
  placeholderCount: number;
}

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    id: "omkneehealth-supplement",
    title: SUPPLEMENT.name,
    tileCopy: SUPPLEMENT_SUMMARY,
    tileCta: "View the supplement",
    subtitle: "Knee Nutrition",
    intro: [
      "Nutrition forms part of overall health and movement.",
      "Our Knee Nutrition collection brings together selected products with clear ingredient information, practical guidance and a considered approach to formulation.",
      "Supplements are intended to supplement the normal diet. They should not replace a varied diet, appropriate exercise or healthcare when it is needed.",
    ],
    education: { label: "Understand Nutrition First", to: "/nourish" },
    placeholderCount: 0,
  },
  {
    id: "braces-supports",
    title: "Braces & Supports",
    tileCopy: "Practical support for different needs and activities.",
    tileCta: "Shop Supports",
    subtitle: "Braces & Sleeves",
    intro: [
      "Supportive devices have a place in knee care, but context matters. We recommend products that serve genuine therapeutic purposes rather than creating unnecessary dependency.",
    ],
    education: { label: "Learn first: support as part of a wider plan", to: "/treat#support" },
    disclaimer:
      "Selection should be based on your specific condition. When in doubt, consult a physiotherapist or orthopaedic specialist.",
    placeholderCount: 3,
  },
  {
    id: "after-surgery",
    title: "After Surgery",
    tileCopy: "Practical products for everyday recovery following knee surgery.",
    tileCta: "Shop After Surgery",
    subtitle: "Practical Recovery",
    intro: [
      "Practical items that make the first weeks after knee surgery easier and safer. Your surgical and physiotherapy team own your rehabilitation plan. This is simply the kit that helps you follow it comfortably at home.",
    ],
    education: { label: "Learn first: care after surgery", to: "/treat#support" },
    disclaimer:
      "Always follow the specific guidance given by your surgeon and physiotherapist. Nothing here replaces your post-operative plan.",
    productNote: "Follow the advice of your surgical team.",
    placeholderCount: 3,
  },
  {
    id: "cooling-recovery",
    title: "Cooling & Recovery",
    tileCopy: "Selected products for recovery and comfort.",
    tileCta: "Shop Recovery",
    subtitle: "Self-Care Equipment",
    intro: [
      "Self-myofascial release tools can be valuable additions to your knee care routine when used appropriately. They address the muscular environment around the knee, not the joint itself.",
    ],
    education: { label: "Learn first: stress and recovery", to: "/wellness#recovery" },
    disclaimer:
      "These tools complement rather than replace professional treatment. They're most effective when integrated into a structured programme.",
    placeholderCount: 3,
  },
  {
    id: "movement-rehabilitation",
    title: "Movement & Rehabilitation",
    tileCopy: "Equipment for strength, mobility and rehabilitation.",
    tileCta: "Shop Movement",
    subtitle: "Rehabilitation Essentials",
    intro: [
      "Strength is the single most modifiable factor in knee health. These tools enable effective home-based strengthening that complements professional rehabilitation or serves as ongoing maintenance.",
    ],
    education: { label: "Learn first: load and capacity", to: "/load" },
    disclaimer:
      "Specific exercises should be tailored to your condition. Consider a physiotherapy assessment to design an appropriate programme.",
    placeholderCount: 3,
  },
  {
    id: "foot-lower-limb",
    title: "Foot & Lower Limb",
    tileCopy: "Selected products for the wider lower limb.",
    tileCta: "Shop Foot & Lower Limb",
    subtitle: "Foundation Matters",
    intro: [
      "What you wear on your feet influences how forces travel through your knees. Appropriate footwear is a simple intervention that can meaningfully affect knee comfort.",
    ],
    education: { label: "Learn first: how the knee moves", to: "/understand" },
    disclaimer: "Significant foot or gait abnormalities may benefit from professional podiatric assessment.",
    placeholderCount: 2,
  },
];
