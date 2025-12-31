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
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              The Basics
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Understanding Joint Biology
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              The key structures that keep your joints functioning — explained in plain language.
            </p>
          </div>

          <div className="space-y-6">
            {/* Cartilage */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Cartilage: The Joint's Cushion
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed font-sans">
                <p>
                  Cartilage is a firm but flexible connective tissue that covers the ends of 
                  bones where they meet at joints. It acts as a natural shock absorber — 
                  allowing bones to glide over one another with minimal friction while 
                  cushioning the impact of movement.
                </p>
                <p>
                  Unlike many tissues, cartilage has a limited blood supply, which means it 
                  repairs and regenerates slowly. This is one reason why maintaining cartilage 
                  health through appropriate nutrition and movement is considered important.
                </p>
                <div className="bg-secondary/50 rounded-lg p-4 border-l-2 border-primary/30">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Key components:</span> Cartilage 
                    is made primarily of water (65-80%), collagen (providing structure), and 
                    proteoglycans (providing resilience and compression resistance).
                  </p>
                </div>
              </div>
            </div>

            {/* Synovial Fluid */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Synovial Fluid: Natural Lubrication
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed font-sans">
                <p>
                  Joints are surrounded by a capsule containing synovial fluid — a viscous 
                  liquid that lubricates the joint and delivers nutrients to cartilage. This 
                  fluid is what allows joints to move smoothly.
                </p>
                <p>
                  Movement is essential for synovial fluid to circulate properly. Regular, 
                  appropriate movement helps distribute this fluid throughout the joint — 
                  one reason why physical activity matters for joint health.
                </p>
              </div>
            </div>

            {/* Collagen */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Collagen: The Structural Framework
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed font-sans">
                <p>
                  Collagen is the most abundant protein in the body. In joints, it provides 
                  the structural framework that gives cartilage its shape and tensile strength. 
                  Type II collagen is the primary form found in cartilage.
                </p>
                <p>
                  The body naturally produces collagen, though this production tends to 
                  decrease with age. Nutrition, physical activity, and overall health can 
                  influence collagen synthesis.
                </p>
                <div className="bg-secondary/50 rounded-lg p-4 border-l-2 border-primary/30">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Worth knowing:</span> Collagen 
                    in supplements is broken down during digestion. The body then uses these 
                    amino acid building blocks as it sees fit — there's no guarantee they'll 
                    be directed specifically to joint tissue. We include this information 
                    because honesty matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointBiology;
