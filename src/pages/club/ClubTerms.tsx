/**
 * Club terms (/club-terms). Short-form offer terms from handover A2, shown
 * until legal supplies the long form.
 */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PlaceholderText from "@/components/PlaceholderText";

const terms = [
  "One £100 scan credit per member. Valid for 12 months from joining. Used only on a MyKneeScan knee scan.",
  "A scan goes ahead only when MyKneeScan's clinical team agrees it is appropriate.",
  "15% shop code: one use per member. Excludes gift cards and services. Cannot be combined with other codes.",
  "£10 referral credit: issued to both members after the friend's first purchase.",
  "Credits have no cash value. OmKneeHealth may change or end the offer for new members with notice.",
];

const ClubTerms = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="OmKnee Club terms"
      description="Offer terms for the OmKnee Club: the £100 scan credit, the 15% shop code and £10 referral credit."
      canonicalPath="/club-terms"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "The OmKnee Club", url: "https://omkneehealth.com/club" },
        { name: "Club terms", url: "https://omkneehealth.com/club-terms" },
      ]}
    />
    <Header />
    <main className="pt-32 lg:pt-48 pb-24">
      <article className="container px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-10">OmKnee Club terms</h1>
          <h2 className="font-serif text-2xl text-foreground mb-6">Offer terms</h2>
          <ul className="space-y-4 font-sans text-muted-foreground leading-relaxed list-disc pl-5">
            {terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
          <p className="mt-10 font-sans text-sm text-muted-foreground">
            <PlaceholderText text="[Full club terms to be supplied by legal]" />
          </p>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default ClubTerms;
