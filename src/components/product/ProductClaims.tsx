import PlaceholderText from "@/components/PlaceholderText";
import { visibleClaims } from "@/content/productClaims";

/** "What the nutrients do": verified authorised claims only in production builds. */
const ProductClaims = () => {
  const claims = visibleClaims();
  if (claims.length === 0) {
    return (
      <p className="font-sans text-sm text-muted-foreground">
        <PlaceholderText text="[Authorised claims appear here once verified against the GB Nutrition and Health Claims Register]" />
      </p>
    );
  }
  return (
    <ul className="space-y-3">
      {claims.map((claim) => (
        <li key={claim.id} className="flex gap-3 font-sans text-muted-foreground">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
          <span>
            {claim.text}
            {claim.verified ? null : (
              <span className="ml-2 rounded border border-dashed border-primary/60 px-1 text-xs text-foreground">unverified</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProductClaims;
