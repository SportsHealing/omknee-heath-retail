import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";

const ideas = [
  { title: "Motion is maintenance", copy: "Cartilage has no blood supply. It is fed by fluid moving in and out as you bend and load the joint. A knee that moves often is a knee that is being nourished." },
  { title: "Little and often beats heroic", copy: "Several short walks and a few minutes of range-of-movement work most days does more than one punishing session at the weekend." },
  { title: "Break up sitting", copy: "Stiffness after long sitting is normal, not damage. Stand, straighten and bend the knee fully a few times an hour." },
  { title: "Vary the load", copy: "Walking, cycling and swimming stress the joint differently. Rotating between them spreads the demand and keeps things interesting." },
  { title: "Soreness is information", copy: "Mild ache that settles within 24 hours is usually acceptable. Pain that climbs, swells or lingers means dial the load back and build again." },
];

const Movement = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Movement for Knee Health | Keep Your Knees Moving"
      description="Why knees like being used, how much movement to aim for, and simple ways to keep your knees mobile through a normal week."
      canonicalPath="/knee-movement"
      keywords="knee movement, knee mobility, exercises for knee pain, keep knees moving"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Health", url: "https://omkneehealth.com/knee-health" },
        { name: "Movement", url: "https://omkneehealth.com/knee-movement" },
      ]}
    />
    <WebPageSchema name="Movement - OmKneeHealth" description="Consumer guidance on movement for knee health." url="https://omkneehealth.com/knee-movement" type="WebPage" />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Cornerstone</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">Knees are made to be used</h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Rest has its place, but it is rarely the long-term answer. Regular, varied,
            comfortable movement is the single most supportive habit for a knee.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {ideas.map((idea) => (
              <article key={idea.title} className="rounded-xl border border-border bg-secondary/40 p-7">
                <h2 className="font-serif text-xl text-foreground mb-2">{idea.title}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{idea.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/40 p-8">
            <h2 className="font-serif text-2xl text-foreground mb-3">This week</h2>
            <ul className="space-y-2 mb-6">
              {["A walk most days, even a short one", "Full bend and full straighten, a few times daily", "One activity you actually enjoy", "One session that leaves the legs pleasantly tired"].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 font-sans text-sm">
              <Link to="/knee-health/strength-mobility" className="text-primary hover:underline underline-offset-4">Strength & mobility</Link>
              <Link to="/knee-health/load" className="text-primary hover:underline underline-offset-4">Managing load</Link>
            </div>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="mykneescore"
        title="Track whether it is working"
        description="Score your knees now, then again in six weeks, and let the trend tell you whether your movement habits are paying off."
      />
    </main>
    <Footer />
  </div>
);

export default Movement;
