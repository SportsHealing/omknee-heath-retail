import { Heart } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="pt-48 pb-20 md:pt-56 md:pb-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
          <Heart className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          About OmKneeHealth
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We're clinicians who specialise in knee health—and we built this resource 
          because we believe you deserve honest, evidence-based guidance without 
          the pressure to buy anything.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
