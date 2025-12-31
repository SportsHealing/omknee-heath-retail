/**
 * Education Section - Knee Health Understanding
 * Positions OmKneeHealth as educators, not salespeople
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Understanding the Knee
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Why Knee Health Deserves Proper Attention
            </h2>
            <div className="w-12 h-px bg-primary/30 mb-6" />
            
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>
                The knee is one of the most complex joints in the body — bearing 
                tremendous loads while enabling the movement that defines daily life. 
                From walking to climbing stairs, it works continuously.
              </p>
              <p>
                Yet knees are often overlooked until discomfort appears. By then, 
                years of gradual change may have occurred. We believe in understanding 
                first: learning how your joints work, what affects them, and how to 
                support them appropriately.
              </p>
              <p>
                This isn't about fear or selling. It's about clarity. About giving 
                your knees the same considered attention you give your heart, your 
                mind, your overall wellbeing.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="outline" className="font-sans text-sm" asChild>
                <a href="/science">
                  Explore the Science
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="bg-background rounded-lg p-8 lg:p-12 border border-border">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              The Reality of Joint Health
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-8">
              What the research tells us — honestly presented.
            </p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="font-serif text-3xl text-primary mb-2">1 in 4</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Adults over 45 experience some form of joint discomfort
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="font-serif text-3xl text-primary mb-2">8.75m</p>
                <p className="font-sans text-sm text-muted-foreground">
                  People in the UK seek help for knee concerns annually
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="font-serif text-3xl text-primary mb-2">Complex</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Many factors influence knee health — there are no simple solutions
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-muted-foreground mt-8 italic">
              We share what the evidence shows, not what sells.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
