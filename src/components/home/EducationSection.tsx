/**
 * Education Section - Knee Health Understanding
 * Positions OmKneeHealth as educators, not salespeople
 * Merged content for comprehensive messaging
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lifestyleImage from "@/assets/education-lifestyle.jpg";

const EducationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Lifestyle Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={lifestyleImage} 
                alt="Active adult walking confidently on a nature trail in morning light" 
                width={600}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-sm tracking-[0.15em] uppercase text-accent mb-4">
              Why knee health matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Looking after your knees starts before something goes wrong.
            </h2>

            <div className="font-sans text-muted-foreground leading-relaxed mb-10 space-y-5">
              <p>Knee health is not about one product, one exercise or one treatment.</p>
              <p>
                It is influenced by your general health, nutrition, strength, movement, activity,
                the demands you place on your knees and how you prepare for them.
              </p>
              <p>
                And when something changes, knowing when to seek further assessment matters too.
              </p>
              <p className="text-foreground font-medium">
                We bring these ideas together in one simple framework.
              </p>
            </div>

            <Button variant="ghost" className="font-sans text-sm px-0 hover:bg-transparent hover:text-foreground group" asChild>
              <a href="/knee-health">
                Look After Your Knees
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
