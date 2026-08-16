import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";

const parts = [
  { title: "Bones and shape", copy: "Thigh bone, shin bone and kneecap meet in a joint built for bend, glide and a little rotation. Shape varies between people — and normal is a range, not a single blueprint." },
  { title: "Cushioning surfaces", copy: "Smooth cartilage caps the bone ends and two crescent-shaped menisci spread load. Together they turn every step into something the joint can absorb." },
  { title: "Stabilisers", copy: "Ligaments hold the joint together; tendons transmit the pull of muscle. Both are collagen structures that respond to steady, progressive use." },
  { title: "Lubrication", copy: "Synovial fluid nourishes cartilage and lets surfaces glide. Movement is what circulates it — which is why stiffness eases once you get going." },
  { title: "The engine around it", copy: "Quadriceps, hamstrings, calves and hips decide how much force reaches the joint. Strong, coordinated muscle is the knee's best protection." },
];

const YourKnee = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Your Knee Explained Simply | Knee Joint Basics"
      description="A short, plain-English introduction to the knee joint: bones, cartilage, meniscus, ligaments, tendons, synovial fluid and the muscles that protect it."
      canonicalPath="/your-knee"
      keywords="knee joint, knee anatomy simple, how the knee works"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Health", url: "https://omkneehealth.com/knee-health" },
        { name: "Your Knee", url: "https://omkneehealth.com/your-knee" },
      ]}
    />
    <WebPageSchema name="Your Knee - OmKneeHealth" description="Consumer-level introduction to the knee joint." url="https://omkneehealth.com/your-knee" type="WebPage" />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Cornerstone</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">Your knee, in plain English</h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            You do not need a textbook to look after your knees. You need a working picture of
            what is inside, and what each part responds to. This is that picture.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {parts.map((part) => (
              <article key={part.title} className="rounded-xl border border-border bg-secondary/40 p-7">
                <h2 className="font-serif text-xl text-foreground mb-2">{part.title}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{part.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/40 p-8">
            <h2 className="font-serif text-2xl text-foreground mb-3">What this means day to day</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Nearly every structure in the knee is collagen-based, fluid-dependent and load-responsive.
              So the three things that help most are unglamorous: move regularly, build strength gradually,
              and eat in a way that supports connective tissue.
            </p>
            <div className="flex flex-wrap gap-4 font-sans text-sm">
              <Link to="/cartilage-collagen-synovial-fluid" className="text-primary hover:underline underline-offset-4">Cartilage, collagen & synovial fluid</Link>
              <Link to="/knee-movement" className="text-primary hover:underline underline-offset-4">Movement</Link>
              <Link to="/nourish" className="text-primary hover:underline underline-offset-4">Nutrition</Link>
            </div>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="sportshealing"
        title="Go deeper with the Knee Passport"
        description="Detailed anatomy, conditions and rehabilitation live with SportsHealing, where the clinical teaching sits."
      />
    </main>
    <Footer />
  </div>
);

export default YourKnee;
