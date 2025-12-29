import { Activity, Users, TrendingUp } from "lucide-react";

const WhyKneeHealthMatters = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6 text-center">
            Why Knee Health Matters
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="leading-relaxed">
              Your knees are remarkable structures. They bear your weight, absorb impact, 
              and enable the movements that make an active life possible. From walking 
              to climbing stairs, from gardening to playing with grandchildren — healthy 
              knees are central to maintaining independence and quality of life.
            </p>
            <p className="leading-relaxed">
              As we age, the structures that support our joints naturally change. Cartilage 
              may become thinner, the fluid that lubricates joints may decrease, and the 
              surrounding tissues may become less resilient. These are normal aspects of 
              ageing, though the rate and extent vary greatly between individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-om-cream/40 rounded-xl p-6 border border-om-sage/10 text-center">
              <div className="w-12 h-12 rounded-full bg-om-forest/10 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-om-forest" />
              </div>
              <p className="text-2xl font-serif text-foreground mb-2">8.75 million</p>
              <p className="text-sm text-muted-foreground">
                People in the UK seek help for knee-related concerns annually
              </p>
            </div>
            
            <div className="bg-om-cream/40 rounded-xl p-6 border border-om-sage/10 text-center">
              <div className="w-12 h-12 rounded-full bg-om-forest/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-om-forest" />
              </div>
              <p className="text-2xl font-serif text-foreground mb-2">1 in 4</p>
              <p className="text-sm text-muted-foreground">
                Adults over 45 experience some form of joint discomfort
              </p>
            </div>
            
            <div className="bg-om-cream/40 rounded-xl p-6 border border-om-sage/10 text-center">
              <div className="w-12 h-12 rounded-full bg-om-forest/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-om-forest" />
              </div>
              <p className="text-2xl font-serif text-foreground mb-2">Growing interest</p>
              <p className="text-sm text-muted-foreground">
                In proactive approaches to maintaining joint health
              </p>
            </div>
          </div>

          <div className="bg-om-sage/10 rounded-xl p-6 border border-om-sage/20">
            <p className="text-muted-foreground text-center">
              <span className="font-medium text-foreground">Our perspective:</span> We see joint 
              health as part of a broader picture that includes movement, nutrition, and 
              overall wellbeing — not something that can be addressed by any single solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKneeHealthMatters;
