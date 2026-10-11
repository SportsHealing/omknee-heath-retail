import type { DiagramId } from "@/content/diagrams";

interface DiagramPlaceholderProps {
  id: DiagramId;
  title: string;
  brief: string;
  /** Final artwork. When set, it renders instead of the placeholder card. */
  image?: string;
}

/** A 16:9 placeholder for diagram artwork still to come (Appendix C). */
const DiagramPlaceholder = ({ id, title, brief, image }: DiagramPlaceholderProps) => (
  <figure className="my-10">
    {image ? (
      <img src={image} alt={brief} loading="lazy" className="w-full rounded-2xl" />
    ) : (
      <div
        role="img"
        aria-label={`${title}. ${brief}`}
        className="aspect-video w-full rounded-2xl border-2 border-dashed border-gold bg-secondary/40 flex flex-col items-center justify-center gap-2 p-6 text-center"
      >
        <span className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-primary/70">Diagram {id}</span>
        <span className="font-serif text-lg md:text-xl text-foreground">{title}</span>
        <span className="font-sans text-xs text-muted-foreground max-w-md leading-relaxed">{brief}</span>
      </div>
    )}
  </figure>
);

export default DiagramPlaceholder;
