/**
 * Post-build step for GitHub Pages hosting.
 *
 * GitHub Pages is a static host. Without this step, every URL except "/"
 * falls through to 404.html and is served with HTTP status 404, even though
 * the app renders the right page. Search engines then treat those pages as
 * missing.
 *
 * This script reads the routes in src/App.tsx and writes:
 * - a copy of index.html for every page route, so each one returns 200
 * - a small static redirect page for every <Redirect> route, with a canonical
 *   tag and an instant meta refresh to the final destination
 * - 404.html for unknown URLs, so the app can still render its NotFound page
 *
 * Each page route is written as both "route.html" and "route/index.html".
 * GitHub Pages serves "/route" from either, so both URL forms return 200.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const appSource = readFileSync(join(root, "src/App.tsx"), "utf8");
const indexHtml = readFileSync(join(distDir, "index.html"), "utf8");

const PRODUCTION_ORIGIN = "https://omkneehealth.com";

const routePattern = /<Route\s+path="([^"]+)"\s+element=\{([^}]*\})\s*\}?\s*\/>/g;
const redirectPattern = /<Redirect\s+to="([^"]+)"/;

const pages = [];
const redirects = new Map();

for (const [, path, element] of appSource.matchAll(routePattern)) {
  if (path === "/" || path === "*" || path.includes(":")) continue;
  const redirect = element.match(redirectPattern);
  if (redirect) redirects.set(path, redirect[1]);
  else pages.push(path);
}

if (pages.length === 0) {
  throw new Error("postbuild: no routes found in src/App.tsx. Check the route pattern.");
}

/** Follows redirect chains so each stub points straight at the final page. */
const resolveTarget = (path) => {
  const seen = new Set([path]);
  let target = redirects.get(path);
  for (;;) {
    const [targetPath] = target.split("#");
    if (!redirects.has(targetPath)) return target;
    if (seen.has(targetPath)) throw new Error(`postbuild: redirect loop at ${path}`);
    seen.add(targetPath);
    const next = redirects.get(targetPath);
    // Keep the original hash unless the next hop sets its own.
    const hash = target.includes("#") && !next.includes("#") ? target.slice(target.indexOf("#")) : "";
    target = next + hash;
  }
};

const writeFile = (relativePath, contents) => {
  const fullPath = join(distDir, relativePath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, contents);
};

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const redirectHtml = (target) => {
  const href = escapeAttr(target);
  const canonical = escapeAttr(PRODUCTION_ORIGIN + target.split("#")[0]);
  return `<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8" />
    <title>Page moved | OmKneeHealth</title>
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="noindex, follow" />
    <meta http-equiv="refresh" content="0; url=${href}" />
    <script>
      // Keep any query string, such as ?ref=, when moving to the new page.
      var target = ${JSON.stringify(target)}.split("#");
      location.replace(target[0] + location.search + (target[1] ? "#" + target[1] : ""));
    </script>
  </head>
  <body>
    <p>This page has moved. <a href="${href}">Continue to the new page</a>.</p>
  </body>
</html>
`;
};

for (const path of pages) {
  const name = path.replace(/^\//, "");
  writeFile(`${name}.html`, indexHtml);
  writeFile(`${name}/index.html`, indexHtml);
}

for (const path of redirects.keys()) {
  const name = path.replace(/^\//, "");
  const html = redirectHtml(resolveTarget(path));
  writeFile(`${name}.html`, html);
  writeFile(`${name}/index.html`, html);
}

writeFile("404.html", indexHtml);

if (!existsSync(join(distDir, "404.html"))) {
  throw new Error("postbuild: 404.html was not written");
}

console.log(`postbuild: ${pages.length} page routes, ${redirects.size} redirects written to dist/`);
