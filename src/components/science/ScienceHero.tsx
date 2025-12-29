const ScienceHero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-om-cream/50 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-4">
            Evidence & Science
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
            Understanding Joint Health: <br className="hidden md:block" />
            The Science Behind Our Approach
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We believe in transparency and education. This hub explains the science 
            of knee and joint health in plain English — what we know, what we don't, 
            and why we've made the choices we have.
          </p>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: science-hero
          TYPE: Shopify Page content (top of page)
          
          This introductory section sets the educational, 
          non-promotional tone for the entire page.
        */}
      </div>
    </section>
  );
};

export default ScienceHero;
