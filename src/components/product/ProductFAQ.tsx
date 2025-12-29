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

const faqs = [
  {
    question: "What can I realistically expect from this supplement?",
    answer: "We want to set honest expectations. This formula provides nutritional support for joint health—it supplies nutrients that play roles in maintaining normal cartilage, connective tissue, and muscle function. It is not a treatment for any medical condition. Individual responses vary, and supplements work best as part of a comprehensive approach including movement, nutrition, and appropriate rest. Many people choose to assess after 8-12 weeks of consistent use."
  },
  {
    question: "Why did you choose these specific ingredients and doses?",
    answer: "Each ingredient was selected based on scientific literature and clinical reasoning. Glucosamine and chondroitin are included at doses commonly used in research. Vitamin D addresses a widespread deficiency relevant to musculoskeletal health. Turmeric provides antioxidant support, paired with piperine to address its naturally poor absorption. Manganese and copper support normal connective tissue formation—an EFSA-approved claim. We avoided 'kitchen sink' formulations that include everything; instead, we focused on ingredients with clear rationales."
  },
  {
    question: "Is there research supporting these ingredients?",
    answer: "Yes, but we believe in nuance. Glucosamine and chondroitin have been extensively studied, with some trials showing positive results and others showing no significant difference from placebo. The research landscape is mixed, and we don't claim otherwise. Vitamin D, manganese, and copper have EFSA-approved health claims for their roles in muscle function, bone health, and connective tissue. Curcumin has documented antioxidant properties. We present what the evidence shows—not more, not less."
  },
  {
    question: "Will this cure my joint pain?",
    answer: "No. This is a food supplement, not a medicine. It cannot diagnose, treat, cure, or prevent any disease. If you're experiencing joint pain, we strongly recommend consulting a healthcare professional for proper evaluation. Pain is a symptom that deserves clinical attention. This supplement may be used alongside—not instead of—appropriate medical care."
  },
  {
    question: "Can I take this with my current medications?",
    answer: "We recommend consulting your healthcare provider or pharmacist before combining this supplement with any medication. This is particularly important if you take blood-thinning medications (glucosamine may affect blood clotting), diabetes medications (glucosamine may affect glucose metabolism), or if you're on multiple medications. Your healthcare provider can advise based on your specific situation."
  },
  {
    question: "Why is glucosamine derived from shellfish?",
    answer: "Marine-derived glucosamine sulphate is the form most commonly used in research and provides the sulphate component that may be relevant to its effects. We acknowledge this makes our product unsuitable for those with shellfish allergies. We're transparent about this limitation on our packaging and website. Vegetarian alternatives exist but use different forms of glucosamine with different research profiles."
  },
  {
    question: "How is this different from cheaper supplements?",
    answer: "We can't speak to every product, but we can explain our approach: clinician-led formulation, doses informed by research, third-party testing for every batch, no proprietary blends, UK GMP-certified manufacturing, and transparent communication about what supplements can and cannot do. Whether that's worth the price difference is a decision we leave to you. We don't claim our formula is 'the best'—we claim it's thoughtfully made and honestly represented."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "That's a real possibility. Individual responses to supplements vary, and we don't promise results. If you try our product and don't feel it's right for you, we offer returns on unopened products within 30 days. We'd rather have an honest relationship than a dissatisfied customer. If you're experiencing significant joint issues, a supplement is unlikely to be the solution—please seek appropriate clinical evaluation."
  }
];

const ProductFAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
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
