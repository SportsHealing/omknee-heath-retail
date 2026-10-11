/**
 * The OmKnee Five overview (/learn). Copy: handover A9.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DiagramPlaceholder from "@/components/DiagramPlaceholder";
import FigureImage from "@/components/FigureImage";
import { Button } from "@/components/ui/button";
import { DIAGRAMS } from "@/content/diagrams";
import { FIGURES } from "@/content/figures";
import { OMKNEE_FIVE, WELLNESS_HUB } from "@/lib/omkneeFive";
import { trackPillarSelect } from "@/lib/analytics";

const cardClass =
  "group flex h-full flex-col rounded-2xl border border-border bg-secondary/30 p-6 transition-colors hover:border-primary/40";

const Learn = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="The OmKnee Five"
      description="A complete approach to lifelong knee health: Understand, Nourish, Load, Diagnose and Treat, held together by Wellness."
      canonicalPath="/learn"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "The OmKnee Five", url: "https://omkneehealth.com/learn" },
      ]}
    />
    <Header />
    <main className="pt-32 lg:pt-48 pb-24">
      <section className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">The OmKnee Five.</h1>
          <p className="font-serif text-xl text-primary mb-6">A complete approach to lifelong knee health.</p>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Five connected steps, held together by Wellness. You will not always need every step. Most of the time the
            focus is understanding, nourishing and loading your knees well. When something changes, Diagnose and Treat
            connect you with scans, tests and specialists.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <DiagramPlaceholder {...DIAGRAMS.D15} />
          <FigureImage figure={FIGURES.healthyKneePhilosophy} />
        </div>
      </section>

      <section className="container px-6">
        <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OMKNEE_FIVE.map((pillar) => (
            <li key={pillar.id}>
              <Link to={pillar.to} onClick={() => trackPillarSelect(pillar.id)} className={cardClass}>
                <span className="font-serif text-sm text-primary/80 tabular-nums mb-3">{pillar.number}</span>
                <span className="font-serif text-2xl text-foreground mb-1">{pillar.name}</span>
                <span className="font-sans text-sm text-primary mb-3">{pillar.strapline}</span>
                <span className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                  {pillar.shortDescription}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm text-foreground group-hover:text-primary">
                  {pillar.ctaLabel}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link to={WELLNESS_HUB.to} className={`${cardClass} border-dashed border-primary/40`}>
              <span className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-primary/70 mb-3">
                Around all five
              </span>
              <span className="font-serif text-2xl text-foreground mb-1">{WELLNESS_HUB.name}</span>
              <span className="font-sans text-sm text-primary mb-3">{WELLNESS_HUB.strapline}</span>
              <span className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                {WELLNESS_HUB.shortDescription}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm text-foreground group-hover:text-primary">
                {WELLNESS_HUB.ctaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        </ul>
        <div className="mt-14 text-center">
          <Button size="lg" asChild>
            <Link to={OMKNEE_FIVE[0].to}>Start with Understand</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Learn;
