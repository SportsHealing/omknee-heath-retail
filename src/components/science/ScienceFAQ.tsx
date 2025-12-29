import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between glucosamine sulphate and glucosamine hydrochloride?",
    answer: "These are two different salt forms of glucosamine. Most clinical research has focused on glucosamine sulphate, which is why we use this form in our formula. Some researchers believe the sulphate component may itself be beneficial, as sulphur is important for cartilage structure."
  },
  {
    question: "How long do joint supplements take to show effects?",
    answer: "Joint supplements are designed for long-term support rather than immediate effects. Most research studies assess outcomes after 8-12 weeks of consistent use, and some extend to 6 months or longer. We recommend using supplements as part of an ongoing routine rather than expecting quick results."
  },
  {
    question: "Are joint supplements backed by robust clinical evidence?",
    answer: "The evidence for joint supplements is mixed. Some well-designed studies show positive trends, particularly for glucosamine sulphate, while others show more modest effects. Research quality varies considerably. We've tried to be transparent about what the evidence does and doesn't show, and we encourage healthy scepticism alongside informed decision-making."
  },
  {
    question: "Can I take joint supplements alongside my prescribed medications?",
    answer: "While our ingredients are generally well-tolerated, we always recommend consulting your healthcare provider before combining supplements with prescribed medications. This is particularly important if you take blood thinners, diabetes medication, or any other regular medications."
  },
  {
    question: "Why do you include turmeric if absorption is poor?",
    answer: "You're right that curcumin (the active compound in turmeric) has notoriously poor bioavailability on its own. This is precisely why we pair it with piperine (black pepper extract), which research suggests can significantly improve curcumin absorption. Without this combination, much of the turmeric would simply pass through unabsorbed."
  },
  {
    question: "Is there an age when joint supplements become more relevant?",
    answer: "Joint concerns can arise at any age, though they become more common after 40-50. Some people take joint supplements proactively as part of maintaining their health, while others start when they notice changes. There's no single 'right' age — it depends on individual circumstances, activity levels, and personal health goals."
  },
  {
    question: "What about collagen supplements for joints?",
    answer: "Collagen supplements have become popular for joint health. The theory is that consuming collagen provides building blocks for your body's own collagen synthesis. However, dietary collagen is broken down into amino acids during digestion, and there's no guarantee these will be directed to joint tissue specifically. The research is still evolving."
  },
  {
    question: "Are there any side effects I should be aware of?",
    answer: "Our ingredients are generally well-tolerated. Some people experience mild digestive discomfort when starting glucosamine. Those with shellfish allergies should note that our glucosamine is derived from shellfish. Pregnant or breastfeeding women and those on medications should consult their healthcare provider before use."
  }
];

const ScienceFAQ = () => {
  return (
    <section className="py-16 md:py-20 bg-om-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Deeper questions about joint health, research, and our approach.
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
        </div>
      </div>
    </section>
  );
};

export default ScienceFAQ;
