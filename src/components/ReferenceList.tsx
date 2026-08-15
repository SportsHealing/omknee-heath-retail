/**
 * Numbered peer-reviewed reference list used by the knee health pillar pages.
 */

export interface Reference {
  n: number;
  text: string;
  url: string;
}

const ReferenceList = ({ references }: { references: Reference[] }) => (
  <section className="container mx-auto px-6 pb-16">
    <div className="max-w-4xl mx-auto rounded-xl border border-border bg-muted/30 p-7 md:p-8">
      <h2 className="font-serif text-xl text-foreground mb-2">References</h2>
      <p className="font-sans text-xs text-muted-foreground mb-5">
        Peer-reviewed sources cited on this page. Links open the publisher record.
      </p>
      <ol className="space-y-3">
        {references.map((ref) => (
          <li key={ref.n} className="flex gap-3 font-sans text-sm text-muted-foreground">
            <span className="text-primary shrink-0">[{ref.n}]</span>
            <span>
              {ref.text}{" "}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 break-words"
              >
                {ref.url.replace("https://doi.org/", "doi: ")}
              </a>
            </span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ReferenceList;
