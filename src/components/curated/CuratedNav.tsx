/**
 * Curated Nav - Sticky navigation for jumping between categories
 * With smooth scroll and active section highlighting
 */

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "movement-support", label: "Braces & Sleeves" },
  { id: "recovery-tools", label: "Recovery Tools" },
  { id: "strength-equipment", label: "Strengthening" },
  { id: "comfort-solutions", label: "Pain Relief" },
  { id: "footwear-guidance", label: "Footwear" },
  { id: "books-resources", label: "Books" },
];

const CuratedNav = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Get the one closest to top of viewport
          const closest = visibleEntries.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr;
          });
          setActiveId(closest.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    // Observe all category sections
    categories.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-1 md:gap-2 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => handleClick(e, category.id)}
              className={cn(
                "font-sans text-xs md:text-sm whitespace-nowrap px-3 py-2 rounded-full transition-all duration-200",
                activeId === category.id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CuratedNav;
