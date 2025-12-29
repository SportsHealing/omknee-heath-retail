import { Sparkles, Activity, Clock, Heart } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Support Joint Comfort",
    description: "Our blend includes ingredients traditionally used to help maintain comfortable joint function in everyday life."
  },
  {
    icon: Activity,
    title: "Maintain Mobility",
    description: "Designed to complement an active lifestyle by supporting the natural structures that keep you moving."
  },
  {
    icon: Clock,
    title: "Long-Term Approach",
    description: "Joint health is a journey. Our formula is designed for consistent, ongoing use as part of your daily wellness routine."
  },
  {
    icon: Heart,
    title: "Quality You Can Trust",
    description: "Every ingredient is selected based on quality standards, with transparent sourcing and rigorous testing."
  }
];

const ProductBenefits = () => {
  return (
    <section className="py-16 md:py-20 bg-om-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            How This Formula May Support You
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe in transparency. Here's what our carefully selected ingredients 
            are designed to do — no exaggerated promises, just honest support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-elegant transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-om-sage/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-om-forest" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-benefits
          TYPE: Custom HTML Section (below product form)
          
          Add as a custom Liquid section that appears below the main 
          product information on the PDP template.
        */}
      </div>
    </section>
  );
};

export default ProductBenefits;
