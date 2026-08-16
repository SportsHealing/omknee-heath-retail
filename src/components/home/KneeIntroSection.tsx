/**
 * Understand Your Knee - homepage introduction to the joint.
 * Deeper anatomy and biomechanics route to the SportsHealing Knee Passport.
 */

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { trackEcosystemTransfer, trackPillarSelect } from "@/lib/analytics";

const KneeIntroSection = () => {
  return (
    <section id="the-knee" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
            Understand your knee
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
            One remarkable joint.
          </h2>
          <div className="space-y-5 font-sans text-muted-foreground leading-relaxed text-left sm:text-center">
            <p>
              Your knee has to combine movement with stability while repeatedly responding to the
              demands of your body and the world around you.
            </p>
            <p>
              Cartilage provides smooth joint surfaces. Menisci help distribute forces. Ligaments
              contribute to stability. Muscles and tendons generate and control movement. Synovial
              fluid forms part of the environment within the joint.
            </p>
            <p>
              Together, these structures allow us to walk, climb, squat, run, jump and change
              direction.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/understand"
              onClick={() => trackPillarSelect("understand")}
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
            >
              Meet Your Knee
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.sportshealing.com/"
              target="_blank"
              rel="noopener"
              onClick={() => trackEcosystemTransfer("sportshealing")}
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground min-h-[44px]"
            >
              Explore the Knee Passport
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeIntroSection;
