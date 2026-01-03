/**
 * Education Section - Knee Health Understanding
 * Positions OmKneeHealth as educators, not salespeople
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-secondary">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
              Understanding
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              The Knee Deserves Attention
            </h2>
            
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>
                One of the body's most complex joints — bearing tremendous loads 
                while enabling the movement that defines daily life.
              </p>
              <p>
                Often overlooked until discomfort appears. We believe in 
                understanding first.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="ghost" className="font-sans text-sm px-0 hover:bg-transparent hover:text-foreground" asChild>
                <a href="/science">
                  Explore the Science
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Visual/Stats - simplified */}
          <div className="bg-background rounded-lg p-10 lg:p-14">
            <div className="space-y-10">
              <div>
                <p className="font-serif text-4xl text-foreground mb-2">1 in 4</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Adults over 45 experience joint discomfort
                </p>
              </div>
              
              <div>
                <p className="font-serif text-4xl text-foreground mb-2">8.75m</p>
                <p className="font-sans text-sm text-muted-foreground">
                  UK adults seek help for knee concerns annually
                </p>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="font-sans text-sm text-muted-foreground italic">
                  Many factors. No simple solutions.
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
