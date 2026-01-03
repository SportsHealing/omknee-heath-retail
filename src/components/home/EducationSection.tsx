/**
 * Education Section - Knee Health Understanding
 * Positions OmKneeHealth as educators, not salespeople
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-40 lg:py-48 bg-secondary">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center max-w-5xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 leading-tight">
              The knee reflects how we move through life
            </h2>
            
            <div className="font-sans text-muted-foreground leading-relaxed mb-12 space-y-4">
              <p>The knee is central to everyday movement — walking, climbing, training, and balance.</p>
              <p>Over time, changes in load, activity, and recovery can influence how knees feel and function.</p>
              <p>Looking after knee health early, and consistently, can support confidence in movement across decades.</p>
            </div>

            <Button variant="ghost" className="font-sans text-sm px-0 hover:bg-transparent hover:text-foreground" asChild>
              <a href="/science">
                Explore the Science
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="bg-background rounded-lg p-12 lg:p-16">
            <div className="space-y-12">
              <div>
                <p className="font-serif text-5xl text-foreground mb-3">1 in 4</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Adults over 45 experience discomfort
                </p>
              </div>
              
              <div>
                <p className="font-serif text-5xl text-foreground mb-3">8.75m</p>
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
