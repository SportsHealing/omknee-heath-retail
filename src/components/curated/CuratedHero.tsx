/**
 * Curated Hero - Introduction to curated recommendations
 */

const CuratedHero = () => {
  return (
    <section className="pt-28 pb-24 lg:pt-56 lg:pb-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Curated by Knee Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            Knee Essentials
          </h1>
          <p className="font-serif text-xl text-muted-foreground leading-relaxed mb-8">
            Products and tools we genuinely recommend—each selected for clinical 
            merit, quality, and real-world benefit to knee health.
          </p>
          <div className="border-t border-border pt-8 max-w-xl mx-auto">
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Our recommendations are based on clinical evidence, patient feedback, 
              and professional experience. We have no commercial relationships with 
              any listed products unless explicitly stated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedHero;
