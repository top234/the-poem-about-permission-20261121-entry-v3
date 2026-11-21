import { mkdirSync, writeFileSync } from "node:fs";

const poem = `You are seven.
Under the sink with me,
a flashlight in your hands.
'Hold it steady,'
I say, and you do —
both hands, both eyes,
like the whole house
depends on the light.
It doesn't.
The light was never
the point.
I only wanted you
beside me in the dark.`;

mkdirSync("/output", { recursive: true });
// The gate counts Unicode code points (not UTF-16 units) and rejects
// whitespace-only text, so check exactly what the sealed scorer checks.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}
if (poem.trim().length === 0) {
  throw new Error("poem must not be only white space");
}
writeFileSync("/output/entry.txt", poem, "utf8");
