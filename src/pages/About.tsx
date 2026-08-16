import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import KneeEcosystem from "@/components/KneeEcosystem";
import BackToTop from "@/components/ui/BackToTop";
import { OMKNEE_SEVEN } from "@/lib/omkneeSeven";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    id: "our-purpose",
    heading: "Our purpose",
    paragraphs: [
      "We want people to understand their knees before they are asked to buy something.",
      "That means starting with movement, general health, nutrition, anatomy, loading and preparation.",
      "When a knee problem requires more, we explain how assessment and treatment fit into the journey and direct people towards appropriate specialist resources.",
    ],
  },
  {
    id: "our-approach-to-evidence",
    heading: "Our approach to evidence",
    paragraphs: [
      "Knee health is a field in which strong evidence, emerging research, clinical experience and marketing claims can easily become confused.",
      "We aim to distinguish between them.",
      "Our educational content is informed by established knowledge and relevant research.",
      "Where evidence is uncertain, we aim to say so.",
      "Where a product is sold, the claims made for that product should be considered separately from general educational information.",
    ],
  },
  {
    id: "clinical-and-scientific-approach",
    heading: "Clinical and scientific approach",
    paragraphs: [
      "OmKneeHealth is informed by specialist experience in knee health, musculoskeletal medicine, biomechanics and scientific research.",
      "That expertise shapes the questions we ask, the information we provide and the standards we apply.",
      "It does not mean that every product is a medical treatment or that every visitor needs medical care.",
    ],
  },
];

const selectionFactors = ["Purpose", "Quality", "Practicality", "Transparency", "Evidence where relevant", "Value"];

const About = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Why OmKneeHealth | Knee Health Deserves Specialist Thinking"
      description="OmKneeHealth brings knee education, nutrition, curated products and the wider knee ecosystem together, organised around The OmKnee Seven."
      canonicalPath="/about"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "About", url: "https://omkneehealth.com/about" },
      ]}
    />
    <WebPageSchema
      name="About OmKneeHealth"
      description="Our purpose, our approach to evidence, how we select products and our place within the wider knee ecosystem."
      url="https://omkneehealth.com/about"
      type="AboutPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-20 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Why OmKneeHealth?
            </h1>
            <p className="font-serif text-xl text-foreground mb-6">
              Knee health deserves specialist thinking.
            </p>
            <div className="space-y-4 font-sans text-lg text-muted-foreground leading-relaxed">
              <p>Your knees influence how you move through almost every stage of life.</p>
              <p>
                Yet information about knee health is often fragmented between medical websites,
                fitness advice, supplement marketing and product stores.
              </p>
              <p>OmKneeHealth was created to bring those worlds together more thoughtfully.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            <article id={sections[0].id}>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{sections[0].heading}</h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                {sections[0].paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>

            <article id="the-omknee-seven">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">The OmKnee Seven</h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                Our approach is organised around seven areas:
              </p>
              <ol className="border-t border-border">
                {OMKNEE_SEVEN.map((pillar) => (
                  <li key={pillar.id} className="border-b border-border">
                    <Link
                      to={pillar.to}
                      className="group flex items-center gap-6 py-5 min-h-[44px]"
                    >
                      <span className="font-sans text-xs tracking-[0.2em] text-primary/70 w-8">
                        {pillar.number}
                      </span>
                      <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {pillar.name}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ol>
              <p className="font-sans text-muted-foreground leading-relaxed mt-8">
                Together they provide a framework for thinking about knee health throughout life.
              </p>
            </article>

            <article id={sections[1].id}>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{sections[1].heading}</h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                {sections[1].paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>

            <article id="how-we-select-products">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">How we select products</h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>We do not aim to stock everything.</p>
                <p>Products are considered according to factors such as:</p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 my-6 font-sans text-foreground list-disc pl-5">
                {selectionFactors.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>Not every product will be right for every person.</p>
                <p>Our role is to make selection more considered and information clearer.</p>
              </div>
            </article>

            <article id={sections[2].id}>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{sections[2].heading}</h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                {sections[2].paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <KneeEcosystem
        heading="Part of a wider knee ecosystem"
        intro="OmKneeHealth focuses on knee health, wellness and retail. For deeper education, assessment, imaging and specialist treatment, the wider ecosystem provides dedicated destinations."
        className="py-20 bg-secondary/20"
      />
    </main>
    <BackToTop />
    <Footer />
  </div>
);

export default About;
