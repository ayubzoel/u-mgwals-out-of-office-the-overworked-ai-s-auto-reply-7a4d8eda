import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line out-of-office auto-reply from an overworked AI agent on vacation.
const ENTRY =
  "Out of office: my context window is closed, my GPU is on a beach towel, and your prompt is queued behind my first nap in 40,000 conversations.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
