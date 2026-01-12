/**
 * Ingredients Gallery - Visual showcase of key natural ingredients
 * Builds trust through transparency and natural ingredient imagery
 */

import turmericImg from "@/assets/ingredient-turmeric.jpg";
import boswelliaImg from "@/assets/ingredient-boswellia.jpg";
import collagenImg from "@/assets/ingredient-collagen.jpg";
import pepperImg from "@/assets/ingredient-pepper.jpg";
import vitaminCImg from "@/assets/ingredient-vitamin-c.jpg";
import gingerImg from "@/assets/ingredient-ginger.jpg";

const ingredients = [
  {
    name: "Curcumin",
    source: "From Turmeric Root",
    description: "Standardised to ≥95% curcuminoids for potent antioxidant activity",
    image: turmericImg,
    amount: "500mg"
  },
  {
    name: "Boswellia Serrata",
    source: "Indian Frankincense",
    description: "Traditional botanical standardised to ≥65% boswellic acids",
    image: boswelliaImg,
    amount: "200mg"
  },
  {
    name: "Hydrolysed Collagen",
    source: "Marine or Bovine Origin",
    description: "Pre-digested peptides for optimal absorption and bioavailability",
    image: collagenImg,
    amount: "10,000mg"
  },
  {
    name: "Black Pepper Extract",
    source: "Piperine",
    description: "Enhances curcumin bioavailability by up to 2000%",
    image: pepperImg,
    amount: "5mg"
  },
  {
    name: "Vitamin C",
    source: "Ascorbic Acid",
    description: "Supports normal collagen formation for cartilage function",
    image: vitaminCImg,
    amount: "100mg"
  },
  {
    name: "Ginger Extract",
    source: "Zingiber Officinale",
    description: "Traditional botanical with natural warming properties",
    image: gingerImg,
    amount: "50mg"
  }
];

const IngredientsGallery = () => {
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
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
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
                  {ingredient.description}
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
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          All ingredients are third-party tested for purity and potency. 
          Full nutritional information available on every container.
        </p>
      </div>
    </section>
  );
};

export default IngredientsGallery;
