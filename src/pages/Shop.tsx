/**
 * The Knee Shop (/shop). Copy: handover A10; categories in src/content/shopCatalogue.ts.
 * Each category shows its education link before its product grid. Every product
 * card shows the member price next to the full price.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import BackToTop from "@/components/ui/BackToTop";
import SupplementCard from "@/components/product/SupplementCard";
import ShopProductCard from "@/components/shop/ShopProductCard";
import { InlineLink } from "@/components/content/ContentSections";
import { SHOP_CATEGORIES, type ShopCategory } from "@/content/shopCatalogue";
import { NAV } from "@/lib/navigation";

const CategorySection = ({ category }: { category: ShopCategory }) => (
  <section id={category.id} className="scroll-mt-28 lg:scroll-mt-36 py-16 md:py-20 border-t border-border">
    <div className="container px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-8">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-3">{category.subtitle}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">{category.title}</h2>
          <div className="space-y-3 font-sans text-muted-foreground leading-relaxed">
            {category.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {/* A10: the education link comes before the product grid. */}
          <p className="mt-5">
            <InlineLink
              link={category.education}
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
            />
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.id === "omkneehealth-supplement" ? (
            <SupplementCard />
          ) : (
            Array.from({ length: category.placeholderCount }, (_, i) => (
              <ShopProductCard key={i} note={category.productNote} />
            ))
          )}
        </div>
        {category.disclaimer ? (
          <p className="mt-8 font-sans text-xs text-muted-foreground">{category.disclaimer}</p>
        ) : null}
      </div>
    </div>
  </section>
);

const Shop = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="The Knee Shop"
      description="Selected by our team. Clear information. Better choices. The OmKneeHealth Supplement, braces and supports, after surgery essentials, cooling and recovery, movement and rehabilitation, foot and lower limb."
      canonicalPath="/shop"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Shop", url: "https://omkneehealth.com/shop" },
      ]}
    />
    <WebPageSchema
      name="The Knee Shop - OmKneeHealth"
      description="Products selected by our team, with clear information."
      url="https://omkneehealth.com/shop"
      type="CollectionPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-12 lg:pt-48 lg:pb-16">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">The Knee Shop.</h1>
            <p className="font-serif text-xl text-foreground">Selected by our team. Clear information. Better choices.</p>
          </div>
          <Link
            to={NAV.club.to}
            className="mt-10 mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm text-primary-foreground hover:bg-primary/90 min-h-[44px]"
          >
            Club members save 15%. Join free.
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <nav aria-label="Shop categories" className="pb-16">
        <div className="container px-6">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {SHOP_CATEGORIES.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-secondary/40 p-7 transition-colors hover:border-primary/40 hover:bg-secondary/60"
                >
                  <span className="font-serif text-xl text-foreground mb-2">{category.title}</span>
                  <span className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{category.tileCopy}</span>
                  <span className="mt-auto inline-flex items-center gap-2 font-sans text-sm text-primary">
                    {category.tileCta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {SHOP_CATEGORIES.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}

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
