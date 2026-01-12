/**
 * Education Section - Knee Health Understanding
 * Positions OmKneeHealth as educators, not salespeople
 * Merged content for comprehensive messaging
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
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
                Because when your knees feel supported, life feels more possible.
              </p>
            </div>

            <Button variant="ghost" className="font-sans text-sm px-0 hover:bg-transparent hover:text-foreground group" asChild>
              <a href="/science">
                Explore the Science
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Stats Card */}
          <div className="bg-background rounded-xl p-10 lg:p-14 shadow-sm border border-border">
            <p className="font-sans text-sm tracking-[0.1em] uppercase text-muted-foreground mb-10">
              The Reality of Knee Health
            </p>
            <div className="space-y-10">
              <div>
                <p className="font-serif text-5xl lg:text-6xl text-foreground mb-2">1 in 4</p>
                <p className="font-sans text-muted-foreground">
                  Adults over 45 experience knee discomfort
                </p>
              </div>
              
              <div className="border-t border-border pt-10">
                <p className="font-serif text-5xl lg:text-6xl text-foreground mb-2">8.75m</p>
                <p className="font-sans text-muted-foreground">
                  UK adults seek help for joint issues annually
                </p>
              </div>
              
              <div className="border-t border-border pt-10">
                <p className="font-serif text-2xl text-primary mb-1">
                  Movement Matters
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Supporting healthy, active lifestyles at every stage
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
