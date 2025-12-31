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
    question: "What's the difference between glucosamine sulphate and glucosamine hydrochloride?",
    answer: "These are two different salt forms of glucosamine. Most clinical research has focused on glucosamine sulphate, which is why we use this form in our formula. Some researchers suggest the sulphate component may itself be relevant, as sulphur is important for cartilage structure. We've chosen the form with the most research behind it."
  },
  {
    question: "How long do joint supplements take to show effects?",
    answer: "Joint supplements are designed for long-term support rather than immediate effects. Most research studies assess outcomes after 8-12 weeks of consistent use, and some extend to 6 months or longer. We recommend viewing supplements as part of an ongoing routine rather than expecting quick results. Patience and consistency matter."
  },
  {
    question: "Are joint supplements backed by robust clinical evidence?",
    answer: "The evidence is mixed — and we believe you deserve to know that. Some well-designed studies show positive trends, particularly for glucosamine sulphate, while others show more modest effects. Research quality varies considerably. We've tried to be transparent about what the evidence does and doesn't show. We encourage informed decision-making alongside healthy scepticism."
  },
  {
    question: "Can I take joint supplements alongside my prescribed medications?",
    answer: "While our ingredients are generally well-tolerated, we always recommend consulting your healthcare provider before combining supplements with prescribed medications. This is particularly important if you take blood thinners, diabetes medication, or any other regular medications. Your healthcare team knows your individual situation best."
  },
  {
    question: "Why do you include turmeric if absorption is poor?",
    answer: "You're right that curcumin (the active compound in turmeric) has notoriously poor bioavailability on its own. This is precisely why we pair it with piperine (black pepper extract), which research suggests can significantly improve curcumin absorption. Without this combination, much of the curcumin would simply pass through unabsorbed. This is evidence-based formulation in practice."
  },
  {
    question: "Is there an age when joint supplements become more relevant?",
    answer: "Joint concerns can arise at any age, though they become more common after 40-50. Some people take joint supplements proactively as part of maintaining their health; others start when they notice changes. There's no single 'right' age — it depends on individual circumstances, activity levels, and personal health goals. We don't believe in one-size-fits-all recommendations."
  },
  {
    question: "What about collagen supplements for joints?",
    answer: "Collagen supplements have become popular for joint health. The theory is that consuming collagen provides building blocks for the body's own collagen synthesis. However, dietary collagen is broken down into amino acids during digestion, and there's no guarantee these will be directed to joint tissue specifically. We include collagen at research-informed doses while being honest about these limitations."
  },
  {
    question: "Why don't some of your ingredients have EFSA health claims?",
    answer: "EFSA (European Food Safety Authority) has strict criteria for authorising health claims. Many popular joint ingredients — including glucosamine, chondroitin, collagen, and curcumin — do not have authorised claims because the evidence didn't meet EFSA's threshold, or applications weren't submitted. This doesn't necessarily mean they're ineffective, but we believe you should know which claims are authorised and which aren't."
  },
  {
    question: "Are there any side effects I should be aware of?",
    answer: "Our ingredients are generally well-tolerated. Some people experience mild digestive discomfort when starting glucosamine. Depending on the variant, our products may contain allergens from fish or shellfish — always check the label. Pregnant or breastfeeding women and those on medications should consult their healthcare provider before use."
  }
];

const ScienceFAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Questions & Answers
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="text-muted-foreground font-sans">
              Deeper questions about joint health, research, and our approach — answered honestly.
            </p>
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
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 font-sans">
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
