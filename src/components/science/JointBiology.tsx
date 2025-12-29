const JointBiology = () => {
  return (
    <section className="py-16 md:py-20 bg-om-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              The Basics of Joint Biology
            </h2>
            <p className="text-muted-foreground">
              Understanding the key structures that keep your joints functioning well.
            </p>
          </div>

          <div className="space-y-8">
            {/* Cartilage */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Cartilage: Your Joint's Cushion
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Cartilage is a firm but flexible connective tissue that covers the ends of 
                  bones where they meet at joints. Think of it as a natural shock absorber — 
                  it allows bones to glide over one another with minimal friction while 
                  cushioning the impact of movement.
                </p>
                <p>
                  Unlike many tissues in your body, cartilage has a limited blood supply, 
                  which means it repairs and regenerates slowly. This is one reason why 
                  maintaining cartilage health through appropriate nutrition and movement 
                  is considered valuable by many researchers.
                </p>
                <div className="bg-om-cream/50 rounded-lg p-4 border-l-2 border-om-sage">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Key components:</span> Cartilage 
                    is made primarily of water (65-80%), collagen (providing structure), and 
                    proteoglycans (providing resilience and the ability to absorb compression).
                  </p>
                </div>
              </div>
            </div>

            {/* Synovial Fluid */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Synovial Fluid: Natural Lubrication
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Your joints are surrounded by a capsule containing synovial fluid — a thick, 
                  viscous liquid that lubricates the joint and delivers nutrients to the 
                  cartilage. This fluid is what allows your joints to move smoothly and 
                  comfortably.
                </p>
                <p>
                  Movement is essential for synovial fluid to circulate properly. Regular, 
                  gentle movement helps distribute this fluid throughout the joint, which 
                  is one reason why appropriate physical activity is considered important 
                  for joint health.
                </p>
              </div>
            </div>

            {/* Collagen */}
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">
                Collagen: The Structural Framework
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Collagen is the most abundant protein in your body. In joints, it provides 
                  the structural framework that gives cartilage its shape and tensile strength. 
                  Type II collagen is the primary form found in cartilage.
                </p>
                <p>
                  Your body naturally produces collagen, though this production tends to 
                  decrease with age. Various factors including nutrition, physical activity, 
                  and overall health can influence your body's collagen synthesis.
                </p>
                <div className="bg-om-cream/50 rounded-lg p-4 border-l-2 border-om-sage">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Worth knowing:</span> Collagen 
                    in supplements is broken down during digestion. The body then uses these 
                    amino acid building blocks as it sees fit — there's no guarantee they'll 
                    be directed specifically to joint tissue.
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
