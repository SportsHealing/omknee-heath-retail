/**
 * Wellness hub (/wellness). Copy: handover A3 (src/content/wellnessContent.ts).
 * Order: hero, sticky in-page menu, Body clock, Sleep, Recovery, Make it stick,
 * The Wellness Edit (always last), closing.
 */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DiagramPlaceholder from "@/components/DiagramPlaceholder";
import ContentSections, { ClosingBand } from "@/components/content/ContentSections";
import WellnessEdit from "@/components/wellness/WellnessEdit";
import { DIAGRAMS } from "@/content/diagrams";
import { WELLNESS_CLOSING, WELLNESS_INTRO, WELLNESS_SECTIONS, WELLNESS_SUBNAV } from "@/content/wellnessContent";
import { WELLNESS_HUB } from "@/lib/omkneeFive";

const Wellness = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Wellness: Look After the Whole Person"
      description="Sleep, stress, daily rhythm and lifestyle shape how every tissue in the knee repairs and adapts. Wellness is the foundation the OmKnee Five stand on."
      canonicalPath={WELLNESS_HUB.to}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: WELLNESS_HUB.name, url: `https://omkneehealth.com${WELLNESS_HUB.to}` },
      ]}
    />
    <Header />
    {/* Anchor targets clear the fixed header plus the sticky in-page menu. */}
    <main className="pt-32 lg:pt-48 [&_[id]]:scroll-mt-36 lg:[&_[id]]:scroll-mt-48">
      <section className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Wellness</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">{WELLNESS_HUB.strapline}</h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">{WELLNESS_INTRO}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <DiagramPlaceholder {...DIAGRAMS.D1} />
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="sticky top-20 lg:top-28 z-30 border-y border-border bg-background/95 backdrop-blur-sm"
      >
        <ul className="container px-6 flex gap-1 overflow-x-auto whitespace-nowrap py-2 justify-start md:justify-center">
          {WELLNESS_SUBNAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex items-center min-h-[44px] rounded-full px-4 font-sans text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ContentSections sections={WELLNESS_SECTIONS} />

      <WellnessEdit />

      <ClosingBand closing={WELLNESS_CLOSING} />
    </main>
    <Footer />
  </div>
);

export default Wellness;
