import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";

const decades = [
  { age: "20s & 30s", focus: "Build the bank", copy: "Peak bone and muscle are laid down now. Train strength twice a week, respect fatigue in sport, and rehabilitate injuries properly rather than nearly." },
  { age: "40s", focus: "Protect the habit", copy: "Life gets busy and training gets sporadic. Keep a minimum viable routine, watch sudden spikes after time off, and keep weight and sleep in view." },
  { age: "50s", focus: "Strength is non-negotiable", copy: "Muscle mass declines without a reason to stay. Resistance work, adequate protein and vitamin D matter more each year. Hormonal change affects tissue quality too." },
  { age: "60s", focus: "Keep capacity, keep confidence", copy: "Balance and reaction time need training as much as strength. Stairs, uneven ground and getting up from a chair are the functions worth defending." },
  { age: "70s and beyond", focus: "Independence first", copy: "Walking distance, stair confidence and sit-to-stand are the outcomes that matter. Gentle, regular loading protects them; long inactivity erodes them quickly." },
];

const ThroughLife = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Healthy Knees Through Life | Knee Health by Decade"
      description="What to prioritise for knee health in your 20s, 30s, 40s, 50s, 60s and beyond — strength, nutrition, load and confidence in movement."
      canonicalPath="/healthy-knees-through-life"
      keywords="knee health ageing, healthy knees over 50, knee strength older adults"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Health", url: "https://omkneehealth.com/knee-health" },
        { name: "Healthy Knees Through Life", url: "https://omkneehealth.com/healthy-knees-through-life" },
      ]}
    />
    <WebPageSchema name="Healthy Knees Through Life - OmKneeHealth" description="Knee health priorities by decade." url="https://omkneehealth.com/healthy-knees-through-life" type="WebPage" />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Cornerstone</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">Healthy knees through life</h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            The principles barely change with age. What changes is the emphasis — and how quickly
            things slip when the habit stops.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {decades.map((d) => (
              <article key={d.age} className="rounded-xl border border-border bg-secondary/40 p-7">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-2">{d.age}</p>
                <h2 className="font-serif text-xl text-foreground mb-2">{d.focus}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{d.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/40 p-8">
            <h2 className="font-serif text-2xl text-foreground mb-3">Constants at every age</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Move most days. Load progressively. Eat enough protein and support your gut. Sleep well.
              Keep weight in a healthy range. Get persistent symptoms looked at rather than waiting.
            </p>
            <div className="flex flex-wrap gap-4 font-sans text-sm">
              <Link to="/nourish" className="text-primary hover:underline underline-offset-4">Whole-person health</Link>
              <Link to="/movement-biomechanics" className="text-primary hover:underline underline-offset-4">Strength & mobility</Link>
              <Link to="/nourish" className="text-primary hover:underline underline-offset-4">Nutrition</Link>
            </div>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="mykneescore"
        title="Watch the direction of travel"
        description="Scoring your knees once or twice a year turns slow change into something you can actually see and act on."
      />
    </main>
    <Footer />
  </div>
);

export default ThroughLife;
