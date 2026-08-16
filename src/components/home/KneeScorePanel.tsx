/**
 * Knee Score Panel - premium homepage entry point to MyKneeScore.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const KneeScorePanel = () => (
  <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-6">
          Knee Score
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          A simple number for how your knees are doing
        </h2>
        <p className="font-sans text-primary-foreground/85 leading-relaxed mb-10 max-w-xl mx-auto">
          Answer a short set of questions and get a Knee Score you can track over time. It is a way
          to notice change early and see whether what you are doing is working.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="px-10 py-6 text-sm font-sans font-medium" asChild>
            <Link to="/knee-score">
              Get Your Knee Score
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default KneeScorePanel;
