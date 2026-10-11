/**
 * PillarPage - the shared editorial template for the OmKnee Five.
 * Content comes from src/content/pillarContent.ts (handover Appendix A).
 */

import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import PillarStepper from "@/components/PillarStepper";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import DiagramPlaceholder from "@/components/DiagramPlaceholder";
import ContentSections, { ClosingBand } from "@/components/content/ContentSections";
import { PILLAR_CONTENT } from "@/content/pillarContent";
import { DIAGRAMS } from "@/content/diagrams";
import { getPillar, type PillarId } from "@/lib/omkneeFive";

interface PillarPageProps {
  id: PillarId;
  /** Optional extra content rendered before the closing band. */
  children?: ReactNode;
}

const PillarPage = ({ id, children }: PillarPageProps) => {
  const content = PILLAR_CONTENT[id];
  const pillar = getPillar(id);
  if (!pillar) return null;
  const url = `https://omkneehealth.com${pillar.to}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={content.seoTitle} description={content.seoDescription} canonicalPath={pillar.to} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "The OmKnee Five", url: "https://omkneehealth.com/learn" },
          { name: pillar.name, url },
        ]}
      />
      <WebPageSchema name={content.h1} description={content.seoDescription} url={url} type="WebPage" />
      <Header />

      <main>
        <section className="pt-32 pb-8 lg:pt-48 lg:pb-12">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">{content.eyebrow}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">{content.h1}</h1>
              <div className="space-y-5 font-sans text-lg text-muted-foreground leading-relaxed text-left sm:text-center">
                {content.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-10">
              {content.heroDiagram ? (
                <DiagramPlaceholder {...DIAGRAMS[content.heroDiagram]} />
              ) : (
                <figure className="max-w-2xl mx-auto">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    loading="lazy"
                    className="w-full rounded-2xl bg-secondary/40 object-cover max-h-[420px]"
                  />
                </figure>
              )}
            </div>
          </div>
        </section>

        <ContentSections sections={content.sections} />

        {children}

        <ClosingBand closing={content.closing} />

        <PillarStepper current={id} />
      </main>
      <Footer />
    </div>
  );
};

export default PillarPage;
