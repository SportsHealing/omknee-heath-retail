import type { Figure } from "@/content/figures";

const WIDTH = { wide: "max-w-3xl", default: "max-w-xl", narrow: "max-w-sm" } as const;

/** Final artwork or photography, centred at a readable size. */
interface FigureImageProps {
  figure: Figure;
  className?: string;
  /** Load straight away (for figures near the top of the page). */
  eager?: boolean;
}

const FigureImage = ({ figure, className = "my-10", eager = false }: FigureImageProps) => (
  <figure className={className}>
    <img
      src={figure.src}
      alt={figure.alt}
      width={figure.width}
      height={figure.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`mx-auto h-auto w-full ${WIDTH[figure.size ?? "default"]} rounded-2xl border border-border bg-background`}
    />
  </figure>
);

export default FigureImage;
