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
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-sm tracking-[0.15em] uppercase text-accent mb-4">
              Understanding Joint Wellness
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Your Knees Carry You Through Life
            </h2>
            
            <div className="font-sans text-muted-foreground leading-relaxed mb-10 space-y-5">
              <p>
                Our knees are remarkable—engineered to support movement, absorb impact, 
                and adapt to the demands of daily life. Over time, factors like activity level, 
                age, and lifestyle can influence how our joints feel and function.
              </p>
              <p>
                Looking after knee health early, and consistently, can support confidence 
                in movement across decades. Our approach isn't about quick fixes—it's about 
                providing thoughtful, consistent support that respects how joints naturally work.
              </p>
              <p className="text-foreground font-medium">
                Because understanding your knees helps you make informed choices about your wellbeing.
              </p>
            </div>

            <Button variant="ghost" className="font-sans text-sm px-0 hover:bg-transparent hover:text-foreground group" asChild>
              <a href="/science">
                Explore the Science
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            {/* Stats highlight */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground mb-1">1 in 4</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Adults 45+ experience discomfort
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground mb-1">8.75m</p>
                <p className="font-sans text-sm text-muted-foreground">
                  UK adults seek help annually
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
