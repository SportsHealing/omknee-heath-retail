/**
 * Journal Teaser - three most recent articles.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/pages/blog/Index";

const JournalTeaser = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">The Journal</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Reading for curious knees
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {ARTICLES.slice(0, 3).map((article) => (
          <Link
            key={article.slug}
            to={`/journal/${article.slug}`}
            className="group rounded-xl border border-border bg-background p-8 transition-colors hover:border-primary/40"
          >
            <span className="font-sans text-[0.7rem] tracking-[0.15em] uppercase text-primary/70 block mb-4">
              {article.category}
            </span>
            <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">{article.title}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
              {article.excerpt.slice(0, 110)}…
            </p>
            <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
              Read
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          Browse the Journal
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default JournalTeaser;
