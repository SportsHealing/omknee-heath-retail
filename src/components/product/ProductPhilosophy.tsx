/**
 * Product Philosophy - Part of Broader Strategy
 * Positions supplement as ONE element of knee health
 */

import { Activity, Apple, Moon, Pill } from "lucide-react";
import ingredientsBg from "@/assets/ingredients-turmeric-bg.jpg";

const pillars = [
  { icon: Activity, title: "Movement", description: "Strengthens supporting muscles." },
  { icon: Apple, title: "Nutrition", description: "Adequate protein, vitamins, minerals." },
  { icon: Moon, title: "Recovery", description: "Rest allows adaptation." },
  { icon: Pill, title: "Support", description: "Targeted nutritional contribution." }
];

const ProductPhilosophy = () => {
  return (
    <section className="py-32 md:py-40 bg-secondary/50 relative overflow-hidden">
      {/* Soft ingredient background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img 
          src={ingredientsBg} 
          alt="" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Part of the Picture
            </h2>
          </div>

          {/* Four pillars */}
          <div className="grid md:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-5">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;
