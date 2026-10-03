import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const target = process.argv.includes("--prod") ? ["--prod"] : [];
const uploadUrl = JSON.parse(
  execFileSync("npx", ["convex", "run", "pdf:generateUploadUrl", ...target], {
    encoding: "utf8",
  }).trim(),
);
const response = await fetch(uploadUrl, {
  method: "POST",
  headers: { "Content-Type": "application/pdf" },
  body: await readFile(new URL("../public/zavod-tajnicka.pdf", import.meta.url)),
});
if (!response.ok) throw new Error(`PDF upload failed: ${response.status}`);
const { storageId } = await response.json();
execFileSync("npx", ["convex", "env", "set", "PDF_STORAGE_ID", storageId, ...target], {
  stdio: "inherit",
});
console.log(`PDF uploaded to ${target.length ? "production" : "development"}.`);
