/**
 * Books & Resources - Recommended reading on knee health
 */

import CuratedCategory from "./CuratedCategory";

const products = [
  {
    name: "Treat Your Own Knee",
    brand: "Robin McKenzie & Robert Lindsay",
    description: "A self-help guide from the creators of the McKenzie Method, focusing on simple exercises and postures to address common knee problems. Written for the general public with clear illustrations and progressive programmes.",
    clinicalRationale: "The McKenzie Method is an evidence-based approach widely used by physiotherapists. This book empowers patients to take an active role in their recovery through specific exercises matched to their presentation. Particularly valuable for patellofemoral pain and early-stage osteoarthritis.",
    priceRange: "£12-18",
    considerations: "Best suited for mechanical knee pain. If symptoms don't respond to the prescribed exercises within 2-3 weeks, professional assessment is advisable."
  },
  {
    name: "The Knee Crisis Handbook",
    brand: "Brian Halpern, MD",
    description: "Comprehensive guide covering knee anatomy, common injuries, treatment options, and rehabilitation strategies. Written by an orthopaedic sports medicine specialist with accessible explanations of complex topics.",
    clinicalRationale: "Provides excellent context for understanding knee problems and navigating treatment decisions. Helps patients become informed participants in their care, which research shows improves outcomes. Covers both conservative and surgical approaches objectively.",
    priceRange: "£15-25",
    considerations: "Some surgical information may be outdated as techniques evolve. Always discuss specific treatment decisions with your healthcare provider."
  },
  {
    name: "Framework for the Knee",
    brand: "Nicholas DiNubile, MD",
    description: "A step-by-step programme for preventing and treating knee problems through targeted exercises. Emphasises building a strong foundation of strength and flexibility around the joint.",
    clinicalRationale: "Exercise is the single most effective intervention for most knee conditions. This book provides structured, progressive programmes that align with rehabilitation principles. The focus on whole-kinetic-chain strengthening reflects current understanding of knee biomechanics.",
    priceRange: "£12-20",
    considerations: "Exercise programmes should be modified based on individual limitations. Starting with professional guidance helps ensure appropriate progression."
  },
  {
    name: "Overcoming Tendonitis",
    brand: "Steven Low",
    description: "A detailed guide to understanding and rehabilitating tendon problems, including patellar and quadriceps tendinopathy. Covers the science of tendon healing and progressive loading strategies.",
    clinicalRationale: "Tendon rehabilitation requires specific loading protocols that differ from general strength training. This book explains the rationale behind eccentric and isometric exercises and provides structured programmes. Particularly valuable for persistent tendinopathy that hasn't responded to general exercise.",
    priceRange: "£20-30",
    considerations: "Tendon rehabilitation requires patience—improvements often take 3-6 months. The detailed approach may be more than some readers need."
  },
  {
    name: "Pain Science Education Resources",
    brand: "Explain Pain by Butler & Moseley",
    description: "Groundbreaking book on understanding chronic pain from a neuroscience perspective. Explains how pain works, why it persists, and how understanding can be therapeutic. Essential reading for anyone with persistent knee pain.",
    clinicalRationale: "Pain neuroscience education is now a cornerstone of chronic pain management. Understanding that pain doesn't always equal damage can reduce fear-avoidance behaviours and improve outcomes. Research shows that learning about pain can actually reduce pain. Particularly important for those whose pain has persisted beyond normal healing timeframes.",
    priceRange: "£25-40",
    considerations: "This is not a quick fix—it's about fundamentally changing how you understand and relate to pain. Works best alongside active rehabilitation."
  }
];

const BooksResources = () => {
  return (
    <CuratedCategory
      id="books-resources"
      title="Books & Educational Resources"
      subtitle="Recommended Reading"
      introduction="Knowledge is therapeutic. Understanding your knee, your condition, and the principles of rehabilitation empowers you to take an active role in your recovery and make informed decisions about your care."
      products={products}
      disclaimer="Books provide general information and cannot replace individualised professional assessment and guidance."
    />
  );
};

export default BooksResources;
