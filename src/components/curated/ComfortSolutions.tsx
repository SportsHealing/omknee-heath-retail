/**
 * Comfort Solutions - Pain relief and comfort products
 */

import CuratedCategory from "./CuratedCategory";

const products = [
  {
    name: "Gel Ice Pack (Knee-Shaped)",
    brand: "Reusable medical-grade gel",
    description: "A contoured gel pack designed to wrap around the knee, providing consistent cooling with comfortable contact. Should stay flexible when frozen for better conformity.",
    clinicalRationale: "Cold therapy remains a cornerstone of acute pain and swelling management. It reduces metabolic rate of tissues, decreases nerve conduction velocity (reducing pain signals), and causes vasoconstriction that limits swelling. Most effective in the first 48-72 hours after acute injury or flare-ups of inflammatory conditions.",
    priceRange: "£12-30",
    considerations: "Limit applications to 15-20 minutes with at least 1 hour between sessions. Always use a barrier (cloth) between ice and skin. Not suitable for those with poor circulation or cold sensitivity."
  },
  {
    name: "Topical Anti-Inflammatory Gel",
    brand: "NSAID-based (e.g., diclofenac, ibuprofen)",
    description: "Pharmacy-available topical gels containing non-steroidal anti-inflammatory drugs for local application to the knee. Provides anti-inflammatory effects with lower systemic absorption than oral medications.",
    clinicalRationale: "Topical NSAIDs are recommended by NICE guidelines for knee osteoarthritis as a first-line treatment option. They provide meaningful pain relief with significantly lower risk of gastrointestinal and cardiovascular side effects compared to oral NSAIDs. Evidence supports their use for osteoarthritis and soft tissue injuries.",
    priceRange: "£5-15",
    considerations: "Follow package directions carefully. Not suitable for those with NSAID allergies or sensitivity. Avoid use on broken skin. Wash hands after application."
  },
  {
    name: "Heated Knee Wrap",
    brand: "Electric or microwaveable",
    description: "A wrap providing consistent, controlled heat to the knee. Electric versions offer adjustable temperature; microwaveable options are more portable.",
    clinicalRationale: "Heat therapy increases blood flow, relaxes muscles, and can reduce stiffness—particularly valuable for chronic conditions and morning stiffness in osteoarthritis. Heat is generally preferred for chronic conditions, while cold is better for acute inflammation. The improved blood flow may support tissue healing and reduce muscle tension around the joint.",
    priceRange: "£20-50",
    considerations: "Avoid use during acute inflammation or within 48 hours of injury. Check temperature carefully to prevent burns. Not suitable during sleep or for those with reduced sensation."
  }
];

const ComfortSolutions = () => {
  return (
    <CuratedCategory
      title="Comfort & Pain Management"
      subtitle="Symptomatic Relief"
      introduction="Managing discomfort is part of living well with knee conditions. These products offer evidence-based approaches to symptom relief while you address underlying causes."
      products={products}
      disclaimer="Persistent or worsening pain should be evaluated by a healthcare professional. These products manage symptoms but don't treat underlying conditions."
    />
  );
};

export default ComfortSolutions;
