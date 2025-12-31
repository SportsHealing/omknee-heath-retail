/**
 * Product FAQ - Evidence-Based Answers
 * Honest, clinical responses
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/FAQSchema";

const faqs = [
  {
    question: "What can I realistically expect from this supplement?",
    answer: "We want to set honest expectations. This formula provides nutritional support for joint health—it supplies nutrients that contribute to the maintenance of normal cartilage, connective tissue, bones, and muscle function (EFSA-authorised claims). It is not a treatment for any medical condition. Individual responses vary, and supplements work best as part of a comprehensive approach including movement, nutrition, and appropriate rest. Many people choose to assess after 8-12 weeks of consistent use."
  },
  {
    question: "Why did you choose these specific ingredients and doses?",
    answer: "Each ingredient was selected based on scientific literature and clinical reasoning. We include 10g hydrolysed collagen peptides, glucosamine and chondroitin at research-informed doses, hyaluronic acid for joint support, and curcumin paired with piperine to address its naturally poor absorption. Vitamin C contributes to normal collagen formation (EFSA claim). Vitamin D and K2 support normal bone health. Magnesium supports normal muscle function. Copper and manganese contribute to normal connective tissue formation. We focused on ingredients with clear, evidence-based rationales."
  },
  {
    question: "What health claims are authorised for these ingredients?",
    answer: "We only make claims authorised by EFSA (European Food Safety Authority). These include: Vitamin C contributes to normal collagen formation for the normal function of cartilage and bones. Vitamin D contributes to the maintenance of normal bones and muscle function. Vitamin K contributes to the maintenance of normal bones. Manganese and copper contribute to normal connective tissue formation. Magnesium contributes to normal muscle function. Zinc contributes to normal protein synthesis. Glucosamine, chondroitin, collagen, hyaluronic acid, curcumin, and boswellia do not have authorised EFSA health claims."
  },
  {
    question: "Will this cure my joint pain?",
    answer: "No. This is a food supplement, not a medicine. It cannot diagnose, treat, cure, or prevent any disease. If you're experiencing joint pain, we strongly recommend consulting a healthcare professional for proper evaluation. Pain is a symptom that deserves clinical attention. This supplement may be used alongside—not instead of—appropriate medical care."
  },
  {
    question: "Can I take this with my current medications?",
    answer: "We recommend consulting your healthcare provider or pharmacist before combining this supplement with any medication. This is particularly important if you take warfarin or other vitamin K antagonists (this product contains Vitamin K2), blood-thinning medications, diabetes medications, or if you're on multiple medications. The black pepper extract (piperine) may affect the metabolism of certain medicines. Your healthcare provider can advise based on your specific situation."
  },
  {
    question: "What allergens does this product contain?",
    answer: "Depending on the variant, this product contains collagen from marine (fish) or bovine sources. Glucosamine may be derived from shellfish or vegan fermentation—check the label for your specific variant. We clearly declare all allergens on the packaging. If you have allergies to fish, shellfish, or any other ingredients, please check the label carefully before use."
  },
  {
    question: "How is this different from cheaper supplements?",
    answer: "We can't speak to every product, but we can explain our approach: clinician-led formulation, doses informed by research, third-party testing for every batch, no proprietary blends, UK GMP-certified manufacturing, and transparent communication about what supplements can and cannot do. We only make EFSA-authorised health claims. Whether that's worth the price difference is a decision we leave to you."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "That's a real possibility. Individual responses to supplements vary, and we don't promise specific results. If you try our product and don't feel it's right for you, we offer returns on unopened products within 30 days. We'd rather have an honest relationship than a dissatisfied customer. If you're experiencing significant joint issues, a supplement is unlikely to be the solution—please seek appropriate clinical evaluation."
  }
];

const ProductFAQ = () => {
  return (
    <section id="product-faq" className="py-20 md:py-28 bg-secondary scroll-mt-20">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Questions & Answers
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Honest Answers to Common Questions
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground">
              We believe you deserve straightforward information, not marketing spin.
            </p>
          </div>

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

          {/* Contact */}
          <div className="mt-10 text-center">
            <p className="font-sans text-sm text-muted-foreground">
              Have a question we haven't answered?{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
