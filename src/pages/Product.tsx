import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import FullIngredients from "@/components/product/FullIngredients";
import LearnBeforeYouBuy from "@/components/product/LearnBeforeYouBuy";
import StickyBuyBar from "@/components/product/StickyBuyBar";
import SEO from "@/components/SEO";
import ProductSchema from "@/components/ProductSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { SUPPLEMENT, SUPPLEMENT_PATH } from "@/content/supplement";

/**
 * Product page (/shop/omkneehealth-supplement), handover A11.
 *
 * Three levels of disclosure:
 * 1. Cards elsewhere (Home, Wellness Edit, Shop): name, one line, groups, prices.
 * 2. This page: groups, authorised claims, approach, how to take it, price.
 * 3. FullIngredients: the full formula with amounts, closed by default. The only
 *    place on the site where amounts appear.
 *
 * Not on this page by design (A11): testimonials, a variant selector, any
 * clinician endorsement, any amount outside the level 3 panel.
 */

const DESCRIPTION =
  "A daily powder bringing together collagen, joint-matrix ingredients, botanicals and bone nutrients. Vanilla cherry flavour.";
const URL = `https://omkneehealth.com${SUPPLEMENT_PATH}`;

const Product = () => (
  <div className="min-h-screen bg-background">
    <SEO title={SUPPLEMENT.name} description={DESCRIPTION} canonicalPath={SUPPLEMENT_PATH} ogType="product" />
    <ProductSchema
      name={SUPPLEMENT.name}
      description={DESCRIPTION}
      image="https://omkneehealth.com/og-image.png"
      price={SUPPLEMENT.price}
      currency="GBP"
      sku="OMKNEE-JMS-30"
      brand="OmKneeHealth"
      availability="InStock"
      url={URL}
      weight="300g"
      category="Health Supplements > Food Supplements"
      countryOfOrigin="GB"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Shop", url: "https://omkneehealth.com/shop" },
        { name: SUPPLEMENT.name, url: URL },
      ]}
    />
    <WebPageSchema name={`${SUPPLEMENT.name} - OmKneeHealth`} description={DESCRIPTION} url={URL} type="ItemPage" />
    <Header />
    <main className="pt-28 lg:pt-40">
      <ProductHero />
      <ProductDetails />
      <FullIngredients />
      <LearnBeforeYouBuy />
    </main>
    <Footer />
    <StickyBuyBar />
  </div>
);

export default Product;
