/**
 * Why Knee Health Matters - Educational foundation
 * Sets clinical, evidence-informed tone
 */

import { Activity, Users, TrendingUp } from "lucide-react";

const WhyKneeHealthMatters = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Understanding the Knee
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Why Knee Health Matters
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12 space-y-6">
            <p className="font-sans leading-relaxed">
              The knee is one of the most complex joints in the body. It bears your weight, 
              absorbs impact, and enables the movements that make an active life possible — 
              from walking to climbing stairs, from gardening to playing with grandchildren.
            </p>
            <p className="font-sans leading-relaxed">
              As we age, the structures that support our joints naturally change. Cartilage 
              may become thinner, synovial fluid may decrease, and surrounding tissues may 
              become less resilient. These are normal aspects of ageing, though the rate 
              and extent vary considerably between individuals.
            </p>
            <p className="font-sans leading-relaxed">
              Understanding this complexity is why we take a measured, evidence-informed 
              approach — and why we're honest about what supplements can and cannot do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-secondary/50 rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-trust-badge flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-serif text-foreground mb-2">8.75 million</p>
              <p className="text-sm text-muted-foreground font-sans">
                People in the UK seek help for knee-related concerns annually
              </p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-trust-badge flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-serif text-foreground mb-2">1 in 4</p>
              <p className="text-sm text-muted-foreground font-sans">
                Adults over 45 experience some form of joint discomfort
              </p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-trust-badge flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-serif text-foreground mb-2">Growing interest</p>
              <p className="text-sm text-muted-foreground font-sans">
                In proactive approaches to maintaining joint health
              </p>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-xl p-6 border border-border">
            <p className="text-muted-foreground text-center font-sans">
              <span className="font-medium text-foreground">Our perspective:</span> Knee 
              health is part of a broader picture that includes movement, load management, 
              nutrition, and recovery. No single intervention — including supplements — 
              addresses this complexity alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKneeHealthMatters;
