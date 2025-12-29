/**
 * Education Section - Knee Health Understanding
 * Positions OmKneeHealth as educators, not salespeople
 */

const EducationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Understanding Your Knees
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Why Knee Health Deserves Your Attention
            </h2>
            <div className="w-12 h-px bg-primary/30 mb-6" />
            
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>
                Your knees are remarkable structures—complex joints that bear 
                tremendous loads while enabling the movement that defines daily life. 
                From walking to climbing stairs, they work tirelessly.
              </p>
              <p>
                Yet they're often overlooked until discomfort appears. By then, 
                years of gradual change may have occurred. We believe in proactive 
                care: understanding your joints before problems arise, and supporting 
                them throughout life's journey.
              </p>
              <p>
                This isn't about fear. It's about awareness. About giving your 
                knees the same consideration you give your heart, your mind, 
                your overall wellbeing.
              </p>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="bg-background rounded-lg p-8 lg:p-12 shadow-soft">
            <h3 className="font-serif text-2xl text-foreground mb-8">
              The Reality of Joint Health
            </h3>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="font-serif text-3xl text-primary mb-2">1 in 4</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Adults will experience significant knee discomfort by age 50
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="font-serif text-3xl text-primary mb-2">20+ Years</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Joint changes can begin decades before symptoms appear
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="font-serif text-3xl text-primary mb-2">Preventable</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Many factors affecting joint health are within your control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
