/**
 * Strength Equipment - Home exercise tools for knee rehabilitation
 */

import CuratedCategory from "./CuratedCategory";

const products = [
  {
    name: "Resistance Band Set",
    brand: "Fabric or latex loop bands",
    description: "A set of loop resistance bands in varying strengths for lower limb strengthening exercises. Fabric bands offer better durability and less rolling; latex provides more resistance options.",
    clinicalRationale: "Resistance bands enable progressive strengthening of the muscles supporting the knee—particularly the gluteal muscles, quadriceps, and hip stabilisers. Essential for addressing the muscle weakness that underlies many knee conditions. Banded exercises like clamshells, monster walks, and squats are evidence-based rehabilitation staples.",
    priceRange: "£15-35",
    considerations: "Start with lighter resistance than you think you need. Form is more important than resistance level. Replace bands showing signs of wear to prevent snapping."
  },
  {
    name: "Adjustable Ankle Weights",
    brand: "0.5-2kg adjustable",
    description: "Weighted cuffs worn around the ankles for targeted quadriceps strengthening. Adjustable weight allows progressive loading as strength improves.",
    clinicalRationale: "Ankle weights enable isolated quadriceps strengthening through exercises like straight leg raises and terminal knee extensions. Particularly valuable for post-surgical rehabilitation and conditions where quadriceps weakness is a primary concern. The ability to progress weight incrementally supports the overload principle essential for strength gains.",
    priceRange: "£15-40",
    considerations: "Not recommended for walking or running exercises—use only for targeted strengthening in controlled positions. Progress weight gradually to avoid overloading healing structures."
  },
  {
    name: "Balance Board or Cushion",
    brand: "Wobble board or balance pad",
    description: "An unstable surface for balance and proprioceptive training. Wobble boards offer more challenge; cushioned pads provide a gentler introduction to balance work.",
    clinicalRationale: "Balance training improves proprioception—the joint's sense of position and movement. This is often impaired after knee injuries and contributes to re-injury risk. Regular balance work can reduce injury recurrence and improve functional confidence. Particularly important following ligament injuries.",
    priceRange: "£15-45",
    considerations: "Use near a stable surface for safety when beginning. Progress from double-leg to single-leg standing as ability improves. Stop if pain occurs."
  },
  {
    name: "Sliding Discs",
    brand: "Dual-surface gliders",
    description: "Low-friction discs for sliding exercises on carpet or hard floors. Enable controlled eccentric exercises and lateral movement patterns difficult to achieve otherwise.",
    clinicalRationale: "Sliding exercises provide excellent eccentric loading for the muscles around the knee, which is particularly relevant for tendon rehabilitation. Hamstring slides, lateral lunges, and curtsy movements address strength deficits in patterns often neglected by traditional exercises.",
    priceRange: "£8-20",
    considerations: "Ensure a clear, flat surface for safe use. These exercises are surprisingly challenging—start with limited range of motion."
  }
];

const StrengthEquipment = () => {
  return (
    <CuratedCategory
      id="strength-equipment"
      title="Home Strengthening Equipment"
      subtitle="Rehabilitation Essentials"
      introduction="Strength is the single most modifiable factor in knee health. These tools enable effective home-based strengthening that complements professional rehabilitation or serves as ongoing maintenance."
      products={products}
      disclaimer="Specific exercises should be tailored to your condition. Consider a physiotherapy assessment to design an appropriate programme."
    />
  );
};

export default StrengthEquipment;
