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
          
          <p className="font-sans text-muted-foreground leading-relaxed text-center mb-8 max-w-xl mx-auto">
            The knee is one of the most complex joints in the human body. It bears weight, absorbs impact, 
            and enables the movements we often take for granted — walking, climbing, kneeling, running.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed text-center mb-20 max-w-xl mx-auto">
            As we age, the cartilage that cushions our joints can thin, and the tissues that support them 
            become less resilient. Understanding this complexity is the first step toward caring for your knees.
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
