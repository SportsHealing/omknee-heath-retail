/**
 * Wellness hub (/wellness). Copy: handover A3.
 * Phase 1 adds the route and hero; the full hub content arrives in Phase 2.
 */
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DiagramPlaceholder from "@/components/DiagramPlaceholder";
import PlaceholderText from "@/components/PlaceholderText";
import { Button } from "@/components/ui/button";
import { DIAGRAMS } from "@/content/diagrams";
import { OMKNEE_FIVE, WELLNESS_HUB } from "@/lib/omkneeFive";

const Wellness = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Wellness: look after the whole person"
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
    <main className="pt-32 lg:pt-48 pb-24">
      <section className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Wellness</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
            {WELLNESS_HUB.strapline}
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Your knee does not live in isolation. Sleep, stress, daily rhythm and lifestyle shape how every tissue in
            the joint repairs and adapts. Wellness is the foundation the OmKnee Five stand on.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <DiagramPlaceholder {...DIAGRAMS.D1} />
          <p className="text-center font-sans text-sm text-muted-foreground">
            <PlaceholderText text="[Body clock, Sleep, Recovery, Make it stick and The Wellness Edit: built in Phase 2]" />
          </p>
        </div>
      </section>

      <section className="container px-6 mt-16">
        <div className="max-w-3xl mx-auto rounded-2xl bg-secondary/40 border border-border px-8 py-12 text-center">
          <Button size="lg" asChild>
            <Link to={OMKNEE_FIVE[0].to}>Start the OmKnee Five</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Wellness;
