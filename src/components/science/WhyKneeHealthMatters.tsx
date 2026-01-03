/**
 * Why Knee Health Matters - Educational foundation
 * Sets clinical, evidence-informed tone
 */

const WhyKneeHealthMatters = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
              Understanding
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Why Knee Health Matters
            </h2>
          </div>
          
          <div className="space-y-6 font-sans text-muted-foreground mb-16">
            <p className="leading-relaxed">
              The knee bears your weight, absorbs impact, and enables movement.
            </p>
            <p className="leading-relaxed">
              As we age, cartilage thins. Synovial fluid decreases. Tissues become less resilient. 
              The rate varies between individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <p className="text-3xl font-serif text-foreground mb-2">8.75m</p>
              <p className="text-sm text-muted-foreground font-sans">
                UK adults seek knee help annually
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-serif text-foreground mb-2">1 in 4</p>
              <p className="text-sm text-muted-foreground font-sans">
                Over-45s experience joint discomfort
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-serif text-foreground mb-2">Complex</p>
              <p className="text-sm text-muted-foreground font-sans">
                Many factors. No simple solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKneeHealthMatters;
