const ingredients = [
  {
    name: "Glucosamine Sulphate",
    amount: "1500mg",
    description: "A naturally occurring compound found in cartilage. Widely studied for its potential role in supporting joint structure and comfort.",
    rationale: "One of the most researched joint support ingredients, glucosamine is a building block of cartilage tissue."
  },
  {
    name: "Chondroitin Sulphate",
    amount: "400mg",
    description: "A major component of cartilage that helps it retain water and maintain elasticity. Often paired with glucosamine in research.",
    rationale: "Works alongside glucosamine to support the structural integrity of joint cartilage."
  },
  {
    name: "Turmeric Extract",
    amount: "200mg",
    description: "Contains curcumin, a compound that has been the subject of extensive research for its antioxidant properties.",
    rationale: "Selected for its well-documented antioxidant activity and traditional use in supporting overall wellness."
  },
  {
    name: "Piperine",
    amount: "10mg",
    description: "A natural extract from black pepper that may enhance the absorption of other nutrients, particularly curcumin.",
    rationale: "Included specifically to support the bioavailability of turmeric's active compounds."
  }
];

const ProductIngredients = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-2">
              Evidence-Informed Selection
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Key Ingredients & Why We Chose Them
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every ingredient is included for a reason. We've selected compounds that have 
              been studied in the context of joint health, at meaningful amounts.
            </p>
          </div>

          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="bg-om-cream/40 rounded-xl p-6 md:p-8 border border-om-sage/10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 shrink-0">
                    <h3 className="font-serif text-xl text-foreground">
                      {ingredient.name}
                    </h3>
                    <p className="text-om-forest font-medium text-lg">
                      {ingredient.amount}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      {ingredient.description}
                    </p>
                    <div className="bg-background/60 rounded-lg px-4 py-3 border-l-2 border-om-sage">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Why we include it: </span>
                        {ingredient.rationale}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Full ingredient list and nutritional information available on product packaging.
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-ingredients
          TYPE: Custom HTML Section (below product form)
          
          This detailed ingredient breakdown should appear as a 
          custom section on the PDP, below benefits.
        */}
      </div>
    </section>
  );
};

export default ProductIngredients;
