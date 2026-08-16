import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import KneeComponentsSection from "@/components/home/KneeComponentsSection";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";

const CartilageCollagen = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Cartilage, Collagen & Synovial Fluid Explained"
      description="A consumer-level guide to the living materials inside your knee: cartilage, collagen and synovial fluid, and the everyday habits that support them."
      canonicalPath="/cartilage-collagen-synovial-fluid"
      keywords="knee cartilage, collagen for knees, synovial fluid, knee joint lubrication"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Health", url: "https://omkneehealth.com/knee-health" },
        { name: "Cartilage, Collagen & Synovial Fluid", url: "https://omkneehealth.com/cartilage-collagen-synovial-fluid" },
      ]}
    />
    <WebPageSchema name="Cartilage, Collagen & Synovial Fluid - OmKneeHealth" description="Consumer education on cartilage, collagen and synovial fluid." url="https://omkneehealth.com/cartilage-collagen-synovial-fluid" type="WebPage" />
    <Header />
    <main>
      <section className="pt-32 pb-8 lg:pt-56 lg:pb-10">
        <div className="container px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Cornerstone</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Cartilage, collagen and synovial fluid
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Almost every structure in the knee is built from collagen and bathed in synovial fluid.
            Understand those two and most knee-health advice starts to make sense.
          </p>
        </div>
      </section>

      <KneeComponentsSection />

      <section className="pb-8">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/40 p-8">
            <h2 className="font-serif text-2xl text-foreground mb-3">What supports these tissues</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Movement circulates the fluid. Progressive loading signals collagen to organise itself.
              Protein, vitamin C and a well-functioning gut supply and absorb the raw materials. Sleep
              is when much of the renewal happens.
            </p>
            <div className="flex flex-wrap gap-4 font-sans text-sm">
              <Link to="/knee-health/nourish" className="text-primary hover:underline underline-offset-4">Nutrition for connective tissue</Link>
              <Link to="/knee-movement" className="text-primary hover:underline underline-offset-4">Movement</Link>
              <Link to="/shop/nutrition" className="text-primary hover:underline underline-offset-4">Nutrition in the shop</Link>
            </div>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="sportshealing"
        title="The clinical detail lives on SportsHealing"
        description="Cartilage injury, meniscal tears and repair pathways are covered in depth in the Knee Passport."
      />
    </main>
    <Footer />
  </div>
);

export default CartilageCollagen;
