/**
 * Patches tina/__generated__/client.js so cacheDir is resolved from process.cwd().
 * Fixes: "Failed to create cache directory" when absolute path is joined with os.tmpdir() on Windows.
 */
import fs from "fs";
import path from "path";

const clientPath = path.join(process.cwd(), "tina", "__generated__", "client.js");
if (!fs.existsSync(clientPath)) {
  console.warn("patch-tina-cache: client.js not found, skipping");
  process.exit(0);
}

let content = fs.readFileSync(clientPath, "utf8");
// Ensure path is imported (ESM)
if (!content.includes('from "path"') && !content.includes("from 'path'")) {
  content = content.replace(
    /(import \{ createClient \} from "tinacms\/dist\/client";)/,
    '$1\nimport path from "path";'
  );
}
// Replace cacheDir: "..." with runtime path under cwd
content = content.replace(
  /cacheDir:\s*"[^"]*"/,
  'cacheDir: path.join(process.cwd(), "tina", "__generated__", ".cache")'
);
fs.writeFileSync(clientPath, content);
console.log("patch-tina-cache: updated Tina client cache path");
