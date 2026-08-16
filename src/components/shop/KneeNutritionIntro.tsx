/**
 * Knee Nutrition collection introduction. Copy from the approved master deck.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const KneeNutritionIntro = () => (
  <section className="py-20 bg-secondary/20">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-foreground mb-6">Knee Nutrition</h2>
        <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
          <p>Nutrition forms part of overall health and movement.</p>
          <p>
            Our Knee Nutrition collection brings together selected products with clear ingredient
            information, practical guidance and a considered approach to formulation.
          </p>
          <p>
            Supplements are intended to supplement the normal diet. They should not replace a varied
            diet, appropriate exercise or healthcare when it is needed.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          <Link
            to="/nourish"
            className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
          >
            Understand Nutrition First
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center gap-2 font-sans text-sm text-foreground hover:text-primary min-h-[44px]"
          >
            OmKneeHealth Signature Formula
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default KneeNutritionIntro;
