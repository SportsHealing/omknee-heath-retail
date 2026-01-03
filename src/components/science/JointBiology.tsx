/**
 * Joint Biology - Educational content about joint structures
 * Clear, clinical explanations without oversimplification
 */

const JointBiology = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Joint Biology
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto" />
          </div>

          <div className="space-y-6">
            {/* Cartilage */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Cartilage
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans mb-4">
                A firm, flexible tissue covering bone ends at joints. Acts as a shock absorber, 
                allowing bones to glide with minimal friction.
              </p>
              <p className="text-sm text-muted-foreground/80 font-sans">
                Composed of water (65-80%), collagen, and proteoglycans. Limited blood supply 
                means slow regeneration.
              </p>
            </div>

            {/* Synovial Fluid */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Synovial Fluid
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans mb-4">
                A viscous liquid within the joint capsule that lubricates and delivers 
                nutrients to cartilage.
              </p>
              <p className="text-sm text-muted-foreground/80 font-sans">
                Movement circulates this fluid. Physical activity matters.
              </p>
            </div>

            {/* Collagen */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Collagen
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans mb-4">
                The body's most abundant protein. In joints, it provides the structural 
                framework giving cartilage shape and tensile strength.
              </p>
              <p className="text-sm text-muted-foreground/80 font-sans">
                Production decreases with age. Supplemental collagen is digested into amino 
                acids—the body directs these as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointBiology;
