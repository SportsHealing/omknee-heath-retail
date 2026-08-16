import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import OmKneeSeven from "@/components/home/OmKneeSeven";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CORNERSTONES = [
  { to: "/your-knee", title: "Understand Your Knee", copy: "A plain-English tour of the joint you rely on every day." },
  { to: "/cartilage-collagen-synovial-fluid", title: "Cartilage, Collagen & Synovial Fluid", copy: "The living materials inside the joint, and what keeps them healthy." },
  { to: "/knee-movement", title: "Movement & Biomechanics", copy: "Walking, stairs, squatting and running — where force actually lands." },
  { to: "/healthy-knees-through-life", title: "Healthy Knees Through Life", copy: "What matters in your 30s, 40s, 50s, 60s and beyond." },
];

const KneeHealth = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Look After Your Knees | Knee Health & Wellness"
      description="Looking after your knees starts before something goes wrong. The OmKnee Seven: wellness, nourish, understand, load, prepare, diagnose and treat — a complete approach to lifelong knee health."
      canonicalPath="/knee-health"
      keywords="knee health, how to improve knee health, healthy knees, knee wellness"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Health", url: "https://omkneehealth.com/knee-health" },
      ]}
    />
    <WebPageSchema
      name="Knee Health - OmKneeHealth"
      description="Curated consumer guidance on maintaining healthy knees."
      url="https://omkneehealth.com/knee-health"
      type="CollectionPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
              Look After Your Knees
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              A complete approach to lifelong knee health.
            </h1>
            <div className="space-y-5 font-sans text-lg text-muted-foreground leading-relaxed">
              <p>Nobody's knee exists on its own.</p>
              <p>
                How you sleep, what you eat, how strong your legs are, what you did last weekend and
                what you are planning to do next month all show up in the joint eventually. So does
                what happens when something goes wrong and how quickly you get the right answer.
              </p>
              <p>
                We put all of that under seven headings. Not because knees are complicated, but
                because knee advice usually only covers one of them at a time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                to="/wellness"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-sans text-sm text-primary-foreground transition-colors hover:bg-primary/90 min-h-[44px]"
              >
                Start with Wellness
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/knee-score"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-4 font-sans text-sm text-foreground transition-colors hover:bg-secondary/60 min-h-[44px]"
              >
                Check your knee
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OmKneeSeven
        eyebrow="The OmKnee Seven"
        heading="One journey, not seven steps."
        intro="Stay active, eat properly, understand the joint, do not ask more of it than it is ready for, and prepare for the things you want to do."
      />

      <section className="pb-24 bg-secondary/20 pt-24">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">Go further</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Cornerstone reading
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CORNERSTONES.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-xl border border-border bg-secondary/40 p-8 transition-colors hover:border-primary/40 hover:bg-secondary/60"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{item.copy}</p>
                <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
                  Read the guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="sportshealing"
        title="Want the clinical depth?"
        description="The Knee Passport on SportsHealing goes further into conditions, treatment and rehabilitation than we do here."
        cta="Explore the Knee Passport"
      />
    </main>
    <Footer />
  </div>
);

export default KneeHealth;
