/**
 * Knee Score Panel - premium homepage entry point to MyKneeScore.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

const KneeScorePanel = () => (
  <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-6">
          Knee Score
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">How are your knees today?</h2>
        <div className="space-y-4 font-sans text-primary-foreground/85 leading-relaxed mb-10 max-w-xl mx-auto">
          <p>Your knees can feel different from one day, activity or stage of life to another.</p>
          <p>
            The Knee Score is a simple way to reflect on how your knees currently feel and function,
            and how they affect everyday movement and activity.
          </p>
          <p>Use it as a starting point to understand your knees and consider what to do next.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="px-10 py-6 text-sm font-sans font-medium" asChild>
            <Link to="/knee-score" onClick={() => track("knee_score_click", { location: "homepage" })}>
              Take the Knee Score
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <p className="font-sans text-xs text-primary-foreground/70 mt-8 max-w-md mx-auto">
          The Knee Score is a self assessment tool. It does not provide a medical diagnosis.
        </p>
      </div>
    </div>
  </section>
);

export default KneeScorePanel;
