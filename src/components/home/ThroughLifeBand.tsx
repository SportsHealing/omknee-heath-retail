/**
 * Healthy Knees Through Life - editorial band across life stages.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ThroughLifeBand = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
          Movement journey
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Your knees through life.
        </h2>
        <div className="space-y-5 font-sans text-muted-foreground leading-relaxed text-left sm:text-center">
          <p>The demands we place on our knees change.</p>
          <p>
            Childhood becomes sport and study. Work and family alter how we move. Training changes.
            Injuries sometimes intervene. Later in life, maintaining strength, mobility and
            independence can become increasingly important.
          </p>
          <p>There is no single formula for knee health at every age.</p>
          <p>
            The aim is to understand what your knees need now, while maintaining the capacity to
            keep moving into the future.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/healthy-knees-through-life"
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          Explore Healthy Knees Through Life
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ThroughLifeBand;
