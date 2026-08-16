/**
 * Science CTA - Gentle call to action
 * Maintains restrained, non-pushy tone
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList } from "lucide-react";

const ScienceCTA = () => {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
            Explore Further
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="/product">
                View the Formula
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="/knee-score">
                <ClipboardList className="w-4 h-4 mr-2" />
                Get Your Knee Score
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceCTA;
