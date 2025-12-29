import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long before I might notice any effects?",
    answer: "Joint supplements are designed for long-term support rather than immediate effects. Many people choose to use them consistently for 8-12 weeks as part of their routine. Individual experiences vary, and this supplement is designed to support — not replace — a healthy lifestyle."
  },
  {
    question: "Can I take this alongside other supplements or medications?",
    answer: "While our ingredients are generally well-tolerated, we always recommend consulting with your healthcare provider before combining supplements, especially if you're taking any medications. This is particularly important if you take blood thinners or diabetes medication."
  },
  {
    question: "Is this product suitable for vegetarians?",
    answer: "Our current formulation contains glucosamine derived from shellfish, so it is not suitable for vegetarians or those with shellfish allergies. We're always exploring ways to expand our range to meet different dietary needs."
  },
  {
    question: "What makes this different from other joint supplements?",
    answer: "Our formula is developed with input from clinical professionals who specialise in musculoskeletal health. We focus on evidence-informed ingredient selection, meaningful dosages, and transparent communication about what supplements can and cannot do."
  },
  {
    question: "Is this a subscription? Can I cancel anytime?",
    answer: "We offer both one-time purchases and a flexible subscription option. Subscribers save 15% and can pause, skip, or cancel at any time with no commitment. You're always in control."
  },
  {
    question: "Where is this product made?",
    answer: "Our supplements are manufactured in the UK in facilities that meet strict quality and safety standards. Every batch is tested to ensure it meets our specifications."
  },
  {
    question: "Will this cure my joint pain?",
    answer: "We want to be completely transparent: this is a food supplement, not a medicine. It is not designed to diagnose, treat, cure, or prevent any disease. If you're experiencing joint pain, we encourage you to consult with a healthcare professional for proper evaluation."
  }
];

const ProductFAQ = () => {
  return (
    <section className="py-16 md:py-20 bg-om-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Honest answers to help you make an informed decision.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Have another question?{" "}
              <a href="/contact" className="text-om-forest hover:underline font-medium">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-faq
          TYPE: Custom HTML Section OR Shopify FAQ App
          
          Can use Shopify's native FAQ blocks or a custom 
          accordion section. Good for SEO with FAQ schema.
        */}
      </div>
    </section>
  );
};

export default ProductFAQ;
