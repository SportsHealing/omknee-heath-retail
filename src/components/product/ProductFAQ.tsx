/**
 * Product FAQ - Evidence-Based Answers
 * Optimized for featured snippets with high-intent purchase keywords
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/FAQSchema";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is the best collagen supplement for knee cartilage?",
    answer: "The best collagen supplement for knee cartilage contains hydrolysed collagen peptides (for absorption) paired with vitamin C, which contributes to normal collagen formation for the normal function of cartilage (EFSA-authorised claim). OmKneeHealth provides 10g hydrolysed collagen peptides—the upper range used in clinical research—plus 125% NRV vitamin C to support the body's natural collagen synthesis processes. We also include glucosamine, chondroitin, and hyaluronic acid, which are natural components of cartilage tissue."
  },
  {
    question: "Does collagen help with knee joint pain?",
    answer: "Collagen supplements cannot treat, cure, or relieve knee pain—they are food supplements, not medicines. However, collagen peptides provide amino acids that the body uses in its natural collagen synthesis processes. When paired with vitamin C (which contributes to normal cartilage function), collagen may support the nutritional foundations of joint health. If you're experiencing knee pain, please consult a healthcare professional for proper evaluation and treatment."
  },
  {
    question: "How long does it take for knee supplements to work?",
    answer: "Nutritional supplements support gradual, cumulative processes rather than providing immediate effects. Many people choose to assess their experience after 8-12 weeks of consistent daily use, though individual timelines vary significantly. It's important to understand that supplements provide nutritional support over time—they don't work like medicines. Results depend on many factors including diet, activity levels, and individual physiology."
  },
  {
    question: "What is the difference between glucosamine and collagen for knees?",
    answer: "Glucosamine is an amino sugar naturally found in cartilage, serving as a building block for the cartilage matrix. Collagen is the main structural protein in cartilage, tendons, and ligaments. Our formula includes both: 1,500mg glucosamine sulphate and 10g hydrolysed collagen peptides, reflecting the doses most commonly used in research. Neither has EFSA-authorised health claims, but we include vitamin C which contributes to normal collagen formation for cartilage function."
  },
  {
    question: "Is this supplement suitable for osteoarthritis?",
    answer: "This is a food supplement providing nutritional support—it cannot diagnose, treat, cure, or prevent osteoarthritis or any other medical condition. If you have been diagnosed with osteoarthritis, we recommend consulting your GP or specialist before starting any supplement. Nutritional supplements may complement but never replace appropriate medical care, prescribed treatments, or clinical guidance for managing health conditions."
  },
  {
    question: "Why is vitamin C important in a knee cartilage supplement?",
    answer: "Vitamin C is essential because it contributes to normal collagen formation for the normal function of cartilage (EFSA-authorised claim). Collagen is the primary structural protein in cartilage, and vitamin C acts as a cofactor for the enzymes that stabilise collagen molecules. Without adequate vitamin C, the body cannot properly synthesise and maintain collagen. Our formula provides 125% NRV vitamin C specifically to support normal cartilage function."
  },
  {
    question: "Can I take this knee supplement with other medications?",
    answer: "We recommend consulting your healthcare provider or pharmacist before combining this supplement with any medication. This is particularly important if you take: warfarin or vitamin K antagonists (this product contains vitamin K2), blood-thinning medications, diabetes medications, or multiple medications. The piperine (black pepper extract) may affect medication metabolism. Your healthcare provider can advise based on your specific situation."
  },
  {
    question: "What allergens does this knee supplement contain?",
    answer: "Depending on the variant: Marine Formula contains collagen from fish and glucosamine from shellfish. Vegetarian Formula uses bovine collagen and vegan-fermented glucosamine. All allergens are clearly declared on packaging. If you have allergies to fish, shellfish, or any ingredients, check the label carefully. Both variants are free from gluten, soy, and artificial colours."
  },
  {
    question: "How is OmKneeHealth different from other knee supplements?",
    answer: "Our approach: UK clinician-formulated by healthcare professionals with knee expertise, evidence-informed doses matching research literature, third-party batch testing for purity, UK GMP-certified manufacturing, no proprietary blends (full transparency), and honest communication about what supplements can and cannot do. We only make EFSA-authorised health claims and clearly disclose when ingredients lack authorised claims."
  },
  {
    question: "What if this knee supplement doesn't work for me?",
    answer: "Individual responses to supplements vary—we cannot promise specific results. If you try our product and don't feel it's right for you, we offer returns on unopened products within 30 days. We'd rather have honest relationships than dissatisfied customers. If you're experiencing significant knee issues, please seek clinical evaluation—a supplement is unlikely to address underlying medical conditions."
  }
];

const ProductFAQ = () => {
  return (
    <section id="product-faq" className="py-32 md:py-40 bg-secondary scroll-mt-20">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header - SEO optimized */}
          <header className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Knee Cartilage Supplement Questions
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
              Evidence-based answers about collagen for knees, cartilage support, and what to expect from nutritional joint supplements.
            </p>
          </header>

          {/* FAQ accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
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
          <div className="mt-12 text-center space-y-3">
            <p className="font-sans text-sm text-muted-foreground">
              Want to understand the science?{" "}
              <Link to="/science" className="text-primary hover:underline font-medium">
                Explore our ingredient research
              </Link>
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Not sure if supplements are right for you?{" "}
              <Link to="/assessment" className="text-primary hover:underline font-medium">
                Take our free knee assessment
              </Link>
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Have a specific question?{" "}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
