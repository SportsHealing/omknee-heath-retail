import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const parts = [
  { title: "Bones", copy: "The thigh bone, shin bone and kneecap meet to form the joint and share the work between them." },
  { title: "Cartilage", copy: "A smooth, slippery surface that lets the bones glide rather than grind." },
  { title: "Menisci", copy: "Two crescent-shaped cushions that spread load across the joint surface." },
  { title: "Ligaments", copy: "Strong bands that keep the joint stable as it bends, straightens and turns." },
  { title: "Tendons", copy: "The link between muscle and bone — how effort becomes movement." },
  { title: "Muscles", copy: "Quadriceps, hamstrings, calves and hips control the knee far more than the knee does alone." },
  { title: "Synovial fluid", copy: "The joint's own lubricant, circulated by movement." },
  { title: "Collagen", copy: "The protein running through nearly every structure listed above." },
];

const movements = [
  { title: "Walking", copy: "The most repeated thing you ask of a knee, and the easiest way to keep it moving well." },
  { title: "Stairs", copy: "Load rises sharply going down. Control from the hip and thigh matters more than the knee itself." },
  { title: "Squatting", copy: "A daily-life movement, not just a gym one. Depth and control both improve with practice." },
  { title: "Running", copy: "Higher forces over less time. Well tolerated when volume is built up gradually." },
];

const deeper = [
  { to: "/cartilage-collagen-synovial-fluid", title: "Cartilage, Collagen & Synovial Fluid" },
  { to: "/knee-movement", title: "Movement & Biomechanics" },
  { to: "/movement-biomechanics", title: "Strength & Mobility" },
  { to: "/your-knee", title: "Your Knee, in Plain English" },
];

const Understand = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Understand Your Knee | Know Your Knee"
      description="An accessible introduction to the knee: bones, cartilage, menisci, ligaments, tendons, muscles, synovial fluid and collagen — plus how the knee behaves when you walk, climb stairs, squat and run."
      canonicalPath="/understand"
      keywords="knee anatomy simple, knee joint explained, how the knee works, knee biomechanics basics"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Look After Your Knees", url: "https://omkneehealth.com/knee-health" },
        { name: "Understand", url: "https://omkneehealth.com/understand" },
      ]}
    />
    <WebPageSchema
      name="Understand Your Knee"
      description="Consumer-level introduction to knee structure and everyday movement."
      url="https://omkneehealth.com/understand"
      type="WebPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
              The OmKnee Five · Understand
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Know your knee
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              You do not need a medical education to look after your knees. You do need a working
              picture of what is in there and what it is doing.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {parts.map((part) => (
              <article key={part.title} className="rounded-xl border border-border bg-secondary/40 p-7">
                <h2 className="font-serif text-lg text-foreground mb-3">{part.title}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{part.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">Everyday movement</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              What your knee actually does all day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {movements.map((m) => (
              <article key={m.title} className="rounded-xl border border-border bg-background p-7">
                <h3 className="font-serif text-lg text-foreground mb-3">{m.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{m.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground mb-8 text-center">Read on</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {deeper.map((d) => (
                <Link
                  key={d.to}
                  to={d.to}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/40 px-6 py-5 transition-colors hover:border-primary/40"
                >
                  <span className="font-sans text-sm text-foreground">{d.title}</span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="sportshealing"
        title="Go deeper"
        description="The Knee Passport on SportsHealing covers knee structure, conditions and rehabilitation in specialist detail."
        cta="Explore the Knee Passport"
      />
    </main>
    <Footer />
  </div>
);

export default Understand;
