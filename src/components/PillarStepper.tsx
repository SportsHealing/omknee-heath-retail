import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OMKNEE_FIVE, WELLNESS_HUB, type PillarId } from "@/lib/omkneeFive";
import { trackPillarSelect } from "@/lib/analytics";

/**
 * The OmKnee Five journey: 01 to 05 inside a ring labelled Wellness, then
 * "Back to Wellness". Wellness is the ring around the five, not a sixth step.
 */
const PillarStepper = ({ current }: { current?: PillarId }) => (
  <nav aria-label="The OmKnee Five" className="py-12">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-[2.5rem] border-2 border-dashed border-primary/30 px-3 sm:px-8 pt-8 pb-6">
          <Link
            to={WELLNESS_HUB.to}
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 font-sans text-[0.65rem] tracking-[0.22em] uppercase text-primary/70 hover:text-primary whitespace-nowrap"
          >
            {WELLNESS_HUB.name}
          </Link>
          <ol className="relative grid grid-cols-5">
            <span className="absolute top-5 left-[10%] right-[10%] h-px bg-border" aria-hidden="true" />
            {OMKNEE_FIVE.map((pillar) => {
              const isCurrent = pillar.id === current;
              return (
                <li key={pillar.id} className="relative flex justify-center">
                  <Link
                    to={pillar.to}
                    aria-current={isCurrent ? "step" : undefined}
                    onClick={() => trackPillarSelect(pillar.id)}
                    className="group flex flex-col items-center gap-2 min-h-[44px] rounded-lg px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border font-serif text-sm tabular-nums transition-colors ${
                        isCurrent
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-primary/70 group-hover:border-primary"
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span
                      className={`font-sans text-[0.7rem] sm:text-sm text-center leading-tight ${
                        isCurrent ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {pillar.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-6 text-center">
          <Link
            to={WELLNESS_HUB.to}
            className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
          >
            Back to Wellness
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default PillarStepper;
