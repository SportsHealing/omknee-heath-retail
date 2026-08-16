/**
 * After Surgery - practical products for the weeks after knee surgery.
 * Practical and consumer-level only; rehabilitation protocols live with SportsHealing.
 */

import CuratedCategory from "@/components/shop/CuratedCategory";

const products = [
  {
    name: "Cold Therapy Wrap",
    brand: "Reusable gel or circulating systems",
    description: "A contoured wrap that holds cold evenly around the joint without needing to be held in place, so you can elevate at the same time.",
    clinicalRationale: "Cooling and elevation are widely used in the early days after knee surgery for comfort and swelling management. A wrap that stays put makes it far more likely you will actually use it as often as advised.",
    priceRange: "£20-120",
    considerations: "Always follow the timings your surgical or physiotherapy team give you, and never apply cold directly to skin.",
  },
  {
    name: "Leg Elevation Wedge",
    brand: "Foam wedge or bolster",
    description: "A firm wedge that supports the whole leg above heart height while you rest, rather than a stack of pillows that slides apart.",
    clinicalRationale: "Consistent elevation supports comfort and swelling management in the early recovery period, and a stable surface protects the knee from being propped into an unhelpful bent position.",
    priceRange: "£25-60",
    considerations: "Ask your team whether the knee should be supported straight — this varies with the procedure.",
  },
  {
    name: "Long-Handled Grabber & Sock Aid",
    brand: "Daily living aids",
    description: "Simple tools that let you dress and pick things up without repeatedly bending the operated knee.",
    clinicalRationale: "Independence in the first weeks reduces frustration and unnecessary strain. These are practical, low-cost items that make the day easier rather than any form of treatment.",
    priceRange: "£10-30",
  },
  {
    name: "Shower Stool & Non-Slip Mat",
    brand: "Bathroom safety",
    description: "A stable seat and grippy surface for washing while standing balance is still returning.",
    clinicalRationale: "Falls are the main avoidable setback after knee surgery. Making the bathroom safe is the single most useful home preparation most people can do.",
    priceRange: "£20-70",
  },
];

const AfterSurgery = () => (
  <CuratedCategory
    id="after-surgery"
    title="After Surgery"
    subtitle="Practical Recovery"
    introduction="Practical items that make the first weeks after knee surgery easier and safer. Your surgical and physiotherapy team own your rehabilitation plan — this is simply the kit that helps you follow it comfortably at home."
    products={products}
    disclaimer="Always follow the specific guidance given by your surgeon and physiotherapist. Nothing here replaces your post-operative plan."
  />
);

export default AfterSurgery;
