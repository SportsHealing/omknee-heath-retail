/**
 * Curated Category - Reusable category section for curated products
 */

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  brand?: string;
  description: string;
  clinicalRationale: string;
  priceRange?: string;
  considerations?: string;
  externalLink?: string;
}

interface CuratedCategoryProps {
  title: string;
  subtitle: string;
  introduction: string;
  products: Product[];
  disclaimer?: string;
}

const CuratedCategory = ({ 
  title, 
  subtitle, 
  introduction, 
  products,
  disclaimer 
}: CuratedCategoryProps) => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category header */}
          <div className="mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {subtitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              {title}
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {introduction}
            </p>
          </div>

          {/* Products */}
          <div className="space-y-12">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-muted/30 rounded-lg p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {product.name}
                    </h3>
                    {product.brand && (
                      <p className="font-sans text-sm text-muted-foreground">
                        {product.brand}
                      </p>
                    )}
                  </div>
                  {product.priceRange && (
                    <span className="font-sans text-sm text-muted-foreground whitespace-nowrap">
                      {product.priceRange}
                    </span>
                  )}
                </div>

                <p className="font-sans text-sm text-foreground/80 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="bg-background/50 rounded p-5 mb-6">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Clinical Rationale
                  </p>
                  <p className="font-serif text-sm text-foreground/90 leading-relaxed">
                    {product.clinicalRationale}
                  </p>
                </div>

                {product.considerations && (
                  <p className="font-sans text-xs text-muted-foreground mb-6">
                    <span className="font-medium">Note:</span> {product.considerations}
                  </p>
                )}

                {product.externalLink && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs border-foreground/20"
                    asChild
                  >
                    <a 
                      href={product.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Learn More <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Category disclaimer */}
          {disclaimer && (
            <p className="font-sans text-xs text-muted-foreground mt-10 text-center">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CuratedCategory;
