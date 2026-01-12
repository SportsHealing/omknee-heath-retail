/**
 * Curated Nav - Sticky navigation for jumping between categories
 */

const categories = [
  { id: "movement-support", label: "Braces & Sleeves" },
  { id: "recovery-tools", label: "Recovery Tools" },
  { id: "strength-equipment", label: "Strengthening" },
  { id: "comfort-solutions", label: "Pain Relief" },
  { id: "footwear-guidance", label: "Footwear" },
];

const CuratedNav = () => {
  return (
    <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-1 md:gap-2 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="font-sans text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap px-3 py-2 rounded-full hover:bg-muted/50"
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
