/**
 * Renders editorial content blocks (src/content/contentBlocks.ts) for pillar
 * pages and the Wellness hub, so every page shares one layout system.
 */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import DiagramPlaceholder from "@/components/DiagramPlaceholder";
import FigureImage from "@/components/FigureImage";
import { FIGURES } from "@/content/figures";
import PlaceholderText from "@/components/PlaceholderText";
import { Button } from "@/components/ui/button";
import { DIAGRAMS } from "@/content/diagrams";
import type {
  ContentBlock,
  ContentClosing,
  ContentCta,
  ContentLink,
  ContentSection,
  ListItem,
  TableCell,
} from "@/content/contentBlocks";
import { trackDiagnosePathway, trackEcosystemTransfer, trackTreatPathway } from "@/lib/analytics";

const T = ({ text }: { text: string }) => <PlaceholderText text={text} />;

const linkClass = "text-primary underline underline-offset-4 hover:text-foreground";

/** Inline text link. External links open in a new tab. */
export const InlineLink = ({ link, className = linkClass }: { link: ContentLink; className?: string }) =>
  link.href ? (
    <a href={link.href} target="_blank" rel="noopener" className={className}>
      <T text={link.label} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link to={link.to ?? "/"} className={className}>
      <T text={link.label} />
    </Link>
  );

const Cta = ({ cta }: { cta: ContentCta }) => {
  const handle = () => {
    if (cta.diagnosePathway) trackDiagnosePathway(cta.diagnosePathway);
    if (cta.treatPathway) trackTreatPathway(cta.treatPathway);
    if (cta.ecosystem) trackEcosystemTransfer(cta.ecosystem);
  };
  const Icon = cta.href ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <T text={cta.label} />
      <Icon className="w-4 h-4" aria-hidden="true" />
      {cta.href ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );
  const isPlaceholder = cta.href?.startsWith("[");

  return (
    <div className="mt-6">
      {cta.style === "button" ? (
        isPlaceholder ? (
          <Button size="lg" disabled className="gap-2">
            {inner}
          </Button>
        ) : (
          <Button size="lg" asChild className="gap-2">
            {cta.href ? (
              <a href={cta.href} target="_blank" rel="noopener" onClick={handle}>{inner}</a>
            ) : (
              <Link to={cta.to ?? "/"} onClick={handle}>{inner}</Link>
            )}
          </Button>
        )
      ) : cta.href ? (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener"
          onClick={handle}
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          {inner}
        </a>
      ) : (
        <Link
          to={cta.to ?? "/"}
          onClick={handle}
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          {inner}
        </Link>
      )}
      {cta.destinationLabel ? (
        <span className="block font-sans text-xs text-muted-foreground">Destination: {cta.destinationLabel}</span>
      ) : null}
      {isPlaceholder ? (
        <span className="block mt-2 font-sans text-xs text-muted-foreground">
          Link: <T text={cta.href ?? ""} />
        </span>
      ) : null}
    </div>
  );
};

const itemOf = (item: string | ListItem): ListItem => (typeof item === "string" ? { text: item } : item);

const ListBlock = ({ items, ordered, title }: { items: (string | ListItem)[]; ordered?: boolean; title?: string }) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <div>
      {title ? <p className="font-sans font-medium text-foreground mb-3"><T text={title} /></p> : null}
      <Tag className={`space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"} marker:text-primary/80`}>
        {items.map((raw) => {
          const item = itemOf(raw);
          return (
            <li key={item.text}>
              <T text={item.text} />
              {item.link ? (
                <>
                  {" "}
                  <InlineLink link={item.link} />
                </>
              ) : null}
            </li>
          );
        })}
      </Tag>
    </div>
  );
};

const Cell = ({ cell }: { cell: TableCell }) =>
  typeof cell === "string" ? (
    <T text={cell} />
  ) : cell.href?.startsWith("[") ? (
    <span className="inline-flex flex-col gap-1">
      <Button size="sm" variant="outline" disabled>
        <T text={cell.label} />
      </Button>
      <span className="text-xs"><T text={cell.href} /></span>
    </span>
  ) : (
    <Button size="sm" variant="outline" asChild>
      {cell.href ? (
        <a href={cell.href} target="_blank" rel="noopener"><T text={cell.label} /></a>
      ) : (
        <Link to={cell.to ?? "/"}><T text={cell.label} /></Link>
      )}
    </Button>
  );

/** Table on wider screens; stacked cards on phones so nothing scrolls sideways. */
const TableBlock = ({ columns, rows, note }: { columns: string[]; rows: TableCell[][]; note?: string }) => (
  <div>
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-sm font-sans">
        <thead>
          <tr className="border-b border-border text-left text-foreground">
            {columns.map((col) => (
              <th key={col} scope="col" className="py-3 pr-4 font-medium align-bottom"><T text={col} /></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-border/60 align-top">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="py-3 pr-4 text-left font-medium text-foreground"><Cell cell={cell} /></th>
                ) : (
                  <td key={c} className="py-3 pr-4 text-muted-foreground"><Cell cell={cell} /></td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="md:hidden space-y-3">
      {rows.map((row, r) => (
        <dl key={r} className="rounded-xl border border-border bg-secondary/30 p-4 text-sm font-sans">
          {row.map((cell, c) =>
            c === 0 ? (
              <dt key={c} className="font-serif text-lg text-foreground mb-2"><Cell cell={cell} /></dt>
            ) : (
              <Fragment key={c}>
                {typeof cell === "string" ? (
                  <dd className="mb-2 last:mb-0">
                    <span className="block text-xs uppercase tracking-[0.12em] text-primary/70"><T text={columns[c]} /></span>
                    <span className="text-muted-foreground"><Cell cell={cell} /></span>
                  </dd>
                ) : (
                  <dd className="mt-3"><Cell cell={cell} /></dd>
                )}
              </Fragment>
            ),
          )}
        </dl>
      ))}
    </div>
    {note ? <p className="mt-4 font-sans text-xs text-muted-foreground"><T text={note} /></p> : null}
  </div>
);

const DoDont = ({ block }: { block: Extract<ContentBlock, { type: "doDont" }> }) => {
  const Tag = block.ordered ? "ol" : "ul";
  const col = (title: string, items: string[], positive: boolean) => (
    <div className="rounded-xl border border-border bg-secondary/30 p-6">
      <p className="font-serif text-lg text-foreground mb-4"><T text={title} /></p>
      <Tag className="space-y-3">
        {items.map((item, i) => (
          <li key={item} className="flex gap-3">
            <span
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                positive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
              aria-hidden="true"
            >
              {block.ordered ? <span className="text-[0.65rem] tabular-nums">{i + 1}</span> : positive ? <Check className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
            </span>
            <span><T text={item} /></span>
          </li>
        ))}
      </Tag>
    </div>
  );
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {col(block.doTitle, block.doItems, true)}
      {col(block.dontTitle, block.dontItems, false)}
    </div>
  );
};

const Timeline = ({ items }: { items: { label: string; copy: string }[] }) => (
  <ol className="relative border-l border-primary/30 ml-2 space-y-6">
    {items.map((item) => (
      <li key={item.label} className="pl-6 relative">
        <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
        <p className="font-sans text-sm font-medium text-foreground"><T text={item.label} /></p>
        <p className="font-sans text-muted-foreground"><T text={item.copy} /></p>
      </li>
    ))}
  </ol>
);

/** Three linked circles in a loop, built in code (e.g. Load, feed, rest). */
const Cycle = ({ steps }: { steps: { label: string; link?: ContentLink }[] }) => (
  <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center" aria-label="A repeating cycle">
    {steps.map((step, i) => (
      <li key={step.label} className="relative flex justify-center">
        <div className="flex aspect-square w-40 sm:w-full max-w-[11rem] flex-col items-center justify-center rounded-full border-2 border-primary/40 bg-secondary/40 p-4 text-center">
          <span className="font-serif text-sm text-primary/80 tabular-nums">{i + 1}</span>
          <span className="font-sans text-sm text-foreground leading-snug"><T text={step.label} /></span>
          {step.link ? (
            <InlineLink link={step.link} className="mt-2 font-sans text-xs text-primary underline underline-offset-4" />
          ) : null}
        </div>
        <ArrowRight
          className="hidden sm:block absolute -right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/50"
          aria-hidden="true"
        />
      </li>
    ))}
  </ol>
);

export const Block = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "p":
      return (
        <p>
          <T text={block.text} />
          {block.link ? (
            <>
              {" "}
              <InlineLink link={block.link} />
            </>
          ) : null}
        </p>
      );
    case "h3":
      return <h3 className="font-serif text-xl md:text-2xl text-foreground pt-4"><T text={block.text} /></h3>;
    case "list":
      return <ListBlock items={block.items} ordered={block.ordered} title={block.title} />;
    case "table":
      return <TableBlock columns={block.columns} rows={block.rows} note={block.note} />;
    case "diagram":
      return <DiagramPlaceholder {...DIAGRAMS[block.id]} />;
    case "figure":
      return <FigureImage figure={FIGURES[block.id]} />;
    case "cards":
      return (
        <dl className="grid sm:grid-cols-2 gap-5">
          {block.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-secondary/30 p-6">
              <dt className="font-serif text-lg text-foreground mb-2">
                {item.image && (
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="mb-4 block h-20 w-20 rounded-full object-cover"
                  />
                )}
                <T text={item.title} />
              </dt>
              <dd className="font-sans text-sm text-muted-foreground leading-relaxed"><T text={item.copy} /></dd>
            </div>
          ))}
        </dl>
      );
    case "callout":
      return (
        <p className="rounded-xl border-l-4 border-gold bg-secondary/50 px-6 py-4 font-serif text-lg text-foreground">
          <T text={block.text} />
        </p>
      );
    case "cta":
      return <Cta cta={block.cta} />;
    case "doDont":
      return <DoDont block={block} />;
    case "timeline":
      return <Timeline items={block.items} />;
    case "cycle":
      return <Cycle steps={block.steps} />;
    case "smallPrint":
      return <p className="font-sans text-xs text-muted-foreground"><T text={block.text} /></p>;
  }
};

const toneClass = { sage: "bg-sage-light/60", sand: "bg-secondary" } as const;

export const Section = ({ section }: { section: ContentSection }) => (
  <section
    id={section.id}
    className={`scroll-mt-28 lg:scroll-mt-36 py-12 md:py-16 ${section.tone ? `${toneClass[section.tone]} -mx-6 px-6 md:mx-0 md:px-10 md:rounded-2xl my-6` : ""}`}
  >
    {section.eyebrow ? (
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4"><T text={section.eyebrow} /></p>
    ) : null}
    {section.title ? (
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6"><T text={section.title} /></h2>
    ) : null}
    <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  </section>
);

/** A run of sections in the editorial column. */
const ContentSections = ({ sections }: { sections: ContentSection[] }) => (
  <div className="container px-6">
    <div className="max-w-3xl mx-auto divide-y divide-border">
      {sections.map((section, i) => (
        <Section key={section.id ?? section.title ?? i} section={section} />
      ))}
    </div>
  </div>
);

export default ContentSections;

/** Principle block, Make it stick box, closing links and the next-step CTA. */
export const ClosingBand = ({ closing }: { closing: ContentClosing }) => (
  <section className="py-20">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto rounded-2xl bg-secondary/40 border border-border px-6 sm:px-8 py-12 text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">The OmKnee Principle</p>
        <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug"><T text={closing.principle} /></p>

        {closing.makeItStick ? (
          <div className="mt-10 rounded-xl border border-dashed border-gold bg-background px-6 py-5 text-left">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-2">Make it stick</p>
            <p className="font-sans text-foreground leading-relaxed"><T text={closing.makeItStick} /></p>
          </div>
        ) : null}

        {closing.links?.length || closing.cta ? (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {closing.links?.map((link) => (
              <InlineLink
                key={link.label}
                link={link}
                className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
              />
            ))}
            {closing.cta ? (
              <Button asChild className="min-h-[44px] gap-2">
                <Link to={closing.cta.to ?? "/"}>
                  <T text={closing.cta.label} />
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  </section>
);
