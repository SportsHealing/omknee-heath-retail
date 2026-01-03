/**
 * Science FAQ - Detailed questions about research and approach
 * Maintains honest, evidence-informed tone
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Glucosamine sulphate vs hydrochloride?",
    answer: "We use the sulphate form—it has the most clinical research. Sulphur itself may be relevant for cartilage structure."
  },
  {
    question: "How long before I notice anything?",
    answer: "Joint supplements are for long-term support. Most studies assess outcomes after 8-12 weeks of consistent use."
  },
  {
    question: "Is the clinical evidence strong?",
    answer: "Mixed. Some well-designed studies show positive trends; others show modest effects. We present both."
  },
  {
    question: "Can I take this with medications?",
    answer: "Consult your healthcare provider, particularly if you take blood thinners or diabetes medication."
  },
  {
    question: "Why include turmeric if absorption is poor?",
    answer: "We pair curcumin with piperine, which research shows increases absorption by approximately 2000%."
  },
  {
    question: "Why don't some ingredients have EFSA claims?",
    answer: "EFSA has strict criteria. Many joint ingredients didn't meet their threshold—this doesn't necessarily mean ineffective."
  }
];

const ScienceFAQ = () => {
  return (
    <section className="py-32 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Questions
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto" />
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-background rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 font-sans">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 font-sans text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ScienceFAQ;
