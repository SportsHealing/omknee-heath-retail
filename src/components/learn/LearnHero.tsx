const LearnHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Learn About Your Knee
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Understanding how your knee works is the first step toward informed decisions 
            about your joint health. This educational resource provides foundational knowledge 
            to help you navigate your knee health journey.
          </p>
          <p className="text-sm text-muted-foreground">
            This information is for educational purposes only and does not constitute medical advice. 
            Always consult qualified healthcare professionals for diagnosis and treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnHero;
