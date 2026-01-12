/**
 * Recovery Tools - Foam rollers, massage tools, etc.
 */

import CuratedCategory from "./CuratedCategory";

const products = [
  {
    name: "High-Density Foam Roller",
    brand: "EPE or EVA foam, 15cm diameter",
    description: "A firm foam roller for self-myofascial release of the quadriceps, IT band, hamstrings, and calves. High-density foam maintains its shape over time and provides consistent pressure.",
    clinicalRationale: "Foam rolling can temporarily increase tissue flexibility and reduce perceived muscle tightness. For knee health, rolling the surrounding muscles—particularly the quadriceps and IT band—may help manage conditions like patellofemoral pain and IT band syndrome. Benefits are primarily short-term; most valuable when used as preparation for exercise or stretching.",
    priceRange: "£15-35",
    considerations: "Avoid rolling directly over the knee joint or bony prominences. Start with moderate pressure and increase gradually. Not suitable during acute inflammation or over areas of recent injury."
  },
  {
    name: "Percussion Massage Device",
    brand: "Quality therapy-grade models",
    description: "A handheld device delivering rapid percussive therapy to muscles. Look for adjustable speed settings and ergonomic design for self-application to leg muscles.",
    clinicalRationale: "Percussion therapy can help reduce muscle soreness and improve blood flow to treated areas. Useful for addressing tension in the quadriceps, hamstrings, and calves that may contribute to knee stress. The depth of effect is debated, but many patients report subjective improvements in comfort and readiness for activity.",
    priceRange: "£80-200",
    considerations: "Avoid use directly on joints, bones, or areas of acute injury. Lower-intensity settings are often sufficient; more pressure isn't necessarily better."
  },
  {
    name: "Massage Ball Set",
    brand: "Varying densities",
    description: "A set of massage balls in different sizes and densities for targeted pressure on specific muscle trigger points. Particularly useful for calf muscles and the muscles around the hip.",
    clinicalRationale: "Small massage balls allow more precise targeting of trigger points than foam rollers. For knee health, releasing tension in the calf muscles, hip flexors, and glutes can help restore balanced movement patterns. Especially valuable for addressing referred tension that may contribute to knee discomfort.",
    priceRange: "£10-30",
    considerations: "Sustained pressure on one point should be limited to 1-2 minutes. Pain should be 'productive'—uncomfortable but not sharp or alarming."
  }
];

const RecoveryTools = () => {
  return (
    <CuratedCategory
      title="Recovery & Mobility Tools"
      subtitle="Self-Care Equipment"
      introduction="Self-myofascial release tools can be valuable additions to your knee care routine when used appropriately. They address the muscular environment around the knee, not the joint itself."
      products={products}
      disclaimer="These tools complement rather than replace professional treatment. They're most effective when integrated into a structured programme."
    />
  );
};

export default RecoveryTools;
