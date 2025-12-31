const ScienceHero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-om-cream/50 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Evidence & Understanding
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
            The Science Behind Knee Health
          </h1>
          <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            We believe you deserve clarity — not claims. This hub explains the science 
            of knee and joint health in plain language: what we know, what remains uncertain, 
            and why we've made the choices we have.
          </p>
          <p className="font-sans text-sm text-primary font-medium italic">
            Honest. Restrained. Evidence-informed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceHero;
