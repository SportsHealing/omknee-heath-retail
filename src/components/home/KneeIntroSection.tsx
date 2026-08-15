/**
 * Knee Intro Section - brief introduction to the knee as a joint
 * Deeper clinical detail is signposted to SportsHealing.
 */

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const KneeIntroSection = () => {
  return (
    <section id="the-knee" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
            Start Here
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
            Your knee is not just a hinge
          </h2>
          <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
            <p>
              The knee is a living, adaptive system. It is the largest joint in the body, where
              the thigh bone (femur), shin bone (tibia) and kneecap (patella) meet, wrapped in a
              capsule of tissue that produces lubricating synovial fluid.
            </p>
            <p>
              Bone, cartilage, meniscus, ligaments, tendons, muscles and nerves all work together
              in concert every time you move — bending, straightening, rolling, gliding and
              rotating through a remarkable range of motion.
            </p>
            <p className="text-foreground font-medium">
              Understanding your knee comes first. Everything else follows from that.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 font-sans text-sm tracking-wide" asChild>
              <a
                href="https://www.sportshealing.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore detailed knee anatomy at SportsHealing"
              >
                Detailed knee anatomy at SportsHealing
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 font-sans text-sm tracking-wide" asChild>
              <a href="/learn">Knee basics guide</a>
            </Button>
          </div>

          <p className="mt-6 font-sans text-xs text-muted-foreground">
            For in-depth clinical detail, assessment and treatment pathways, we redirect you to{" "}
            <a
              href="https://www.sportshealing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              www.sportshealing.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default KneeIntroSection;
