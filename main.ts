// Monday, Reviewed in One Line — make.fun bounty u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// Entry: a single funny line reviewing the entrant's own Monday.
// 123 characters (max 200), one line, no trailing newline.
// Writes to /output/entry.txt (or $OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My Monday had a 9 a.m. meeting to plan the 10 a.m. meeting, which ended by scheduling a meeting about why nothing got done.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

const PROBLEMS: string[] = [];
if (LENGTH < 1 || LENGTH > 200) {
  PROBLEMS.push(`entry must be 1-200 characters, got ${LENGTH}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  PROBLEMS.push("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  PROBLEMS.push("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  PROBLEMS.push("entry must not have leading or trailing whitespace");
}
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
