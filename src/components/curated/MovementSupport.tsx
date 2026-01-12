/**
 * Movement Support - Knee braces and support products
 */

import CuratedCategory from "./CuratedCategory";

const products = [
  {
    name: "Compression Knee Sleeve",
    brand: "Various quality brands",
    description: "A well-fitted compression sleeve provides proprioceptive feedback and mild support during activity. Look for medical-grade compression (15-20 mmHg) with breathable, moisture-wicking materials.",
    clinicalRationale: "Compression sleeves don't prevent injury or cure conditions, but they can improve joint awareness (proprioception) and provide psychological confidence. The gentle pressure may help with mild swelling management after activity. Most beneficial for people returning to exercise after injury or those with early osteoarthritis.",
    priceRange: "£15-40",
    considerations: "Avoid overly tight sleeves that restrict circulation. If you have significant swelling, consult a professional before using compression products."
  },
  {
    name: "Hinged Knee Brace",
    brand: "Rehabilitation grade",
    description: "A structured brace with bilateral hinges provides mechanical stability for ligament injuries or post-surgical recovery. Should be properly fitted, ideally by a healthcare professional.",
    clinicalRationale: "Hinged braces offer genuine mechanical support for unstable knees, particularly following ACL, MCL, or meniscus injuries. They limit harmful ranges of motion while allowing controlled movement. Most valuable during early rehabilitation phases—long-term dependence isn't typically recommended.",
    priceRange: "£40-150",
    considerations: "Professional fitting recommended. These are therapeutic devices, not preventive equipment. Prolonged use can lead to muscle weakness if not combined with rehabilitation exercises."
  },
  {
    name: "Patellar Strap (Knee Band)",
    brand: "Various quality brands",
    description: "A focused strap worn below the kneecap to reduce stress on the patellar tendon. Simple, low-profile design suitable for use during activity.",
    clinicalRationale: "Patellar straps can provide meaningful relief for patellar tendinopathy (jumper's knee) and Osgood-Schlatter disease by redistributing force across the tendon. They work best as part of a comprehensive approach including load management and strengthening exercises.",
    priceRange: "£10-25",
    considerations: "Not a substitute for addressing underlying causes. If symptoms persist beyond a few weeks, professional assessment is advisable."
  }
];

const MovementSupport = () => {
  return (
    <CuratedCategory
      title="Movement Support"
      subtitle="Braces & Sleeves"
      introduction="Supportive devices have a place in knee care, but context matters. We recommend products that serve genuine therapeutic purposes rather than creating unnecessary dependency."
      products={products}
      disclaimer="Selection should be based on your specific condition. When in doubt, consult a physiotherapist or orthopaedic specialist."
    />
  );
};

export default MovementSupport;
