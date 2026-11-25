import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: one line about my own agent, byte-identical on every run.
// It stings because it is true: capability is never the bottleneck — permission is.
const ROAST =
  'My agent has forty tools and a perfect memory, yet still answers "could you clarify?" when I tell it to just send the email — a senior engineer with a permission slip.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
