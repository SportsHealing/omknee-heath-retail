/**
 * Footwear Guidance - Shoes and insoles for knee health
 */

import CuratedCategory from "./CuratedCategory";

const products = [
  {
    name: "Supportive Walking Shoes",
    brand: "Stability or motion control category",
    description: "Well-cushioned walking shoes with adequate arch support and heel stability. Look for firm heel counters and supportive midsoles rather than minimal or flexible designs.",
    clinicalRationale: "Footwear significantly influences knee loading. For many people with knee osteoarthritis or patellofemoral pain, shoes providing cushioning and support can reduce joint stress. The foot-knee connection means that controlling excessive pronation may help align the lower limb more favourably. Professional fitting is valuable.",
    priceRange: "£60-120",
    considerations: "Individual responses vary—some people do better with minimal shoes, others with maximum support. Consider a gait analysis if unsure. Replace walking shoes every 500-800 km as cushioning degrades."
  },
  {
    name: "Cushioned Running Shoes",
    brand: "Neutral cushioned or stability category",
    description: "Running shoes with substantial midsole cushioning to absorb impact forces. If you have knee issues, consider models with guidance systems that limit excessive movement.",
    clinicalRationale: "Running loads the knee with forces 2-3 times body weight. Adequate cushioning attenuates impact peaks that may stress articular cartilage. For runners with knee pain, transitioning to more cushioned shoes often provides meaningful symptom relief. However, this must be balanced with gradual adaptation.",
    priceRange: "£100-180",
    considerations: "New shoe adaptation should be gradual—don't immediately run long distances in new footwear. Shoe selection is highly individual; what works for others may not suit you."
  },
  {
    name: "Orthotic Insoles",
    brand: "Over-the-counter supportive insoles",
    description: "Prefabricated insoles providing arch support and cushioning. Quality over-the-counter options can be effective for many people without requiring custom orthotics.",
    clinicalRationale: "Insoles can modify foot mechanics and thereby influence knee alignment and loading. They may be particularly helpful for medial knee osteoarthritis (lateral wedge insoles) or conditions related to overpronation. While custom orthotics have their place, quality prefabricated options are often sufficient and more cost-effective.",
    priceRange: "£20-50",
    considerations: "Allow 2-3 weeks to adapt to new insoles. Start with shorter wear periods. If symptoms worsen, discontinue use and consider professional assessment."
  }
];

const FootwearGuidance = () => {
  return (
    <CuratedCategory
      id="footwear-guidance"
      title="Footwear & Orthotic Support"
      subtitle="Foundation Matters"
      introduction="What you wear on your feet influences how forces travel through your knees. Appropriate footwear is a simple intervention that can meaningfully affect knee comfort."
      products={products}
      disclaimer="Significant foot or gait abnormalities may benefit from professional podiatric assessment."
    />
  );
};

export default FootwearGuidance;
