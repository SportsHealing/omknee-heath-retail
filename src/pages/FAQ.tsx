/**
 * FAQ Page - Standalone comprehensive FAQ
 * SEO-optimized for featured snippets and People Also Ask
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import FAQSchema from "@/components/FAQSchema";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "About the Supplement",
    faqs: [
      {
        question: "What is OmKneeHealth's knee joint supplement?",
        answer: "OmKneeHealth is a multi-ingredient food supplement formulated to provide nutritional support for knee joint health. It contains hydrolysed collagen peptides (10g), glucosamine sulphate (1,500mg), chondroitin sulphate (800mg), vitamins C, D, and K2, curcumin with piperine, boswellia extract, and essential trace minerals. It's designed for adults seeking proactive, long-term joint support."
      },
      {
        question: "How does it differ from other knee supplements?",
        answer: "Our formula is clinician-formulated, meaning it was developed with input from healthcare professionals with knee-specific expertise. We use evidence-informed doses (not token amounts), include piperine to enhance curcumin absorption, and are transparent about what the evidence does and doesn't show. We also provide EFSA-authorised claims where applicable and avoid exaggerated marketing."
      },
      {
        question: "Is this a medicine or treatment?",
        answer: "No. OmKneeHealth is a food supplement, not a medicine. It provides nutritional support for joint health but does not treat, cure, or prevent any disease or medical condition. If you have knee pain or a diagnosed condition, please consult a healthcare professional for appropriate care."
      },
    ]
  },
  {
    title: "Ingredients & Safety",
    faqs: [
      {
        question: "What are the main ingredients?",
        answer: "The formula contains: Hydrolysed collagen peptides (10g), Glucosamine sulphate 2KCl (1,500mg), Chondroitin sulphate (800mg), Curcumin extract with piperine (500mg + 5mg), Boswellia serrata extract (200mg), Vitamin C (80mg), Vitamin D3 (50mcg/2,000 IU), Vitamin K2 (75mcg), and trace minerals including zinc, copper, manganese, and boron."
      },
      {
        question: "Is it suitable for vegetarians or vegans?",
        answer: "Our Original Formula contains animal-derived ingredients (collagen from bovine sources, chondroitin, glucosamine from shellfish). We offer a Vegetarian Formula that uses vegan-fermented glucosamine and plant-based alternatives where possible. Neither formula is fully vegan due to vitamin D3 sourcing."
      },
      {
        question: "Are there any side effects?",
        answer: "The ingredients in our formula are generally well-tolerated. Some people may experience mild digestive discomfort when starting any new supplement. Curcumin may have antiplatelet effects, so those on blood-thinning medication should consult their doctor. Glucosamine is derived from shellfish in our Original Formula—those with allergies should choose the Vegetarian Formula."
      },
      {
        question: "Can I take this with other medications?",
        answer: "If you take any medications, particularly blood thinners (warfarin, aspirin), diabetes medications, or immunosuppressants, please consult your healthcare provider before using this or any supplement. While the ingredients are food-derived, some may interact with certain medications."
      },
    ]
  },
  {
    title: "Usage & Results",
    faqs: [
      {
        question: "How do I take it?",
        answer: "Mix one scoop (10g) with approximately 200ml of water, juice, or a smoothie. Stir or shake well until dissolved. Take once daily. There's no specific 'best time'—consistency matters more than timing. Find what fits your routine and stick with it."
      },
      {
        question: "How long until I notice results?",
        answer: "Nutritional supplements support gradual, cumulative processes. Clinical studies typically assess outcomes after 8-12+ weeks of consistent daily use. Individual responses vary significantly based on age, activity levels, diet, and other factors. We recommend committing to at least 12 weeks of consistent use before assessing your experience."
      },
      {
        question: "Can I take it long-term?",
        answer: "Yes, our formula is designed for daily, long-term use. All ingredients are included at levels considered safe for ongoing consumption. Joint health is a long-term investment, not a short-term fix—consistent daily use over months and years is the intended approach."
      },
    ]
  },
  {
    title: "Ordering & Shipping",
    faqs: [
      {
        question: "Where do you ship to?",
        answer: "We currently ship throughout the United Kingdom. UK orders over a certain threshold qualify for free standard delivery. International shipping may be available—please contact us for details."
      },
      {
        question: "What is your returns policy?",
        answer: "We offer a satisfaction guarantee. If you're not happy with your purchase, contact us within 30 days of delivery to arrange a return. Please see our full Returns Policy page for complete terms and conditions."
      },
      {
        question: "How long does delivery take?",
        answer: "UK orders are typically dispatched within 1-2 business days. Standard delivery takes 2-5 business days. Express delivery options are available at checkout for faster delivery."
      },
    ]
  },
];

// Flatten FAQs for schema
const allFaqs = faqCategories.flatMap(category => category.faqs);

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Joint Supplement FAQs | OmKneeHealth UK"
        description="Answers to common questions about knee joint supplements, ingredients, usage and suitability. Evidence-led and UK focused."
        canonicalPath="/faq"
        keywords="knee supplement FAQ, joint supplement questions, glucosamine FAQ, collagen supplement questions"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "FAQ", url: "https://omkneehealth.com/faq" },
        ]}
      />
      <WebPageSchema
        name="Knee Joint Supplement FAQs - OmKneeHealth"
        description="Comprehensive answers to frequently asked questions about OmKneeHealth's knee joint supplement."
        url="https://omkneehealth.com/faq"
        type="FAQPage"
      />
      <FAQSchema faqs={allFaqs} />
      <Header />

      <main className="pt-28 lg:pt-48 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Common Questions
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Honest, evidence-led answers to common questions about our knee joint supplement. Can't find what you're looking for? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-serif text-xl text-foreground mb-6 pb-2 border-b border-border">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-secondary/30 rounded-lg border border-border px-6 data-[state=open]:shadow-soft"
                    >
                      <AccordionTrigger className="text-left font-sans text-sm font-medium text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mt-16">
          <div className="max-w-2xl mx-auto text-center bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="font-sans text-muted-foreground mb-6">
              We're here to help. Reach out and we'll respond within 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Contact us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary/80 transition-colors border border-border"
              >
                View supplement
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;