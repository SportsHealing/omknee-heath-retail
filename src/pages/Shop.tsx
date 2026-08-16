import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import MovementSupport from "@/components/curated/MovementSupport";
import RecoveryTools from "@/components/curated/RecoveryTools";
import StrengthEquipment from "@/components/curated/StrengthEquipment";
import FootwearGuidance from "@/components/curated/FootwearGuidance";
import AfterSurgery from "@/components/shop/AfterSurgery";
import EcosystemPathway from "@/components/EcosystemPathway";
import BackToTop from "@/components/ui/BackToTop";
import KneeNutritionIntro from "@/components/shop/KneeNutritionIntro";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Snowflake, HeartHandshake, Dumbbell, Footprints } from "lucide-react";

const categories = [
  { icon: Leaf, title: "Knee Nutrition", copy: "Selected nutrition and supplements.", cta: "Shop Nutrition", to: "#knee-nutrition" },
  { icon: Shield, title: "Braces & Supports", copy: "Practical support for different needs and activities.", cta: "Shop Supports", to: "#braces-supports" },
  { icon: Snowflake, title: "Cooling & Recovery", copy: "Selected products for recovery and comfort.", cta: "Shop Recovery", to: "#cooling-recovery" },
  { icon: HeartHandshake, title: "After Surgery", copy: "Practical products for everyday recovery following knee surgery.", cta: "Shop After Surgery", to: "#after-surgery" },
  { icon: Dumbbell, title: "Movement & Rehabilitation", copy: "Equipment for strength, mobility and rehabilitation.", cta: "Shop Movement", to: "#movement-rehabilitation" },
  { icon: Footprints, title: "Foot & Lower Limb", copy: "Selected products for the wider lower limb.", cta: "Shop Foot & Lower Limb", to: "#foot-lower-limb" },
];

const Shop = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="The Knee Shop | Supplements, Braces & Recovery"
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
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">The Knee Shop</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              The Knee Shop
            </h1>
            <p className="font-serif text-xl text-foreground mb-6">
              Thoughtful products. Clear information. Better choices.
            </p>
            <div className="space-y-4 font-sans text-lg text-muted-foreground leading-relaxed text-left sm:text-center">
              <p>Looking after your knees starts with understanding them.</p>
              <p>
                When a product may have a useful role, we believe you should know what it is, why it
                has been selected and how it fits into the wider picture.
              </p>
              <p>
                Explore products chosen specifically around knee health, movement and recovery.
              </p>
            </div>
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
                    {cat.cta}
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

      <div id="knee-nutrition" className="scroll-mt-28">
        <KneeNutritionIntro />
      </div>
      <div id="braces-supports" className="scroll-mt-28">
        <MovementSupport />
      </div>
      <div id="cooling-recovery" className="scroll-mt-28">
        <RecoveryTools />
      </div>
      <div id="after-surgery" className="scroll-mt-28">
        <AfterSurgery />
      </div>
      <div id="movement-rehabilitation" className="scroll-mt-28">
        <StrengthEquipment />
      </div>
      <div id="foot-lower-limb" className="scroll-mt-28">
        <FootwearGuidance />
      </div>

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
