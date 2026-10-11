/**
 * The OmKneeHealth Supplement: one product, marine formula.
 *
 * FORMULA holds the full ingredient amounts. By UK food law these must be
 * available before purchase, but they appear in one place only: the collapsed
 * "Full ingredients and nutrition information" panel on the product page.
 * Do not render amounts anywhere else on the site.
 *
 * Text in [SQUARE BRACKETS] is a placeholder awaiting confirmation.
 */

/** Product page route. The old /product URL redirects here. */
export const SUPPLEMENT_PATH = "/shop/omkneehealth-supplement";

export const SUPPLEMENT = {
  name: "OmKneeHealth Supplement",
  price: "62.50",
  memberPrice: "53.13",
  pack: "300 g pack",
  flavour: "Vanilla cherry",
} as const;

export interface FormulaRow {
  name: string;
  amount: string;
  nrv?: string;
}

/** Per daily serving (13.8 g). Source: manufacturer specification. */
export const FORMULA: FormulaRow[] = [
  { name: "Marine collagen peptides (types I and III)", amount: "7,900 mg" },
  { name: "Glucosamine sulphate", amount: "1,400 mg" },
  { name: "Turmeric root extract 4:1", amount: "1,000 mg" },
  { name: "MSM (methylsulfonylmethane)", amount: "900 mg" },
  { name: "Chondroitin sulphate", amount: "800 mg" },
  { name: "Boswellia serrata extract (30% AKBA)", amount: "400 mg" },
  { name: "Bamboo extract (of which silica 200 mg)", amount: "286 mg" },
  { name: "Hydrolysed marine collagen peptides type II", amount: "100 mg" },
  { name: "Hyaluronic acid (as sodium hyaluronate)", amount: "100 mg" },
  { name: "Sea buckthorn extract 10:1", amount: "100 mg" },
  { name: "Black pepper extract (BioPerine)", amount: "10 mg" },
  { name: "Vitamin C (as L-ascorbic acid)", amount: "100 mg", nrv: "125%" },
  { name: "Vitamin E (as DL-alpha tocopheryl acetate)", amount: "50 mg", nrv: "417%" },
  { name: "Vitamin D3 (as cholecalciferol)", amount: "75 µg", nrv: "1,500%" },
  { name: "Vitamin K2 (as menaquinone MK-7)", amount: "35 µg", nrv: "47%" },
  { name: "Magnesium (marine)", amount: "[elemental mg]", nrv: "[%]" },
  { name: "Zinc (as zinc gluconate)", amount: "15 mg", nrv: "150%" },
  { name: "Copper (as copper gluconate)", amount: "2 mg", nrv: "200%" },
];

export const FORMULA_DETAILS = {
  serving: "13.8 g, once a day",
  servingsPerPack: "[servings per pack, to confirm]",
  format: "Powder, vanilla cherry flavour. Natural flavour. Sweetener: steviol glycosides.",
  ingredients: "[Full ingredient list in descending order by weight, from manufacturer label]",
  allergens: "Contains fish. [Crustaceans: confirm glucosamine source]",
  warnings:
    "Food supplements should not replace a varied diet and healthy lifestyle. Do not exceed the recommended daily dose. Not suitable for children, or for pregnant or breastfeeding women. If you take anticoagulants such as warfarin, or any medication, or have a medical condition, speak to your doctor before use. Keep out of reach of children.",
  storage:
    "Shelf life 12 months. Store in a dry place below 25°C, in the original packaging, out of reach of children.",
  business: "[Business name and UK address]",
} as const;
