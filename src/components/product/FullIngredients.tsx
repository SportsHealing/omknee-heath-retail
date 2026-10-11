/**
 * Full ingredients and nutrition information (disclosure level 3).
 * The only place on the site that shows ingredient amounts. Closed by default.
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PlaceholderText from "@/components/PlaceholderText";
import { FORMULA, FORMULA_DETAILS } from "@/content/supplement";

const details: { label: string; text: string }[] = [
  { label: "Serving", text: FORMULA_DETAILS.serving },
  { label: "Servings per pack", text: FORMULA_DETAILS.servingsPerPack },
  { label: "Format", text: FORMULA_DETAILS.format },
  { label: "Ingredients", text: FORMULA_DETAILS.ingredients },
  { label: "Allergens", text: FORMULA_DETAILS.allergens },
  { label: "Warnings", text: FORMULA_DETAILS.warnings },
  { label: "Storage", text: FORMULA_DETAILS.storage },
  { label: "Business name and address", text: FORMULA_DETAILS.business },
];

const FullIngredients = () => (
  <section id="ingredients" className="py-16 md:py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="full-ingredients" className="border-y border-border">
            <AccordionTrigger className="font-serif text-lg md:text-xl text-foreground text-left">
              Full ingredients and nutrition information
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm font-sans mb-8">
                  <thead>
                    <tr className="border-b border-border text-left text-foreground">
                      <th scope="col" className="py-2 pr-2 sm:pr-4 font-medium">Per daily serving (13.8 g)</th>
                      <th scope="col" className="py-2 pr-2 sm:pr-4 font-medium whitespace-nowrap">Amount</th>
                      <th scope="col" className="py-2 font-medium whitespace-nowrap">% NRV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMULA.map((row) => (
                      <tr key={row.name} className="border-b border-border/50 text-muted-foreground">
                        <td className="py-2 pr-2 sm:pr-4">{row.name}</td>
                        <td className="py-2 pr-2 sm:pr-4"><PlaceholderText text={row.amount} /></td>
                        <td className="py-2 whitespace-nowrap">{row.nrv ? <PlaceholderText text={row.nrv} /> : "*"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mb-6">NRV: Nutrient Reference Value. * No NRV established.</p>
              <dl className="space-y-4 text-sm font-sans">
                {details.map((item) => (
                  <div key={item.label}>
                    <dt className="font-medium text-foreground">{item.label}</dt>
                    <dd className="text-muted-foreground"><PlaceholderText text={item.text} /></dd>
                  </div>
                ))}
              </dl>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default FullIngredients;
