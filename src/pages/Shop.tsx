import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import MovementSupport from "@/components/shop/MovementSupport";
import RecoveryTools from "@/components/shop/RecoveryTools";
import StrengthEquipment from "@/components/shop/StrengthEquipment";
import FootwearGuidance from "@/components/shop/FootwearGuidance";
import AfterSurgery from "@/components/shop/AfterSurgery";
import EcosystemPathway from "@/components/EcosystemPathway";
import BackToTop from "@/components/ui/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Snowflake, HeartHandshake, Dumbbell, Footprints } from "lucide-react";

const categories = [
  { icon: Leaf, title: "Nutrition", copy: "Our own formula plus the nutrients that support connective tissue.", to: "/product" },
  { icon: Shield, title: "Braces & Supports", copy: "Sleeves, hinged braces and straps, with honest guidance on when each helps.", to: "#movement-support" },
  { icon: Snowflake, title: "Cooling & Recovery", copy: "Cold therapy, compression and the simple tools that aid recovery days.", to: "#recovery-tools" },
  { icon: HeartHandshake, title: "After Surgery", copy: "Practical kit for the weeks after a knee operation.", to: "#after-surgery" },
  { icon: Dumbbell, title: "Movement & Rehabilitation", copy: "Bands, weights and balance aids for building strength at home.", to: "#strength-equipment" },
  { icon: Footprints, title: "Foot & Lower Limb", copy: "Footwear and insole guidance — the knee starts at the ground.", to: "#footwear-guidance" },
];

const Shop = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Knee Health Shop | Supplements, Braces & Recovery"
      description="A carefully curated knee health shop: nutrition, braces and supports, cooling and recovery, after surgery essentials, movement and rehabilitation aids, and footwear guidance."
      canonicalPath="/shop"
      keywords="knee supplements UK, knee brace, knee support, knee recovery products, knee rehabilitation equipment"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Shop", url: "https://omkneehealth.com/shop" },
      ]}
    />
    <WebPageSchema
      name="Knee Health Shop - OmKneeHealth"
      description="Curated knee health products across nutrition, supports, recovery, after surgery, rehabilitation and footwear."
      url="https://omkneehealth.com/shop"
      type="CollectionPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">The Shop</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Chosen carefully, not endlessly
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Six categories, a short list in each, and a clear reason for everything we include.
              No warehouse, no filler.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat) => {
              const inner = (
                <>
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground mb-2">{cat.title}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{cat.copy}</p>
                  <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
                    Browse
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </>
              );
              const className =
                "group rounded-xl border border-border bg-secondary/40 p-8 transition-colors hover:border-primary/40 hover:bg-secondary/60";
              return cat.to.startsWith("#") ? (
                <a key={cat.title} href={cat.to} className={className}>
                  {inner}
                </a>
              ) : (
                <Link key={cat.title} to={cat.to} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <MovementSupport />
      <RecoveryTools />
      <AfterSurgery />
      <StrengthEquipment />
      <FootwearGuidance />

      <EcosystemPathway
        site="sportshealing"
        title="Not sure what your knee actually needs?"
        description="If symptoms are persistent, guidance beats equipment. SportsHealing covers assessment-led treatment and rehabilitation."
      />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Shop;
