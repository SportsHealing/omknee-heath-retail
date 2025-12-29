import { BookOpen, FlaskConical, CheckCircle2 } from "lucide-react";

const ingredients = [
  {
    name: "Glucosamine",
    summary: "A naturally occurring compound that is a building block of cartilage.",
    evidence: "Glucosamine has been extensively studied, with research spanning several decades. Some studies suggest it may help support joint comfort when used consistently over time, while others show more modest effects. The glucosamine sulphate form, used in our formula, is the most commonly studied.",
    ourChoice: "We use glucosamine sulphate at 1500mg daily — the dosage most frequently used in clinical research."
  },
  {
    name: "Chondroitin",
    summary: "A major component of cartilage that helps it retain water and elasticity.",
    evidence: "Chondroitin is often studied alongside glucosamine. Research suggests these two compounds may work together to support cartilage structure. Studies on chondroitin alone have shown mixed but generally positive trends for joint comfort.",
    ourChoice: "We include 400mg of chondroitin sulphate, commonly combined with glucosamine in research protocols."
  },
  {
    name: "Turmeric (Curcumin)",
    summary: "A spice containing curcumin, which has documented antioxidant properties.",
    evidence: "Curcumin has been the subject of considerable research interest for its antioxidant activity. However, curcumin has poor bioavailability on its own — meaning the body struggles to absorb and use it effectively without enhancement.",
    ourChoice: "We pair turmeric extract with piperine specifically to address the bioavailability challenge."
  },
  {
    name: "Piperine",
    summary: "A compound from black pepper that may enhance nutrient absorption.",
    evidence: "Research suggests that piperine can significantly increase the absorption of curcumin. Some studies indicate it may improve curcumin bioavailability by up to 2000%. This is why the combination is common in quality formulations.",
    ourChoice: "We include 10mg of piperine to support the absorption of our turmeric extract."
  }
];

const EvidenceIngredients = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-full bg-om-sage/20 flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="w-7 h-7 text-om-forest" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Evidence-Informed Ingredients
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We've chosen ingredients that have been studied in the context of joint 
              health. Here's an honest look at what the research says — and doesn't say.
            </p>
          </div>

          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="bg-om-cream/40 rounded-xl p-6 md:p-8 border border-om-sage/10"
              >
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-om-forest font-medium text-sm mb-4">
                  {ingredient.summary}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm mb-1">What the research shows</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {ingredient.evidence}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-om-forest shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm mb-1">Why we include it</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {ingredient.ourChoice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-background rounded-xl p-6 border border-border">
            <p className="text-muted-foreground text-center text-sm leading-relaxed">
              <span className="font-medium text-foreground">A note on research:</span> Nutritional 
              research is complex. Studies vary in quality, size, and methodology. We've tried 
              to summarise the overall picture fairly, acknowledging both supportive findings 
              and limitations. We encourage curious readers to explore the research themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceIngredients;
