/**
 * Homepage FAQ Section - Optimized for Featured Snippets
 * Targets high-intent UK knee supplement searches
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/FAQSchema";
import { Link } from "react-router-dom";

const homeFaqs = [
  {
    question: "What is the best supplement for knee joint health?",
    answer: "The best knee joint supplement combines evidence-informed ingredients at research-backed doses. Key ingredients to look for include hydrolysed collagen peptides, vitamin C (which contributes to normal collagen formation for cartilage function), vitamin D for bone maintenance, and botanicals like turmeric with enhanced bioavailability. OmKneeHealth's clinician-formulated supplement includes all of these in a comprehensive formula designed specifically for knee health support."
  },
  {
    question: "Do knee supplements actually work?",
    answer: "Knee supplements can provide nutritional support for joint health when they contain ingredients at appropriate doses. Vitamin C contributes to normal collagen formation for the normal function of cartilage (EFSA-authorised claim). However, supplements are not medicines and cannot treat, cure, or prevent any disease. They work best as part of a comprehensive approach including movement, nutrition, and appropriate rest. Individual responses vary significantly."
  },
  {
    question: "What helps knee joints naturally?",
    answer: "Natural knee joint support includes regular low-impact movement (swimming, cycling, walking), maintaining a healthy weight, consuming adequate protein and vitamin C for collagen support, and ensuring sufficient vitamin D. Nutritional supplements can complement these lifestyle factors by providing targeted nutrients that support normal cartilage, bone, and connective tissue function."
  },
  {
    question: "How long do knee supplements take to work?",
    answer: "Nutritional supplements support gradual, cumulative processes in the body. Many people choose to assess their experience after 8-12 weeks of consistent use, though individual timelines vary. It's important to understand that supplements provide nutritional support rather than immediate therapeutic effects—they contribute to maintenance of normal function over time, not quick fixes."
  },
  {
    question: "Are knee supplements safe to take?",
    answer: "Quality knee supplements manufactured to UK GMP standards and third-party tested for purity are generally safe for most adults. However, certain ingredients may interact with medications (particularly blood thinners) or be unsuitable during pregnancy or breastfeeding. Always consult your healthcare provider before starting any supplement, especially if you have existing health conditions or take medications."
  },
  {
    question: "What is the difference between glucosamine and collagen for knees?",
    answer: "Glucosamine is a compound naturally found in cartilage and is commonly used in joint supplements. Collagen is the main structural protein in cartilage and connective tissue. While glucosamine does not have authorised EFSA health claims, vitamin C (often paired with collagen) contributes to normal collagen formation for cartilage function. A comprehensive formula may include both alongside vitamins and minerals with proven benefits."
  }
];

const HomeFAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30">
      <FAQSchema faqs={homeFaqs} />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header - Semantic H2 for SEO */}
          <header className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Knee Joint Supplement Questions
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Evidence-based answers to common questions about knee health supplements and joint support.
            </p>
          </header>

          {/* FAQ accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {homeFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`home-faq-${index}`}
                className="bg-background rounded-lg border border-border px-6 data-[state=open]:shadow-soft"
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

          {/* Internal links for SEO */}
          <div className="mt-10 text-center space-y-2">
            <p className="font-sans text-sm text-muted-foreground">
              Want to learn more?{" "}
              <Link to="/science" className="text-primary hover:underline font-medium">
                Explore the science behind our ingredients
              </Link>
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Or{" "}
              <Link to="/product" className="text-primary hover:underline font-medium">
                view our knee joint supplement
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
