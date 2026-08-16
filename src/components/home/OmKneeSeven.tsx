/**
 * The OmKnee Seven - the central editorial component.
 *
 * A numbered vertical journey (01 - 07) on mobile, becoming a two-column
 * editorial list on larger screens. Pillars 01-05 are the foundations of
 * lifelong knee health; a restrained divider introduces 06 and 07, which
 * remain calm and optimistic in tone. The sequence closes by returning to 01.
 */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import { OMKNEE_SEVEN, type OmKneePillar } from "@/lib/omkneeSeven";
import { trackOmKneeSevenView, trackPillarSelect } from "@/lib/analytics";

interface OmKneeSevenProps {
  /** Renders an h1 when the section is the page's primary heading. */
  as?: "h1" | "h2";
  eyebrow?: string;
  heading?: string;
  intro?: string;
}

const PillarRow = ({ pillar }: { pillar: OmKneePillar }) => (
  <li className="relative">
    <Link
      to={pillar.to}
      onClick={() => trackPillarSelect(pillar.id)}
      className="group flex gap-5 md:gap-8 rounded-2xl border border-transparent px-4 py-6 md:px-8 md:py-8 transition-colors hover:border-border hover:bg-secondary/40"
    >
      <span className="hidden sm:block shrink-0 w-24 md:w-28">
        <img
          src={pillar.image}
          alt={pillar.imageAlt}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-xl bg-secondary/50"
        />
      </span>

      <span className="shrink-0 flex flex-col items-center">
        <span className="font-serif text-2xl md:text-3xl text-primary/70 tabular-nums leading-none">
          {pillar.number}
        </span>
        <span className="mt-4 w-px flex-1 bg-border/70" aria-hidden="true" />
      </span>

      <span className="flex-1 min-w-0">
        <span className="flex items-center gap-3 mb-2">
          <pillar.icon className="w-4 h-4 text-primary" aria-hidden="true" />
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-primary/70">
            {pillar.name}
          </span>
        </span>
        <span className="block font-serif text-xl md:text-2xl text-foreground leading-snug mb-3">
          {pillar.strapline}
        </span>
        <span className="block font-sans text-sm text-muted-foreground leading-relaxed max-w-xl mb-4">
          {pillar.shortDescription}
        </span>
        <span className="inline-flex items-center gap-2 font-sans text-sm text-primary min-h-[44px]">
          {pillar.ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  </li>
);

const OmKneeSeven = ({
  as = "h2",
  eyebrow = "The OmKnee Seven",
  heading = "A complete approach to lifelong knee health.",
  intro = "One journey, not seven steps. Most people, most of the time, only need the first five.",
}: OmKneeSevenProps) => {
  const Heading = as;
  const sectionRef = useRef<HTMLElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !seen.current) {
          seen.current = true;
          trackOmKneeSevenView();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const foundations = OMKNEE_SEVEN.filter((p) => p.group === "foundation");
  const pathway = OMKNEE_SEVEN.filter((p) => p.group === "pathway");

  return (
    <section
      id="omknee-seven"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background scroll-mt-28"
    >
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-20">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">{eyebrow}</p>
          <Heading className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            {heading}
          </Heading>
          <p className="font-sans text-muted-foreground leading-relaxed">{intro}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground/70 px-4 md:px-8 mb-2">
            Looking after your knees
          </p>
          <ol className="mb-4">
            {foundations.map((pillar) => (
              <PillarRow key={pillar.id} pillar={pillar} />
            ))}
          </ol>

          {/* Subtle transition into the pathway pillars */}
          <div className="px-4 md:px-8 py-8">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground/70 text-center">
                When a knee changes
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed text-center mt-5 max-w-xl mx-auto">
              Diagnose and Treat are not the destination. Knowing how to find the right assessment,
              and the right care, is part of looking after your knees too.
            </p>
          </div>

          <ol className="mb-6">
            {pathway.map((pillar) => (
              <PillarRow key={pillar.id} pillar={pillar} />
            ))}
          </ol>

          {/* Cyclical close: 07 returns to 01 */}
          <div className="px-4 md:px-8">
            <Link
              to="/wellness"
              onClick={() => trackPillarSelect("wellness")}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 px-6 py-6 transition-colors hover:border-primary/40 hover:bg-secondary/60 min-h-[44px]"
            >
              <RotateCcw
                className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:-rotate-45"
                aria-hidden="true"
              />
              <span>
                <span className="block font-sans text-[0.7rem] tracking-[0.22em] uppercase text-primary/70 mb-1">
                  07 &rarr; 01 &nbsp;Keep moving
                </span>
                <span className="font-sans text-sm text-muted-foreground">
                  When treatment is done, the route goes back to the start: movement, strength, life.
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmKneeSeven;
