import { Fragment } from "react";

/**
 * Renders text with any [SQUARE BRACKET] placeholders visibly marked, so
 * unconfirmed content cannot be mistaken for final copy.
 */
const PlaceholderText = ({ text }: { text: string }) => (
  <>
    {text.split(/(\[[^\]]+\])/).map((part, index) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <span
          key={index}
          className="rounded border border-dashed border-current px-1 text-inherit"
          title="Placeholder: to be confirmed"
        >
          {part}
        </span>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    )}
  </>
);

export default PlaceholderText;
