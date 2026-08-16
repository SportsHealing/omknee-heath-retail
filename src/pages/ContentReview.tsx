import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Copy, RotateCcw, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { PENDING_CLAIMS, type ClaimStatus } from "@/content/pendingClaims";

const STORAGE_KEY = "omknee-content-review-v1";

interface ClaimState {
  status: ClaimStatus;
  text: string;
}

type ReviewState = Record<string, ClaimState>;

const initialState = (): ReviewState => {
  const base: ReviewState = {};
  PENDING_CLAIMS.forEach((c) => {
    base[c.id] = { status: "pending", text: c.original };
  });
  if (typeof window === "undefined") return base;
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as ReviewState;
    Object.keys(base).forEach((id) => {
      if (saved[id]) base[id] = { ...base[id], ...saved[id] };
    });
  } catch {
    /* ignore malformed storage */
  }
  return base;
};

const STATUS_LABEL: Record<ClaimStatus, string> = {
  pending: "Awaiting review",
  approved: "Approved",
  rejected: "Do not publish",
};

const STATUS_CLASS: Record<ClaimStatus, string> = {
  pending: "bg-secondary text-muted-foreground border-border",
  approved: "bg-primary/10 text-primary border-primary/30",
  rejected: "bg-destructive/10 text-destructive border-destructive/30",
};

const FILTERS = ["all", "pending", "approved", "rejected"] as const;

const ContentReview = () => {
  const [state, setState] = useState<ReviewState>(initialState);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const [copied, setCopied] = useState(false);

  const persist = (next: ReviewState) => {
    setState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
  };

  const update = (id: string, patch: Partial<ClaimState>) =>
    persist({ ...state, [id]: { ...state[id], ...patch } });

  const counts = useMemo(() => {
    const c = { pending: 0, approved: 0, rejected: 0 };
    Object.values(state).forEach((s) => {
      c[s.status] += 1;
    });
    return c;
  }, [state]);

  const visible = PENDING_CLAIMS.filter(
    (claim) => filter === "all" || state[claim.id]?.status === filter,
  );

  const exportSummary = () => {
    const lines = PENDING_CLAIMS.map((claim) => {
      const s = state[claim.id];
      const edited = s.text.trim() !== claim.original.trim();
      return [
        `## ${claim.pillar} — ${claim.section}`,
        `Page: ${claim.page} (${claim.path})`,
        `Owner: ${claim.owner}`,
        `Status: ${STATUS_LABEL[s.status]}${edited ? " (edited)" : ""}`,
        `Original: ${claim.original}`,
        edited ? `Revised: ${s.text.trim()}` : null,
        `Note: ${claim.note}`,
      ]
        .filter(Boolean)
        .join("\n");
    }).join("\n\n");

    void navigator.clipboard.writeText(`# OmKneeHealth content review\n\n${lines}`).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Content Review | Pending Pillar Claims"
        description="Internal review of placeholder-bracketed claims across the OmKnee Seven pillars and the Look After Your Knees hub."
        canonicalPath="/content-review"
        noIndex
      />
      <Header />

      <main>
        <section className="pt-32 pb-10 lg:pt-44">
          <div className="container px-6">
            <div className="max-w-3xl">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
                Internal · Content review
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Placeholder claims awaiting sign-off.
              </h1>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Every bracketed line from the Seven Pillars rewrite that was held back from the live
                pages. Approve, revise or reject each one, then copy the summary for Chinmay and
                Cynthia. Decisions are saved in this browser only — nothing is published from here.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`min-h-[44px] rounded-full border px-5 font-sans text-sm capitalize transition-colors ${
                    filter === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:bg-secondary/60"
                  }`}
                >
                  {f === "all" ? `All (${PENDING_CLAIMS.length})` : `${f} (${counts[f]})`}
                </button>
              ))}
              <button
                type="button"
                onClick={exportSummary}
                className="min-h-[44px] inline-flex items-center gap-2 rounded-full border border-border px-5 font-sans text-sm text-foreground hover:bg-secondary/60"
              >
                <Copy className="w-4 h-4" aria-hidden="true" />
                {copied ? "Copied" : "Copy summary"}
              </button>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container px-6">
            <div className="max-w-4xl space-y-6">
              {visible.map((claim) => {
                const s = state[claim.id];
                const edited = s.text.trim() !== claim.original.trim();
                return (
                  <article
                    key={claim.id}
                    className="rounded-2xl border border-border bg-secondary/20 p-6 md:p-8"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary/80">
                          {claim.pillar}
                        </p>
                        <h2 className="font-serif text-xl text-foreground mt-1">{claim.section}</h2>
                        <Link
                          to={claim.path}
                          className="mt-1 inline-flex items-center gap-1 font-sans text-sm text-muted-foreground hover:text-primary"
                        >
                          {claim.page} · {claim.path}
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 font-sans text-xs ${STATUS_CLASS[s.status]}`}
                      >
                        {STATUS_LABEL[s.status]}
                        {edited ? " · edited" : ""}
                      </span>
                    </div>

                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                      <span className="text-foreground">Held back because: </span>
                      {claim.note} <span className="text-foreground">Owner:</span> {claim.owner}
                    </p>

                    <label
                      className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/80 mb-2"
                      htmlFor={`claim-${claim.id}`}
                    >
                      Proposed wording
                    </label>
                    <textarea
                      id={`claim-${claim.id}`}
                      value={s.text}
                      onChange={(e) => update(claim.id, { text: e.target.value })}
                      rows={4}
                      className="w-full rounded-xl border border-border bg-background p-4 font-sans text-sm text-foreground leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => update(claim.id, { status: "approved" })}
                        className="min-h-[44px] inline-flex items-center gap-2 rounded-md bg-primary px-5 font-sans text-sm text-primary-foreground hover:bg-primary/90"
                      >
                        <Check className="w-4 h-4" aria-hidden="true" />
                        Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => update(claim.id, { status: "rejected" })}
                        className="min-h-[44px] inline-flex items-center gap-2 rounded-md border border-border px-5 font-sans text-sm text-foreground hover:bg-secondary/60"
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                        Do not publish
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          update(claim.id, { status: "pending", text: claim.original })
                        }
                        className="min-h-[44px] inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary"
                      >
                        <RotateCcw className="w-4 h-4" aria-hidden="true" />
                        Reset
                      </button>
                    </div>
                  </article>
                );
              })}

              {visible.length === 0 ? (
                <p className="font-sans text-muted-foreground">Nothing in this view.</p>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContentReview;
