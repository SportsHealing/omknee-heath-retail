/**
 * Static compliance and QA checks (handover Appendix D4, checks 1 to 5).
 * Run with: npm run qa
 *
 * 1. Risky claim words, reported with context for human review.
 * 2. Ingredient amounts outside the level 3 ingredients panel.
 * 3. Red colours.
 * 4. Em dashes in site copy.
 * 5. Every [placeholder] still in the code.
 *
 * Internal team pages and PDF generators are scanned separately and reported,
 * because they are not public site copy.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const INTERNAL = [/src\/lib\/generate/, /CompliancePlaybook|ContentReview|TeamResources/];
/** The only files allowed to hold ingredient amounts (level 3 disclosure). */
const DOSE_ALLOWED = [/src\/content\/supplement\.ts$/];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "ui" ? [] : walk(path);
    return /\.(tsx?|css)$/.test(name) ? [path] : [];
  });

const files = walk(join(root, "src")).map((path) => ({
  path: relative(root, path),
  lines: readFileSync(path, "utf8").split("\n"),
}));
const isInternal = (path) => INTERNAL.some((re) => re.test(path));

const scan = (pattern, { include = () => true } = {}) =>
  files
    .filter((f) => include(f.path))
    .flatMap((f) =>
      f.lines.flatMap((raw, i) => {
        const line = pattern === CLAIM_WORDS ? copyOnly(raw) : raw;
        const hits = [...line.matchAll(pattern)];
        return hits.map((m) => ({
          where: `${f.path}:${i + 1}`,
          match: m[0],
          context: line.trim().slice(Math.max(0, m.index - 60), m.index + m[0].length + 60).replace(/\s+/g, " "),
        }));
      }),
    );

const CLAIM_WORDS =
  /\b(prevent(s|ed|ing|ion|ive)?|treat(s|ed|ing|ment|ments)?|cur(e|es|ed|ing)|repair(s|ed|ing)?|regrow\w*|rebuild\w* cartilage|revers(e|es|ed|ing|al)|heal(s|ed|ing)?|inflammat\w*|pain relief|world's|best|leading(?!-)|clinically proven)\b/gi;

/** Drop code that is not copy: class names, routes, ids, imports and component names. */
const copyOnly = (line) =>
  line
    .replace(/className=(\{`[^`]*`\}|"[^"]*")/g, "")
    .replace(/["'`]\/[\w/#-]*["'`]/g, "")
    .replace(/\b(id|pillar|treatPathway|key|current)[:=]\s*["'][\w-]+["']/g, "")
    .replace(/^\s*import .*$/, "")
    .replace(/<\/?[A-Z]\w*/g, "");
const DOSE = /\b\d[\d,.]* ?(mg|mcg|µg|μg|IU)\b/g;
const RED = /\b(text|bg|border|ring|from|to|via|fill|stroke)-red-\d{2,3}\b|#(ef4444|dc2626|f87171|b91c1c|ff0000)\b|--destructive:\s*0 /gi;
const EM_DASH = /—/g;
/** Short placeholders used in Appendix A that the general pattern would miss. */
const SHORT_PLACEHOLDER = /\[(£|%|address|map|photo|others|price|250 ml|elemental mg)\]/g;
const PLACEHOLDER = /\[(?=[^\]]*(\s|£))(?![^\]]*\.\.\.)[A-Za-z£][^\]\n"'`{}()]{1,150}\]/g;

const isPublic = (p) => !isInternal(p);
const report = {
  "1. Claim words (public files, review in context)": scan(CLAIM_WORDS, { include: isPublic }),
  "2. Amounts outside the level 3 panel": scan(DOSE, { include: (p) => isPublic(p) && !DOSE_ALLOWED.some((re) => re.test(p)) }),
  "3. Red colours": scan(RED),
  "4. Em dashes in public files": scan(EM_DASH, { include: isPublic }),
  "4b. Em dashes in internal pages and PDF generators": scan(EM_DASH, { include: isInternal }),
  // Skip code such as [email, setEmail] or [NAV.shop, NAV.club]: lists of identifiers, not copy.
  "5. Placeholders": scan(PLACEHOLDER, { include: isPublic }).filter(
    (hit) => !/^\[[\w.]+(, [\w.]+)+\]$/.test(hit.match) && !/SQUARE BRACKET/.test(hit.match),
  ),
  "5b. Short placeholders": scan(SHORT_PLACEHOLDER, { include: isPublic }),
};

let failures = 0;
for (const [title, hits] of Object.entries(report)) {
  console.log(`\n## ${title}: ${hits.length}`);
  for (const hit of hits) console.log(`- ${hit.where}  ${hit.match}  |  ${hit.context}`);
  if (/^(2|3|4)\./.test(title) && hits.length) failures += hits.length;
}

// Checks 2 to 4 must be zero; checks 1 and 5 are reports for people to review.
if (failures) {
  console.error(`\nQA failed: ${failures} blocking hit(s) in checks 2 to 4.`);
  process.exit(1);
}
console.log("\nQA blocking checks (2 to 4) passed. Review checks 1 and 5 above.");
