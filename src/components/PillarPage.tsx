/**
 * PillarPage - the shared editorial template for the OmKnee Seven.
 * Content comes from the approved master copy deck via src/content/pillarContent.ts.
 */

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { PILLAR_CONTENT, type PillarSection } from "@/content/pillarContent";
import { getPillar, type PillarId } from "@/lib/omkneeSeven";
import {
  trackDiagnosePathway,
  trackEcosystemTransfer,
  trackTreatPathway,
} from "@/lib/analytics";
import type { ReactNode } from "react";

const SectionCta = ({ cta }: { cta: NonNullable<PillarSection["cta"]> }) => {
  const handle = () => {
    if (cta.diagnosePathway) trackDiagnosePathway(cta.diagnosePathway);
    if (cta.treatPathway) trackTreatPathway(cta.treatPathway);
    if (cta.ecosystem) trackEcosystemTransfer(cta.ecosystem);
  };

  const label = (
    <>
      {cta.label}
      {cta.href ? (
        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
      ) : (
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      )}
    </>
  );

  const classes =
    "inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px] mt-6";

  return (
    <p>
      {cta.href ? (
        <a href={cta.href} target="_blank" rel="noopener" onClick={handle} className={classes}>
          {label}
        </a>
      ) : (
        <Link to={cta.to ?? "/"} onClick={handle} className={classes}>
          {label}
        </Link>
      )}
      {cta.destinationLabel ? (
        <span className="block font-sans text-xs text-muted-foreground/80">
          Destination: {cta.destinationLabel}
        </span>
      ) : null}
    </p>
  );
};

interface PillarPageProps {
  id: PillarId;
  /** Optional extra content rendered before the OmKnee Principle. */
  children?: ReactNode;
}

const PillarPage = ({ id, children }: PillarPageProps) => {
  const content = PILLAR_CONTENT[id];
  const pillar = getPillar(id);
  const url = `https://omkneehealth.com${pillar.to}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        canonicalPath={pillar.to}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Look After Your Knees", url: "https://omkneehealth.com/knee-health" },
          { name: pillar.name, url },
        ]}
      />
      <WebPageSchema name={content.h1} description={content.seoDescription} url={url} type="WebPage" />
      <Header />

      <main>
        <section className="pt-32 pb-16 lg:pt-48 lg:pb-20">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
                {content.eyebrow}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
                {content.h1}
              </h1>
              <div className="space-y-5 font-sans text-lg text-muted-foreground leading-relaxed text-left sm:text-center">
                {content.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto divide-y divide-border">
              {content.sections.map((section) => (
                <article key={section.title} className="py-12 first:pt-0">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  {section.items ? (
                    <dl className="mt-8 grid sm:grid-cols-2 gap-5">
                      {section.items.map((item) => (
                        <div key={item.title} className="rounded-xl border border-border bg-secondary/30 p-6">
                          <dt className="font-serif text-lg text-foreground mb-2">{item.title}</dt>
                          <dd className="font-sans text-sm text-muted-foreground leading-relaxed">
                            {item.copy}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {section.cta ? <SectionCta cta={section.cta} /> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {children}

        <section className="py-20">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto rounded-2xl bg-secondary/40 border border-border px-8 py-12 text-center">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
                The OmKnee Principle
              </p>
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                {content.principle}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                {content.secondary ? (
                  <Link
                    to={content.secondary.to}
                    className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
                  >
                    {content.secondary.label}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                ) : null}
                {content.next ? (
                  <Link
                    to={content.next.to}
                    className="inline-flex items-center gap-2 font-sans text-sm text-foreground hover:text-primary min-h-[44px]"
                  >
                    {content.next.label}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PillarPage;
