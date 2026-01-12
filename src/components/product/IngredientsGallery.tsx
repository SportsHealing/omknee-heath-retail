/**
 * Ingredients Gallery - Visual showcase of key natural ingredients
 * Builds trust through transparency and natural ingredient imagery
 * Includes lightbox modal for detailed ingredient view
 */

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import turmericImg from "@/assets/ingredient-turmeric.jpg";
import boswelliaImg from "@/assets/ingredient-boswellia.jpg";
import collagenImg from "@/assets/ingredient-collagen.jpg";
import pepperImg from "@/assets/ingredient-pepper.jpg";
import vitaminCImg from "@/assets/ingredient-vitamin-c.jpg";
import gingerImg from "@/assets/ingredient-ginger.jpg";

interface Ingredient {
  name: string;
  source: string;
  description: string;
  image: string;
  amount: string;
  detailedInfo: string;
  benefits: string[];
  origin: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Curcumin",
    source: "From Turmeric Root",
    description: "Standardised to ≥95% curcuminoids for potent antioxidant activity",
    image: turmericImg,
    amount: "500mg",
    detailedInfo: "Curcumin is the primary active compound found in turmeric (Curcuma longa). We use a standardised extract containing at least 95% curcuminoids to ensure consistent potency. Curcumin has well-documented antioxidant properties, helping to neutralise free radicals in the body.",
    benefits: ["Antioxidant properties", "Supports cellular health", "Traditional use in Ayurveda"],
    origin: "Sourced from premium turmeric farms in India"
  },
  {
    name: "Boswellia Serrata",
    source: "Indian Frankincense",
    description: "Traditional botanical standardised to ≥65% boswellic acids",
    image: boswelliaImg,
    amount: "200mg",
    detailedInfo: "Boswellia serrata, also known as Indian frankincense, is a resin extract with a long history of traditional use. Our extract is standardised to contain at least 65% boswellic acids, including AKBA—the most researched active compound.",
    benefits: ["Traditional Ayurvedic botanical", "Standardised for consistency", "Complements curcumin"],
    origin: "Harvested from Boswellia trees in India"
  },
  {
    name: "Hydrolysed Collagen",
    source: "Marine or Bovine Origin",
    description: "Pre-digested peptides for optimal absorption and bioavailability",
    image: collagenImg,
    amount: "10,000mg",
    detailedInfo: "Hydrolysed collagen peptides are broken down into smaller fragments that can be absorbed more efficiently. Types I and III collagen are the primary forms found in skin, tendons, ligaments, and bone. At 10g daily, this reflects the upper dose range used in published research.",
    benefits: ["Provides amino acids for collagen synthesis", "High bioavailability", "Types I & III collagen"],
    origin: "Marine formula: wild-caught fish | Vegetarian formula: plant-based alternative"
  },
  {
    name: "Black Pepper Extract",
    source: "Piperine",
    description: "Enhances curcumin bioavailability by up to 2000%",
    image: pepperImg,
    amount: "5mg",
    detailedInfo: "Piperine, the active compound in black pepper, is included specifically to enhance curcumin absorption. Research published in Planta Medica demonstrated that piperine increases curcumin bioavailability by approximately 2000%. Without it, most curcumin would pass through unabsorbed.",
    benefits: ["Dramatically enhances curcumin absorption", "Natural bioavailability enhancer", "Evidence-based formulation"],
    origin: "Extracted from premium black peppercorns"
  },
  {
    name: "Vitamin C",
    source: "Ascorbic Acid",
    description: "Supports normal collagen formation for cartilage function",
    image: vitaminCImg,
    amount: "100mg",
    detailedInfo: "Vitamin C is an essential cofactor for the enzymes that stabilise and cross-link collagen molecules. It has EFSA-authorised claims for contributing to normal collagen formation for the normal function of cartilage, bones, and skin.",
    benefits: ["Supports normal collagen formation", "Contributes to cartilage function", "Antioxidant protection"],
    origin: "High-quality ascorbic acid"
  },
  {
    name: "Ginger Extract",
    source: "Zingiber Officinale",
    description: "Traditional botanical with natural warming properties",
    image: gingerImg,
    amount: "50mg",
    detailedInfo: "Ginger (Zingiber officinale) has been used in traditional medicine systems for thousands of years. Our extract provides concentrated gingerols and shogaols, the primary bioactive compounds responsible for ginger's characteristic properties.",
    benefits: ["Traditional botanical ingredient", "Natural warming properties", "Complementary to other botanicals"],
    origin: "Sourced from select ginger farms"
  }
];

const IngredientsGallery = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleIngredientClick = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedIngredient(null), 200);
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-sans text-sm tracking-[0.15em] uppercase text-primary mb-3">
            Nature Meets Science
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            Our Key Ingredients
          </h2>
          <p className="text-muted-foreground">
            Carefully selected botanicals, proteins, and vitamins—each at research-informed doses
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <button 
              key={index}
              onClick={() => handleIngredientClick(ingredient)}
              className="group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={ingredient.image}
                  alt={`${ingredient.name} - ${ingredient.source}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-background font-serif text-lg mb-1">
                  {ingredient.name}
                </p>
                <p className="text-background/80 text-xs mb-2">
                  {ingredient.source}
                </p>
                <p className="text-background/70 text-xs leading-relaxed hidden md:block">
                  Click to learn more
                </p>
              </div>

              {/* Always visible label on mobile */}
              <div className="md:hidden p-3 bg-background">
                <p className="font-serif text-sm text-foreground">{ingredient.name}</p>
                <p className="text-xs text-muted-foreground">{ingredient.source}</p>
              </div>

              {/* Amount badge */}
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-primary">{ingredient.amount}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          All ingredients are third-party tested for purity and potency. 
          Full nutritional information available on every container.
        </p>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border border-border">
          {selectedIngredient && (
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-auto">
                <img 
                  src={selectedIngredient.image}
                  alt={selectedIngredient.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">{selectedIngredient.amount}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col">
                <DialogHeader className="text-left mb-4">
                  <p className="text-xs tracking-[0.1em] uppercase text-primary mb-1">
                    {selectedIngredient.source}
                  </p>
                  <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground">
                    {selectedIngredient.name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Detailed information about {selectedIngredient.name}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex-1 space-y-5">
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedIngredient.detailedInfo}
                  </p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xs tracking-[0.1em] uppercase text-foreground mb-3">
                      Key Points
                    </h4>
                    <ul className="space-y-2">
                      {selectedIngredient.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Origin */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Sourcing: </span>
                      {selectedIngredient.origin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default IngredientsGallery;
