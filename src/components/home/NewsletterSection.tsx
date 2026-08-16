/**
 * Newsletter - restrained email capture closing the homepage.
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-28 lg:py-36 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
            The OmKnee Letter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Quiet, useful knee-health writing
          </h2>
          <p className="font-sans text-muted-foreground mb-10 max-w-md mx-auto">
            Occasional notes on movement, nutrition and looking after your knees. No noise, and you
            can unsubscribe at any time.
          </p>

          {done ? (
            <p className="font-sans text-sm text-primary" role="status">
              Thank you — we will be in touch.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 justify-center"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 sm:max-w-xs font-sans"
              />
              <Button type="submit" size="lg" className="h-12 px-8 text-sm font-sans tracking-wide">
                Subscribe
              </Button>
            </form>
          )}

          <p className="font-sans text-xs text-muted-foreground mt-8">
            Educational content only. Not medical advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
