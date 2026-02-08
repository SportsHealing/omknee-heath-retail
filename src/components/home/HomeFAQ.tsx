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
    question: "What is the best knee joint supplement in the UK?",
    answer: "The best UK knee joint supplement combines evidence-informed ingredients at research-backed doses, manufactured to UK GMP standards. Key ingredients to look for include hydrolysed collagen peptides, vitamin C (which contributes to normal collagen formation for cartilage function—an EFSA-authorised claim), vitamin D for bone and muscle maintenance, and botanicals like turmeric with enhanced bioavailability. OmKneeHealth's clinician-formulated supplement is designed and manufactured in the UK specifically for British joint health needs."
  },
  {
    question: "Do knee supplements actually work?",
    answer: "Knee supplements can provide nutritional support for joint health when they contain ingredients at appropriate doses. Vitamin C contributes to normal collagen formation for the normal function of cartilage (EFSA-authorised claim). However, supplements are not medicines and cannot treat, cure, or prevent any disease. They work best as part of a comprehensive approach including movement, nutrition, and appropriate rest. Individual responses vary significantly."
  },
  {
    question: "Why should I choose a UK-made knee supplement?",
    answer: "UK-manufactured supplements must meet strict GMP (Good Manufacturing Practice) standards enforced by the MHRA. This means rigorous quality control, batch testing, and traceability. UK formulations also ensure compliance with EFSA regulations for health claims—protecting you from misleading marketing. Additionally, UK-based companies offer local customer support and faster delivery. OmKneeHealth is formulated, manufactured, and tested entirely within the United Kingdom."
  },
  {
    question: "What helps knee joints naturally in British weather?",
    answer: "British weather presents unique challenges for knee health. The UK's northern latitude limits vitamin D production from sunlight October–March, making supplementation particularly relevant. Natural knee joint support includes regular low-impact movement (even in poor weather), maintaining a healthy weight, consuming adequate protein and vitamin C, and ensuring sufficient vitamin D during darker months. Nutritional supplements can complement these lifestyle factors."
  },
  {
    question: "How long do knee supplements take to work?",
    answer: "Nutritional supplements support gradual, cumulative processes in the body. Many people choose to assess their experience after 8-12 weeks of consistent use, though individual timelines vary. It's important to understand that supplements provide nutritional support rather than immediate therapeutic effects—they contribute to maintenance of normal function over time, not quick fixes."
  },
  {
    question: "Are knee supplements safe to take with NHS medications?",
    answer: "While quality knee supplements manufactured to UK GMP standards are generally safe, certain ingredients may interact with medications. This is particularly important if you take warfarin or blood thinners (some supplements contain vitamin K), or diabetes medications. Always consult your GP, pharmacist, or NHS healthcare provider before starting any supplement, especially if you take prescription medications or have existing health conditions."
  },
  {
    question: "What is the difference between glucosamine and collagen for knees?",
    answer: "Glucosamine is a compound naturally found in cartilage, commonly used in joint supplements. Collagen is the main structural protein in cartilage and connective tissue. While glucosamine does not have authorised EFSA health claims, vitamin C (often paired with collagen) contributes to normal collagen formation for cartilage function. A comprehensive formula like OmKneeHealth includes both alongside vitamins and minerals with proven benefits."
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
              UK Knee Joint Supplement Questions
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Evidence-based answers to common questions about knee health supplements in the United Kingdom.
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
