import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  links: RelatedLink[];
  variant?: "default" | "compact" | "card";
}

/**
 * RelatedContent - Internal linking component for SEO
 * 
 * Improves crawlability and distributes page authority
 * Use on content pages to link to related resources
 */
const RelatedContent = ({ 
  title = "Related Reading", 
  links, 
  variant = "default" 
}: RelatedContentProps) => {
  if (variant === "compact") {
    return (
      <nav aria-label="Related content" className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
        <ul className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  if (variant === "card") {
    return (
      <nav aria-label="Related content" className="space-y-4">
        <h3 className="font-serif text-lg text-foreground">{title}</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all"
            >
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                {link.title}
              </p>
              {link.description && (
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {link.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  // Default variant
  return (
    <nav aria-label="Related content" className="py-8 border-t border-border">
      <h3 className="font-serif text-lg text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/**
 * Predefined link collections for consistent internal linking
 */
export const ingredientLinks: RelatedLink[] = [
  { title: "Collagen Peptides", href: "/ingredients/collagen", description: "How collagen supports cartilage structure" },
  { title: "Curcumin", href: "/ingredients/curcumin", description: "Turmeric extract and joint comfort" },
  { title: "Boswellia Serrata", href: "/ingredients/boswellia", description: "Traditional botanical for joint health" },
  { title: "Glucosamine", href: "/ingredients/glucosamine", description: "Building blocks for cartilage" },
  { title: "Chondroitin", href: "/ingredients/chondroitin", description: "Supporting cartilage hydration" },
  { title: "Vitamin D", href: "/ingredients/vitamin-d", description: "Essential for bone and muscle function" },
  { title: "Trace Minerals", href: "/ingredients/trace-minerals", description: "Zinc, copper, and boron for connective tissue" },
];

export const blogLinks: RelatedLink[] = [
  { title: "Best Supplement for Knee Cartilage", href: "/journal/best-supplement-for-knee-cartilage" },
  { title: "Do Collagen Supplements Help Knee Joints?", href: "/journal/do-collagen-supplements-help-knee-joints" },
  { title: "Supplements for Osteoarthritis: The Evidence", href: "/journal/supplements-for-knee-osteoarthritis-evidence" },
  { title: "Knee Supplements vs Painkillers", href: "/journal/knee-pain-supplements-vs-painkillers" },
  { title: "Supporting Knee Joints as You Age", href: "/journal/support-knee-joints-as-you-age" },
];

export const corePageLinks: RelatedLink[] = [
  { title: "Our Knee Supplement", href: "/product", description: "Clinician-formulated formula" },
  { title: "Get Your Knee Score", href: "/knee-score", description: "Understand your knee health" },
  { title: "The Science", href: "/science", description: "Evidence behind our approach" },
  { title: "Learn About Knee Health", href: "/learn", description: "Educational resources" },
];

export default RelatedContent;