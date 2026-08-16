/**
 * Standard product page block: Learn Before You Buy.
 * Routes to the relevant OmKnee Seven pillars rather than to further product promotion.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OMKNEE_SEVEN, PillarId } from "@/lib/omkneeSeven";

interface Props {
  /** Pillars most relevant to this product. */
  pillars?: PillarId[];
}

const LearnBeforeYouBuy = ({ pillars = ["nourish", "understand", "load"] }: Props) => {
  const items = OMKNEE_SEVEN.filter((p) => pillars.includes(p.id));

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Learn before you buy
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-8">
            Understanding the problem and the purpose of a product can help you make a better
            decision.
          </p>
          <ul className="border-t border-border">
            {items.map((pillar) => (
              <li key={pillar.id} className="border-b border-border">
                <Link to={pillar.to} className="group flex items-center gap-6 py-5 min-h-[44px]">
                  <span className="font-sans text-xs tracking-[0.2em] text-primary/70 w-8">
                    {pillar.number}
                  </span>
                  <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {pillar.name}
                  </span>
                  <span className="hidden sm:block font-sans text-sm text-muted-foreground">
                    {pillar.strapline}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LearnBeforeYouBuy;
