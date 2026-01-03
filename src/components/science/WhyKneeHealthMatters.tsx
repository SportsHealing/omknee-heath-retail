/**
 * Why Knee Health Matters - Educational foundation
 * Sets clinical, evidence-informed tone
 */

const WhyKneeHealthMatters = () => {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Why It Matters
            </h2>
          </div>
          
          <p className="font-sans text-muted-foreground leading-relaxed text-center mb-20 max-w-xl mx-auto">
            The knee bears weight, absorbs impact, enables movement. 
            As we age, cartilage thins and tissues become less resilient.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <p className="text-3xl font-serif text-foreground mb-2">8.75m</p>
              <p className="text-sm text-muted-foreground font-sans">
                UK adults seek help annually
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-serif text-foreground mb-2">1 in 4</p>
              <p className="text-sm text-muted-foreground font-sans">
                Over-45s experience discomfort
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-serif text-foreground mb-2">Complex</p>
              <p className="text-sm text-muted-foreground font-sans">
                Many factors, no simple fixes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKneeHealthMatters;
